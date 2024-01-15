const videos = [
  /* BEGINNER */
  {
    id: 1,
    title: "Fat Burning Beginner Workout",
    category: "beginner",
    tags: "lose-weight",
    videoUrl: "https://www.youtube.com/watch?v=phAI-WY_SpU",
  },
  {
    id: 2,
    title: "HIIT Bauch Workout im Stehen",
    category: "beginner",
    tags: "lose-weight",
    videoUrl: "https://www.youtube.com/watch?v=6sjpvtyPkMw",
  },
  {
    id: 3,
    title: "HIIT Abnehm Workout für Anfänger",
    category: "beginner",
    tags: "lose-weight",
    videoUrl:
      "https://www.youtube.com/watch?v=O1P81Pre7_E&ab_channel=PaulinaWallner",
  },
  {
    id: 4,
    title: "FLACHER BAUCH IN 1 Woche ",
    category: "beginner",
    tags: "tighten",
    videoUrl: "https://www.youtube.com/watch?v=UnGYa8j6uEc",
  },
  {
    id: 5,
    title: "15 Minuten Bauch- & Rücken Workout ",
    category: "advanced",
    tags: "tighten",
    videoUrl: "https://www.youtube.com/watch?v=Z2DrCQOalBs",
  },
  {
    id: 6,
    title: "Ganzkörper Workout für Anfänger",
    category: "beginner",
    tags: "tighten",
    videoUrl:
      "https://www.youtube.com/watch?v=FldGROt1wUo&ab_channel=Ergotopia",
  },
  {
    id: 7,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "beginner",
    tags: "muscle-building",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 8,
    title: "sanftes Pilates für Anfänger ",
    category: "beginner",
    tags: "muscle-building",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 9,
    title: "Ganzkörper Workout für Anfänger ",
    category: "beginner",
    tags: "muscle-building",
    videoUrl:
      "https://www.youtube.com/watch?v=z2UKPpHtO9w&ab_channel=Ergotopia",
  },
  {
    id: 10,
    title: "Ganzkörper BEGINNER Workout",
    category: "beginner",
    tags: "mobility",
    videoUrl:
      "https://www.youtube.com/watch?v=2r2pSjrfx5Y&ab_channel=TinaHalder",
  },
  {
    id: 11,
    title: "Tägliche Übungen für mehr Beweglichkeit",
    category: "beginner",
    tags: "mobility",
    videoUrl: "https://www.youtube.com/watch?v=0AT5t5Bdd8c",
  },
  {
    id: 12,
    title: "Stretch und Release",
    category: "beginner",
    tags: "mobility",
    videoUrl: "https://www.youtube.com/watch?v=Z2DrCQOalBs",
  },
  /* BOTH */
  {
    id: 13,
    title: "HIIT Workout für Anfänger und Fortgeschrittene",
    category: "both",
    tags: "lose-weight",
    videoUrl:
      "https://www.youtube.com/watch?v=i1b6EMkX8ok&list=PLRjhYKDsyuc_4dHcFlXnVa25hs7q3p_FZ&index=5",
  },
  {
    id: 14,
    title: "20 Minuten Abnehm Workout",
    category: "both",
    tags: "lose-weight",
    videoUrl:
      "https://www.youtube.com/watch?v=7JTEggMRRig&ab_channel=Ergotopia",
  },
  {
    id: 15,
    title: "Fitness zum Abnehmen ",
    category: "both",
    tags: "lose-weight",
    videoUrl:
      "https://www.youtube.com/watch?v=BrcvD9pfDKQ&ab_channel=Ergotopia",
  },
  {
    id: 16,
    title: "HIIT WORKOUT ohne Springen",
    category: "both",
    tags: "lose-weight",
    videoUrl:
      "https://www.youtube.com/watch?v=_kYr9s7pPvY&ab_channel=PaulinaWallner",
  },
  {
    id: 17,
    title: "Beine Workout für zuhause",
    category: "both",
    tags: "tighten",
    videoUrl:
      "https://www.youtube.com/watch?v=1W3990VcLyY&ab_channel=TinaHalder",
  },
  {
    id: 18,
    title: "Workout für straffe Arme",
    category: "both",
    tags: "tighten",
    videoUrl: "https://www.youtube.com/watch?v=Z2DrCQOalBs",
  },
  {
    id: 19,
    title: "Straffer Bauch Workout",
    category: "both",
    tags: "tighten",
    videoUrl:
      "https://www.youtube.com/watch?v=jDB5CKY9dQk&ab_channel=Ergotopia",
  },
  {
    id: 20,
    title: "Bauchdecke straffen",
    category: "both",
    tags: "tighten",
    videoUrl:
      "https://www.youtube.com/watch?v=jDB5CKY9dQk&ab_channel=Ergotopia",
  },
  {
    id: 21,
    title: "Bauch Workout für die ganze Familie",
    category: "both",
    tags: "muscle-building",
    videoUrl:
      "https://www.youtube.com/watch?v=4f9JVPvOrVA&ab_channel=Ergotopia",
  },
  {
    id: 22,
    title: "20 Minuten Oberkörper trainieren",
    category: "both",
    tags: "muscle-building",
    videoUrl:
      "https://www.youtube.com/watch?v=XGCArbwzQqY&ab_channel=Ergotopia",
  },
  {
    id: 23,
    title: "Rückentraining für zu Hause",
    category: "both",
    tags: "muscle-building",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 24,
    title: "Beine trainieren",
    category: "both",
    tags: "muscle-building",
    videoUrl:
      "https://www.youtube.com/watch?v=AhejrBdEiH0&ab_channel=Ergotopia",
  },
  {
    id: 25,
    title: "Schultern und Nacken dehnen",
    category: "both",
    tags: "mobility",
    videoUrl:
      "https://www.youtube.com/watch?v=Zk8xPVw6Xb8&ab_channel=Ergotopia",
  },
  {
    id: 26,
    title: "15 Minuten Yoga | Hüfte dehnen",
    category: "both",
    tags: "mobility",
    videoUrl: "https://www.youtube.com/watch?v=kEapk0aXCzM",
  },
  {
    id: 27,
    title: "Pilates & Mobility auf der Matte",
    category: "both",
    tags: "mobility",
    videoUrl:
      "https://www.youtube.com/watch?v=K46ObV_fRBg&ab_channel=Lena%27sHealthLab",
  },
  {
    id: 28,
    title: "Everyday Pilates",
    category: "both",
    tags: "mobility",
    videoUrl:
      "https://www.youtube.com/watch?v=m5N6OmXZ5Vk&ab_channel=Lena%27sHealthLab",
  },
  /* ADVANCED */
  {
    id: 29,
    title: "Fat Burning HIIT Workout",
    category: "advanced",
    tags: "lose-weight",
    videoUrl:
      "https://www.youtube.com/watch?v=8ETavemmtpI&ab_channel=HappyAndFitPilates",
  },
  {
    id: 30,
    title: "7-Minute Workout | HIIT | Fitness & Kraftsport",
    category: "advanced",
    tags: "lose-weight",
    videoUrl: "https://www.youtube.com/watch?v=buvLg-PNz1Y",
  },
  {
    id: 31,
    title: "Abnehmen mit Pilates",
    category: "advanced",
    tags: "lose-weight",
    videoUrl:
      "https://www.youtube.com/watch?v=8ETavemmtpI&ab_channel=HappyAndFitPilates",
  },
  {
    id: 32,
    title: "Intensives Bauch Workout",
    category: "advanced",
    tags: "tighten",
    videoUrl:
      "https://www.youtube.com/watch?v=naJBmoiJEvs&ab_channel=Ergotopia",
  },
  {
    id: 33,
    title: "Pilates Quickie für Fortgeschrittene",
    category: "advanced",
    tags: "tighten",
    videoUrl:
      "https://www.youtube.com/watch?v=eaz8ToxxGSs&ab_channel=Lena%27sHealthLab",
  },
  {
    id: 34,
    title: "Pilates für Fortgeschrittene",
    category: "advanced",
    tags: "tighten",
    videoUrl:
      "https://www.youtube.com/watch?v=0PplQTzytK0&t=18s&ab_channel=Lena%27sHealthLab",
  },
  {
    id: 35,
    title: "Hüfte richtig mobilisieren und dehnen",
    category: "advanced",
    tags: "mobility",
    videoUrl: "https://www.youtube.com/watch?v=UzHMHkS9CAU",
  },
  {
    id: 36,
    title: "Mobility-Training für Fortgeschrittene",
    category: "advanced",
    tags: "mobility",
    videoUrl:
      "https://www.youtube.com/watch?v=ksZrOp_Ow_E&ab_channel=GabiFastner",
  },
  {
    id: 37,
    title: "Für mehr Kraft und Beweglichkeit",
    category: "advanced",
    tags: "mobility",
    videoUrl:
      "https://www.youtube.com/watch?v=U8lyPrDQ1oI&ab_channel=GabiFastner",
  },
  {
    id: 38,
    title: "Ganzkörper-Workout für Fortgeschrittene",
    category: "advanced",
    tags: "muscle-building",
    videoUrl: "https://www.youtube.com/watch?v=sJLKd_FcMfs",
  },
  {
    id: 39,
    title: "30 Min. Ganzkörper Workout für Zuhause",
    category: "advanced",
    tags: "muscle-building",
    videoUrl:
      "https://www.youtube.com/watch?v=C19KinNxrBs&ab_channel=PaulinaWallner",
  },
  {
    id: 40,
    title: "Full Body Workout für effizienten Muskelaufbau",
    category: "advanced",
    tags: "muscle-building",
    videoUrl:
      "https://www.youtube.com/watch?v=uHmXQNV0AcA&ab_channel=bodyboom-FULLFITNESSWORKOUTS",
  },
];

export default videos;
