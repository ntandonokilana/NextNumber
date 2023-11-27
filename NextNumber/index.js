function displayNextElement(myArray) {
    let index = 0;
    return function() {
        if (index < myArray.length) {
            console.log(myArray[index]);
            index++;
            outputElement.innerText = `Current Element: ${currentElement}`;
    }
}
}
let myArray = [1,2,3,4,5];
const getNextNumber = displayNextElement(myArray);
getNextNumber();
getNextNumber();
getNextNumber();
