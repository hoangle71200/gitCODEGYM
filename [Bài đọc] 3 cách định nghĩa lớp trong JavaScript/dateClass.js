let MyDate = function(day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;
    
    // this.getDay = function() {
    //    return this.day;
    //         }
    // this.getMonth = function() {
    //     return this.month;
    // }
    // this.getYear = function() {
    //     return this.year;
    // }
    // this.setDay = function(day) {
    //     this.day  = day;
    //         }
    // this.setMonth = function(month) {
    //     this.month  = month;
    // }
    // this.setYear = function(year) {
    //     this.year  = year;
    // }

};
let date = new MyDate(2, 2, 2007);

date.day = 10;
date.month = 10;
date.year = 2000;
// date.setDay(10);
// date.setMonth(10);
// date.setYear(2019);

// let day = date.getDay();

// let month = date.getMonth(); 

// let year = date.getYear(); 

let day = date.day;

let month = date.month; 

let year = date.year; 

console.log(day + "/" + month + "/" + year);
