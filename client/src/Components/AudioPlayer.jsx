import musicLogo from "../assets/images/music-logo.jpg";

export default function AudioPlayer({ img, music }) {
  return (
    <div className="overflow-hidden relative w-[350px] bg-[#f1f3f4] rounded-3xl shadow-2xl">
      <div className="relative w-full h-[400px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-3xl rounded-r-3xl"
          src={musicLogo}
          alt="Imagem da Música"
        />
        <audio
          controls
          className="absolute bottom-0  w-full outline-none"
          src={music}
          type="audio/mp3"
        ></audio>
      </div>
    </div>
  );
}
