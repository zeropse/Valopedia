import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Trick = () => {
  const navigate = useNavigate();

  const [showButtons, setShowButtons] = useState(true);
  const [headingText, setHeadingText] = useState("Choose Any!!!");
  const [gifUrl, setGifUrl] = useState("");

  const handleSurprise = (event) => {
    event.preventDefault();
    navigate("/404");
  };

  const playAudioAndShowGif = () => {
    const audio = new Audio("/audio/rick.mp3");
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });

    setGifUrl(
      "https://i.pinimg.com/originals/75/98/d1/7598d103a735d5568964e4967e42823d.gif"
    );

    setShowButtons(false);
    setHeadingText("Surprise!!! 🎉");
  };

  const buttons = [
    <a href="/404" onClick={handleSurprise} key="surprise-link">
      <button className="bg-[#e0aa3e] hover:bg-[#e8ba5f] px-4 py-2 rounded-md">
        Surprise
      </button>
    </a>,
    <button
      className="bg-[#e0aa3e] hover:bg-[#e8ba5f] px-4 py-2 rounded-md"
      key="surprise-button"
      onClick={playAudioAndShowGif}
    >
      Surprise
    </button>,
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  shuffleArray(buttons);

  return (
    <section className="p-12">
      <h1 className="text-4xl font-bold text-[#e0aa3e] text-center mb-6">
        {headingText}
      </h1>
      {showButtons ? (
        <div className="flex items-center justify-center gap-5">{buttons}</div>
      ) : null}
      {gifUrl && (
        <div id="gif-container" className="flex justify-center mt-4">
          <img src={gifUrl} alt="Surprise Gif" className="mt-4" />
        </div>
      )}
    </section>
  );
};

export default Trick;
