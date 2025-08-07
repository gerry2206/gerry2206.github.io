export interface Exercise {
  name: string;
  gif: string;
  sets?: number;
  reps?: number;
  time?: string;
  description?: string;
}

export interface WorkoutDay {
  day: number;
  title: string;
  description: string;
  rounds?: number;
  restTime?: string;
  exercises: Exercise[];
  warmUp: string;
  coolDown: string;
}

export const workouts: WorkoutDay[] = [
  {
    day: 1,
    title: "Full Body Circuit",
    description: "Repeat 3 Rounds – Rest: 1 min after each round",
    rounds: 3,
    restTime: "1 min after each round",
    exercises: [
      { name: "Pushups", reps: 12, gif: "/gifs/pushup.gif" },
      { name: "Squats", reps: 20, gif: "/gifs/squat.gif" },
      { name: "Crunches", reps: 20, gif: "/gifs/crunch.gif" },
      { name: "Jumping Jacks", time: "30 sec", gif: "/gifs/jumpingjacks.gif" },
      { name: "Lunges (each leg)", reps: 10, gif: "/gifs/lunges.gif" },
      { name: "High Knees", time: "30 sec", gif: "/gifs/highknees.gif" },
      { name: "Plank", time: "30 sec", gif: "/gifs/plank.gif" }
    ],
    warmUp: "Jumping Jacks, Arm Circles, Leg Swings – 5 mins",
    coolDown: "Daily Cool-Down (5–10 mins): Forward Fold • Quad Stretch • Shoulder Stretch • Cat-Cow Stretch • Deep Breathing"
  },
  {
    day: 2,
    title: "Core + Cardio HIIT",
    description: "4 Rounds – 30 sec work / 15 sec rest per move – Rest: 1 min between rounds",
    rounds: 4,
    restTime: "1 min between rounds",
    exercises: [
      { name: "Mountain Climbers", time: "30 sec", gif: "/gifs/mountainclimbers.gif" },
      { name: "Bicycle Crunches", time: "30 sec", gif: "/gifs/bicyclecrunches.gif" },
      { name: "Burpees", time: "30 sec", gif: "/gifs/burpees.gif" },
      { name: "High Knees", time: "30 sec", gif: "/gifs/highknees.gif" },
      { name: "Plank to Shoulder Tap", time: "30 sec", gif: "/gifs/planktaps.gif" }
    ],
    warmUp: "Light Jog + Dynamic Stretch – 5 mins",
    coolDown: "Daily Cool-Down (5–10 mins): Forward Fold • Quad Stretch • Shoulder Stretch • Cat-Cow Stretch • Deep Breathing"
  },
  {
    day: 3,
    title: "Lower Body Strength",
    description: "Repeat 3 Sets – Rest: 60–90 sec between sets",
    rounds: 3,
    restTime: "60–90 sec between sets",
    exercises: [
      { name: "Squats", reps: 20, gif: "/gifs/squat.gif" },
      { name: "Lunges", reps: 10, description: "per leg", gif: "/gifs/lunges.gif" },
      { name: "Running Lunges", reps: 10, description: "per leg", gif: "/gifs/runninglunges.gif" },
      { name: "Butt Kicks", time: "30 sec", gif: "/gifs/buttkicks.gif" },
      { name: "Glute Bridges", reps: 15, gif: "/gifs/glutebridges.gif" }
    ],
    warmUp: "High Knees, Butt Kicks – 5 mins",
    coolDown: "Daily Cool-Down (5–10 mins): Forward Fold • Quad Stretch • Shoulder Stretch • Cat-Cow Stretch • Deep Breathing"
  },
  {
    day: 4,
    title: "Active Recovery",
    description: "Light Intensity – 3 Rounds",
    rounds: 3,
    exercises: [
      { name: "Jumping Jacks", time: "1 min", gif: "/gifs/jumpingjacks.gif" },
      { name: "High Knees", time: "1 min", gif: "/gifs/highknees.gif" },
      { name: "Light Squats", reps: 15, gif: "/gifs/squat.gif" },
      { name: "Plank", time: "45 sec", gif: "/gifs/plank.gif" },
      { name: "Stretching", time: "5 mins", gif: "/gifs/stretching.gif" }
    ],
    warmUp: "Light walking and gentle movements",
    coolDown: "Daily Cool-Down (5–10 mins): Forward Fold • Quad Stretch • Shoulder Stretch • Cat-Cow Stretch • Deep Breathing"
  },
  {
    day: 5,
    title: "Upper Body + Core Supersets",
    description: "Each Superset – 3 Sets – Rest: 1 min between sets",
    rounds: 3,
    restTime: "1 min between sets",
    exercises: [
      { name: "Pushups", reps: 15, gif: "/gifs/pushup.gif" },
      { name: "Crunches", reps: 20, gif: "/gifs/crunch.gif" },
      { name: "Pushups (knee optional)", reps: 10, gif: "/gifs/pushup.gif" },
      { name: "Burpees", reps: 10, gif: "/gifs/burpees.gif" },
      { name: "Mountain Climbers", time: "30 sec", gif: "/gifs/mountainclimbers.gif" },
      { name: "Plank", time: "1 min", gif: "/gifs/plank.gif" }
    ],
    warmUp: "Arm swings, Shoulder rolls – 5 mins",
    coolDown: "Daily Cool-Down (5–10 mins): Forward Fold • Quad Stretch • Shoulder Stretch • Cat-Cow Stretch • Deep Breathing"
  },
  {
    day: 6,
    title: "Endurance AMRAP",
    description: "As Many Rounds As Possible in 15 min",
    exercises: [
      { name: "Pushups", reps: 10, gif: "/gifs/pushup.gif" },
      { name: "Squats", reps: 20, gif: "/gifs/squat.gif" },
      { name: "Bicycle Crunches", reps: 15, gif: "/gifs/bicyclecrunches.gif" },
      { name: "Lunges", reps: 10, description: "per leg", gif: "/gifs/lunges.gif" },
      { name: "Burpees", reps: 10, gif: "/gifs/burpees.gif" },
      { name: "High Knees", time: "30 sec", gif: "/gifs/highknees.gif" },
      { name: "Plank", time: "30 sec", gif: "/gifs/plank.gif" }
    ],
    warmUp: "Full body warm-up – 5 mins",
    coolDown: "Daily Cool-Down (5–10 mins): Forward Fold • Quad Stretch • Shoulder Stretch • Cat-Cow Stretch • Deep Breathing"
  }
]; 