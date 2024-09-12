import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './components/Home'
// Sample pages for routing
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Services = () => <h2>Services Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;

function App() {
  
  return (
    <Router>
        <Helmet>
        <title> HULU GENERAL COMMISSIONS</title>
        <meta name="description" content="Learn more about HULU General Commissions." />
        <meta name="keywords" content="about, Hulu, general commissions" />
        <meta property="og:title" content="HULU GENERAL COMMISSIONS" />
        <meta property="og:description" content="Learn more about HULU General Commissions." />
      </Helmet>
      {/* <Navbar /> */}a
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes> */}

      <Home/>
    </Router>
  );
}

export default App;
