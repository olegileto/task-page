// 1. Filter array method;

const arrayOne = [-1, 2, 3, 0, 9, -2, -5];
const negativeNumbersButton = document.querySelector('.negative-numbers');
const positiveNumbersButton = document.querySelector('.positive-numbers');

document.querySelector('.array-one').innerHTML = `<span>${arrayOne}</span>`;

const negativeNumbers = arrayOne.filter(number => {
    return number < 0;
});

function clickToNegativeNumbers() {
    document.querySelector('.negative-array').innerHTML = `<span>${negativeNumbers}</span>`
}

const positiveNumbers = arrayOne.filter(number => {
    return number > 0;
});

function clickToPositiveNumbers() {
    document.querySelector('.positive-array').innerHTML = `<span>${positiveNumbers}</span>`
}

positiveNumbersButton.addEventListener('click', clickToPositiveNumbers);
negativeNumbersButton.addEventListener('click', clickToNegativeNumbers);


// 2. Map array method;

const arrayTwo = [
    {firstName: 'Max', secondName: 'Klochko', year: 1995, passed: 2007},
    {firstName: 'Nick', secondName: 'Golen', year: 1997, passed: 2018},
    {firstName: 'Albert', secondName: 'Einstein', year: 1879, passed: 1956},
    {firstName: 'Julius', secondName: 'Caeser', year: 100, passed: 190},
];

const totalYearButton = document.querySelector('.total-year');

const fullNamesAndYears = arrayTwo.map(fullName => `<span>${fullName.firstName}</span> <span>${fullName.secondName}</span> <span>- year: ${fullName.year},</span> <span>passed: ${fullName.passed}</span><br>`).join(" ");

document.querySelector('.array-two').innerHTML = `<div>${fullNamesAndYears}</div>`;

// 3. Reduce array method;

const totalYear = arrayTwo.reduce((total, array) => {
    return total + (array.passed - array.year)
}, 0);

function showTotalYear() {
    document.querySelector('.total-year-show').innerHTML = `<span>${totalYear}</span>`;
}

totalYearButton.addEventListener('click', showTotalYear);
