import { useEffect, useRef, useState } from 'react'
import api from '../../api/axiosConfig'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ReviewForm from '../reviewForm/ReviewForm'
import { Movie } from '../../types/movie'
import { Reviews } from '../../types/review'
import { useQuery } from '@tanstack/react-query'

/* type ReviewsProps = {
  getMovieData: () => any
  movie: Movie
  reviews: Reviews[]
  setReviews: 
} */

const Reviews = () => {
  const revText = useRef()
  let params = useParams()
  const movieId = params.movieId

  // Access the client
  const [movies, setMovies] = useState([])

  const getMovieData = async (movieId: string) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`)

      return response
    } catch (error) {
      console.error(error)
    }
  }

  const { data } = useQuery({
    queryKey: ['reviews'],
    queryFn: getMovieData,
    onSuccess: (response) => {
      console.log('Response', response)
    },
  })

  //   useEffect(() => {
  //     getMovieData(movieId)
  //   }, [])

  /* const addReview = async (e) => {
    e.preventDefault()

    const rev = revText.current

    try {
      const response = await api.post('/api/v1/reviews', {
        reviewBody: rev.value,
        imdbId: movieId,
      })

      const updatedReviews = [...reviews, { body: rev.value }]

      rev.value = ''

      setReviews(updatedReviews)
    } catch (err) {
      console.error(err)
    }
  } */

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <img src={movie?.poster} alt='' />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  {/* <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText='Write a Review?'
                  /> */}
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            )
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default Reviews
