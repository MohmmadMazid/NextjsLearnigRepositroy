const fetchData = async () => {
  console.log("fetching data...");
  let response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  let data = await response.json();
  console.log(data);
  return data;
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
