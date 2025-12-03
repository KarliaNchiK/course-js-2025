import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it('c.8.2.1: должен возвращать true, когда первый массив имеет больше больших элементов', () => {
        const numsOne = [5, 8, 10];  // 5>3(+1), 8>7(+1), 10>9(+1) = +3 > 0
        const numsTwo = [3, 7, 9];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(true);
    });

    it('c.8.2.2: должен возвращать false, когда первый массив имеет меньше больших элементов', () => {
        const numsOne = [2, 4, 6];   // 2<5(-1), 4>3(+1), 6<8(-1) = -1 < 0
        const numsTwo = [5, 3, 8];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);
    });

    it('c.8.2.3: должен возвращать false при равном количестве больших элементов', () => {
        const numsOne = [5, 3, 7];   // 5>3(+1), 3<5(-1), 7=7(0) = 0
        const numsTwo = [3, 5, 7];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);
    });

    it('c.8.2.4: должен возвращать false при массивах разной длины', () => {
        const numsOne = [1, 2, 3];
        const numsTwo = [1, 2];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);
    });

    it('c.8.2.5: должен возвращать false при одинаковых массивах', () => {
        const numsOne = [1, 2, 3];
        const numsTwo = [1, 2, 3];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);
    });

    it('c.8.2.6: должен возвращать true при одном большем элементе и остальных равных', () => {
        const numsOne = [5, 2, 3];   // 5>3(+1), 2=2(0), 3=3(0) = +1 > 0
        const numsTwo = [3, 2, 3];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(true);
    });

    it('c.8.2.7: должен возвращать false при одном меньшем элементе и остальных равных', () => {
        const numsOne = [1, 2, 3];   // 1<3(-1), 2=2(0), 3=3(0) = -1 < 0
        const numsTwo = [3, 2, 3];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);
    });

    it('c.8.2.8: должен работать с отрицательными числами', () => {
        const numsOne = [-1, -2, 5]; // -1>-2(+1), -2>-3(+1), 5>4(+1) = +3 > 0
        const numsTwo = [-2, -3, 4];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(true);
    });

    it('c.8.2.9: должен работать с нулями', () => {
        const numsOne = [0, 1, 0];   // 0=0(0), 1>0(+1), 0<1(-1) = 0
        const numsTwo = [0, 0, 1];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);  // Исправлено: результат 0, поэтому false
    });

    it('c.8.2.10: должен возвращать false при пустых массивах', () => {
        const numsOne = [];
        const numsTwo = [];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);
    });

    it('c.8.2.11: должен возвращать false когда первый массив короче', () => {
        const numsOne = [1, 2];
        const numsTwo = [1, 2, 3];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);
    });

    it('c.8.2.12: должен корректно работать с большими массивами', () => {
        const numsOne = [10, 20, 30, 40, 50];  // 10>5(+1), 20<25(-1), 30>25(+1), 40<45(-1), 50>45(+1) = +1 > 0
        const numsTwo = [5, 25, 25, 45, 45];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(true);
    });

    it('c.8.2.13: должен возвращать false при равных счетах', () => {
        const numsOne = [2, 1, 3];   // 2>1(+1), 1<2(-1), 3=3(0) = 0
        const numsTwo = [1, 2, 3];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(false);
    });

    it('c.8.2.14: должен возвращать true при преобладании больших элементов', () => {
        const numsOne = [4, 5, 6];   // 4>3(+1), 5>4(+1), 6>5(+1) = +3 > 0
        const numsTwo = [3, 4, 5];
        const result = getIsFirstArrayCooler(numsOne, numsTwo);
        expect(result).toBe(true);
    });
});