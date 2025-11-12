import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it('09.c.2.1 должен возвращать true, когда в первом массиве больше больших чисел', () => {
        const numsOne = [5,8,10];
        const numsTwo = [3,7,9]
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(true);
    });

    it('09.c.2.2 должен возвращать false, когда во втором массиве числа больше чем в первом', () => {
        const numsOne = [1,2,3];
        const numsTwo = [5,5,5];
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(false);
    })

    it('09.c.2.3 должен возвращать false, если массивы имеют разную длину', () => {
        const numsOne = [1,2,3];
        const numsTwo = [1,2,3,4];
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(false);
    })

    it('09.c.2.4 должен возвращать false, когда все элементы равны', () => {
        const numsOne = [1,2,3];
        const numsTwo = [1,2,3];
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(false);
    })

    it('09.c.2.5 должен возвращать false, когда массивы имеют одинаковые количество побед', () => {
        const numsOne = [3,2];
        const numsTwo = [3,2];
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(false);
    })

    it('09.c.2.6 должен возвращать false, когда в массиве разница равна 0', () => {
        const numsOne = [5,2,3,10];
        const numsTwo = [2,5,4,7];
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(false);
    })

    it('09.c.2.7 должен возвращать true, когда разница +1', () => {
        const numsOne = [5,2,10];
        const numsTwo = [2,5,7];
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(true);
    })

    it('09.c.2.8 должен возвращать false, когда разница -1', () => {
        const numsOne = [3,5,7];
        const numsTwo = [5,3,8];
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(false);
    })

    it('09.c.2.9 должен корректно работать с отрицательными числами и нулями', () => {
        const numsOne = [-1, 0, 5];
        const numsTwo = [-2, 1, 3];
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(true);
    })
});
