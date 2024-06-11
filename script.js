document.addEventListener("DOMContentLoaded", function() {
    // перевірки числа
     function checkNumber() {
       const inputElement = document.getElementById("numberInput");
       const resultElement = document.getElementById("result");
       const result = checkRealNumber(inputElement.value);
       resultElement.textContent = result;
     }
     function checkRealNumber(str) {
       let dotCount = 0;
       for (let i = 0; i < str.length; i++) {
         const charCode = str.charCodeAt(i);
         if ((charCode >= 48 && charCode <= 57) || str[i] === '.' || str[i] === ',') {
           if (str[i] === '.' || str[i] === ',') {
             dotCount++;
           }
         } else {
           return "не дійсне число";
         }
       }
       if (dotCount > 1) {
         return "не дійсне число";
       }
       return "дійсне число";
     }
     document.getElementById("checkButton").addEventListener("click", checkNumber);
     });
    
    //Стрічка
    let str = " Fake it till you make it. "; 
    let index = 0; 
    let speed = 200; 
    
    function floatingText() {
      let textContainer = document.getElementById('floatingText');
      textContainer.textContent = str.substring(index, str.length) + str.substring(0, index);
      index = (index + 1) % str.length;
    
      setTimeout(floatingText, speed);
    }
    window.onload = function () {
      floatingText();
    };
    
    //email
    function checkEmail() {
    const inputElement = document.getElementById("emailInput");
    const resultElement = document.getElementById("result1");
    const result = validateEmail(inputElement.value);
    resultElement.textContent = result;
    }
    function validateEmail(str) {
      if(str.indexOf("@") == -1) /* Якщо символ “@” відсутній, то текстовий рядок явно не є представленням електронної адреси */
      return "E-mail задано неправильно";
    if(str.indexOf("@") != str.lastIndexOf("@")) /*Якщо символ “@” зустрічається у текстовому рядку більше, ніж один раз, то текстовий рядок не є електронною адресою*/
      return "E-mail задано неправильно";
    if(str.charAt(0) =="@" || str.charAt(str.length) == "@") /*Якщо символ “@” зустрічається на початку або в кінці текстового рядка, то рядок не є електронною адресою*/
      return "E-mail задано неправильно";
    const dotIndex = str.indexOf("."); // Перевіряємо наявність хоча б одної крапки
      if (dotIndex == -1) {
         return "E-mail має містити хоча б одну крапку";
      }
      if (dotIndex <= str.indexOf("@")) { // Перевіряємо, чи крапка міститься після символу "@"
        return "Крапка має бути між @ і доменом";
      }
      if (dotIndex - str.indexOf("@") === 1) { // Перевіряємо, щоб між "@" та "." був хоча б один символ
        return "Між @ та . повинен бути хоча б один символ";
      }
    return "Потрібна додаткова перевірка"; /* Оскільки наразі не виявлено, що електронна адреса задана неправильно, то повертаємо значення "Потрібна додаткова перевірка" */
    }
    
    //пробіли
    function processText() {
      const inputElement = document.getElementById("textInput");
      const resultElement = document.getElementById("result2");
      const inputText = inputElement.value;
      const result = removeConsecutiveSpaces(inputText);
      resultElement.textContent = result;
    }
    function removeConsecutiveSpaces(inputString) {
      return inputString.replace(/\s+/g, ' ').trim();
    }
    
    //Дата і час
    const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    
    function getCurrentDate() {
      const currentDate = new Date();
      const formattedCurrentDate = `Сьогодні ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
      displayMessage(formattedCurrentDate, 1);
    }
    
    function getBirthDayOfWeek() {
      const birthDateInput = document.getElementById("birthdateInput2").value;
      if (!birthDateInput) {
        displayErrorMessage("Введіть коректну дату народження.", 2);
        return;
      }
      const birthDate = new Date(birthDateInput);
      const birthDayOfWeek = daysOfWeek[birthDate.getDay()];
      displayMessage(`${birthDayOfWeek}`, 2);
    }
    
    function getPastDateAndDay(birthDate, yearsAgo) {
      const pastDate = new Date(birthDate);
      pastDate.setFullYear(pastDate.getFullYear() - yearsAgo);
      const pastDayOfWeek = daysOfWeek[pastDate.getDay()];
      const formattedDate = `${pastDate.getDate()}/${pastDate.getMonth() + 1}/${pastDate.getFullYear()}`;
      const message = `${yearsAgo} років тому, був(ла) ${pastDayOfWeek}`;
      return { date: formattedDate, message: message };
    }
    
    function getPastDatesAndDays() {
      const birthDateInput = document.getElementById("birthdateInput3").value;
      if (!birthDateInput) {
        displayErrorMessage("Введіть коректну дату народження.", 3);
        return;
      }
      const birthDate = new Date(birthDateInput);
      const pastDatesAndDays = [10, 12, 25, 38].map(yearsAgo => getPastDateAndDay(birthDate, yearsAgo));
      displayMessages(pastDatesAndDays, 3);
    }
    
    function getFutureBirthday() {
      const birthDateInput = document.getElementById("birthdateInput4").value;
      if (!birthDateInput) {
        displayErrorMessage("Введіть коректну дату народження.", 4);
        return;
      }
      const birthDate = new Date(birthDateInput);
      const futureDate = new Date(birthDate);
      futureDate.setFullYear(futureDate.getFullYear() + 3);
      const futureDayOfWeek = daysOfWeek[futureDate.getDay()];
      const message = `Через три роки, ${futureDate.getDate()}/${futureDate.getMonth() + 1}/${futureDate.getFullYear()} був(ла) ${futureDayOfWeek}`;
      displayMessage(message, 4);
    }
    
    function displayMessage(message, containerNumber) {
      const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
      resultContainer.innerHTML = `<p>${message}</p>`;
    }
    
    function displayMessages(messages, containerNumber) {
      const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
      resultContainer.innerHTML = messages.map(item => `<p>${item.date}, ${item.message}</p>`).join("");
    }
    
    function displayErrorMessage(message, containerNumber) {
      const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
      resultContainer.innerHTML = `<p style="color: red;">${message}</p>`;
    }
    
    
    //Інтервал
    function calculateTimeDifference() {
      const hours1 = parseInt(document.getElementById("hours1").value) || 0;
      const minutes1 = parseInt(document.getElementById("minutes1").value) || 0;
    
      const hours2 = parseInt(document.getElementById("hours2").value) || 0;
      const minutes2 = parseInt(document.getElementById("minutes2").value) || 0;
    
      if (isNaN(hours1) || isNaN(minutes1) || isNaN(hours2) || isNaN(minutes2)) {
        displayErrorMessage("Введіть коректний час.", 5);
        return;
      }
    
      const time1 = hours1 * 60 + minutes1; // час в хвилинах
      const time2 = hours2 * 60 + minutes2; // час в хвилинах
    
      const timeDifference = Math.abs(time2 - time1); // різниця в хвилинах
    
      displayTimeDifference(timeDifference, 5);
    }
    
    function displayTimeDifference(timeDifference, containerNumber) {
      const hours = Math.floor(timeDifference / 60);
      const minutes = timeDifference % 60;
      const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
      resultContainer.innerHTML = `<p>${hours} годин ${minutes} хвилин</p>`;
    }
    
    function displayErrorMessage(message, containerNumber) {
      const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
      resultContainer.innerHTML = `<p style="color: red;">${message}</p>`;
    }
    
    //перевірка числа
    function isNumeric(inputValue) {
    return !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
    }
    function checkNumericValue() {
    const numericInputValue = document.getElementById("numericInput").value;
    if (isNumeric(numericInputValue)) {
      displayResult6("Число");
    } else {
      displayResult6("Не число");
    }
    
    function displayResult6(message) {
      const resultElement = document.getElementById("result6");
      resultElement.textContent = message;
    }
    }
    
    // представлення дати у різних системах числення
    function showNumberRepresentations() {
      const birthdateInput = document.getElementById("birthdateInput7").value;
    
      if (!birthdateInput) {
        alert("Введіть коректну дату народження.");
        return;
      }
    
      const birthDate = new Date(birthdateInput);
    
      if (isNaN(birthDate)) {
        alert("Введіть коректну дату народження.");
        return;
      }
    
      const day = birthDate.getDate();
      const month = birthDate.getMonth() + 1;
      const year = birthDate.getFullYear();
      const sum = day + month + year;
    
      const decimalRepresentation = sum.toString(10);
      const binaryRepresentation = sum.toString(2);
      const hexadecimalRepresentation = sum.toString(16).toUpperCase();
    
      const resultContainer = document.getElementById("resultContainer7");
      resultContainer.innerHTML = `
        <p>Десяткова система: ${decimalRepresentation}</p>
        <p>Двійкова система: ${binaryRepresentation}</p>
        <p>Шістнадцяткова система: ${hexadecimalRepresentation}</p>
      `;
    }
    
    // обчислення гіпотенузи
    function calculateHypotenuse() {
      const sideA = parseFloat(document.getElementById("side1").value);
      const sideB = parseFloat(document.getElementById("side2").value);
    
      if (isNaN(sideA) || isNaN(sideB) || sideA <= 0 || sideB <= 0) {
        displayErrorMessage("Введіть коректні позитивні довжини сторін.", 8);
        return;
      }
    
      const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
      const roundedHypotenuse = removeTrailingZeros(hypotenuse.toFixed(2));
    
      displayResult(`Гіпотенуза = ${roundedHypotenuse}`, 8);
    }
    
    function removeTrailingZeros(value) {
      const parts = value.split(".");
      if (parts.length === 2 && parseInt(parts[1]) === 0) {
        return parts[0];
      }
      return value;
    }
    
    function displayResult(message, containerNumber) {
      const resultContainer = document.getElementById(`result${containerNumber}`);
      resultContainer.innerHTML = `<p>${message}</p>`;
    }
    
    function displayErrorMessage(message, containerNumber) {
      const resultContainer = document.getElementById(`result${containerNumber}`);
      resultContainer.innerHTML = `<p style="color: red;">${message}</p>`;
    }