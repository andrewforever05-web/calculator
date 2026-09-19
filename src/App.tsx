import React from 'react';
import { Calculator } from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-gray-400 mb-6 tracking-wide">
        TypeScript State Machine Calculator
      </h1>
      <Calculator />
    </div>
  );
};

export default App;
