const videos = [
  /* BEGINNER */
  {
    id: 1,
    title: "Fat Burning Beginner Workout",
    category: "beginner",
    tags: "abnehmen",
    videoUrl: "https://www.youtube.com/watch?v=phAI-WY_SpU",
  },
  {
    id: 2,
    title: "Fat Burning HIIT Workout",
    category: "advanced",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZO9IG-6SYJA",
  },
  {
    id: 3,
    title: "7 Minute Workout | HIIT | Fitness & Kraftsport",
    category: "advanced",
    videoUrl: "https://www.youtube.com/watch?v=buvLg-PNz1Y",
  },
  {
    id: 4,
    title: "Beine Workout für Zuhause",
    category: "advanced",
    videoUrl: "https://www.youtube.com/watch?v=1W3990VcLyY",
  },
  {
    id: 5,
    title: "Workout für straffe Arme",
    category: "advanced",
    videoUrl: "https://www.youtube.com/watch?v=Z2DrCQOalBs",
  },
  {
    id: 6,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "beginner",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 7,
    title: "Sanftes Pilates für Anfänger",
    category: "beginner",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  {
    id: 8,
    title: "Fat Burning Beginner Workout",
    category: "beginner",
    tags: "abnehmen",
    videoUrl: "https://www.youtube.com/watch?v=phAI-WY_SpU",
  },
  {
    id: 9,
    title: "Fat Burning HIIT Workout",
    category: "advanced",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZO9IG-6SYJA",
  },
  {
    id: 10,
    title: "7 Minute Workout | HIIT | Fitness & Kraftsport",
    category: "advanced",
    videoUrl: "https://www.youtube.com/watch?v=buvLg-PNz1Y",
  },
  {
    id: 11,
    title: "Beine Workout für Zuhause",
    category: "advanced",
    videoUrl: "https://www.youtube.com/watch?v=1W3990VcLyY",
  },
  {
    id: 12,
    title: "Workout für straffe Arme",
    category: "advanced",
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
    title: "Sanftes Pilates für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  {
    id: 15,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 16,
    title: "Sanftes Pilates für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  {
    id: 17,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 18,
    title: "Sanftes Pilates für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  {
    id: 19,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 20,
    title: "Sanftes Pilates für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  {
    id: 2,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 22,
    title: "Sanftes Pilates für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  {
    id: 23,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 24,
    title: "Sanftes Pilates für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  {
    id: 25,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 26,
    title: "Sanftes Pilates für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  {
    id: 27,
    title: "7 Minuten Bauchmuskeltraining für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=0N73ubE2vgw",
  },
  {
    id: 28,
    title: "Sanftes Pilates für Anfänger",
    category: "both",
    tags: "",
    videoUrl: "https://www.youtube.com/watch?v=ZD6qHzHWQ7c",
  },
  /* ADVANCED */
];
