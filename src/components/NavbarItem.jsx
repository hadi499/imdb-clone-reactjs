import { useState } from "react";

export default function NavbarItem({ title, param }) {
  const [genre, setGenre] = useState(null);

  // Retrieve the "genre" parameter from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const genreFromUrl = urlParams.get("genre");

  // Set the "genre" state based on the parameter in the URL query string
  if (genreFromUrl !== genre) {
    setGenre(genreFromUrl);
  }

  return (
    <div>
      <a
        href={`/?genre=${param}`}
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
      >
        {title}
      </a>
    </div>
  );
}
