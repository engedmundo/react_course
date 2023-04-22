import "./styles.css";

export const Button = ({text, onClickMethod, isDisabled }) => {
    return (
      <button 
        onClick={onClickMethod}
        className="button"
        disabled={isDisabled}
        >
        {text}
      </button>
    )   
  }