import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    const coolArray = [6, 7, 1, 9];
    const alsoCoolArray = [5, 8, 0, 10];
    const notCoolArray = [0, 1, 2, 3];
    const irregularArray = [1, 2];

    it('09.c.2 check if lengths are different', () => {
        const result = getIsFirstArrayCooler(coolArray, irregularArray);
        expect(result).toBe(false);
    });

    it('09.c.2 check if first is cooler', () => {
        const result = getIsFirstArrayCooler(coolArray, notCoolArray);
        expect(result).toBe(true);
    });

    it('09.c.2 check if first is not cooler', () => {
        const result = getIsFirstArrayCooler(notCoolArray, coolArray);
        expect(result).toBe(false);
    });

    it('09.c.2 check if first is not cooler for the same arrays', () => {
        const result = getIsFirstArrayCooler(coolArray, alsoCoolArray);
        expect(result).toBe(false);
    });

    it('09.c.2 check if first is not cooler for empty arrays', () => {
        const result = getIsFirstArrayCooler([], []);
        expect(result).toBe(false);
    });
});
