import React from 'react';
import logo from './logo.svg';
import './App.css';

import BlogContainer from './Components/Blog/BlogContainer'
import TestimonialContainer from './Components/Testimonials/TestimonialContainer'

function App() {
  return (
    <div className="App">
      <BlogContainer />
      <TestimonialContainer />
      
    </div>
  );
}

export default App;
