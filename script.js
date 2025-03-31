const container = document.getElementById("fact-container");

// Fetch random dog breed names from the Dog CEO API
function fetchDogBreed() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      // Extract the breed name from the image URL (e.g., 'poodle' from 'poodle/1234.jpg')
      const breed = data.message.split("/")[4];
      const image = data.message; // URL of the random dog image

      // Display the breed name and image
      const dogBreedElement = renderBreed(breed, image);
      container.innerHTML = ""; // Clear any previous content
      container.appendChild(dogBreedElement);
    })
    .catch((error) => {
      console.error("Error fetching dog breed data:", error);
      container.innerHTML = "Error fetching dog breed data.";
    });
}

// Render a dog breed name and image
function renderBreed(breed, image) {
  const div = document.createElement("div");
  div.classList.add("fact");

  // Display the dog breed and image
  div.innerHTML = `
    <img src="${image}" alt="Dog breed image" style="max-width: 200px; height: auto;" />
    <p>Breed: ${breed}</p>
  `;
  return div;
}

// Event listener for fetching new dog breeds (Click on "Get New Dog Breed" button)
document.getElementById("fetch-btn").addEventListener("click", fetchDogBreed);

// Initial load: Fetch and display a random dog breed
window.addEventListener("load", fetchDogBreed);
