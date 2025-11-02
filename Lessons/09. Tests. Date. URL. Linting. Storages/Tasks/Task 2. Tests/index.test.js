import getIsFirstArrayCooler from './index';

describe('c.8.2 getIsFirstArrayCooler', () => {
    it('c.8.2.1 returns false if arrays have different lengths', () => {
        expect(getIsFirstArrayCooler([1, 2], [1])).toBe(false);
        expect(getIsFirstArrayCooler([], [1])).toBe(false);
    });

    it('c.8.2.2 returns false if first array is not cooler (more smaller elements)', () => {
        expect(getIsFirstArrayCooler([1, 2, 3], [3, 2, 4])).toBe(false);
        expect(getIsFirstArrayCooler([0, 0, 0], [1, 1, 1])).toBe(false);
    });

    it('c.8.2.3 returns true if first array is cooler (more bigger elements)', () => {
        expect(getIsFirstArrayCooler([5, 6, 7], [1, 2, 3])).toBe(true);
        expect(getIsFirstArrayCooler([10, 20, 30], [5, 10, 15])).toBe(true);
    });

    it('c.8.2.4 returns false if arrays are equal (same elements)', () => {
        expect(getIsFirstArrayCooler([1, 2, 3], [1, 2, 3])).toBe(false);
    });

    it('c.8.2.5 returns false if first array has equal number of bigger and smaller elements', () => {
        expect(getIsFirstArrayCooler([1, 3, 2], [2, 1, 3])).toBe(false);
    });

    it('c.8.2.6 works with empty arrays returning false', () => {
        expect(getIsFirstArrayCooler([], [])).toBe(false);
    });
});
