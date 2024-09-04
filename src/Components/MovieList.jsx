import { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://hoblist.com/api/movieList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data && data.result) {
          setMovies(data.result);
          console.log(data)
        } else {
          console.error("Unexpected data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Movie List</h2>
        <div className="space-y-4">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white p-4 rounded shadow-md flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold">{movie.title} ({movie.stars.join(", ")})</h3>
                <p>{movie.director.join(", ")}</p>
                <p>{movie.genre}</p>
                <p>{movie.language}</p>
                <p>{movie.description}</p>
              </div>
              <div className="md:w-1/3 text-center">
                <p>Votes: {movie.voting}</p>
              </div>
              <div className="md:w-1/3 flex justify-end">
              <img src={movie.poster} alt="" className="aspect-square w-48 rounded-lg shadow-md object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
