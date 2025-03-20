const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevents page refresh
  
      const input = document.querySelector("input#searchByID");
  
      fetch(`http://localhost:5000/movies/${input.value}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {
          // Target the elements where we'll display movie details
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update content
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // If the movie is not found, show an error message
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Movie not found";
          summary.innerText = "";
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  