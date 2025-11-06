const setRotations = () => {
    let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    const spans = document.querySelectorAll('span');

    spans[0].style = `transform: rotate(${hours * 15}deg);`
    spans[1].style = `transform: rotate(${minute * 6}deg);`
    spans[2].style = `transform: rotate(${seconds * 6}deg);`

    setTimeout(setRotations, 1000);
};

const runClocks = () => {
    setRotations();
};

export default runClocks;