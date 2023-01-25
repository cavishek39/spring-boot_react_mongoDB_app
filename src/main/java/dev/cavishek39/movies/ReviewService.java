package dev.cavishek39.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    /* MongoTemplate is used to create new dynamic query which cannot be done
       using only MongoRepository.
     */
    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {
        System.out.println("Review body " + reviewBody + "Imdb Id " + imdbId);
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Movie.class).matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review)).first();

        return review;
    }
}
