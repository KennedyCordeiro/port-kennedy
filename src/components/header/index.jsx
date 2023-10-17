import { useState, useEffect } from "react";
import "animate.css";
import * as C from "./Header.styled";

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [num, setNum] = useState(1);
  const TextTitle = "<Kennedy Cordeiro />";

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
    <C.BannerContent>
      <C.Profile>
        {TextTitle}
        {/* <span /> */}
      </C.Profile>
      <C.TxtRotate>
        <C.BannerH3>
          <C.Wrap>{text}</C.Wrap>
        </C.BannerH3>
      </C.TxtRotate>
    </C.BannerContent>
  );
};

export default Header;
