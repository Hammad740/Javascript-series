function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received!');
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// using async/await
async function getData() {
  try {
    const data = await fetchData();
  } catch (error) {
    console.log(error);
  }
}
getData();

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// using async/await

async function fetchApi() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchApi();
