import { useState } from "react";
import './works.scss'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/game.png",
      title: "Slippy",
      demo: "assets/sleepy.mp4",
      description1:
        "Retro clicker game about a slime named Slippy.",
      description2: "Go to his house and discover what he can do.",
      img:
        "assets/IdleBedroom.gif",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0);
  };
  return (
    <div className='works' id='works'>
        <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
              {data.map(d=> (
                <div className="container">
                  <div className="item">
                      <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img 
                                    src={d.icon} 
                                    alt=""
                                    />
                                </div>
                                <h2>
                                  {d.title}
                                </h2>
                                <p>
                                  {d.description1}
                                  <br></br>
                                  <br></br>

                                  {d.description2}
                                </p>
                                <span><a href={d.demo}>Demo</a></span>
                            </div>
                      </div>
                      <div className="right">
                          <img 
                          src={d.img} 
                          alt=""
                          />
                      </div>
                  </div>         
              </div>
              ))}
        </div>
        <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
