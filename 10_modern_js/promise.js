const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Resolved');
    reject('Promise Rejected');
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// Function to fetch data from API
function fetchUserData() {
  // Using the Fetch API which returns a Promise
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // Check if the response is ok (status code in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Handle the data from the API
      console.log('User data fetched successfully:', data);
    })
    .catch((error) => {
      // Handle any errors that occur
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Call the function to fetch data
let a = fetchUserData();
console.log('#############################');
console.log(a);
