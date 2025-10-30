const setWidth = (number) => {
    const elementBar = document.querySelector(".progress-bar")
    elementBar.style.width = number + "%";
};

const updateProgress = (defaultNumber, delta) => {
    let defNumber = defaultNumber;
    setWidth(defNumber);

    const elementBtnIncrease = document.querySelector(".button-increase")
    const elementBtnDecrease = document.querySelector(".button-decrease")

    elementBtnIncrease.addEventListener("click", (event) => {
        if (defNumber + delta >= 100) {
            defNumber = 100;
            setWidth(defNumber);
            return;

        }
        defNumber += delta;
        setWidth(defNumber);
    })

    elementBtnDecrease.addEventListener("click", (event) => {
        if (defNumber - delta <= 0) {
            defNumber = 0;
            setWidth(defNumber);
            return;
        }
        defNumber -= delta;
        setWidth(defNumber);
    })
};

export default updateProgress;
