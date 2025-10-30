const setToDo = () => {
    // Начало
    const elementMain = document.querySelector(".to-do__main");
    const elementTasks = document.querySelector(".to-do__tasks")

    const myInputElement = document.createElement("input");
    myInputElement.type = "text";
    myInputElement.className = "form-control form-control-lg";

    const myButtonPlanElement = document.createElement("button");
    myButtonPlanElement.className = "btn btn-danger";
    myButtonPlanElement.textContent = "Добавить в план";

    const myButtonDoneElement = document.createElement("button");
    myButtonDoneElement.className = "btn btn-success";
    myButtonDoneElement.textContent = "Добавить в сделанные";

    elementMain.appendChild(myInputElement);
    elementMain.appendChild(myButtonPlanElement);
    elementMain.appendChild(myButtonDoneElement);

    myButtonPlanElement.addEventListener("click", (event) => {
        const mySpanElement = document.createElement("span");
        mySpanElement.dataset.type = "planned";
        mySpanElement.textContent = myInputElement.value;
        elementTasks.appendChild(mySpanElement);
        myInputElement.value = '';

        mySpanElement.addEventListener("click", (event) => {
            mySpanElement.remove();
        })

    })

    myButtonDoneElement.addEventListener("click", (event) => {
        const mySpanElement = document.createElement("span");
        mySpanElement.dataset.type = "completed";
        mySpanElement.textContent = myInputElement.value;
        elementTasks.appendChild(mySpanElement);
        myInputElement.value = '';

        mySpanElement.addEventListener("click", (event) => {
            mySpanElement.remove();
        })
    })

    // Конец
};

export default setToDo;