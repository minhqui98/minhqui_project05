import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail';
import ErrorPage from './components/ErrorPage';
import UserProvder from './context';
import Login from './components/Login/login';
import "antd/dist/antd.css";

const App = () => (

  <Router>
    <UserProvder>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<MovieDetail />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <GlobalStyle />
      <Footer />
    </UserProvder>
  </Router>
);

export default App;
