let index = 0;
const outputElement = document.getElementById("output");
const myArray = [1, 2, 3, 4, 5];

function displayNextElement() {
    if (index < myArray.length) {
        const currentElement = myArray[index];
        console.log(currentElement);
        index++;
        outputElement.innerText = `Current Element: ${currentElement}`;
    }
}