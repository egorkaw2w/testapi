import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../css/MovieCard.css'; // Импорт CSS файла

function MovieCard({ movie }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="movie-card">
        {movie.poster && movie.poster.url && <Card.Img variant="top" src={movie.poster.url} alt={movie.name} />}
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;