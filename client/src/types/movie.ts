export interface Movie {
  id: string
  imdbId: string
  title: string
  releaseDate: string
  trailerLink: string
  poster: string
  genres: Array<string>
  backdrops: Array<string>
  reviewIds: Array<string>
}
