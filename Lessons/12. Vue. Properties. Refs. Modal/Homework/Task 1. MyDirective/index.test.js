//Было: @jest-environment jsdom, импорт TheSun.vue, использование waitFor из Testing Library.
// Стало: /* eslint-env jsdom */, импорт именно MyDirective.vue, без waitFor.
// Composition API -> Options API

/* eslint-env jsdom */
import { mount } from '@vue/test-utils';
import MyDirective from './MyDirective.vue';

describe('12.h.1 MyDirective', () => {
    it('12.h.1.0 initial snapshot', () => {
        const wrapper = mount(MyDirective);
        expect(wrapper.element).toMatchSnapshot();
    });

    it('12.h.1.1 MyDirective has data', () => {
        expect(typeof MyDirective.data).toBe('function');
    });

    it('12.h.1.2 MyDirective is a Vue instance', () => {
        const wrapper = mount(MyDirective);
        expect(wrapper.vm).toBeTruthy();
    });

    it("12.h.1.3 text 'оч'", async () => {
        const wrapper = mount(MyDirective);
        const searchInput = wrapper.find('.form-control');
        searchInput.element.value = 'оч';
        await searchInput.trigger('input');
        expect(wrapper.element).toMatchSnapshot();
    });

    it("12.h.1.4 text 'нет результатов'", async () => {
        const wrapper = mount(MyDirective);
        const searchInput = wrapper.find('.form-control');
        searchInput.element.value = 'нет результатов';
        await searchInput.trigger('input');
        expect(wrapper.element).toMatchSnapshot();
    });

    it("12.h.1.5 text 'а'", async () => {
        const wrapper = mount(MyDirective);
        const searchInput = wrapper.find('.form-control');
        searchInput.element.value = 'а';
        await searchInput.trigger('input');
        expect(wrapper.element).toMatchSnapshot();
    });
});
