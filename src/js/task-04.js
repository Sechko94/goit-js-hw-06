const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const initialValue = document.querySelector('#value');


let counterValue = 0;

const getIncrement = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

increment.addEventListener("click", getIncrement);

const getDecrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

decrement.addEventListener("click", getDecrement);