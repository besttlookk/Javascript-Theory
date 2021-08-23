# Date

- JavaScript Date objects represent a single moment in time in a platform-independent format.
- Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
- There are several methods available to obtain a date in various formats, as well as to perform time zone conversions.
- Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time, as UTC lies along the meridian that includes London—and nearby Greenwich—in the United Kingdom.) The user's device provides the local time.
- In addition to methods to read and alter individual components of the local date and time (such as getDay() and setHours()), there are also versions of the same methods that read and manipulate the date and time using UTC (such as getUTCDay() and setUTCHours()).

## Date() constructor

#### **SYNTAX**

```
new Date()
new Date(value)
new Date(dateString)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

` Note: The only correct way to instantiate a new Date object is by using the new operator. If you call the Date object directly, such as now = Date(), the returned value is a string rather than a Date object.`

#### **PARAMETERS**

- There are four basic forms for the Date() constructor:
  1. No parameters
     - When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.
  2. Time value or timestamp number
     - value
       - An integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC (the ECMAScript epoch, equivalent to the UNIX epoch), with leap seconds ignored. Keep in mind that most UNIX Timestamp functions are only accurate to the nearest second.
  3. Timestamp string
     - dateString
       - A string value representing a date, specified in a format recognized by the Date.parse() method. (These formats are IETF-compliant RFC 2822 timestamps, and also strings in a version of ISO8601.)
  4. Individual date and time component values
     - Given at least a year and month, this form of Date() returns a Date object whose component values (year, month, day, hour, minute, second, and millisecond) all come from the following parameters. Any missing fields are given the lowest possible value (1 for day and 0 for every other component). The parameter values are all evaluated against the local time zone, rather than UTC.

#### **METHODS**

| Methods              | Description                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| getDate()            | It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of local time.     |
| getDay()             | It returns the integer value between 0 and 6 that represents the day of the week on the basis of local time.                 |
| getFullYears()       | It returns the integer value that represents the year on the basis of local time.                                            |
| getHours()           | It returns the integer value between 0 and 23 that represents the hours on the basis of local time.                          |
| getMilliseconds()    | It returns the integer value between 0 and 999 that represents the milliseconds on the basis of local time.                  |
| getMinutes()         | It returns the integer value between 0 and 59 that represents the minutes on the basis of local time.                        |
| getMonth()           | It returns the integer value between 0 and 11 that represents the month on the basis of local time.                          |
| getSeconds()         | It returns the integer value between 0 and 60 that represents the seconds on the basis of local time.                        |
| getUTCDate()         | It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of universal time. |
| getUTCDay()          | It returns the integer value between 0 and 6 that represents the day of the week on the basis of universal time.             |
| getUTCFullYears()    | It returns the integer value that represents the year on the basis of universal time.                                        |
| getUTCHours()        | It returns the integer value between 0 and 23 that represents the hours on the basis of universal time.                      |
| getUTCMinutes()      | It returns the integer value between 0 and 59 that represents the minutes on the basis of universal time.                    |
| getUTCMonth()        | It returns the integer value between 0 and 11 that represents the month on the basis of universal time.                      |
| getUTCSeconds()      | It returns the integer value between 0 and 60 that represents the seconds on the basis of universal time.                    |
| setDate()            | It sets the day value for the specified date on the basis of local time.                                                     |
| setDay()             | It sets the particular day of the week on the basis of local time.                                                           |
| setFullYears()       | It sets the year value for the specified date on the basis of local time.                                                    |
| setHours()           | It sets the hour value for the specified date on the basis of local time.                                                    |
| setMilliseconds()    | It sets the millisecond value for the specified date on the basis of local time.                                             |
| setMinutes()         | It sets the minute value for the specified date on the basis of local time.                                                  |
| setMonth()           | It sets the month value for the specified date on the basis of local time.                                                   |
| setSeconds()         | It sets the second value for the specified date on the basis of local time.                                                  |
| setUTCDate()         | It sets the day value for the specified date on the basis of universal time.                                                 |
| setUTCDay()          | It sets the particular day of the week on the basis of universal time.                                                       |
| setUTCFullYears()    | It sets the year value for the specified date on the basis of universal time.                                                |
| setUTCHours()        | It sets the hour value for the specified date on the basis of universal time.                                                |
| setUTCMilliseconds() | It sets the millisecond value for the specified date on the basis of universal time.                                         |
| setUTCMinutes()      | It sets the minute value for the specified date on the basis of universal time.                                              |
| setUTCMonth()        | It sets the month value for the specified date on the basis of universal time.                                               |
| setUTCSeconds()      | It sets the second value for the specified date on the basis of universal time.                                              |

| Methods        | Description                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| toDateString() | It returns the date portion of a Date object.                                                                   |
| toISOString()  | It returns the date in the form ISO format string.                                                              |
| toJSON()       | It returns a string representing the Date object. It also serializes the Date object during JSON serialization. |
| toString()     | It returns the date in the form of string.                                                                      |
| toTimeString() | It returns the time portion of a Date object.                                                                   |
| toUTCString()  | It converts the specified date in the form of string using UTC time zone.                                       |
| valueOf()      | It returns the primitive value of a Date object.                                                                |

#### **EXAMPLES**

> > **Date() Syntax**

```
let now = new Date();
console.log(now);  // Sat Aug 21 2021 22:07:07 GMT+0530 (India Standard Time)
```

> > **Date(value) Syntax**

```
//once we define our date it will add miliseconds from 1 jan 1970
let dt = new Date(1000);
console.log(dt); // Thu Jan 01 1970 05:30:01 GMT+0530 (India Standard Time)
```

> > **Date(dateString) Syntax**

```
new Date("2029-09-30"); // Sun Sep 30 2029 05:30:00 GMT+0530 (India Standard Time)

new Date("2029, 09, 30");  // Sun Sep 30 2029 00:00:00 GMT+0530 (India Standard Time)

new Date('dec 26, 1996 15:45:55')

new Date('dec 26, 1996 ')
```

> > **Methods**

```
console.log(new Date().getFullYear()); // 2021
console.log(new Date().getMonth()); // 6 (0 based)
console.log(new Date().getDate()); //30
console.log(new Date().getDay()); // 5 (0 is for sunday)
console.log(new Date().getHours()); // 11
console.log(new Date().getMinutes()); // 25
console.log(new Date().getSeconds()); // 9
console.log(new Date().getMilliseconds()); //775
```

```
console.log(new Date().getTime()); //1627624447356 (timestamp)
console.log(new Date(1627624447356)); //Fri Jul 30 2021 11:24:07 GMT+0530 (India Standard Time)
// if we are only concerned with timetamp(we dont event have to create new date)
console.log(Date.now()); //1627624447356 (timestamp)
```

```
console.log(now)                        // Sun Aug 08 2021 13:49:46 GMT+0530 (India Standard Time)
console.log(now.toUTCString())          // Sun, 08 Aug 2021 08:20:02 GMT
console.log(now.toString())             // Sun Aug 08 2021 13:50:22 GMT+0530 (India Standard Time) 
console.log(now.toDateString())         // Sun Aug 08 2021
console.log(now.toTimeString())         // 13:49:46 GMT+0530 (India Standard Time) 
console.log(now.toLocaleString())       // 8/8/2021, 1:52:43 pm 
console.log(now.toLocaleDateString())   // 8/8/2021
console.log(now.toLocaleTimeString())   // 1:52:43 pm 

console.log(now.toJSON())               // 2021-08-08T08:23:43.713Z 
console.log(now.toISOString())          // 2021-08-08T08:23:43.713Z 
```

`There are also "set" methods for all of this methods`

## Internationalize dates

```
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  //   year: "2-digit",
  //   weekday: "long",
  weekday: "short",
  // weekday: 'narrow',
};
```

```
const locale = navigator.language; // en-US
console.log(Intl.DateTimeFormat("en-US").format(now)); // 7/30/2021
console.log(Intl.DateTimeFormat("en-GB").format(now)); // 30/07/2021
console.log(Intl.DateTimeFormat("en").format(now)); // 7/30/2021
console.log(Intl.DateTimeFormat("en-US", options).format(now)); // Fri, July 30, 2021, 12:31 PM
```

```
const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

console.log(calcDaysPassed(new Date(), new Date(2022, 6, 30))); //365days
```
