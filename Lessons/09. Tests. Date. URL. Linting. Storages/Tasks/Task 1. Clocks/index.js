const setRotations = () => {
    const spans = document.querySelectorAll('span');
    const date = new Date();
    spans[0].style = `transform: rotate(${30 * date.getHours()}deg);`;
    spans[1].style = `transform: rotate(${6 * date.getMinutes()}deg);`;
    spans[2].style = `transform: rotate(${6 * date.getSeconds()}deg);`;
    setTimeout(setRotations, 1000);
};

const runClocks = () => {
    setRotations();
};

export default runClocks;