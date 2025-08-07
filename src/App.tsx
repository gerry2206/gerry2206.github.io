import React, { useState } from 'react';
import { workouts, WorkoutDay } from './data/workouts';
import './App.css';

function App() {
  const [selectedDay, setSelectedDay] = useState(1);

  const selectedWorkout = workouts.find(workout => workout.day === selectedDay);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            6-Day Home Workout Plan
          </h1>
          <p className="text-xl text-gray-600">
            Belly Fat Loss & Fitness
          </p>
        </header>

        {/* Day Selection Buttons */}
        <div className="mb-8">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {workouts.map((workout) => (
              <button
                key={workout.day}
                onClick={() => setSelectedDay(workout.day)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedDay === workout.day
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                Day {workout.day}
              </button>
            ))}
          </div>
        </div>

        {/* Workout Content */}
        {selectedWorkout && (
          <div className="max-w-4xl mx-auto">
            {/* Workout Header */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Day {selectedWorkout.day} – {selectedWorkout.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {selectedWorkout.description}
              </p>
              {selectedWorkout.rounds && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">
                    Rounds: {selectedWorkout.rounds}
                  </p>
                  {selectedWorkout.restTime && (
                    <p className="text-blue-700">
                      Rest: {selectedWorkout.restTime}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Exercises */}
            <div className="grid gap-6 mb-8">
              {selectedWorkout.exercises.map((exercise, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Exercise Image */}
                    <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                      <img
                        src={exercise.gif}
                        alt={exercise.name}
                        className="w-full h-48 md:h-64 object-cover rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Exercise+Demo';
                        }}
                      />
                    </div>
                    
                    {/* Exercise Details */}
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {index + 1}. {exercise.name}
                      </h3>
                      
                      <div className="space-y-3">
                        {exercise.reps && (
                          <div className="flex items-center">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                              Reps
                            </span>
                            <span className="text-lg font-medium text-gray-700">
                              {exercise.reps} {exercise.description && exercise.description}
                            </span>
                          </div>
                        )}
                        
                        {exercise.time && (
                          <div className="flex items-center">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                              Time
                            </span>
                            <span className="text-lg font-medium text-gray-700">
                              {exercise.time}
                            </span>
                          </div>
                        )}
                        
                        {exercise.sets && (
                          <div className="flex items-center">
                            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                              Sets
                            </span>
                            <span className="text-lg font-medium text-gray-700">
                              {exercise.sets}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Warm-up and Cool-down */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  🔥 Warm-Up
                </h3>
                <p className="text-green-700 text-lg">
                  {selectedWorkout.warmUp}
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  ❄️ Cool-Down
                </h3>
                <p className="text-blue-700 text-lg">
                  {selectedWorkout.coolDown}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
