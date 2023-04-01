import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventScreen from "./screens/EventScreen";
import Flipbook from "./components/Flipbook";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";



const App = () => {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Routes>
        <Route path='/' element={ <HomeScreen/> } />
        <Route path='/events' element={ <EventScreen/> } />
        <Route path='/pizada' element={ <Flipbook/> } />
        <Route path='/contactus' element={ <ContactScreen/> } />
        </Routes>
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
