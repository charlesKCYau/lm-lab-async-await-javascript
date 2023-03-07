import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// fetchData(jsonTypicode);

async function newFetchData (apiEndPoint) {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.error(e);
  }
}

newFetchData(jsonTypicode);

const jsonSuperhero = "https://www.superheroapi.com/api.php/10230496549414925/643/biography";
const fetchData = (apiEndPoint) => {
	// this will be in an `await` style after Task 1 😉
  	fetch(apiEndPoint)
    	.then((response) => { console.log(response); response.json(); })
    	.then((json) => console.log(json))
    	.catch((error) => console.log(error));
};

fetchData(jsonSuperhero);