const LIGHTS = {
    red: {
        type: 'red',
        text: 'Красный',
    },
    yellow: {
        type: 'yellow',
        text: 'Желтый',
    },
    green: {
        type: 'green',
        text: 'Зеленый',
    },
};

const resetLights = () => {
    const lights = document.querySelectorAll("span");
    for (const light of lights) {
        light.className = '';
    }
};

const setLight = (type) => {
    const lights = document.querySelectorAll("span");
    switch (type) {
        case "red":
            lights[0].className = "red-light";
            break;
        case "yellow":
            lights[1].className = "yellow-light";
            break;
        case "green":
            lights[2].className = "green-light";
            break;
    }
};

const setTrafficLight = () => {

    const element = document.querySelector(".traffic__lights");
    const myDivTrafficLight = document.createElement('div');
    myDivTrafficLight.className = "traffic__lights-container";
    element.appendChild(myDivTrafficLight);

    for (let i = 0; i < 3; i++) {
        const spanElement = document.createElement('span');
        myDivTrafficLight.appendChild(spanElement);
    }

    const element_select = document.querySelector(".traffic__lights-select");
    const mySelect = document.createElement("select");
    mySelect.className = "form-select";
    element_select.appendChild(mySelect);

    for (const light in LIGHTS) {
        const optionElement = document.createElement("option");
        optionElement.value = LIGHTS[light].type;
        optionElement.innerText = LIGHTS[light].text;
        mySelect.appendChild(optionElement);
    }

    setLight("red");

    mySelect.addEventListener("change", (event) => {
        resetLights();
        setLight(event.target.value);
    })

};

export default setTrafficLight;
