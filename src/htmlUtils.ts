import type { Movie } from "./models/Movie";

const createHtml = (movies: Movie[]) => {
    const app = document.getElementById("app");

    movies.forEach ((movie) => {
        const heading = document.createElement("h2");
        const subHeading = document.createElement("h4");
        const img = document.createElement("img");

        heading.innerHTML = movie.Title;
        subHeading.innerHTML = movie.Year;
        img.src = movie.Poster;

        app?.appendChild(heading);
        app?.appendChild(subHeading);
        app?.appendChild(img);   
    });
}

