const screen = document.querySelector('.screen p');
const answer = document.querySelector('.screen h3');

const buttonClick = (ele) => {
    if (screen.innerText === '') {
        screen.innerText = ele;
    } else {
        screen.innerText += ele;
    }
}

const clearScreen = () => {
    screen.innerText = '';
    answer.innerText = '';
}

const calculate = () => {
    answer.innerText = eval(screen.innerText);
}