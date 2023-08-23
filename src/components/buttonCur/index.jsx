import "./Styles.css";

const ButtonCur = ({ onClickButton, text }) => {
  return (
    <div className="divButton">
      <button onClick={onClickButton} className="btn">
        {text}
      </button>
    </div>
  );
};

export default ButtonCur;
