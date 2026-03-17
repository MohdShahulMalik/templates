export interface Concept {
  id: number;
  title: string;
  emoji: string;
  story: string;
  hooks: string[];
}

export const concepts: Concept[] = [
  {
    id: 1,
    title: 'Photosynthesis',
    emoji: '🌱',
    story: 'In the kingdom of Chloroplast, tiny green workers called Chlorophyll spend their days catching sunlight like kids catching fireflies. They mix the captured light with water drawn up from the roots and carbon dioxide breathed in through tiny leaf pores called stomata. Together, they cook up glucose — the plant\'s favorite meal — and release oxygen as a thank-you gift to the world. The whole factory runs on light, and when the sun goes down, the workers rest until dawn brings a new shift.',
    hooks: [
      'Chlorophyll = "Chloro-fill" — fills up on sunlight',
      '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ — "Six of each invited to the party, one sugar cake and six oxygen balloons made"',
      'Stomata = "Stoma-door" — the door on leaves that opens for air',
      'Light reaction in the thylakoid = "Thigh-lacoid" — light sits on the thigh of the chloroplast',
    ],
  },
  {
    id: 2,
    title: 'Cell Division',
    emoji: '🔬',
    story: 'Imagine a cell as a busy office preparing to split into two branches. First, in Prophase, the boss (nucleus) starts packing all the important files (chromosomes) into neat bundles. During Metaphase, all the bundles line up in the middle of the office for inspection. In Anaphase, two teams pull the copies apart to opposite sides of the room. Finally, in Telophase, a wall is built down the middle, and two brand-new offices open for business — each with a complete copy of every file.',
    hooks: [
      'PMAT = "Please Make Another Taco" — Prophase, Metaphase, Anaphase, Telophase',
      'Prophase = "Pro-packing" — chromosomes get packed up',
      'Meta = Middle — chromosomes meet in the middle',
      'Ana = Apart — chromosomes are pulled apart',
    ],
  },
  {
    id: 3,
    title: 'DNA Replication',
    emoji: '🧬',
    story: 'Picture a twisted zipper (the double helix) being unzipped by a tiny enzyme named Helicase — the master unzipper. Once open, another enzyme called DNA Polymerase reads each side and builds a matching half, like filling in a coloring book where A always pairs with T, and C always pairs with G. The result? Two identical zippers where there was once one. Each new zipper keeps one old strand and one brand new strand — a perfect inheritance.',
    hooks: [
      'Helicase = "Heli-uncase" — unzips the helix case',
      'A-T, C-G = "Apple-Tree, Car-Garage" — always parked together',
      'Polymerase = "Polly-builds" — Polly the parrot builds the new strand',
      'Semi-conservative = each new DNA keeps one old strand, like inheriting one parent\'s jacket',
    ],
  },
  {
    id: 4,
    title: 'Natural Selection',
    emoji: '🦎',
    story: 'On a volcanic island, two groups of beetles live on dark rocks. Green beetles stand out and get eaten by birds, while dark beetles blend in and survive. Over generations, the dark beetles have more babies, and soon almost every beetle on the island is dark. Nature didn\'t "choose" — the environment simply favored those who fit best. Darwin called this survival of the fittest, but it really means survival of the best-fit-for-the-moment.',
    hooks: [
      'VISA = Variation, Inheritance, Selection, Adaptation',
      'Survival of the fittest = "Survival of the best-dressed for the weather"',
      'Think of a fashion show — nature is the judge, your traits are the outfit',
      'Peppered moths — dark ones survived pollution, light ones survived clean air',
    ],
  },
  {
    id: 5,
    title: 'Cellular Respiration',
    emoji: '⚡',
    story: 'Every cell runs a tiny power plant. Glucose enters the factory and first goes through Glycolysis in the lobby, where it\'s broken in half for a small energy payout. The pieces then enter the mitochondria — the main generator room. Here, the Krebs Cycle spins like a turbine extracting electrons, and the Electron Transport Chain acts like a waterfall of electrons, generating massive amounts of ATP — the cell\'s universal energy currency. One glucose molecule can yield up to 36 ATP coins.',
    hooks: [
      'Mitochondria = "Mighty-chondria" — the mighty powerhouse',
      'ATP = "Adenosine Tri-Pay" — the cell\'s paycheck with three coins',
      'Glycolysis = "Glucose-lysis" — glucose gets split (lysed)',
      'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP — it\'s photosynthesis backwards!',
    ],
  },
];
