import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    const res = await fetch(`${config.backendEndpoint}`);
    const data = await res.json();
    //  console.log(data);
    return data;
  }
  catch(err){
    throw new Error(err);
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let target = document.getElementById("data");
  let newDivElement = document.createElement("div");
  newDivElement.className="col-sm-6 col-lg-3 mb-4 tile";
  let divEleText = document.createElement("div");
  divEleText.className="tile-text text-center";
  
  newDivElement.innerHTML=`<a href="pages/adventures/?city=${id}"><p>${city}</p><img src="${image}" class = "img-responsive" alt="imageTag">
  `
  target.appendChild(newDivElement);
}

export { init, fetchCities, addCityToDOM };
