function findTypes() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        let x = typeof arguments[i];
        array.push(x);
    }
    return array;
}


function executeforEach(arr, iter) {
    for (let i = 0; i < arr.length; i++) {
        iter(arr[i]);
    }
}


function mapArray(array, fun) {
    let newArray = [];
    executeforEach(array, function(el) {
        newArray.push(fun(el));
    });
    return newArr;
}


function filterArray(array, fun) {
    let newArray = [];
    executeforEach(array, function(el) {
        if (fun(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}


function getAmountOfAdultPeople(data) {
    return filterArray(data, function (el) {
        return el.age > 18;
    }).length;
}


function getGreenAdultBananaLovers(data) {
    let array = [];
    filterArray(data, function (el) {
        if (el.age > 18 && el.eyeColor === 'green' && el.favouriteFruit === 'banana') {
            array.push(el.name);
        }
    });
    return array;
}


function keys(obj) {
    let newArray = [];
    for (let key in obj) {
        newArray.push(key);
    }
    return newArray;
}


function values(object) {
    let newArray = [];
    for (let key in object) {
        if(object.hasOwnProperty(key)) {
            newArray.push(object[key]);
        }
    }
    return newArray;
}


function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec' ];
    return 'Date: ' + date.getDate() +
        ' of ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
}


function isEvenYear(date) {
    let year = date.getFullYear();
    return year % 2 === 0;
}

function isEvenMonth(date) {
    let month = date.getMonth() + 1;
    return month % 2 === 0;
}



findTypes('number');

executeforEach([1,2,3], function(el) {
    console.log(el);
});

mapArray([2, 5, 8], function(el) {
    return el + 3;
});

filterArray([2, 5, 8], function(el) {
    return el > 3;
});

getAmountOfAdultPeople();

getGreenAdultBananaLovers();

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

values({keyOne: 1, keyTwo: 2, keyThree: 3});

showFormattedDate(new Date('2019-01-27T01:10:00'));

isEvenYear(new Date('2019-01-27T01:10:00'));

isEvenMonth(new Date('2019-02-27T01:10:00'));