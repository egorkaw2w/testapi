import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import SearchMovies from './SearchMovies';
import TopMovies from './templates/html/TopMovies';
import './App.css';
import axios from 'axios';


const API_KEY = "CQCZADV-A6EM78D-GB7RYVT-2YM7NKF";

const searchMovies = async (query) => {
  const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie?keyword=${query}&limit=10`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
  });
  return response.data.films;
};

const getTopMovies = async () => {
  const response = await axios.get('https://api.kinopoisk.dev/v1.4/movie?sortField=year&sortType=-1&limit=250', {
    headers: {
      'X-API-KEY': API_KEY,
    },
  });
  return response.data.films;
};

function App() {
  return (
    <Router>
      <div className="app-content">
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
          <Container>
            <div className='nav-wrapper'>
            <button><Navbar.Brand as={Link} to="/">Фильмы/сериалы</Navbar.Brand></button>
            <Nav className="ml-auto">
              <button><Nav.Link as={Link} to="/top-movies" className="btn btn-outline-light">Топ фильмов</Nav.Link> </button>
            </Nav>
            </div>
          </Container>
        </Navbar>
        <div className="content-wrapper">
          <Container>
            <Routes>
              <Route path="/top-movies" element={<TopMovies />} />
              <Route path="/search" element={<SearchMovies />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
