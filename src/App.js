import React, { useState } from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/Footer';
import MovieContainer from './Components/MovieContainer';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import movieData from './Components/data.json';
import './Components/MovieContainer.module.css';
import './Components/header.css';
import './Components/Footer.css';
import './Components/Sidebar.css';
import './Components/Content.css';

function App() {
  const sections = ['Movies', 'TV Shows', 'Favorites'];
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleSelectSection = (section) => {
    console.log('Selected section:', section);
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Sidebar sections={sections} onSelectSection={handleSelectSection} />
        <div className="content-container">
          <MovieContainer movies={movieData[selectedSection]} />
          <Content selectedSection={selectedSection} data={movieData} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;