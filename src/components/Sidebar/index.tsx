import Image from "next/image";
import { SidebarStyles } from "./styles";

export default function Sidebar() {
  return (
    <SidebarStyles>
        <div className="container">
        <div className="aside">
            <div className="logo">
            <Image src="/images/logo-pokedex.png" width="230px" height="50px" alt="logo-pokedex" />
            </div>
            <div className="text">
                <p>Everything you wanted to know about your favorite pocket monsters!</p>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <div className="content">
                <ul>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                    <li>#001 - Bulbasaur</li>
                </ul>
            </div>
        </div>
      <div className="main">
        <div className="part1">
          <h1>#001 - BULBASAUR</h1>
          <div className="card"></div>
          <div className="type">
            <p>Type</p>
            <button>GRASS</button>
            <button>POISON</button>
          </div>
          <div className="heightAndWeight">
            <div className="height">
              <p>height: 2'04'' / 0.7m</p>
            </div>
            <div className="weight">
              <p>weight: 15.2lbs. / 6.9kg</p>
            </div>
          </div>
          <div className="attributes">
            <p>Attributes</p>
            <div className="up">
              <button>45 HP</button>
              <button>45 SPEED</button>
              <button>49 ATK</button>
            </div>
            <div className="down">
              <button>49 DEF</button>
              <button>65 SP. ATK.</button>
              <button>65 SP. DEF.</button>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="evolution">
            <p>Evolution</p>
            <div className="images"></div>
          </div>
          <div className="text2">
            <p></p>
          </div>
        </div>
      </div>
      </div>
    </SidebarStyles>
  );
}
