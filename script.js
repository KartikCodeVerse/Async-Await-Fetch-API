// const getData = async() => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 5000);
//   });
// };

const getData = async () => {
  let users = await fetch("https://randomuser.me/api/?results=2");
  let data = await users.json();
  console.log(data.results);
};

const main = async () => {
  console.log("Loading....");

  console.log("Do Something else");

  console.log("Load data");

  let data = await getData();

  console.log(data);

  console.log("Process Data");
};

main();

// data.then((v) => {
//   console.log(data);
//   console.log("Process Data");
// });
