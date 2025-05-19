import React, { useState } from 'react'
import './App.css'
import PostPage from './components/PostPage';
import PostContext from './context/postContext';
import {BrowserRouter, Routes,Route}from "react-router-dom"

function App() {
  
  const [listPosts] = useState(
    [
      { id: 1, title: 'React Basis', content: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.', category: 'FrontEnd' },
      { id: 2, title: 'What is Express.js?', content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.', category: 'Backend' },
      { id: 3, title: 'Run JavaScript Everywhere', content: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.', category: 'Backend' },
      { id: 4, title: 'Build fast, responsive sites with Bootstrap', content: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.', category: 'Frontend' },
    ]
  )

  return (
    <PostContext.Provider value={{ listPost: listPosts }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={PostPage}></Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  )
}

export default App
