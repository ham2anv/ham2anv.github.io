const Agitator = {
  name: "Agitator",
  description:
    "You contribute to the cause by stirring up trouble, getting the public angry at the injustice of the system.",
  total: 150,
  picked: true,
  fixed: [
    {
      name: "ST",
      base: 10,
      get cost() {
        return PerLevel.call(this, 10);
      },
      level: 0,
    },
    {
      name: "DX",
      base: 10,
      get cost() {
        return PerLevel.call(this, 20);
      },
      level: 0,
    },
    {
      name: "IQ",
      base: 10,
      get cost() {
        return PerLevel.call(this, 20);
      },
      level: 2,
    },
    {
      name: "HT",
      base: 10,
      get cost() {
        return PerLevel.call(this, 10);
      },
      level: 0,
    },
    {
      name: "Will",
      base: "IQ",
      get cost() {
        return PerLevel.call(this, 5);
      },
      level: 0,
    },
    {
      name: "Per",
      base: "IQ",
      get cost() {
        return PerLevel.call(this, 5);
      },
      level: 1,
    },
    { name: "Rapier Wit", cost: 5 },
    {
      name: "Smooth Operator",
      level: 1,
      get cost() {
        return PerLevel.call(this, 15);
      },
      modifiers: [
        "Acting",
        "Carousing",
        "Detect Lies",
        "Diplomacy",
        "Fast-Talk",
        "Intimidation",
        "Leadership",
        "Panhandling",
        "Politics",
        "Public Speaking",
        "Savoir-Faire",
        "Sex Appeal",
        "Streetwise",
      ].map((target) => ({ target, value: (l) => l })),
    },
    {
      name: "Voice",
      cost: 10,
      modifiers: [
        "Diplomacy",
        "Fast-Talk",
        "Mimicry",
        "Performance",
        "Politics",
        "Public Speaking",
        "Sex Appeal",
        "Singing",
      ].map((target) => ({ target, value: () => 2 })),
    },
    { name: "Chummy", cost: -5 },
    { name: "Overconfidence", description: 12, cost: -5 },
    Skill({
      name: "Acting",
      attribute: "IQ",
      difficulty: "Average",
      points: 2,
    }),
    Skill({
      name: "Current Affairs",
      description: "Headline News",
      attribute: "IQ",
      difficulty: "Easy",
      points: 2,
    }),
    Skill({
      name: "Current Affairs",
      description: "People",
      attribute: "IQ",
      difficulty: "Easy",
      points: 2,
    }),
    Skill({
      name: "Detect Lies",
      attribute: "IQ",
      difficulty: "Easy",
      points: 2,
    }),
    Skill({
      name: "Diplomacy",
      attribute: "IQ",
      difficulty: "Hard",
      points: 4,
    }),
    Skill({
      name: "Fast-Talk",
      attribute: "IQ",
      difficulty: "Average",
      points: 2,
    }),
    Skill({
      name: "Politics",
      attribute: "IQ",
      difficulty: "Average",
      points: 2,
    }),
    Skill({
      name: "Psychology",
      attribute: "IQ",
      difficulty: "Hard",
      points: 2,
    }),
    Skill({
      name: "Public Speaking",
      attribute: "IQ",
      difficulty: "Average",
      points: 2,
    }),
  ],
  steps: [
    {
      description: "You stir up dissent because you…",
      choices: [
        {
          description: "…want to see the system burn.",
          fixed: [
            {
              name: "Will",
              base: "IQ",
              get cost() {
                return PerLevel.call(this, 5);
              },
              level: 1,
            },
            {
              name: "Fearlessness",
              level: 2,
              get cost() {
                return PerLevel.call(this, 2);
              },
            },
            { name: "Higher Purpose", description: "Damn the Man", cost: 5 },
            {
              name: "Obsession",
              description:
                "Overthrow the Guilds in Gwynn; long-term goal; 15 or less",
              cost: -5,
            },
            Skill({
              name: "Brawling",
              attribute: "DX",
              difficulty: "Easy",
              points: 4,
            }),
            Skill({
              name: "Expert Skill",
              description: "Political Science",
              attribute: "IQ",
              difficulty: "Hard",
              points: 4,
            }),
            Skill({
              name: "Propaganda",
              attribute: "IQ",
              difficulty: "Average",
              points: 4,
            }),
            Skill({
              name: "Running",
              difficulty: "Average",
              attribute: "HT",
              points: 2,
            }),
            Skill({
              name: "Streetwise",
              difficulty: "Average",
              attribute: "IQ",
              points: 1,
            }),
            Skill({
              name: "Throwing",
              difficulty: "Average",
              attribute: "DX",
              points: 4,
            }),
            Skill({
              name: "Urban Survival",
              difficulty: "Average",
              attribute: "Per",
              points: 2,
            }),
          ],
        },
        {
          description: "…love the feeling of manipulating people.",
          fixed: [
            {
              name: "HT",
              base: "10",
              get cost() {
                return PerLevel.call(this, 10);
              },
              level: 1,
            },
            {
              name: "Charisma",
              level: 1,
              get cost() {
                return PerLevel.call(this, 5);
              },
              modifiers: [
                "Fortune-Telling",
                "Leadership",
                "Panhandling",
                "Public Speaking",
              ].map((target) => ({ target, value: (l) => l })),
            },
            {
              name: "Smooth Operator",
              level: 1,
              get cost() {
                return PerLevel.call(this, 15);
              },
              modifiers: [
                "Acting",
                "Carousing",
                "Detect Lies",
                "Diplomacy",
                "Fast-Talk",
                "Intimidation",
                "Leadership",
                "Panhandling",
                "Politics",
                "Public Speaking",
                "Savoir-Faire",
                "Sex Appeal",
                "Streetwise",
              ].map((target) => ({ target, value: (l) => l })),
            },
            { name: "Compulsive Rabble Rousing", description: "12", cost: -15 },
            Skill({
              name: "Carousing",
              difficulty: "Easy",
              attribute: "HT",
              points: 2,
            }),
            Skill({
              name: "Sex Appeal",
              difficulty: "Average",
              attribute: "HT",
              points: 2,
            }),
            Skill({
              name: "Streetwise",
              difficulty: "Average",
              attribute: "IQ",
              points: 1,
            }),
          ],
        },
        {
          description: "…believe totally in your ideals.",
          fixed: [
            {
              name: "Will",
              base: "IQ",
              get cost() {
                return PerLevel.call(this, 5);
              },
              level: 2,
            },
            { name: "Flash Mob", cost: 20 },
            { name: "Fanaticism", description: "The Cause", cost: -15 },
            Skill({
              name: "Diplomacy",
              attribute: "IQ",
              difficulty: "Hard",
              points: 4,
            }),
            Skill({
              name: "Law",
              description: "Gwynn Civil",
              difficulty: "Hard",
              attribute: "IQ",
              points: 1,
            }),
            Skill({
              name: "Philosophy",
              description: "The Movement",
              difficulty: "Hard",
              attribute: "IQ",
              points: 8,
            }),
            Skill({
              name: "Public Speaking",
              attribute: "IQ",
              difficulty: "Average",
              points: 2,
            }),
          ],
        },
      ],
    },
    {
      description: "Your mentor in your previous cell was…",
      choices: [
        {
          description: "…Vrien, activist playwright.",
          fixed: [
            {
              name: "IQ",
              base: 10,
              get cost() {
                return PerLevel.call(this, 20);
              },
              level: 1,
            },
            {
              name: "Per",
              base: "IQ",
              get cost() {
                return PerLevel.call(this, 5);
              },
              level: -1,
            },
            Skill({
              name: "Current Affairs",
              description: "High Culture",
              difficulty: "Easy",
              attribute: "IQ",
              points: 1,
            }),
            Skill({
              name: "Current Affairs",
              description: "Popular Culture",
              difficulty: "Easy",
              attribute: "IQ",
              points: 1,
            }),
            Skill({
              name: "Propaganda",
              attribute: "IQ",
              difficulty: "Average",
              points: 4,
            }),
            Skill({
              name: "Writing",
              attribute: "IQ",
              difficulty: "Average",
              points: 2,
            }),
            Skill({
              name: "Savoir-Faire",
              description: "High Society",
              attribute: "IQ",
              difficulty: "Easy",
              points: 2,
            }),
          ],
        },
        {
          description: "…Hywel, nomad warrior and firebrand.",
          fixed: [
            { name: "DX", level: 1 },
            {
              name: "Language",
              description: "any one at Accented spoken",
              cost: 2,
            },
            Skill({
              name: "Spear",
              difficulty: "Average",
              attribute: "DX",
              points: 2,
            }),
            Skill({
              name: "Thrown Weapon",
              description: "Spear",
              difficulty: "Easy",
              attribute: "DX",
              points: 1,
            }),
          ],
        },
        {
          description: "…Cynwrig, raucous celebrity.",
          fixed: [
            { name: "Equipment Bond", description: "Fiddle", cost: 1 },
            {
              name: "Reputation",
              level: 4,
              description: "Almost everyone; 10 or less",
              cost: 10,
            },
            Skill({
              name: "Acting",
              attribute: "IQ",
              difficulty: "Average",
              points: 2,
            }),
            Skill({
              name: "Driving",
              description: "Automobile",
              difficulty: "Average",
              attribute: "DX",
              points: 4,
            }),
            Skill({
              name: "Musical Instrument",
              description: "Fiddle",
              attribute: "IQ",
              difficulty: "Hard",
              points: 4,
            }),
            Skill({
              name: "Singing",
              difficulty: "Easy",
              attribute: "HT",
              points: 2,
            }),
          ],
        },
      ],
    },
    {
      description: "To ruin a specific foe, you…",
      choices: [
        {
          description: "…expose their secrets to the public.",
          fixed: [
            { name: "Per", level: 1 },
            { name: "Honest Face", cost: 1 },
            Skill({
              name: "Electronics Operation",
              description: "Media",
              difficulty: "Average",
              attribute: "IQ",
              points: 4,
            }),
            Skill({
              name: "Electronics Operation",
              description: "Surveillance",
              difficulty: "Average",
              attribute: "IQ",
              points: 4,
            }),
            Skill({
              name: "Observation",
              difficulty: "Average",
              attribute: "Per",
              points: 2,
            }),
            Skill({
              name: "Search",
              difficulty: "Average",
              attribute: "Per",
              points: 1,
            }),
            Skill({
              name: "Shadowing",
              difficulty: "Average",
              attribute: "IQ",
              points: 8,
            }),
          ],
        },
        {
          description: "…turn their trusted allies against them.",
          fixed: [
            { name: "Elixir Resistance", description: "Gullibility", cost: 1 },
            {
              name: "Herbal Formula",
              description: "Elixir of Gullibility",
              cost: 2,
            },
            Skill({
              name: "Accounting",
              difficulty: "Hard",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Administration",
              difficulty: "Average",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Body Language",
              difficulty: "Average",
              attribute: "Per",
              points: 2,
            }),
            Skill({
              name: "Carousing",
              difficulty: "Easy",
              attribute: "HT",
              points: 2,
            }),
            Skill({ name: "Fast-Talk", points: 2 }),
            Skill({
              name: "Filch",
              difficulty: "Average",
              attribute: "DX",
              points: 4,
            }),
            Skill({
              name: "Herb Lore",
              difficulty: "Very Hard",
              attribute: "IQ",
              points: 4,
            }),
            Skill({
              name: "Naturalist",
              difficulty: "Hard",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Sex Appeal",
              difficulty: "Average",
              attribute: "HT",
              points: 2,
            }),
          ],
        },
        {
          description: "…deprive them of what they love most.",
          fixed: [
            { name: "DX", level: 1 },
            { name: "Callous", cost: -5 },
            Skill({
              name: "Climbing",
              difficulty: "Average",
              attribute: "DX",
              points: 1,
            }),
            Skill({
              name: "Electronics Operation",
              description: "Security",
              difficulty: "Average",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Forced Entry",
              difficulty: "Easy",
              attribute: "DX",
              points: 2,
            }),
            Skill({
              name: "Knot Tying",
              difficulty: "Easy",
              attribute: "DX",
              points: 1,
            }),
            Skill({
              name: "Lockpicking",
              difficulty: "Average",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Stealth",
              difficulty: "Average",
              attribute: "DX",
              points: 2,
            }),
          ],
        },
      ],
    },
  ],
};

const Insurgent = {
  name: "Insurgent",
  description:
    "Whether or not one finds it distasteful, violence is often necessary in pursuit of freedom.",
  total: 150,
  fixed: [
    {
      name: "ST",
      base: 10,
      get cost() {
        return PerLevel.call(this, 10);
      },
      level: 1,
    },
    {
      name: "DX",
      base: 10,
      get cost() {
        return PerLevel.call(this, 10);
      },
      level: 2,
    },
    {
      name: "IQ",
      base: 10,
      get cost() {
        return PerLevel.call(this, 10);
      },
      level: 0,
    },
    {
      name: "HT",
      base: 10,
      get cost() {
        return PerLevel.call(this, 10);
      },
      level: 1,
    },
    {
      name: "Will",
      base: 10,
      get cost() {
        return PerLevel.call(this, 10);
      },
      level: 0,
    },
    {
      name: "Per",
      base: 10,
      get cost() {
        return PerLevel.call(this, 10);
      },
      level: 0,
    },
    {
      name: "Basic Speed",
      get cost() {
        return PerLevel.call(this, 5);
      },
      level: 1,
    },
    {
      name: "Combat Reflexes",
      cost: 15,
      modifiers: [{ target: "Fast-Draw", value: () => 1 }],
    },
    { name: "Bad Temper", description: "12", cost: -10 },
    { name: "Code of Honor", description: "Soldier", cost: -10 },
    Skill({
      name: "Fast-Draw",
      description: "any",
      difficulty: "Easy",
      attribute: "DX",
      points: 1,
    }),
    Skill({
      name: "Intimidation",
      difficulty: "Average",
      attribute: "Will",
      points: 2,
    }),
    Skill({ name: "Judo", difficulty: "Hard", attribute: "DX", points: 8 }),
    Skill({ name: "Karate", difficulty: "Hard", attribute: "DX", points: 8 }),
    Skill({ name: "Knife", difficulty: "Easy", attribute: "DX", points: 2 }),
    Skill({ name: "Tactics", difficulty: "Hard", attribute: "IQ", points: 4 }),
  ],
  steps: [
    {
      description: "You fight the system because you…",
      choices: [
        {
          description: "…have nothing left to lose.",
          fixed: [
            { name: "High Pain Threshold", cost: 10 },
            { name: "Unfazeable", cost: 15 },
            { name: "On the Edge", description: "15", cost: -7 },
            Skill({
              name: "Armoury",
              description: "Body Armor",
              difficulty: "Average",
              attribute: "IQ",
              points: 4,
            }),
            Skill({
              name: "Running",
              difficulty: "Average",
              attribute: "HT",
              points: 4,
            }),
          ],
        },
        {
          description: "…must avenge the fallen.",
          fixed: [
            { name: "IQ", level: 1 },
            {
              name: "Higher Purpose",
              description: "Avenge the fallen",
              cost: 5,
            },
            { name: "Guilt Complex", cost: -5 },
            Skill({
              name: "Detect Lies",
              difficulty: "Hard",
              attribute: "IQ",
              points: 4,
            }),
            Skill({
              name: "Hidden Lore",
              description: "Spirit Lore",
              difficulty: "Average",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Interrogation",
              difficulty: "Average",
              attribute: "IQ",
              points: 4,
            }),
          ],
        },
        {
          description: "…just love to fight.",
          fixed: [
            { name: "ST", level: 1 },
            { name: "HT", level: 1 },
            Skill({
              name: "Acrobatics",
              difficulty: "Hard",
              attribute: "DX",
              points: 4,
            }),
            Skill({
              name: "Intimidation",
              difficulty: "Average",
              attribute: "Will",
              points: 2,
            }),
            Skill({
              name: "Karate",
              difficulty: "Hard",
              attribute: "DX",
              points: 4,
            }),
          ],
        },
      ],
    },
    {
      description: "Your mentor in your previous cell was…",
      choices: [
        {
          description: "…Enion, Guild security defector.",
          fixed: [
            { name: "HT", level: 1 },
            { name: "Fit", cost: 5 },
            Skill({
              name: "Fast-Draw",
              description: "Ammo",
              difficulty: "Easy",
              attribute: "DX",
              points: 2,
            }),
            Skill({
              name: "Guns",
              description: "SMG",
              difficulty: "Easy",
              attribute: "DX",
              points: 2,
            }),
            Skill({
              name: "Observation",
              difficulty: "Average",
              attribute: "Per",
              points: 2,
            }),
            Skill({
              name: "Soldier",
              difficulty: "Average",
              attribute: "IQ",
              points: 2,
            }),
          ],
        },
        {
          description: "…Seisyll, battle sorcerer.",
          fixed: [
            { name: "Will", level: 1 },
            { name: "Intuitive Cantrip", description: "Muffle", cost: 1 },
            {
              name: "Signature Gear",
              description: "Sunbolt rifle and Powerstone",
              cost: 1,
            },
            Skill({
              name: "Armoury",
              description: "Small Arms",
              difficulty: "Average",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Beam Weapons",
              description: "Rifle",
              difficulty: "Easy",
              attribute: "DX",
              points: 8,
            }),
            Skill({
              name: "Thaumatology",
              difficulty: "Very Hard",
              attribute: "IQ",
              points: 8,
            }),
          ],
        },
        {
          description: "…Rhiryd, rage-fettered warrior.",
          fixed: [
            { name: "Trained By a Master", cost: 30 },
            { name: "Berserk", description: "12", cost: -10 },
            { name: "Technique: Choke Hold", description: "Judo", cost: 3 },
            { name: "Technique: Ear Clap", description: "Karate-1", cost: 2 },
          ],
        },
      ],
    },
    {
      description: "Your weapon of choice is…",
      choices: [
        {
          description: "…your set of twin pistols.",
          fixed: [
            {
              name: "Off-Hand Weapon Training",
              description: "Guns (Pistol)",
              cost: 1,
            },
            { name: "Signature Gear", description: "Pistols", cost: 1 },
            Skill({
              name: "Armoury",
              description: "Small Arms",
              difficulty: "Average",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Guns",
              description: "Pistol",
              difficulty: "Easy",
              attribute: "DX",
              points: 2,
            }),
            {
              name: "Technique: Dual-Weapon Attack",
              description: "Guns (Pistol)",
              cost: 4,
            },
          ],
        },
        {
          description: "…a sturdy club.",
          fixed: [
            { name: "Signature Gear", description: "club", cost: 1 },
            { name: "Weapon Bond", description: "club", cost: 1 },
            Skill({
              name: "Axe/Mace",
              difficulty: "Average",
              attribute: "DX",
              points: 8,
            }),
          ],
        },
        {
          description: "…your bare hands.",
          fixed: [
            {
              name: "Iron Hands",
              level: 2,
              get cost() {
                return PerLevel.call(this, 1);
              },
            },
            Skill({
              name: "Judo",
              difficulty: "Hard",
              attribute: "DX",
              points: 4,
            }),
            Skill({
              name: "Karate",
              difficulty: "Hard",
              attribute: "DX",
              points: 4,
            }),
          ],
        },
      ],
    },
  ],
};

const Revolutionist = {
  name: "Revolutionist",
  total: 150,
  description:
    "You are the planner, devising your cell's strategy and crafting its message.",
  picked: false,
  fixed: [
    {
      name: "ST",
      base: 10,
      get cost() {
        return 10 * (this.level + this.adjusts?.level);
      },
      level: 0,
    },
    {
      name: "DX",
      base: 10,
      get cost() {
        return 20 * (this.level + this.adjusts?.level);
      },
      level: 0,
    },
    {
      name: "IQ",
      base: 10,
      get cost() {
        return 20 * (this.level + this.adjusts?.level);
      },
      level: 2,
    },
    {
      name: "HT",
      base: 10,
      get cost() {
        return 10 * (this.level + this.adjusts?.level);
      },
      level: 1,
    },
    {
      name: "Will",
      base: "IQ",
      get cost() {
        return 5 * (this.level + this.adjusts?.level);
      },
      level: 1,
    },
    {
      name: "Per",
      base: "IQ",
      get cost() {
        return 5 * (this.level + this.adjusts?.level);
      },
      level: 0,
    },
    {
      name: "Born War-Leader",
      level: 2,
      get cost() {
        return PerLevel.call(this, 5);
      },
      modifiers: [
        "Intelligence Analysis",
        "Leadership",
        ["Savoir-Faire", "Military"],
        "Strategy",
        "Tactics",
      ].map((target) => ({ target, value: (l) => l })),
    },
    { name: "Penetrating Voice", cost: 1 },
    {
      name: "Obsession",
      description: "Overthrow the Guilds in Gwynn; long-term goal; 12 or less",
      cost: -10,
    },
    { name: "Sense of Duty", description: "Cell", cost: -5 },
    Skill({ name: "Brawling", difficulty: "Easy", attribute: "DX", points: 4 }),
    Skill({
      name: "Current Affairs",
      description: "Politics",
      difficulty: "Easy",
      attribute: "IQ",
      points: 1,
    }),
    Skill({
      name: "Diplomacy",
      difficulty: "Hard",
      attribute: "IQ",
      points: 4,
    }),
    Skill({
      name: "Intelligence Analysis",
      difficulty: "Hard",
      attribute: "IQ",
      points: 4,
    }),
    Skill({
      name: "Law",
      description: "Gwynn Criminal",
      difficulty: "Hard",
      attribute: "IQ",
      points: 4,
    }),
    Skill({
      name: "Leadership",
      difficulty: "Average",
      attribute: "IQ",
      points: 2,
    }),
    Skill({
      name: "Politics",
      difficulty: "Average",
      attribute: "IQ",
      points: 2,
    }),
    Skill({
      name: "Propaganda",
      difficulty: "Average",
      attribute: "IQ",
      points: 2,
    }),
    Skill({
      name: "Savoir-Faire",
      description: "Military",
      difficulty: "Easy",
      attribute: "IQ",
      points: 4,
    }),
    Skill({
      name: "Stealth",
      difficulty: "Average",
      attribute: "DX",
      points: 2,
    }),
    Skill({ name: "Strategy", difficulty: "Hard", attribute: "IQ", points: 4 }),
    Skill({ name: "Tactics", difficulty: "Hard", attribute: "IQ", points: 4 }),
  ],
  steps: [
    {
      description: "You pursue revolution to…",
      choices: [
        {
          description: "…avenge a tragedy perpetrated on your family.",
          fixed: [
            { name: "DX", level: 1 },
            {
              name: "Fearlessness",
              level: 2,
              get cost() {
                return PerLevel.call(this, 2);
              },
            },
            {
              name: "Signature Gear",
              description: "Family heirloom sunbolt rifle",
              level: 1,
              get cost() {
                return PerLevel.call(this, 1);
              },
            },
            { name: "Weapon Bond", description: "Sunbolt rifle", cost: 1 },
            { name: "Guilt Complex", cost: -5 },
            Skill({
              name: "Beam Weapons",
              description: "Rifle",
              difficulty: "Easy",
              attribute: "DX",
              points: 4,
            }),
            Skill({ name: "Brawling", points: 4 }),
            Skill({
              name: "Wrestling",
              difficulty: "Average",
              attribute: "DX",
              points: 1,
            }),
          ],
        },
        {
          description: "…feed your own ambition.",
          fixed: [
            {
              name: "Charisma",
              level: 2,
              get cost() {
                return PerLevel.call(this, 5);
              },
            },
            { name: "Sensitive", cost: 5 },
            { name: "Wealth", description: "Comfortable", cost: 5 },
            Skill({
              name: "Expert Skill",
              description: "Political Science",
              difficulty: "Hard",
              attribute: "IQ",
              points: 4,
            }),
            Skill({ name: "Politics", points: 2 }),
            Skill({ name: "Propaganda", points: 2 }),
            Skill({
              name: "Savoir-Faire",
              description: "High Society",
              difficulty: "Easy",
              attribute: "IQ",
              points: 2,
            }),
          ],
        },
        {
          description:
            "…improve the lives of those who can't fight beside you.",
          fixed: [
            { name: "Empathy", cost: 15 },
            { name: "Honest Face", cost: 1 },
            {
              name: "Intuitive Statesman",
              level: 1,
              get cost() {
                return PerLevel.call(this, 10);
              },
              modifiers: [
                "Administration",
                ["Current Affairs", "Headline News"],
                ["Current Affairs", "People"],
                ["Current Affairs", "Politics"],
                "Diplomacy",
                "Economics",
                ["Expert Skill", "Political Science"],
                "Law",
                "Leadership",
                "Politics",
                "Propaganda",
                "Public Speaking",
              ].map((target) => ({ target, value: (l) => l })),
            },
            { name: "Workaholic", cost: -5 },
            Skill({ name: "Diplomacy", points: 4 }),
            Skill({
              name: "Economics",
              difficulty: "Hard",
              attribute: "IQ",
              points: 4,
            }),
          ],
        },
      ],
    },
    {
      description: "Your mentor in your previous cell was…",
      choices: [
        {
          description: "…Goronwy, philosopher and historian.",
          fixed: [
            {
              name: "Intuitive Statesman",
              level: 1,
              get cost() {
                return PerLevel.call(this, 10);
              },
              modifiers: [
                "Administration",
                ["Current Affairs", "Headline News"],
                ["Current Affairs", "People"],
                ["Current Affairs", "Politics"],
                "Diplomacy",
                "Economics",
                ["Expert Skill", "Political Science"],
                "Law",
                "Leadership",
                "Politics",
                "Propaganda",
                "Public Speaking",
              ].map((target) => ({ target, value: (l) => l })),
            },
            Skill({
              name: "Administration",
              difficulty: "Average",
              attribute: "IQ",
              points: 1,
            }),
            Skill({
              name: "Expert Skill",
              description: "Political Science",
              difficulty: "Hard",
              attribute: "IQ",
              points: 4,
            }),
          ],
        },
        {
          description: "…Madog, streetfighter and gang leader.",
          fixed: [
            { name: "ST", level: 1 },
            { name: "Combat Reflexes", cost: 15 },
            {
              name: "Reputation",
              description: "Almost everyone; 10 or less",
              level: 2,
              get cost() {
                return PerLevel.call(this, -2.5);
              },
            },
            Skill({
              name: "Knife",
              difficulty: "Easy",
              attribute: "DX",
              points: 4,
            }),
            Skill({
              name: "Streetwise",
              difficulty: "Average",
              attribute: "IQ",
              points: 1,
            }),
          ],
        },
        {
          description: "…Peredur, heir to the old Knights of Dawn.",
          fixed: [
            {
              name: "Ally",
              description:
                "Shade of Peredur; 150% of your point value; 9 or less; Preparation Required, 10 minutes, -30%; Sorcery, -15%; Summonable, +100%",
              cost: 16,
            },
            { name: "Born War-Leader", level: 2 },
            { name: "Signature Gear", description: "Gem sword", cost: 1 },
            {
              name: "Code of Honor",
              description: "Knights of Dawn",
              cost: -10,
            },
            Skill({ name: "Leadership", points: 2 }),
            Skill({
              name: "Broadsword",
              difficulty: "Average",
              attribute: "DX",
              points: 4,
            }),
            Skill({
              name: "Shield",
              difficulty: "Easy",
              attribute: "DX",
              points: 2,
            }),
          ],
        },
      ],
    },
    {
      description: "When waging your war, you tend to…",
      choices: [
        {
          description: "…charge into direct conflict, weapon in hand.",
          fixed: [
            Skill({
              name: "Guns",
              description: "SMG",
              difficulty: "Easy",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Soldier",
              difficulty: "Average",
              attribute: "IQ",
              points: 4,
            }),
            { name: "Tactics", points: 4 },
          ],
        },
        {
          description: "…lead covert actions, sticking to the shadows.",
          fixed: [
            Skill({
              name: "Holdout",
              difficulty: "Average",
              attribute: "IQ",
              points: 4,
            }),
            Skill({
              name: "Lockpicking",
              difficulty: "Average",
              attribute: "IQ",
              points: 4,
            }),
            { name: "Stealth", points: 2 },
          ],
        },
        {
          description:
            "…craft strategy, knowing true victory is won with ideas.",
          fixed: [
            Skill({
              name: "Computer Operation",
              difficulty: "Easy",
              attribute: "IQ",
              points: 2,
            }),
            { name: "Intelligence Analysis", points: 4 },
            { name: "Strategy", points: 4 },
          ],
        },
      ],
    },
  ],
};

const Saboteur = {
  name: "Saboteur",
  description:
    "The system is a grand machine, and you're the wrench in the gears.",
  total: 150,
  fixed: [],
  steps: [
    {
      description: "You put yourself in constant danger because…",
      choices: [
        {
          description: "…the enemy doesn't deserve what they have.",
          fixed: [],
        },
        {
          description: "…you're protecting people the only way you know.",
          fixed: [],
        },
        { description: "…destruction is your art form.", fixed: [] },
      ],
    },
    {
      description: "Your mentor in your previous cell was…",
      choices: [
        { description: "...Meilyr, unstable alchemist.", fixed: [] },
        { description: "...Owen, former civil engineer.", fixed: [] },
        { description: "...Cadwaladr, brazen tinkerer.", fixed: [] },
      ],
    },
    {
      description: "Your specialty of destruction is…",
      choices: [
        { description: "...subtle alteration.", fixed: [] },
        { description: "...corrosion and degradation.", fixed: [] },
        { description: "...explosions!", fixed: [] },
      ],
    },
  ],
};

const Smuggler = {
  name: "Smuggler",
  description:
    "The cell always needs supplies and transportation. You can get anything from here to there.",
  total: 150,
  fixed: [],
  steps: [
    {
      description: "Your first illicit job was...",
      choices: [
        { description: "...getaway driver.", fixed: [] },
        { description: "...drug mule.", fixed: [] },
        { description: "...gunrunner.", fixed: [] },
      ],
    },
    {
      description: "Your mentor in your previous cell was...",
      choices: [
        { description: "...Bleddyn, aeronaut.", fixed: [] },
        { description: "...Aun, sewer rat.", fixed: [] },
        { description: "...Griffri, river pirate.", fixed: [] },
      ],
    },
    {
      description: "If you had your druthers, you'd travel by...",
      choices: [
        { description: "...land.", fixed: [] },
        { description: "...sea.", fixed: [] },
        { description: "...air.", fixed: [] },
      ],
    },
  ],
};

const Surveillant = {
  name: "Surveillant",
  description:
    "Intelligence is the most valuable asset the movement has, and you provide it.",
  total: 150,
  fixed: [],
  steps: [
    {
      description: "Watching others in secret makes you feel...",
      choices: [
        { description: "..gross, but it must be done.", fixed: [] },
        { description: "...safe, knowing they can't see you.", fixed: [] },
        { description: "...anxious, waiting for signs of danger.", fixed: [] },
      ],
    },
    {
      description: "Your mentor in your previous cell was...",
      choices: [
        { description: "...Heylewith, diviner.", fixed: [] },
        { description: "...Maredudd, barfly.", fixed: [] },
        { description: "...Tegwared, wire rat.", fixed: [] },
      ],
    },
    {
      description: "The best way to gather intel is...",
      choices: [
        { description: "...with remote devices.", fixed: [] },
        { description: "..by gaining someone's trust.", fixed: [] },
        { description: "...covertly in person.", fixed: [] },
      ],
    },
  ],
};

const Sorcerer = {
  name: "Sorcerer",
  description: "You wield the power of a sorcerous tradition.",
  total: 65,
  picked: false,
  fixed: [
    {
      name: "Sorcery Talent",
      level: 1,
      get cost() {
        return this.level * 5;
      },
    },
    { name: "Spell: Cancel Spells", cost: 2 },
    {
      name: "Secret",
      description: "Non-Guild sorcerer; Imprisonment or exile",
      cost: -20,
    },
    Skill({
      name: "Thaumatology",
      attribute: "IQ",
      difficulty: "Very Hard",
      points: 8,
    }),
  ],
  steps: [
    {
      description: "Choose a sorcerous tradition.",
      choices: [
        {
          description: "Communion",
          fixed: [
            {
              name: "Sorcery",
              description: "Limited Colleges, Communication & Empathy, -40%",
              level: 7,
              get cost() {
                return 48;
              },
            },
            { name: "Spell: Improved Telepathy", cost: 6 },
            { name: "Spell: Gift of Words", cost: 8 },
            { name: "Spell: Sense Life", cost: 6 },
            Skill({
              name: "Detect Lies",
              difficulty: "Hard",
              attribute: "Per",
              points: 2,
            }),
          ],
        },
        {
          description: "Elementalism",
          fixed: [
            {
              name: "Sorcery",
              description: "Limited Scope, Elementalism, -10%",
              level: 5,
              get cost() {
                return 54;
              },
            },
            { name: "Spell: Air Jet", level: 4, cost: 5 },
            { name: "Spell: Fire Shield", cost: 4 },
            { name: "Spell: Icy Weapon", cost: 3 },
            { name: "Spell: Summon Earth Elemental", cost: 4 },
            Skill({
              name: "Innate Attack",
              description: "Beam",
              difficulty: "Easy",
              attribute: "DX",
              points: 1,
            }),
            Skill({
              name: "Innate Attack",
              description: "Gaze",
              difficulty: "Easy",
              attribute: "DX",
              points: 1,
            }),
          ],
        },
        {
          description: "Healing",
          fixed: [
            {
              name: "Sorcery",
              description: "Limited Colleges, Healing, -40%",
              level: 7,
              get cost() {
                return 48;
              },
            },
            { name: "Spell: Detect Contagion", cost: 4 },
            { name: "Spell: Minor Healing", cost: 7 },
            { name: "Spell: Resist Disease", cost: 7 },
            Skill({
              name: "Diagnosis",
              difficulty: "Hard",
              attribute: "IQ",
              points: 2,
            }),
            Skill({
              name: "Physician",
              difficulty: "Hard",
              attribute: "IQ",
              points: 2,
            }),
          ],
        },
        {
          description: "Illusion",
          fixed: [
            {
              name: "Sorcery",
              description: "Limited Colleges, Illusion & Creation, -40%",
              level: 7,
              get cost() {
                return 48;
              },
            },
            { name: "Spell: Complex Illusion", level: 1, cost: 9 },
            { name: "Spell: Create Servant", cost: 2 },
            { name: "Spell: Illusion Disguise", cost: 9 },
            Skill({
              name: "Artist",
              description: "Illusion",
              difficulty: "Hard",
              attribute: "IQ",
              points: 2,
            }),
          ],
        },
        {
          description: "Transformation",
          fixed: [
            {
              name: "Sorcery",
              description: "Limited Scope, Transformation, -10%",
              level: 5,
              get cost() {
                return 54;
              },
            },
            { name: "Spell: Crow Form", cost: 8 },
            { name: "Spell: Iron Arm", cost: 3 },
            { name: "Spell: Might", level: 1, cost: 5 },
          ],
        },
      ],
    },
  ],
};

const Occupational = [
  Agitator,
  Insurgent,
  Revolutionist,
  Saboteur,
  Smuggler,
  Surveillant,
];
const Dramatic = [
  {
    name: "Den Mother",
    description: "You work tirelessly to take care of your teammates.",
    total: 65,
    fixed: [
      { name: "IQ", level: 2 },
      { name: "HT", level: 1 },
      { name: "Per", level: 1 },
      { name: "Common Sense", cost: 10 },
      {
        name: "Gizmos",
        level: 2,
        get cost() {
          return PerLevel.call(this, 5);
        },
      },
      { name: "Higher Purpose", description: "Look after my cell", cost: 10 },
      {
        name: "Secret",
        description: "Dawnbringer; Imprisonment or Exile",
        cost: -20,
      },
      Skill({
        name: "First Aid",
        difficulty: "Easy",
        attribute: "IQ",
        points: 4,
      }),
      Skill({
        name: "Herb Lore",
        difficulty: "Very Hard",
        attribute: "IQ",
        points: 8,
      }),
      Skill({
        name: "Housekeeping",
        difficulty: "Easy",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Packing",
        difficulty: "Average",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Scrounging",
        difficulty: "Easy",
        attribute: "Per",
        points: 4,
      }),
    ],
  },
  {
    name: "Femme Fatale",
    description:
      "Regardless of your gender and sexuality, you wield seduction as a tool for the cause.",
    total: 65,
    fixed: [
      { name: "HT", level: 1 },
      { name: "Appearance", description: "Beautiful/Handsome", cost: 12 },
      { name: "Fit", cost: 5 },
      {
        name: "Charisma",
        level: 1,
        get cost() {
          return PerLevel.call(this, 5);
        },
      },
      {
        name: "Contact",
        description: "skill-18; 12 or less; Completely reliable",
        cost: 18,
      },
      { name: "Sexy Pose", cost: 1 },
      {
        name: "Secret",
        description: "Dawnbringer; Imprisonment or Exile",
        cost: -20,
      },
      Skill({
        name: "Acting",
        difficulty: "Average",
        attribute: "IQ",
        points: 4,
      }),
      Skill({
        name: "Body Language",
        difficulty: "Average",
        attribute: "Per",
        points: 4,
      }),
      Skill({
        name: "Carousing",
        difficulty: "Easy",
        attribute: "HT",
        points: 4,
      }),
      Skill({
        name: "Dancing",
        difficulty: "Average",
        attribute: "DX",
        points: 2,
      }),
      Skill({
        name: "Erotic Art",
        difficulty: "Average",
        attribute: "DX",
        points: 4,
      }),
      Skill({
        name: "Holdout",
        difficulty: "Average",
        attribute: "IQ",
        points: 4,
      }),
      Skill({
        name: "Observation",
        difficulty: "Average",
        attribute: "Per",
        points: 4,
      }),
      Skill({
        name: "Sex Appeal",
        difficulty: "Easy",
        attribute: "HT",
        points: 8,
      }),
    ],
  },
  {
    name: "Grizzled Veteran",
    description:
      "You've spent much of your life fighting for someone else's will. Now you fight for everyone.",
    total: 65,
    fixed: [
      { name: "ST", level: 1 },
      { name: "DX", level: 1 },
      { name: "IQ", level: 1 },
      { name: "HT", level: 1 },
      {
        name: "Ally",
        description: "75% of your point total; 12 or less",
        cost: 6,
      },
      {
        name: "Secret",
        description: "Dawnbringer; Imprisonment or Exile",
        cost: -20,
      },
      Skill({
        name: "Fast-Draw",
        description: "Ammo",
        difficulty: "Easy",
        attribute: "DX",
        points: 4,
      }),
      Skill({
        name: "Fast-Draw",
        description: "Sword",
        difficulty: "Easy",
        attribute: "DX",
        points: 1,
      }),
      Skill({
        name: "Guns",
        description: "Rifle",
        difficulty: "Easy",
        attribute: "DX",
        points: 4,
      }),
      Skill({
        name: "Shortsword",
        difficulty: "Average",
        attribute: "DX",
        points: 2,
      }),
      Skill({
        name: "Soldier",
        difficulty: "Average",
        attribute: "IQ",
        points: 4,
      }),
      Skill({
        name: "Spear",
        difficulty: "Average",
        attribute: "DX",
        points: 4,
      }),
    ],
  },
  {
    name: "Hopeful Idealist",
    description:
      "You're making the world better, even if it's only through constant optimism.",
    total: 65,
    fixed: [],
  },
  {
    name: "Loose Cannon",
    description:
      "Sometimes you have to throw out all the rules to get things done.",
    total: 65,
    fixed: [],
  },
  Sorcerer,
];
const Cultural = [
  {
    name: "Client Nomad",
    description:
      "You were raised among the oppressed nomads beholden to the City of Gwynn.",
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "Nomad; Native", cost: 0 },
      { name: "Cultural Familiarity", description: "City", cost: 0 },
      { name: "Language", description: "Nomad; Native", cost: 0 },
      { name: "Language", description: "Gwynnish; Accented", cost: 4 },
      Skill({
        name: "Area Knowledge",
        description: "Gwynn",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
      Skill({
        name: "Area Knowledge",
        description: "Gwynnish hinterlands",
        difficulty: "Easy",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Farming",
        difficulty: "Average",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Savoir-Faire",
        description: "Servant",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
    ],
  },
  {
    name: "Independent Nomad",
    description:
      "Your people eschewed the settled life of the Cities, embracing a free and wild life.",
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "Nomad; Native", cost: 0 },
      { name: "Language", description: "Nomad; Native", cost: 0 },
      { name: "Language", description: "Gwynnish; Accented spoken", cost: 2 },
      Skill({
        name: "Area Knowledge",
        description: "Eastern highlands",
        difficulty: "Easy",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Riding",
        difficulty: "Average",
        attribute: "DX",
        points: 2,
      }),
      Skill({
        name: "Spear",
        difficulty: "Average",
        attribute: "DX",
        points: 2,
      }),
      Skill({
        name: "Survival",
        description: "Mountains",
        difficulty: "Easy",
        attribute: "IQ",
        points: 2,
      }),
    ],
  },
  {
    name: "Merchant Nomad",
    description:
      "You are a member of a nomad clan that plies the roads and rivers between Cities, trading goods and staying marginally free.",
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "Nomad; Native", cost: 0 },
      { name: "Cultural Familiarity", description: "City", cost: 1 },
      { name: "Language", description: "Nomad; Native", cost: 0 },
      { name: "Language", description: "Gwynnish; Accented", cost: 4 },
      Skill({
        name: "Area Knowledge",
        description: "Gwynn",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
      Skill({
        name: "Area Knowledge",
        description: "Bannog",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
      Skill({
        name: "Area Knowledge",
        description: "Lleddag",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
      Skill({
        name: "Boating",
        description: "Large Powerboat",
        difficulty: "Average",
        attribute: "DX",
        points: 1,
      }),
      Skill({
        name: "Driving",
        description: "Heavy Wheeled",
        difficulty: "Average",
        attribute: "DX",
        points: 1,
      }),
    ],
  },
  {
    name: "Lower Gwynn",
    description:
      "You struggle to survive in the Lower City or the docks of Southside.",
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "City; Native", cost: 0 },
      { name: "Language", description: "Gwynnish; Native", cost: 0 },
      Skill({
        name: "Area Knowledge",
        description: "Gwynn",
        difficulty: "Easy",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Boating",
        description: "Unpowered",
        difficulty: "Average",
        attribute: "DX",
        points: 2,
      }),
      Skill({
        name: "Professional Skill",
        description: "any",
        difficulty: "Average",
        attribute: "IQ",
        points: 4,
      }),
      Skill({
        name: "Urban Survival",
        difficulty: "Average",
        attribute: "Per",
        points: 2,
      }),
    ],
  },
  {
    name: "Upper Gwynn",
    description: "You live in comfort in the Upper City.",
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "City; Native", cost: 0 },
      { name: "Language", description: "Gwynnish; Native", cost: 0 },
      { name: "Language", description: "any; Accented", cost: 4 },
      {
        name: "Independent Income",
        level: 2,
        get cost() {
          return (l) => l;
        },
      },
      Skill({
        name: "Area Knowledge",
        description: "Gwynn",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
      Skill({
        name: "Savoir-Faire",
        description: "High Society",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
    ],
  },
  {
    name: "Lower Bannog",
    description:
      'You come from Bannog, a City run by technocrats where the Guilds "serve" the state.',
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "City; Native", cost: 0 },
      { name: "Language", description: "Bann; Native", cost: 0 },
      { name: "Language", description: "Gwynn; Accented", cost: 4 },
      Skill({
        name: "Area Knowledge",
        description: "Bannog",
        difficulty: "Easy",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Professional Skill",
        description: "any",
        difficulty: "Average",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Urban Survival",
        difficulty: "Average",
        attribute: "Per",
        points: 2,
      }),
    ],
  },
  {
    name: "Upper Bannog",
    description: 'You are one of the elite from the Bannog "meritocracy."',
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "City; Native", cost: 0 },
      { name: "Language", description: "Bann; Native", cost: 0 },
      { name: "Language", description: "Gwynnish; Accented", cost: 4 },
      {
        name: "Independent Income",
        level: 2,
        get cost() {
          return (l) => l;
        },
      },
      Skill({
        name: "Area Knowledge",
        description: "Bannog",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
      Skill({
        name: "Savoir-Faire",
        description: "High Society",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
    ],
  },
  {
    name: "Lower Lleddag",
    description:
      "You come from Lleddag, a City ruled by a sorcerous oligarchy, i.e., the Guilds",
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "City; Native", cost: 0 },
      { name: "Language", description: "Lleddwyll; Native", cost: 0 },
      { name: "Language", description: "Gwynn; Accented", cost: 4 },
      Skill({
        name: "Area Knowledge",
        description: "Lleddag",
        difficulty: "Easy",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Professional Skill",
        description: "any",
        difficulty: "Average",
        attribute: "IQ",
        points: 2,
      }),
      Skill({
        name: "Urban Survival",
        difficulty: "Average",
        attribute: "Per",
        points: 2,
      }),
    ],
  },
  {
    name: "Upper Bannog",
    description: "Sorcerer or not, you are one of the elite of Lleddag.",
    total: 10,
    fixed: [
      { name: "Cultural Familiarity", description: "City; Native", cost: 0 },
      { name: "Language", description: "Lleddwyll; Native", cost: 0 },
      { name: "Language", description: "Gwynnish; Accented", cost: 4 },
      {
        name: "Independent Income",
        level: 2,
        get cost() {
          return (l) => l;
        },
      },
      Skill({
        name: "Area Knowledge",
        description: "Lleddag",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
      Skill({
        name: "Savoir-Faire",
        description: "High Society",
        difficulty: "Easy",
        attribute: "IQ",
        points: 1,
      }),
    ],
  },
];

export default { Occupational, Dramatic, Cultural };

function PerLevel(cost) {
  return adjusted.call(this) * cost;
}

function Skill(def) {
  return {
    ...def,
    get cost() {
      return this.points + this.adjusts?.points;
    },
    get level() {
      return this.cost < 3 ? this.cost : Math.floor(this.cost / 4) + 2;
    },
  };
}

function adjusted() {
  return this.level + this.adjusts?.level;
}
