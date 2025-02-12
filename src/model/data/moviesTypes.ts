interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  popularity: number;
  poster_path: string;
}

interface MovieTypes {
  pending: boolean;
  movies: Movie[];
  errorMessage: string;
}

export type {Movie, MovieTypes};
