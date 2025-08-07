# 6-Day Home Workout Plan – Belly Fat Loss & Fitness

A responsive React website built with TypeScript and Tailwind CSS that provides a comprehensive 6-day home workout plan designed for belly fat loss and overall fitness.

## Features

- **6-Day Workout Plan**: Complete workout routines for each day
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Day Selection**: Horizontally scrollable day buttons
- **Exercise Cards**: Each exercise includes name, demo GIF, and sets/reps
- **Warm-up & Cool-down**: Instructions for each workout day
- **Modern UI**: Clean, beautiful interface with Tailwind CSS

## Workout Plan Overview

### Day 1 – Full Body Circuit
- 3 rounds of circuit training
- Focus on full body movements
- 1-minute rest between rounds

### Day 2 – Core + Cardio HIIT
- 4 rounds of high-intensity intervals
- 30 seconds work / 15 seconds rest
- Core and cardio focused

### Day 3 – Lower Body Strength
- 3 sets of strength exercises
- 60-90 seconds rest between sets
- Lower body focused

### Day 4 – Active Recovery
- Light intensity workout
- 3 rounds of gentle movements
- Focus on recovery and mobility

### Day 5 – Upper Body + Core Supersets
- 3 supersets targeting upper body and core
- 1-minute rest between sets
- Progressive difficulty

### Day 6 – Endurance AMRAP
- 15-minute AMRAP (As Many Rounds As Possible)
- Full body endurance challenge
- Complete workout in one session

## Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Responsive Design** for mobile-first approach
- **Modern JavaScript** features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd exercise-plan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── data/
│   └── workouts.ts          # Workout data and TypeScript interfaces
├── App.tsx                  # Main application component
├── App.css                  # Custom CSS styles
└── index.css               # Tailwind CSS imports
```

## Features

- **Day Selection**: Click on any day button to view that day's workout
- **Exercise Details**: Each exercise shows name, demo GIF, and workout parameters
- **Responsive Layout**: Works perfectly on mobile, tablet, and desktop
- **Error Handling**: Fallback images for missing exercise GIFs
- **Smooth Animations**: CSS transitions for better user experience

## Customization

### Adding New Exercises

To add new exercises, edit the `src/data/workouts.ts` file:

```typescript
{
  name: "Exercise Name",
  reps: 10,           // For rep-based exercises
  time: "30 sec",     // For time-based exercises
  gif: "/gifs/exercise.gif"
}
```

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file
2. Adding custom CSS classes in `src/App.css`
3. Updating the component styles in `src/App.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on the GitHub repository.
