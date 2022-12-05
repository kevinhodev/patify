import { useState } from "react";
import axios from "axios";
import { RxDownload } from "react-icons/rx";
import { BsPlayCircle } from "react-icons/bs";
import logo from "./assets/logo.png";
import "./App.scss";
import AudioPlayer from "./Components/AudioPlayer";

function App() {
  const [music, setMusic] = useState(null);

  return (
    <div>
      <div className="stars1"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <header>
        <nav className="flex items-center justify-between py-4 px-16">
          <img src={logo} alt="Patify" className="w-[25rem] h-auto" />
          <ul className="flex gap-16 text-white text-2xl cursor-pointer">
            <li className="py-3 px-4 rounded-xl hover:bg-[#fb9f89]">Músicas</li>
            <li className="py-3 px-4 rounded-xl hover:bg-[#fb9f89]">Eventos</li>
            <li className="py-3 px-4 rounded-xl hover:bg-[#fb9f89]">Contato</li>
          </ul>
        </nav>
      </header>
      <h1 className="text-white text-7xl text-center mb-16">Músicas</h1>
      <div className="flex justify-center gap-16 my-16">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-white text-3xl">Tudo novo de novo</h1>
          <AudioPlayer music="http://localhost:3000/music" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-white text-3xl">CORRA!</h1>
          <AudioPlayer music="http://localhost:3000/music1" />
        </div>
      </div>
    </div>
  );
}

export default App;
