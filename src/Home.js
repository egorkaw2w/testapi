import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './templates/css/Home.css';

const API_KEY = "CQCZADV-A6EM78D-GB7RYVT-2YM7NKF";

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="home-container">
      <div className="search-form">
        <Form onSubmit={handleSearch}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Поиск фильмов/сериалов</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите название"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Поиск
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Home;