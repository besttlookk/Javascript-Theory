// when ever we have lots of promise which does not depand on each other..its better to run all of then at once
// Running Promises in one after another(NOt good)

// const getJSON = (url) => fetch(url).then((response) => response.json());

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c1}`
//     );
//     const [data2] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c2}`
//     );
//     const [data3] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c3}`
//     );
//     console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries("portugal", "canada", "tanzania");

// ---running promises in parallel
// Running Promises in Parallel
const getJSON = (url) => fetch(url).then((response) => response.json());

const get3Countries = async function (c1, c2, c3) {
  try {
    // promise.all returts a promise
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries("portugal", "canada", "tanzania");
