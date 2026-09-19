export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: string | null;
  overwrite: boolean;
}

export type CalculatorAction =
  | { type: 'ADD_DIGIT'; payload: string }
  | { type: 'CHOOSE_OPERATION'; payload: string }
  | { type: 'CLEAR' }
  | { type: 'DELETE_DIGIT' }
  | { type: 'EVALUATE' };

export const initialState: CalculatorState = {
  currentValue: '0',
  previousValue: '',
  operation: null,
  overwrite: false,
};

function calculate(state: CalculatorState): string {
  const prev = parseFloat(state.previousValue);
  const current = parseFloat(state.currentValue);
  if (isNaN(prev) || isNaN(current)) return '';

  let result = 0;
  switch (state.operation) {
    case '+': result = prev + current; break;
    case '-': result = prev - current; break;
    case '*': result = prev * current; break;
    case '/': result = current === 0 ? 0 : prev / current; break;
    default: return '';
  }
  return result.toString();
}

export function calculatorReducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (state.overwrite) {
        return { ...state, currentValue: action.payload, overwrite: false };
      }
      if (action.payload === '0' && state.currentValue === '0') return state;
      if (action.payload === '.' && state.currentValue.includes('.')) return state;
      if (state.currentValue === '0' && action.payload !== '.') {
        return { ...state, currentValue: action.payload };
      }
      return { ...state, currentValue: `${state.currentValue}${action.payload}` };

    case 'CHOOSE_OPERATION':
      if (state.currentValue === '0' && state.previousValue === '') return state;
      if (state.previousValue === '') {
        return {
          ...state,
          operation: action.payload,
          previousValue: state.currentValue,
          currentValue: '0',
        };
      }
      if (state.currentValue === '0') {
        return { ...state, operation: action.payload };
      }
      return {
        ...state,
        previousValue: calculate(state),
        operation: action.payload,
        currentValue: '0',
      };

    case 'CLEAR':
      return initialState;

    case 'DELETE_DIGIT':
      if (state.overwrite) return { ...state, currentValue: '0', overwrite: false };
      if (state.currentValue.length === 1) return { ...state, currentValue: '0' };
      return { ...state, currentValue: state.currentValue.slice(0, -1) };

    case 'EVALUATE':
      if (!state.operation || state.previousValue === '' || state.currentValue === '0') return state;
      return {
        ...state,
        overwrite: true,
        previousValue: '',
        operation: null,
        currentValue: calculate(state),
      };

    default:
      return state;
  }
}
