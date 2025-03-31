const container = document.getElementById("fact-container");

async function fetchDogBreed() {
  try {
    container.innerHTML = "Fetching a new pup..."; // Loading feedback
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response:", data); // Debug
    const image = data.message;
    const breed = image.split("/")[4]?.split("-")[0] || "Unknown"; // Safely extract breed
    console.log("Breed:", breed, "Image:", image); // Debug
    const dogBreedElement = renderBreed(breed, image);
    container.innerHTML = ""; // Clear container
    container.appendChild(dogBreedElement);
  } catch (error) {
    console.error("Error fetching dog breed:", error);
    container.innerHTML = "Oops! Couldn’t fetch a pup. Try again!";
  }
}

function renderBreed(breed, image) {
  const div = document.createElement("div");
  div.classList.add("fact");
  div.innerHTML = `
    <img src="${image}" alt="Dog breed: ${breed}" style="max-width: 200px; height: auto;">
    <p>Breed: ${breed}</p>
  `;
  console.log("Rendered image URL:", image); // Debug
  return div;
}

// Fetch on button click
document.getElementById("fetch-btn").addEventListener("click", fetchDogBreed);

// Fetch on page load
window.addEventListener("load", fetchDogBreed);

// Toggle Puppy Mode
document.getElementById("mode-toggle").addEventListener("change", (e) => {
  document.body.classList.toggle("puppy-mode", e.target.checked);
});
