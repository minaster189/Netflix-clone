import React from 'react';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import requests from './requests';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      {/* Row */}
      <Row isLargeRow={true} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Animation" fetchUrl={requests.fetchAnimation}/>
    </div>
  );
}

export default App;
