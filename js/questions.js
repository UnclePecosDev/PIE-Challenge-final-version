
const levels = [
    // LEVEL 1 - GUESS THE WORD
    {
        id: 1,
        title: "L'entrepreneuriat",
        icon: "🏢",
        description: "Découvre les concepts de l'entrepreneuriat.",
        type: "image",
        questions: [
            {
                id: "0-0",
                background: 1,
                question: "Devine le mot !",
                description: "Une organisation qui propose des produits ou des services.",
                answer: "entreprise",
                image: "images/entreprise.jpg",
                hint: "Une organisation qui exerce une activité économique."
            },
            {
                id: "0-1",
                background: 2,
                question: "Devine le mot !",
                description: "Une personne qui crée et gère un projet.",
                answer: "entrepreneur",
                image: "images/entrepreneurss.webp",
                hint: "Il transforme une idée en projet."
            },
            {
                id: "0-2",
                background: 3,
                question: "Devine le mot !",
                description: "Le processus de création et de développement des projets.",
                answer: "programme",
                image: "images/pie.webp",
                hint: "prog**** d'inno***** *******eneuriale."
            },
            {
                "id": "0-3",
                "question": "Devine le mot !",
                "description": "Une nouvelle solution qui apporte de la valeur.",
                "answer": "innovation",
                "image": "images/innovation.png",
                "hint": "Elle transforme une idée en amélioration.",
                "background": 1
            },
            {
                "id": "0-4",
                "question": "Devine le mot !",
                "description": "Une personne qui achète un produit ou un service.",
                "answer": "client",
                "image": "images/client.png",
                "hint": "Il exprime des besoins que le projet doit satisfaire.",
                "background": 2
            },
            {
                "id": "0-5",
                "question": "Devine le mot !",
                "description": "L’ensemble des acheteurs et vendeurs d’un secteur.",
                "answer": "marche",
                "image": "images/marche.png",
                "hint": "Il permet de connaître les opportunités commerciales.",
                "background": 1
            },
            {
                "id": "0-6",
                "question": "Devine le mot !",
                "description": "Le point de départ de nombreux projets.",
                "answer": "idee",
                "image": "images/idee.png",
                "hint": "Une solution imaginée avant sa réalisation.",
                "background": 3
            },
            {
                "id": "0-7",
                "question": "Devine le mot !",
                "description": "Une jeune entreprise qui cherche à se développer rapidement.",
                "answer": "startup",
                "image": "images/startup.png",
                "hint": "Elle teste souvent une idée innovante.",
                "background": 1
            },
            {
                "id": "0-8",
                "question": "Devine le mot !",
                "description": "Des ressources financières nécessaires à un projet.",
                "answer": "financement",
                "image": "images/financement.png",
                "hint": "Prêt, épargne ou investissement peuvent le fournir.",
                "background": 3
            },
            {
                "id": "0-9",
                "question": "Devine le mot !",
                "description": "Un groupe de personnes qui travaille ensemble sur un projet.",
                "answer": "equipe",
                "image": "images/equipe.png",
                "hint": "Chaque membre apporte ses compétences.",
                "background": 2
            },
            {
                "id": "0-10",
                "question": "Devine le mot !",
                "description": "Un plan qui prévoit les recettes et les dépenses.",
                "answer": "budget",
                "image": "images/budget.png",
                "hint": "Il aide à gérer l’argent du projet.",
                "background": 3
            },
            {
                "id": "0-11",
                "question": "Devine le mot !",
                "description": "Un problème ou une attente à satisfaire.",
                "answer": "besoin",
                "image": "images/besoin.png",
                "hint": "Un entrepreneur cherche à y répondre.",
                "background": 2
            }
        ]
    },

    // LEVEL 2 - UNSCRAMBLE LETTERS
    {
        id: 2,
        title: "L'entrepreneur",
        icon: "🧑‍💼",
        description: "Découvre les qualités d'un bon entrepreneur.",
        type: "scramble",
        questions: [
            {
                id: "1-0",
                question: "Remets les lettres dans le bon ordre.",
                description: "V-I-T-E-A-T-I-C-R-E",
                answer: "creativite",
                hint: "La capacité de produire des idées nouvelles."
            },
            {
                id: "1-1",
                question: "Remets les lettres dans le bon ordre.",
                description: "S-A-B-I-L-I-T-E-P-O-N-R-E-S",
                answer: "responsabilite",
                hint: "Assumer les conséquences de ses décisions."
            },
            {
                id: "1-2",
                question: "Remets les lettres dans le bon ordre.",
                description: "C-E-P-A-N-T-I-E",
                answer: "patience",
                hint: "La capacité d'attendre sans abandonner."
            },
            {
                "id": "1-3",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "U-N-M-O-O-T-A-E-I",
                "answer": "autonomie",
                "hint": "Capacité à travailler et décider par soi-même."
            },
            {
                "id": "1-4",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "P-L-D-I-H-R-E-E-S-A",
                "answer": "leadership",
                "hint": "Capacité à guider et motiver une équipe."
            },
            {
                "id": "1-5",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "U-A-E-D-A-C",
                "answer": "audace",
                "hint": "Courage de saisir une opportunité malgré les difficultés."
            },
            {
                "id": "1-6",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "I-R-U-U-R-E-G",
                "answer": "rigueur",
                "hint": "Soin et précision dans la réalisation du travail."
            },
            {
                "id": "1-7",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "I-T-V-A-I-O-T-O-M-N",
                "answer": "motivation",
                "hint": "Énergie qui pousse à poursuivre son objectif."
            },
            {
                "id": "1-8",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "C-E-I-N-C-N-F-O-A",
                "answer": "confiance",
                "hint": "Fait de croire en ses propres capacités."
            },
            {
                "id": "1-9",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "E-C-U-O-E-T",
                "answer": "ecoute",
                "hint": "Attention portée aux besoins et aux idées des autres."
            },
            {
                "id": "1-10",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "D-A-T-N-I-T-P-A-O-A",
                "answer": "adaptation",
                "hint": "Capacité à changer de méthode selon la situation."
            },
            {
                "id": "1-11",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "E-E-R-N-C-P-S-E-R-A-E-V",
                "answer": "perseverance",
                "hint": "Volonté de continuer malgré les obstacles."
            },
            {
                "id": "1-12",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "I-R-O-A-O-A-T-N-G-N-S-I",
                "answer": "organisation",
                "hint": "Capacité à structurer le temps et les tâches."
            },
            {
                "id": "1-13",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "E-M-A-T-H-P-I-E",
                "answer": "empathie",
                "hint": "Capacité à comprendre les émotions des autres."
            },
            {
                "id": "1-14",
                "question": "Remets les lettres dans le bon ordre.",
                "description": "V-I-N-S-I-O",
                "answer": "vision",
                "hint": "Capacité à imaginer une direction pour l’avenir."
            }
        ]
    },

    // LEVEL 3 - WORD ORDER
    {
        id: 3,
        title: "Culture entrepreneuriale",
        icon: "💡",
        description: "Construis les phrases correctement.",
        type: "order",
        questions: [
            {
                id: "2-0",
                question: "Mets les mots dans le bon ordre.",
                description: "initiative / La / encourage / culture / l' / entrepreneuriale",
                answer: "La culture entrepreneuriale encourage l'initiative",
                hint: "La phrase commence par « La culture »."
            },
            {
                id: "2-1",
                question: "Mets les mots dans le bon ordre.",
                description: "innovation / favorise / L'entrepreneur / l'",
                answer: "L'entrepreneur favorise l'innovation",
                hint: "La phrase commence par « L'entrepreneur »."
            },
            {
                id: "2-2",
                question: "Mets les mots dans le bon ordre.",
                description: "risques / accepte / entrepreneur / L' / les",
                answer: "L'entrepreneur accepte les risques",
                hint: "La phrase commence par « L'entrepreneur »."

            },
            {
                "id": "2-3",
                "question": "Mets les mots dans le bon ordre.",
                "description": "devenir / idée / Une / peut / un / projet",
                "answer": "Une idée peut devenir un projet",
                "hint": "La phrase commence par « Une idée »."
            },
            {
                "id": "2-4",
                "question": "Mets les mots dans le bon ordre.",
                "description": "client / besoin / un / précis / Le / exprime",
                "answer": "Le client exprime un besoin précis",
                "hint": "La phrase commence par « Le client »."
            },
            {
                "id": "2-5",
                "question": "Mets les mots dans le bon ordre.",
                "description": "La / créativité / problèmes / résoudre / aide / à / des",
                "answer": "La créativité aide à résoudre des problèmes",
                "hint": "La phrase commence par « La créativité »."
            },
            {
                "id": "2-6",
                "question": "Mets les mots dans le bon ordre.",
                "description": "Un / travail / son / organise / entrepreneur",
                "answer": "Un entrepreneur organise son travail",
                "hint": "La phrase commence par « Un entrepreneur »."
            },
            {
                "id": "2-7",
                "question": "Mets les mots dans le bon ordre.",
                "description": "équipe / les / responsabilités / Une / partage",
                "answer": "Une équipe partage les responsabilités",
                "hint": "La phrase commence par « Une équipe »."
            },
            {
                "id": "2-8",
                "question": "Mets les mots dans le bon ordre.",
                "description": "les / améliore / L'innovation / produits / existants",
                "answer": "L'innovation améliore les produits existants",
                "hint": "La phrase commence par « L'innovation améliore »."
            },
            {
                "id": "2-9",
                "question": "Mets les mots dans le bon ordre.",
                "description": "les / besoins / évolue / avec / Le / marché",
                "answer": "Le marché évolue avec les besoins",
                "hint": "La phrase commence par « Le marché »."
            },
            {
                "id": "2-10",
                "question": "Mets les mots dans le bon ordre.",
                "description": "Un / préparation / nécessite / une / projet / bonne",
                "answer": "Un projet nécessite une bonne préparation",
                "hint": "La phrase commence par « Un projet »."
            },
            {
                "id": "2-11",
                "question": "Mets les mots dans le bon ordre.",
                "description": "dépenses / les / prévoir / budget / Le / de / permet",
                "answer": "Le budget permet de prévoir les dépenses",
                "hint": "La phrase commence par « Le budget »."
            },
            {
                "id": "2-12",
                "question": "Mets les mots dans le bon ordre.",
                "description": "renforce / La / confiance / communication / la",
                "answer": "La communication renforce la confiance",
                "hint": "La phrase commence par « La communication »."
            },
            {
                "id": "2-13",
                "question": "Mets les mots dans le bon ordre.",
                "description": "erreurs / apprend / L'entrepreneur / de / ses",
                "answer": "L'entrepreneur apprend de ses erreurs",
                "hint": "La phrase commence par « L'entrepreneur apprend »."
            },
            {
                "id": "2-14",
                "question": "Mets les mots dans le bon ordre.",
                "description": "problème / bonne / un / idée / Une / répond / à",
                "answer": "Une bonne idée répond à un problème",
                "hint": "La phrase commence par « Une bonne »."
            }
        ]
    },

    // LEVEL 4 - CROSSWORD
    {
        id: 4,
        title: "Les qualités de l'entrepreneur",
        icon: "🧩",
        description: "Découvre les qualités d'un bon entrepreneur.",
        type: "crossword",
        questions: [
            {
                id: "3-0",
                crosswordId: 0,
                question: "Complète les mots croisés !",
                description: "Trouve les qualités de l'entrepreneur à partir des définitions.",
                answer: "crossword",
                hint: "Pense à la créativité, à la responsabilité, à l'autonomie et à la patience."
            },
            {
                id: "3-1",
                crosswordId: 1,
                question: "Les qualités de l'entrepreneur",
                description: "Retrouve les quatre qualités dans la grille.",
                answer: "crossword",
                hint: "Un entrepreneur doit être créatif, responsable, autonome et patient."
            },
            {
                id: "3-2",
                crosswordId: 2,
                question: "Défi final : les qualités",
                description: "Complète toutes les cases de la grille.",
                answer: "crossword",
                hint: "Lis les définitions affichées sous la grille."
            },
            {
                "id": "3-3",
                "question": "Complète les mots croisés !",
                "description": "La vision et les décisions",
                "answer": "crossword",
                "hint": "Lis les définitions pour retrouver les qualités et compétences.",
                "crosswordId": 3
            },
            {
                "id": "3-4",
                "question": "Complète les mots croisés !",
                "description": "Le comportement entrepreneurial",
                "answer": "crossword",
                "hint": "Lis les définitions pour retrouver les qualités et compétences.",
                "crosswordId": 4
            },
            {
                "id": "3-5",
                "question": "Complète les mots croisés !",
                "description": "La force du collectif",
                "answer": "crossword",
                "hint": "Lis les définitions pour retrouver les qualités et compétences.",
                "crosswordId": 5
            }
        ]
    },

    // LEVEL 5 - FIND THE ODD ONE
    {
        id: 5,
        title: "Découverte de l'idée",
        icon: "🔎",
        description: "Trouve l'élément qui ne correspond pas.",
        type: "odd",

        questions: [
            {
                id: "4-0",
                question: "Trouve l'intrus parmi les caractéristiques d'un entrepreneur.",
                description: "Quelle caractéristique ne correspond pas à un entrepreneur ?",
                options: [
                    "Créativité",
                    "Innovation",
                    "Initiative",
                    "Riche"
                ],
                answer: "Riche"
            },
            {
                id: "4-1",
                question: "Trouve l'intrus parmi les caractéristiques d'un homme d'affaires.",
                description: "Quelle caractéristique ne correspond pas à un homme d'affaires ?",
                options: [
                    "Négociation",
                    "Gestion",
                    "Investissement",
                    "Désorganisation"
                ],
                answer: "Désorganisation"
            },
            {
                id: "4-2",
                question: "Trouve l'intrus parmi les caractéristiques d'une personne entreprenante.",
                description: "Quelle caractéristique ne correspond pas à une personne entreprenante ?",
                options: [
                    "Dynamisme",
                    "Motivation",
                    "Persévérance",
                    "Inactivité"
                ],
                answer: "Inactivité"
            },
            {
                "id": "4-3",
                "question": "Trouve l’intrus parmi les actions qui aident à découvrir une idée.",
                "description": "Quelle action empêche de comprendre les besoins ?",
                "options": [
                    "Observer",
                    "Écouter",
                    "Interroger",
                    "Ignorer"
                ],
                "answer": "Ignorer",
                "hint": "Pense à la relation avec les clients."
            },
            {
                "id": "4-4",
                "question": "Trouve l’intrus parmi les étapes d’un projet.",
                "description": "Quelle action n’aide pas à préparer un projet ?",
                "options": [
                    "Planifier",
                    "Organiser",
                    "Analyser",
                    "Négliger"
                ],
                "answer": "Négliger",
                "hint": "Préparer demande méthode et attention."
            },
            {
                "id": "4-5",
                "question": "Trouve l’intrus parmi les qualités d’un chef de projet.",
                "description": "Quelle attitude perturbe le travail en équipe ?",
                "options": [
                    "Écoute",
                    "Respect",
                    "Coopération",
                    "Égoïsme"
                ],
                "answer": "Égoïsme",
                "hint": "Une équipe avance avec l’entraide."
            },
            {
                "id": "4-6",
                "question": "Trouve l’intrus parmi les façons de trouver des besoins.",
                "description": "Quelle méthode ne permet pas de recueillir des informations ?",
                "options": [
                    "Questionnaire",
                    "Entretien",
                    "Observation",
                    "Supposition"
                ],
                "answer": "Supposition",
                "hint": "Cherche une méthode qui recueille des faits."
            },
            {
                "id": "4-7",
                "question": "Trouve l’intrus parmi les attitudes face à un problème.",
                "description": "Quelle réaction freine la recherche d’une solution ?",
                "options": [
                    "Analyser",
                    "Tester",
                    "Imaginer",
                    "Abandonner"
                ],
                "answer": "Abandonner",
                "hint": "Il faut poursuivre la recherche de solutions."
            },
            {
                "id": "4-8",
                "question": "Trouve l’intrus parmi les ressources d’un projet.",
                "description": "Quel élément n’est pas une ressource utile ?",
                "options": [
                    "Temps",
                    "Budget",
                    "Matériel",
                    "Désordre"
                ],
                "answer": "Désordre",
                "hint": "Les ressources permettent de réaliser les tâches."
            },
            {
                "id": "4-9",
                "question": "Trouve l’intrus parmi les comportements d’un bon entrepreneur.",
                "description": "Quelle attitude freine l’apprentissage ?",
                "options": [
                    "Curiosité",
                    "Ouverture",
                    "Formation",
                    "Arrogance"
                ],
                "answer": "Arrogance",
                "hint": "Un entrepreneur continue à apprendre."
            },
            {
                "id": "4-10",
                "question": "Trouve l’intrus parmi les actions de validation d’une idée.",
                "description": "Quelle action n’aide pas à vérifier l’intérêt des clients ?",
                "options": [
                    "Tester",
                    "Questionner",
                    "Comparer",
                    "Deviner"
                ],
                "answer": "Deviner",
                "hint": "Les retours des utilisateurs sont précieux."
            },
            {
                "id": "4-11",
                "question": "Trouve l’intrus parmi les valeurs du travail en équipe.",
                "description": "Quel comportement détruit la confiance ?",
                "options": [
                    "Honnêteté",
                    "Entraide",
                    "Communication",
                    "Mensonge"
                ],
                "answer": "Mensonge",
                "hint": "La confiance dépend de la sincérité."
            },
            {
                "id": "4-12",
                "question": "Trouve l’intrus parmi les objectifs d’une étude de marché.",
                "description": "Quel élément ne sert pas à comprendre le marché ?",
                "options": [
                    "Clients",
                    "Concurrents",
                    "Prix",
                    "Hasard"
                ],
                "answer": "Hasard",
                "hint": "Une étude de marché observe des informations concrètes."
            },
            {
                "id": "4-13",
                "question": "Trouve l’intrus parmi les attitudes favorables à l’innovation.",
                "description": "Quelle attitude empêche les nouvelles idées ?",
                "options": [
                    "Imagination",
                    "Curiosité",
                    "Expérimentation",
                    "Rigidité"
                ],
                "answer": "Rigidité",
                "hint": "Innover demande de la souplesse."
            },
            {
                "id": "4-14",
                "question": "Trouve l’intrus parmi les moyens de convaincre un client.",
                "description": "Quelle pratique nuit à la relation client ?",
                "options": [
                    "Clarté",
                    "Écoute",
                    "Respect",
                    "Manipulation"
                ],
                "answer": "Manipulation",
                "hint": "Une relation durable repose sur la confiance."
            }
        ]
    },

    // LEVEL 6 - COMPLETE THE SENTENCE

    {
        id: 6,
        title: "PIE Magic Examination",
        icon: "📜",
        description: "Reconstitue un texte sur la recherche d'une idée de projet.",
        type: "exam",
        questions: []
    },

    // LEVEL 7 - MYSTERY WORD
    {
        id: 7,
        title: "Business Model",
        icon: "📊",
        description: "Trouve les mots secrets du modèle économique.",
        type: "mystery",
        questions: [
            {
                question: "Mot mystère : Qui achète les produits ou utilise les services ?",
                description: "Je représente les personnes ciblées par une entreprise.",
                answer: "clients",
                hint: "Une entreprise cherche à satisfaire leurs besoins."
            },
            {
                question: "Mot mystère : Comment appelle-t-on l'argent gagné par un projet ?",
                description: "Je représente l'argent obtenu grâce aux ventes ou aux services.",
                answer: "revenus",
                hint: "Ils permettent à l'entreprise de gagner de l'argent."
            },
            {
                question: "Mot mystère : Comment appelle-t-on les dépenses d'un projet ?",
                description: "Je représente l'argent dépensé pour faire fonctionner une entreprise.",
                answer: "couts",
                hint: "Ils peuvent comprendre les salaires et les achats."
            }
        ]
    }
];

// CROSSWORD DATA

const entrepreneurCrosswords = [
    {
        title: "Les qualités personnelles",
        words: [
            {
                id: 1,
                word: "CREATIVITE",
                clue: "Capacité à imaginer des idées nouvelles."
            },
            {
                id: 2,
                word: "PATIENCE",
                clue: "Capacité à attendre sans abandonner."
            },
            {
                id: 3,
                word: "AUTONOMIE",
                clue: "Capacité à travailler de manière indépendante."
            },
            {
                id: 4,
                word: "RESPONSABILITE",
                clue: "Capacité à assumer ses décisions."
            }
        ]
    },
    {
        title: "L'esprit entrepreneurial",
        words: [
            {
                id: 1,
                word: "COURAGE",
                clue: "Force d'affronter les difficultés."
            },
            {
                id: 2,
                word: "INITIATIVE",
                clue: "Capacité à agir sans attendre les autres."
            },
            {
                id: 3,
                word: "CONFIANCE",
                clue: "Fait de croire en ses capacités."
            },
            {
                id: 4,
                word: "AMBITION",
                clue: "Volonté d'atteindre de grands objectifs."
            }
        ]
    },
    {
        title: "Les compétences entrepreneuriales",
        words: [
            {
                id: 1,
                word: "GESTION",
                clue: "Action d'organiser les ressources d'un projet."
            },
            {
                id: 2,
                word: "ECOUTE",
                clue: "Capacité à comprendre les besoins des autres."
            },
            {
                id: 3,
                word: "LEADERSHIP",
                clue: "Capacité à guider et motiver une équipe."
            },
            {
                id: 4,
                word: "DECISION",
                clue: "Choix effectué entre plusieurs possibilités."
            }
        ]
    }
];



// Random bank: keep the three original crossword layouts intact.
entrepreneurCrosswords[0].layout = [{"id": 1, "row": 0, "col": 0, "direction": "horizontal"}, {"id": 2, "row": -6, "col": 0, "direction": "vertical"}, {"id": 3, "row": -5, "col": 0, "direction": "horizontal"}, {"id": 4, "row": -2, "col": -1, "direction": "horizontal"}];
entrepreneurCrosswords[1].layout = [{"id": 1, "row": 0, "col": 0, "direction": "horizontal"}, {"id": 2, "row": 3, "col": 0, "direction": "horizontal"}, {"id": 3, "row": 5, "col": 0, "direction": "horizontal"}, {"id": 4, "row": 0, "col": 4, "direction": "vertical"}];
entrepreneurCrosswords[2].layout = [{"id": 1, "row": 0, "col": 0, "direction": "horizontal"}, {"id": 2, "row": -5, "col": 1, "direction": "vertical"}, {"id": 3, "row": -8, "col": 4, "direction": "vertical"}, {"id": 4, "row": -7, "col": 6, "direction": "vertical"}];
entrepreneurCrosswords.push({
  "title": "La vision et les décisions",
  "words": [
    {
      "id": 1,
      "word": "VISION",
      "clue": "Capacité à imaginer l’avenir d’un projet."
    },
    {
      "id": 2,
      "word": "STRATEGIE",
      "clue": "Plan d’action pour atteindre un objectif."
    },
    {
      "id": 3,
      "word": "RIGUEUR",
      "clue": "Précision et sérieux dans le travail."
    },
    {
      "id": 4,
      "word": "AUDACE",
      "clue": "Courage de prendre des initiatives."
    }
  ],
  "layout": [
    {
      "id": 1,
      "row": 0,
      "col": 0,
      "direction": "horizontal"
    },
    {
      "id": 2,
      "row": -7,
      "col": 3,
      "direction": "vertical"
    },
    {
      "id": 3,
      "row": -5,
      "col": 3,
      "direction": "horizontal"
    },
    {
      "id": 4,
      "row": -6,
      "col": 8,
      "direction": "vertical"
    }
  ]
});
entrepreneurCrosswords.push({
  "title": "Le comportement entrepreneurial",
  "words": [
    {
      "id": 1,
      "word": "EMPATHIE",
      "clue": "Capacité à comprendre les autres."
    },
    {
      "id": 2,
      "word": "ADAPTATION",
      "clue": "Capacité à s’ajuster aux changements."
    },
    {
      "id": 3,
      "word": "DISCIPLINE",
      "clue": "Respect régulier de ses engagements."
    },
    {
      "id": 4,
      "word": "CURIOSITE",
      "clue": "Envie de découvrir et d’apprendre."
    }
  ],
  "layout": [
    {
      "id": 1,
      "row": 0,
      "col": 0,
      "direction": "horizontal"
    },
    {
      "id": 2,
      "row": -3,
      "col": 2,
      "direction": "vertical"
    },
    {
      "id": 3,
      "row": -7,
      "col": 6,
      "direction": "vertical"
    },
    {
      "id": 4,
      "row": 4,
      "col": -1,
      "direction": "horizontal"
    }
  ]
});
entrepreneurCrosswords.push({
  "title": "La force du collectif",
  "words": [
    {
      "id": 1,
      "word": "EQUIPE",
      "clue": "Groupe qui travaille pour un même objectif."
    },
    {
      "id": 2,
      "word": "ORGANISATION",
      "clue": "Manière de répartir les tâches et le temps."
    },
    {
      "id": 3,
      "word": "SOLIDARITE",
      "clue": "Entraide entre les personnes."
    },
    {
      "id": 4,
      "word": "EFFORT",
      "clue": "Énergie fournie pour atteindre un résultat."
    }
  ],
  "layout": [
    {
      "id": 1,
      "row": 0,
      "col": 0,
      "direction": "horizontal"
    },
    {
      "id": 2,
      "row": -9,
      "col": 3,
      "direction": "vertical"
    },
    {
      "id": 3,
      "row": -8,
      "col": -3,
      "direction": "horizontal"
    },
    {
      "id": 4,
      "row": -8,
      "col": 6,
      "direction": "vertical"
    }
  ]
});
