// ====================================================================================================
// Promise Consuming
// How to escape callback hell
// making two related async call
// ".then" should always return promise(if it is returning anything)
// ".json()" method is available to response object. which also return promise
// manual error handling: rejected promise do not thow error...we have to manually throw error

// function findCountry(country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`) //fetch returns promise
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[0]);
//       console.log(`Capital of ${data[0].name} is ${data[0].capital} `);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error("No neighbour found");
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(`Neighbour Country is ${data.name}`);
//     })
//     .catch((err) => console.error(err.message));
// }

// findCountry("canada");

// =========================Minimizing above code==============================
function getJSON(url, errMsg) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errMsg}(${response.status})`);
    return response.json();
  });
}

function findCountry(country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country Not Found!"
  )
    .then((data) => {
      console.log(`Capital of ${data[0].name} is ${data[0].capital} `);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour found");
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        "Country Not Found!"
      );
    })

    .then((data) => {
      console.log(`Neighbour Country is ${data.name}`);
    })
    .catch((err) => console.error(err.message));
}

findCountry("canada");
