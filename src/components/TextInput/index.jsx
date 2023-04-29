import "./styles.css";

export const TextInput = ({ searchValue, handleChangeMethod}) => {
    return (
        <input 
            className="test-input"
            onChange={handleChangeMethod}
            value={searchValue}
            type="search"
            placeholder="Type your search"
        />
    )   
  }