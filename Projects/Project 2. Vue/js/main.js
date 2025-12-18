import { loadAboutUsInfo } from './mainPage.js';
import { renderAuthLink } from './auth.js';
import { SearchModule } from "./searchFromInput.js";

function init() {
    loadAboutUsInfo();
    renderAuthLink();
    const searchMoule = new SearchModule();
}

document.addEventListener('DOMContentLoaded', init);