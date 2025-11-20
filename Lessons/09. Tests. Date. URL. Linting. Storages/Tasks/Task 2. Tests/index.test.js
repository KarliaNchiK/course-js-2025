import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it('c.8.2.1 — возвращает true, если в первом массиве больше элементов, которые больше соответствующих во втором', () => {
        expect(getIsFirstArrayCooler([5, 2, 8], [3, 2, 1])).toBe(true);
    });

    it('c.8.2.2 — возвращает false, если во втором массиве больше элементов, которые больше соответствующих в первом', () => {
        expect(getIsFirstArrayCooler([1, 2, 3], [3, 2, 1])).toBe(false);
    });

    it('c.8.2.3 — возвращает false, если массивы одинаковые', () => {
        expect(getIsFirstArrayCooler([4, 4, 4], [4, 4, 4])).toBe(false);
    });

    it('c.8.2.4 — возвращает false, если массивы разной длины', () => {
        expect(getIsFirstArrayCooler([1, 2, 3], [1, 2])).toBe(false);
    });

    it('c.8.2.5 — корректно работает при отрицательных числах', () => {
        expect(getIsFirstArrayCooler([-1, -2, -3], [-3, -2, -1])).toBe(false);
        expect(getIsFirstArrayCooler([-1, -2, -3], [-2, -3, -4])).toBe(true);
    });

    it('c.8.2.6 — возвращает true, если первый массив выигрывает ровно на одно сравнение', () => {
        expect(getIsFirstArrayCooler([3, 2, 1], [2, 2, 1])).toBe(true);
    });

    it('c.8.2.7 — возвращает false, если количество "побед" одинаково (ничья)', () => {
        expect(getIsFirstArrayCooler([2, 3, 1], [1, 3, 2])).toBe(false);
    });

    it('c.8.2.8 — корректно обрабатывает пустые массивы (равной длины)', () => {
        expect(getIsFirstArrayCooler([], [])).toBe(false);
    });
});
