import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it ('09.c.2.1 second one is cooler', () => {
        const testArrOne = [1, 1, 1, 1];
        const testArrTwo = [2, 2, 2, 2];
        expect(getIsFirstArrayCooler(testArrOne, testArrTwo)).toBe(false);
    });

    it ('09.c.2.1 first one is cooler', () => {
        const testArrOne = [2, 2, 2, 2];
        const testArrTwo = [1, 1, 1, 1];
        expect(getIsFirstArrayCooler(testArrOne, testArrTwo)).toBe(true);
    });

    it ('09.c.2.1 they are same', () => {
        const testArrOne = [1, 1, 1, 1];
        const testArrTwo = [1, 1, 1, 1];
        expect(getIsFirstArrayCooler(testArrOne, testArrTwo)).toBe(false);
    });
});
