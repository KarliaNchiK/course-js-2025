import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it('09.c.2 first array is cooler than second', () => {
        let firstArr = [1, 1, 1];
        let secondArr = [0, 2, 0];
        expect(getIsFirstArrayCooler(firstArr, secondArr)).toBe(true);
    })
    it('09.c.2 second array is cooler than first', () => {
        let firstArr = [0, 3, 1];
        let secondArr = [0, 4, 2];
        expect(getIsFirstArrayCooler(firstArr, secondArr)).toBe(false);
    })
    it('09.c.2 first and second are equally cool', () => {
        let firstArr = [1, 2, 1, 2];
        let secondArr = [2, 1, 2, 1];
        expect(getIsFirstArrayCooler(firstArr, secondArr)).toBe(false);
    })
    it('09.c.2 arrays have different lenght', () => {
        let firstArr = [1];
        let secondArr = [1, 1];
        expect(getIsFirstArrayCooler(firstArr, secondArr)).toBe(false);
    })
});
