import React from 'react'
import './testimonials.scss'

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Defne Çelikoyar",
      title: "Software Engineer at Flatiron School",
      img: "https://avatars.githubusercontent.com/u/80297720?v=4",
      icon: "assets/twitter.png",
      desc:
        "Felippe is an excellent software engineer and overall a great human being. While it was clear from the very beginning that Felippe had a knack for code, I was lucky to witness his growth throughout our bootcamp. I worked with him on nearly every project and got to see for myself the work he put into our projects, the time he dedicated to studying, the determination and curiosity with which he approached each problem. By the time our capstone projects were due, Felippe had developed and presented by far one of the most impressive apps in our class. It was a joy to work with him every step of the way, and I am looking forward to what he accomplishes next!",
      featured: true,
    },
    {
      id: 2,
      name: "Caleb Rodriguez",
      title: "Software Engineer",
      img: "https://avatars.githubusercontent.com/u/92968001?v=4",
      icon: "assets/youtube.png",
      desc:
        "Working with Felippe was amazing and I would recommend it. Whenever I ran into a error or coding problem he was always there to try and find the solution. His final project GlassMeds was an amazing idea that was well executed. If you need someone ready to learn with great Skills in React, Rails and many more, this man here is that person. ",
        featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img 
                className="left"
                src="assets/right-arrow.png" 
                alt="" 
              />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img 
                className="right" 
                src={d.icon} 
                alt="" 
              />
            </div>
            <div className="center">
                {d.desc}
            </div>
              <div className="bottom">
               <h3>
                 {d.name}
               </h3>
              <h4>
                {d.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
