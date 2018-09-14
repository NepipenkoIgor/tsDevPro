import { sum } from './main';

describe('test sum', () => {
  it('sum should return righy value', () => {
    // expect(multi(1, 5))
    //   .toEqual(5);
    // expect(multi(2, 3))
    //   .toEqual(6);
    spyOn(sum, 'getValuePlus2');
    sum.setValue(5);
    expect(sum.getValuePlus2)
      .toHaveBeenCalledWith(8);
  });
});
