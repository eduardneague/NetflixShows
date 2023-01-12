// import react

import { useState } from 'react'
import React from 'react'

// import css

import './App.css'
import './reset.css'
import './font.css'

// import components

import Show from '../public/components/Show'

// import data

import netflixShows from '../netflixShows'

function App() {

  const data = netflixShows;

  const shows = data.map((show) => {
    if(show.id && show.title && show.coverImg) {
      return(<Show
        key = {show.id}
        show = {show}
      />)
    }
  })

  return (
    <div>
      <div className="container">

        <div className="logo--container">
            <img className = "logo--netflix" src="./src/assets/netflixLogo.png"/>
        </div>

        <h1 className = "title">Favorite Netflix Shows</h1>

        <div className="show--container">
            {shows}
        </div>
        </div>
    </div>
  )
}

export default App
