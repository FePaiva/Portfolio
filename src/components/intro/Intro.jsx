import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
      console.log('textRef', textRef);
      init(textRef.current, { 
        showCursor: true, 
        backDelay:  1500,
        backSpeed: 60,
        strings: ['Full Stack', 'React', 'Rails', 'Ruby' ] })

  }, [])


  return (
    <div className="intro" id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/FePaiva.png" alt="" />
        </div>
      </div>
      <div className="right">
          <div className="wrapper">
            <h3>Hi! My name is</h3>
            <h1> Felippe Paiva</h1>
            <h3>Software Engineer <span ref={textRef}></span></h3>
            {/* <div className="intro"> */}
            {/* <p>
                I like to be out of my comfort zone and learn new things. That is what made me move to a new country, and now leave my career as a Global Mobility professional to pursue a new passion in coding. 
                <br></br>
                <br></br>
                I decided to trade the mobility role for the coding role when I noticed that I was spending a lot of time with the technology team in previous jobs, sharing my expertise so they could create something that would make our business more efficient. 
                <br></br>
                <br></br>
                It excites me to know that by learning Ruby, Rails, Javascript and React, I can engineer tools and partner with others to build powerful problem solving mechanisms.
                <br></br>
                <br></br>
                My main focus is to integrate technology and people to optimize processes.
            </p> */}
            {/* </div> */}
          </div>
          <a href="#portfolio">
              <img src="assets/down.png" alt="" />
          </a>
      </div>
    </div>
  )
}
