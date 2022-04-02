import { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from "../portfolioList/PortfolioList";
import { glassmedsPortfolio,
  slippyPortfolio,
  instapauloPortfolio,
  flatspacePortfolio,
  blogPortfolio} from "../../data"

export default function Portfolio() {

    const [selected, setSelected]= useState("glassmeds")
    const [data, setData]= useState([])

    const list = [
      {
        id: "glassmeds",
        title: "GlassMeds",
      },
      {
        id: "slippy",
        title: "Slippy Game",
      },
      {
        id: "instapaulo",
        title: "Insta Paulo Gallery",
      },
      {
        id: "flatspace",
        title: "Flatspace",
      },
      {
        id: "blog",
        title: "Blog",
      },
    ];

    useEffect(()=>{

      switch(selected){
          case "glassmeds":
          setData(glassmedsPortfolio);
          break;
          case "slippy":
          setData(slippyPortfolio);
          break;
          case "instapaulo":
          setData(instapauloPortfolio);
          break;
          case "flatspace":
          setData(flatspacePortfolio);
          break;
          case "blog":
          setData(blogPortfolio);
          break;
        default:
          setData(glassmedsPortfolio)
      }

    }, [selected])

  return (
    <div className="portfolio" id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
          {list.map(item=>(
              <PortfolioList 
              title={item.title} 
              active={selected ===item.id} 
              setSelected={setSelected}
              id={item.id}
              />
          ))}
      </ul>
      <div className="container">
            {data.map(d=>( 
        <div className="item">
          <img 
          src={d.img}
          alt="" 
          />
         <h3>{d.title}</h3>
        </div>
            ))}
      </div>
    </div>
  )
}
