import { sum } from './index';
describe('sum', () => {
  it('should add input numbers', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
