package dev.cavishek39.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    // Let the framework know that we wanted to instantiate the class
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    // Get a Movie by its ID. In some cases it might return null, so Optional
    public Optional<Movie> movieById(String id) {
        return movieRepository.findMovieByImdbId(id);
    }
}
