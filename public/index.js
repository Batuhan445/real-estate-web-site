// TEXTAREA

let textArea = document.getElementById("message-area");
let characterCounter = document.getElementById("message-count");
const maxNumOfChars = 450;

const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = maxNumOfChars - numOfEnteredChars;
    characterCounter.textContent = counter + "/450";
}

textArea.addEventListener("input", countCharacters);