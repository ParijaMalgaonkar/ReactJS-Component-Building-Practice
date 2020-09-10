import React from 'react';
import logo from './logo.svg';
import './App.css';

import BlogContainer from './Components/Blog/BlogContainer'
import TestimonialContainer from './Components/Testimonials/TestimonialContainer'
import TeamContainer from './Components/Team/TeamContainer'
import AdvisorsContainer from './Components/Advisors/AdvisorsContainer'


function App() {
  return (
    <div className="App">
      <BlogContainer />
      <TestimonialContainer />
      <TeamContainer />
      <AdvisorsContainer />
      
    </div>
  );
}

export default App;
