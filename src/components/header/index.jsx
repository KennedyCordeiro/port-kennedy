import { useState, useEffect } from "react";
import "./Header.styles.css";
import "animate.css";

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [num, setNum] = useState(1);

  const toRotate = [
    "Front-end Developer",
    "Back-end Developer",
    "UI/UX Designer",
    "Software Engineer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setNum((prevNum) => prevNum - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setNum(1);
      setDelta(300);
    } else {
      setNum((prevNum) => prevNum + 1);
    }
  };

  return (
    <div className="banner-content">
      <a className="profile">Kennedy Cordeiro</a>

      <div className="txt-rotate">
        <h3>
          <span className="wrap">{text}</span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
