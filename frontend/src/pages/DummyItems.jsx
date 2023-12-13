const DummyItems = [
  {
    id: 1,
    title:
      "Yoga für Anfänger: Entspannung und Flexibilität mit Trainer Sascha Huber",
    description:
      "Dieses Anfängerfreundliche Yoga-Video mit Trainer Sascha Huber bietet eine perfekte Kombination aus Entspannung und Flexibilität. Starte deine Yoga-Reise heute!",
  },
  {
    id: 2,
    title:
      "HIIT-Training: Intensive Cardio-Übungen mit Trainerin Marie Steffen",
    description:
      "Erlebe ein energiegeladenes HIIT-Training, um deine Cardio-Fitness zu verbessern. Trainerin Marie Steffen leitet dich durch effektive Übungen für ein intensives Training.",
  },
  {
    id: 3,
    title: "Krafttraining ohne Geräte: Ganzkörperübungen für zuhause",
    description:
      "Trainiere deinen gesamten Körper ohne spezielle Geräte! Dieses Anfängerfreundliche Krafttraining ohne Geräte bietet effektive Übungen für Muskelaufbau und Straffung.",
  },
  {
    id: 4,
    title:
      "Bauchtraining für Fortgeschrittene: Sixpack-Übungen mit Trainer Ergotioua",
    description:
      "Intensives Bauchtraining für Fortgeschrittene! Trainer Ergotioua zeigt dir anspruchsvolle Sixpack-Übungen, um deine Bauchmuskeln zu definieren und zu stärken.",
  },
  {
    id: 5,
    title: "Pilates für Rückenstabilität: Übungen mit Pilates-Ball und Tube",
    description:
      "Verbessere deine Rückenstabilität mit diesem Pilates-Video! Nutze einen Pilates-Ball und ein Tube für effektive Übungen, um Rückenschmerzen vorzubeugen.",
  },
  {
    id: 6,
    title:
      "Tanzen zum Abnehmen: Cardio-Tanzworkout mit Wasserflaschen-Gewichten",
    description:
      "Tanzen als unterhaltsamer Weg zum Abnehmen! Dieses Cardio-Tanzworkout mit Wasserflaschen-Gewichten macht Spaß und verbrennt Kalorien effektiv.",
  },
  {
    id: 7,
    title:
      "Entspannungstraining: Achtsamkeit mit Trainerin Heimat Krankenkasse",
    description:
      "Finde innere Ruhe mit diesem Entspannungstraining! Trainerin Heimat Krankenkasse führt dich durch Achtsamkeitsübungen, um Stress abzubauen und zu entspannen.",
  },
  {
    id: 8,
    title: "Beckenbodentraining für Frauen: Figurtraining mit Bootyband",
    description:
      "Stärke deinen Beckenboden mit effektivem Figurtraining! Verwende ein Bootyband, um gezielt den Beckenboden zu trainieren und die Figur zu formen.",
  },
  {
    id: 9,
    title: "Yoga für Schwangere: Sanfte Übungen für werdende Mütter",
    description:
      "Genieße eine entspannende Yoga-Session während der Schwangerschaft! Sanfte Übungen für werdende Mütter, um Flexibilität zu erhalten und den Körper zu stärken.",
  },
  {
    id: 10,
    title: "Cardio-Kickboxen: Fettverbrennung mit Kampfsportelementen",
    description:
      "Bringe Schwung in dein Cardio-Training mit Cardio-Kickboxen! Verbrenne Fett und verbessere deine Ausdauer mit dynamischen Kampfsportelementen.",
  },
  {
    id: 11,
    title: "Rückenstärkung mit Hula Hoop-Reifen: Ganzkörpertraining",
    description:
      "Stärke deinen Rücken mit Hula Hoop-Reifen! Dieses Ganzkörpertraining mit dem Hula Hoop-Reifen fördert die Stabilität und verbessert die Rückenmuskulatur.",
  },
  {
    id: 12,
    title: "Effektives Stretching: Flexibilität mit Yoga Gurt",
    description:
      "Erreiche maximale Flexibilität mit effektivem Stretching! Nutze einen Yoga Gurt, um deine Dehnübungen zu intensivieren und die Muskulatur zu entspannen.",
  },
  {
    id: 13,
    title:
      "Atemübungen für Motivation: Energie tanken mit Trainerin Marie Steffen",
    description:
      "Tanken Sie neue Energie mit Atemübungen für Motivation! Trainerin Marie Steffen leitet Sie durch Atemtechniken, um Ihre Motivation zu steigern und Stress abzubauen.",
  },
  {
    id: 14,
    title: "Pilates mit Matte: Ganzkörperkräftigung für Fortgeschrittene",
    description:
      "Erreichen Sie eine ganzheitliche Kräftigung mit Pilates auf der Matte! Dieses Fortgeschrittenen-Training mit Trainer Ergotioua bietet anspruchsvolle Übungen für Ihren gesamten Körper.",
  },
  {
    id: 15,
    title: "Bauch, Beine, Po mit Theraband: Gezieltes Figurtraining",
    description:
      "Formen Sie Bauch, Beine und Po mit gezieltem Training! Verwenden Sie ein Theraband, um Ihre Muskeln zu stärken und die Figur effektiv zu trainieren.",
  },
  {
    id: 16,
    title: "Rückenstärkung mit Resistance Band: Ganzkörpertraining",
    description:
      "Stärken Sie Ihren Rücken mit dem Resistance Band! Dieses Ganzkörpertraining bietet effektive Übungen, um die Rückenmuskulatur zu kräftigen und die Haltung zu verbessern.",
  },
  {
    id: 17,
    title: "Tanzen für die Seele: Entspannung mit Lateinamerikanischem Tanz",
    description:
      "Tauchen Sie ein in die Welt des Lateinamerikanischen Tanzes! Dieses Tanzvideo bietet nicht nur körperliche Aktivität, sondern auch Entspannung und Freude für die Seele.",
  },
  {
    id: 18,
    title: "Beckenbodentraining mit Hula Hoop-Reifen: Für Frauen jeden Alters",
    description:
      "Stärken Sie Ihren Beckenboden mit dem Hula Hoop-Reifen! Dieses Training ist für Frauen jeden Alters geeignet und fördert die Beckenbodenmuskulatur für mehr Stabilität.",
  },
  {
    id: 19,
    title:
      "Motivierendes Cardio: Tanzworkout mit Trainerin Heimat Krankenkasse",
    description:
      "Tanken Sie Motivation mit diesem mitreißenden Cardio-Tanzworkout! Trainerin Heimat Krankenkasse führt Sie durch energiegeladene Tanzschritte für ein effektives Cardio-Training.",
  },
  {
    id: 20,
    title: "Yoga für die Mittagspause: Kurze Übungen am Schreibtisch",
    description:
      "Integrieren Sie Yoga in Ihre Mittagspause! Diese kurzen Übungen am Schreibtisch helfen, Spannungen zu lösen, die Konzentration zu steigern und neue Energie zu tanken.",
  },
  {
    id: 21,
    title: "Sixpack in 30 Tagen: Intensives Bauchtraining mit Kurzhanteln",
    description:
      "Holen Sie sich ein Sixpack in nur 30 Tagen! Dieses intensive Bauchtraining mit Kurzhanteln bietet gezielte Übungen, um die Bauchmuskeln zu formen und zu stärken.",
  },
  {
    id: 22,
    title: "Entspannung durch Meditation: Achtsamkeitspraxis für Anfänger",
    description:
      "Finden Sie Ruhe und Entspannung durch Meditation! Dieses Video bietet eine einfache Achtsamkeitspraxis für Anfänger, um den Geist zu beruhigen und Stress abzubauen.",
  },
  {
    id: 23,
    title: "Faszientraining mit Matte: Geschmeidigkeit für den ganzen Körper",
    description:
      "Verbessern Sie Ihre Geschmeidigkeit mit Faszientraining auf der Matte! Dieses Video bietet effektive Übungen, um Verspannungen zu lösen und die Flexibilität zu steigern.",
  },
  {
    id: 24,
    title: "Ganzkörperkräftigung mit Tube: Fortgeschrittenes Training",
    description:
      "Erleben Sie ein fortgeschrittenes Ganzkörpertraining mit dem Tube! Trainer Ergotioua zeigt anspruchsvolle Übungen, um die Muskulatur zu kräftigen und die Körperstabilität zu verbessern.",
  },
  {
    id: 25,
    title:
      "Power-Workout mit Medball: Intensives Training für Fortgeschrittene",
    description:
      "Steigern Sie Ihre Kraft mit einem intensiven Power-Workout! Dieses fortgeschrittene Training mit Medball bietet anspruchsvolle Übungen, um Muskeln zu stärken und die Ausdauer zu verbessern.",
  },
  {
    id: 26,
    title: "Yoga für einen starken Rücken: Rückenmuskulatur gezielt stärken",
    description:
      "Stärken Sie Ihre Rückenmuskulatur mit diesem gezielten Yoga-Training! Trainerin Sascha Huber führt Sie durch Übungen, um Rückenschmerzen vorzubeugen und die Haltung zu verbessern.",
  },
  {
    id: 27,
    title:
      "Cardio mit Spin Bike: Intervalltraining für maximale Fettverbrennung",
    description:
      "Erleben Sie maximale Fettverbrennung mit Cardio-Intervalltraining! Dieses Video mit dem Spin Bike bietet effektive Übungen, um Ausdauer aufzubauen und Kalorien zu verbrennen.",
  },
  {
    id: 28,
    title: "Pilates-Ball für Core-Stärkung: Fortgeschrittenes Training",
    description:
      "Stärken Sie Ihren Core mit dem Pilates-Ball! Dieses fortgeschrittene Training bietet anspruchsvolle Pilates-Übungen, um die Körpermitte zu kräftigen und die Stabilität zu verbessern.",
  },
  {
    id: 29,
    title: "Tanz dich fit: Dynamisches Cardio-Tanzworkout mit Wasserflaschen",
    description:
      "Beweg dich zu motivierenden Beats und werde fit! Dieses dynamische Cardio-Tanzworkout mit Wasserflaschen bringt Spaß in deine Trainingsroutine und fördert die Ausdauer.",
  },
  {
    id: 30,
    title: "Haltungstraining mit Stuhl: Übungen für eine aufrechte Haltung",
    description:
      "Verbessern Sie Ihre Haltung mit diesem Training am Stuhl! Einfache Übungen helfen, Rücken- und Nackenschmerzen zu reduzieren und eine aufrechte Haltung zu fördern.",
  },
];

export default DummyItems;
