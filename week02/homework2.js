'use strict';
{
  //map and filter : Change the function to map and filter
  let myNumbers = [1, 2, 3, 4];
  /*function getDoubleNumbers() {
  let doubleOddNumbers = myNumbers
    .filter(number => {
      return number % 2 !== 0;
    })
    .map(number => {
      return number * 2;
    });
  console.log(doubleOddNumbers);
}
getDoubleNumbers();
*/

  let doubleOddNumber = myNumbers
    .filter(x => {
      return x % 2 !== 0;
    })
    .map(x => {
      return x * 2;
    });
  console.log(doubleOddNumber);

  // More Map and Filter
  const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180,
    },
    {
      name: 'Some web development',
      duration: 120,
    },
    {
      name: 'Fix homework for class10',
      duration: 20,
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0,
    },
  ];

  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 1.0,
    },
    {
      name: 'Some more web development',
      duration: 180,
    },
    {
      name: 'Staring out the window',
      duration: 10,
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0,
    },
    {
      name: 'Look at application assignments new students',
      duration: 40,
    },
  ];
  //Note: the durations are specified in minutes.
  let tasks = [...monday, ...tuesday];
  //console.log(tasks);
  let rate = 20;

  let taskInHour = tasks
    .map(time => time.duration / 60) // map durations in hours
    .filter(time => time >= 2) //remove the duration  with less than 2hours
    .map(time => time * rate) //multiply each duration per hour (rate =20)
    .reduce((total, value) => total + value) // Summary time to find total cost
    .toFixed(2);
  console.log(`€ ${taskInHour}`);
}
