import { TaxCalculatorPipe } from './tax-calculator.pipe';

describe('TaxCalculatorPipe', () => {
  it('create an instance', () => {
    const pipe = new TaxCalculatorPipe();
    expect(pipe).toBeTruthy();
  });
});
