import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setWidth = (number) => {

};

const updateProgress = (defaultNumber, delta) => {
    const state = {
        progress: defaultNumber,
        minValue: 0,
        maxValue: 100,
        increment: delta
    }

    const controller = {
        increase: function() {
            const newValue = state.progress + state.increment;
            state.progress = Math.min(newValue, state.maxValue);
            view.updateProgressBar();
        },

        decrease: function() {
            const newValue = state.progress - state.increment;
            state.progress = Math.max(newValue, state.minValue);
            view.updateProgressBar();
        }
    };

    const view = {
        init: function() {
            this.progressBar = document.querySelector('.progress-bar');
            this.increaseButton = document.querySelector('.button-increase');
            this.decreaseButton = document.querySelector('.button-decrease');
            this.setupEventListeners();
            this.updateProgressBar();
        },

        setupEventListeners: function() {
            this.increaseButton.addEventListener('click', () =>{
                controller.increase();
            });

            this.decreaseButton.addEventListener('click', () => {
                controller.decrease();
            });
        },

        updateProgressBar: function(){
            this.progressBar.setAttribute('style', `width: ${state.progress}%`);
        }
    };

    watch(state, 'progress', () => {
        view.updateProgressBar();
    });

    view.init();

    return state;
};

export default updateProgress;
