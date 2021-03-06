import "./topbar.scss";
import CV from '../../CV.pdf'
// import './app.scss'

import { Person, Mail, CheckBox} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            FePaiva
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 407 2804111</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>felippeapaiva@gmail.com</span>
          </div>
          <div className="itemContainer">
            <CheckBox className="icon" />
            <span><a href={CV}>My CV</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}