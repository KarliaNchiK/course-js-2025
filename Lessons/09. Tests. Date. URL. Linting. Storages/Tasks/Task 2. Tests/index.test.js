/**
 * @jest-environment jsdom
 */
import getIsFirstArrayCooler from './index';
describe('09.c.2 getIsFirstArrayCooler', () => {
    it('09.c.2.1 different arrays length', () => {
        expect(false).toBe(getIsFirstArrayCooler([1, 2, 3, 4, 5], [5, 3, 4, 2]));
    });

    it('09.c.2.2 firstArray more numbers', () => {
        expect(true).toBe(getIsFirstArrayCooler([5, 6, 7, 8, 9], [1, 2, 3, 4, 5]));
    });
    it('09.c.2.3 SecondArray more numbers', () => {
        expect(false).toBe(getIsFirstArrayCooler([5, 6, 7, 8, 9], [10, 6, 7, 12, 13]));
    });
});
