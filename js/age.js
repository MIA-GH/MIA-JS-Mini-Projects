var dateTime = new Date();
// months
function getYearsInMonths(){
    var yearOfBirth = prompt("What is your year of birth");
    var currentYear = dateTime.getFullYear();
    var monthsInYear = 12;
    var yearsInMonths = (currentYear - yearOfBirth) * monthsInYear;
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInMonths');
    var textAnswer = document.createTextNode("You are " + yearsInMonths + " months old");
    h1.appendChild(textAnswer);
    document.getElementById('results-months').appendChild(h1);
}

// weeks
function getYearsInWeeks(){
    var yearOfBirth = prompt("What is your year of birth");
    var currentYear = dateTime.getFullYear();
    var weeksInYear = 52.143;
    var yearsInWeeks = (currentYear - yearOfBirth) * weeksInYear;
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInWeeks');
    var textAnswer = document.createTextNode("You are " + yearsInWeeks + " weeks old");
    h1.appendChild(textAnswer);
    document.getElementById('results-weeks').appendChild(h1);
}

// days
function getYearsInDays(){
    var yearOfBirth = prompt("What is your year of birth");
    var currentYear = dateTime.getFullYear();
    var daysInYear = 365;
    var yearsIndays = (currentYear - yearOfBirth) * daysInYear;
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInDays');
    var textAnswer = document.createTextNode("You are " + yearsIndays + " days old");
    h1.appendChild(textAnswer);
    document.getElementById('results-days').appendChild(h1);
}

// hours
function getYearsInHours(){
    var yearOfBirth = prompt("What is your year of birth");
    var currentYear = dateTime.getFullYear();
    var hoursInYear = 8760;
    var yearsInHours = (currentYear - yearOfBirth) * hoursInYear;
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInHours');
    var textAnswer = document.createTextNode("You are " + yearsInHours + " hours old");
    h1.appendChild(textAnswer);
    document.getElementById('results-hours').appendChild(h1);
}

// minutes
function getYearsInMinutes(){
    var yearOfBirth = prompt("What is your year of birth");
    var currentYear = dateTime.getFullYear();
    var minutesInYear = 525600;
    var yearsInMinutes = (currentYear - yearOfBirth) * minutesInYear;
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInMinutes');
    var textAnswer = document.createTextNode("You are " + yearsInMinutes + " minutes old");
    h1.appendChild(textAnswer);
    document.getElementById('results-minutes').appendChild(h1);
}

// seconds
function getYearsInSeconds(){
    var yearOfBirth = prompt("What is your year of birth");
    var currentYear = dateTime.getFullYear();
    var secondsInYear = 31536000;
    var yearsInSeconds = (currentYear - yearOfBirth) * secondsInYear;
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInSeconds');
    var textAnswer = document.createTextNode("You are " + yearsInSeconds + " seconds old");
    h1.appendChild(textAnswer);
    document.getElementById('results-seconds').appendChild(h1);
}

function resetMonths(){
    document.getElementById('ageInMonths').remove();
}

function resetWeeks(){
    document.getElementById('ageInWeeks').remove();
}

function resetDays(){
    document.getElementById('ageInDays').remove();
}

function resetHours(){
    document.getElementById('ageInHours').remove();
}

function resetMinutes(){
    document.getElementById('ageInMinutes').remove();
}

function resetSeconds(){
    document.getElementById('ageInSeconds').remove();
}