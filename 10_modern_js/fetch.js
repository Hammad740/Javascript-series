const displayData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log(response);
      return response.json();

      //A Promise that resolves to a JavaScript object.
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('Finally');
    });
};

displayData();
