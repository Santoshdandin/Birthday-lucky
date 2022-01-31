const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


function compareValues(sum, numberToCheck) {
    if(sum % numberToCheck ===0 ) {
       outputBox.innerText = "your birthday is lucky 🎉";
    }else {
        outputBox.innerText = "your birthday is not lucky 😞";
    }
}



function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const numberToCheck = luckyNumber.value
    if(dob && numberToCheck) {
    compareValues(sum, numberToCheck)
    } else {
    outputBox.innerText = "Please enter both fields";
    }
}


function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let index=0; index<dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    };

    return sum;
};

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);