import React, { useReducer } from 'react';
import { calculatorReducer, initialState } from '../reducers/calculatorReducer';
import { CalculatorButton } from './CalculatorButton';

export const Calculator: React.FC = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <div className="w-full max-w-sm bg-gray-900 text-white rounded-2xl p-6 shadow-2xl border border-gray-800">
      {/* Pantalla de Visualización */}
      <div className="flex flex-col items-end justify-end mb-6 p-4 bg-gray-950 rounded-xl min-h-[100px] break-all">
        <div className="text-gray-500 text-sm h-6">
          {state.previousValue} {state.operation}
        </div>
        <div className="text-4xl font-bold tracking-wide mt-1">
          {state.currentValue}
        </div>
      </div>

      {/* Teclado */}
      <div className="grid grid-cols-4 gap-3">
        <CalculatorButton label="AC" onClick={() => dispatch({ type: 'CLEAR' })} className="bg-red-500/20 text-red-400 hover:bg-red-500/30 col-span-2" />
        <CalculatorButton label="⌫" onClick={() => dispatch({ type: 'DELETE_DIGIT' })} className="bg-gray-800 text-gray-300 hover:bg-gray-700" />
        <CalculatorButton label="/" onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: '/' })} className="bg-orange-500 text-white hover:bg-orange-600" />

        <CalculatorButton label="7" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '7' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="8" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '8' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="9" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '9' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="*" onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: '*' })} className="bg-orange-500 text-white hover:bg-orange-600" />

        <CalculatorButton label="4" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '4' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="5" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '5' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="6" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '6' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="-" onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: '-' })} className="bg-orange-500 text-white hover:bg-orange-600" />

        <CalculatorButton label="1" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '1' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="2" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '2' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="3" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '3' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="+" onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: '+' })} className="bg-orange-500 text-white hover:bg-orange-600" />

        <CalculatorButton label="0" onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '0' })} className="bg-gray-800 hover:bg-gray-700 col-span-2" />
        <CalculatorButton label="." onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '.' })} className="bg-gray-800 hover:bg-gray-700" />
        <CalculatorButton label="=" onClick={() => dispatch({ type: 'EVALUATE' })} className="bg-green-600 text-white hover:bg-green-700" />
      </div>
    </div>
  );
};
