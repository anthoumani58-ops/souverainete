import { auth } from "@/lib/auth";
import { getSampleGateStatus, isMonetizationLocked } from "@/lib/gates";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const gateStatus = getSampleGateStatus();
  if (isMonetizationLocked(gateStatus)) {
    return new Response("Gate locked", { status: 403 });
  }

  const body = await request.json();
  const priceId = body?.priceId as string | undefined;

  if (!priceId) {
    return new Response("Missing priceId", { status: 400 });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.APP_URL}/monetization?status=success`,
    cancel_url: `${process.env.APP_URL}/monetization?status=cancel`
  });

  return Response.json({ url: checkoutSession.url });
}
