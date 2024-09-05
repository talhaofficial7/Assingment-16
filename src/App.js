import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
    return (
        <div className="container">
            <Header />
            <Experience />
            <Education />
            <Skills />
        </div>
    );
}

export default App;
