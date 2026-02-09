export type MonetizationPath = {
  id: string;
  title: string;
  description: string;
  prereqs: string[];
  qualityGate: string;
  metrics: string[];
};

export const monetizationPaths: MonetizationPath[] = [
  {
    id: "content",
    title: "Voie A - Contenu + affiliation",
    description: "Guides, notes de jeu, outils gratuits, puis affiliation legale.",
    prereqs: ["Gate quotidien et hebdo valide", "3 contenus publies"],
    qualityGate: "Taux de lecture > 40% ou retour positif confirme.",
    metrics: ["Articles publies", "CTR affiliation", "Revenus nets"]
  },
  {
    id: "coaching",
    title: "Voie B - Coaching",
    description: "Sessions structurees, packs, contrats clairs.",
    prereqs: ["Gate quotidien et hebdo valide", "5 reviews de jeu documentees"],
    qualityGate: "Satisfaction client > 4/5.",
    metrics: ["Clients actifs", "Retention", "Revenus nets"]
  },
  {
    id: "saas",
    title: "Voie C - SaaS / Outils",
    description: "Stats, entrainement, review assistant.",
    prereqs: ["Gate quotidien et hebdo valide", "Prototype teste"],
    qualityGate: "10 utilisateurs actifs en beta.",
    metrics: ["MAU", "MRR", "Churn"]
  }
];
