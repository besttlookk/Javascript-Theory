// Consuming Promises with Async/Await
// Error Handling With try...catch

// Promisify Geolocation
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition(); // since it returns promise..we have to await
    console.log(pos);
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    // BUG in video:
    // if (!resGeo.ok) throw new Error('Problem getting country');

    // FIX:
    if (!res.ok) throw new Error("Problem getting country");

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(`${err} 💥`);
  }
};
whereAmI();

console.log("FIRST");
