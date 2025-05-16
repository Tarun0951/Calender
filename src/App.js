import React from 'react';
import Calendar from './Components/Calendar';
import './App.css';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Calendar Application
          </h1>
          <p className="text-gray-600">
            Turn chaos into calendar clarity.
          </p>
        </header>
        
        <main>
          <Calendar />
        </main>
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          
        </footer>
      </div>
    </div>
  );
}

export default App;