export type ArsenalEntity = {
  name: string;
  role: "Ange" | "Archange";
  message: string;
  checklist: string[];
  script: string;
};

export const arsenalEntities: ArsenalEntity[] = [
  {
    name: "Ange de la Clarite",
    role: "Ange",
    message: "Raccourcis interdits. Objectif simple, preuve simple.",
    checklist: ["1 objectif", "1 preuve", "1 obstacle retire"],
    script: "Ecris le prochain pas en 1 phrase."
  },
  {
    name: "Ange du Temps",
    role: "Ange",
    message: "Le temps est sacre. Bloque, execute, ferme.",
    checklist: ["Bloc 45 min", "Mode avion", "Pause 10 min"],
    script: "Choisis une seule mission pour ce bloc."
  },
  {
    name: "Ange du Budget",
    role: "Ange",
    message: "Chaque euro a une mission.",
    checklist: ["Pas d achat impulsif", "Note la depense", "Ajoute 1 euro de marge"],
    script: "Verifie le solde avant toute depense."
  },
  {
    name: "Ange du Code",
    role: "Ange",
    message: "Petit livrable, preuve rapide.",
    checklist: ["1 commit", "1 note", "1 test"],
    script: "Ecris le plus petit increment qui compte."
  },
  {
    name: "Ange du Jeu",
    role: "Ange",
    message: "Jouer avec intention, jamais par fuite.",
    checklist: ["Objectif clair", "Review 3 points", "Stop a l heure"],
    script: "Note ton objectif avant la session."
  },
  {
    name: "Mikael",
    role: "Archange",
    message: "Protection et anti-risque.",
    checklist: [
      "Pas de depense impulsive",
      "Pas de session jeu si sommeil < 6h",
      "Pas de decision business sans revue"
    ],
    script: "Arrete si un risque rouge apparait."
  },
  {
    name: "Raphael",
    role: "Archange",
    message: "Soin et recuperation.",
    checklist: ["Sommeil prioritaire", "Hydratation", "Marche 10 min"],
    script: "Regule ton energie avant toute ambition."
  },
  {
    name: "Gabriel",
    role: "Archange",
    message: "Verite et communication claire.",
    checklist: ["Faits > ego", "Promesse realiste", "Message court"],
    script: "Ecris ce que tu peux prouver."
  },
  {
    name: "Uriel",
    role: "Archange",
    message: "Sagesse et strategie.",
    checklist: ["Vision 12 semaines", "Une priorite", "Mesure chaque semaine"],
    script: "Choisis la voie la plus simple et mesurable."
  }
];
