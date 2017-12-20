import {inputCalculationValue} from '../src/actions/calculatorActions';

describe('Action Creators -- calculatorActions', () => {
  it('inputCalculationValue는', () => {
    const input = inputCalculationValue('5');
    expect(input).toEqual({type: 'INPUT_CALCULATION_VALUE', value: '5'});
  });
});