import { useState } from "react";
import "./style.css";

const Search = (props) =>{

    const {getDataFromSearchComponent} = props;

    const [inputValue, setInputValue] = useState('')

    const handleInputvalue = (e) =>{
        const value = e.target.value;
        setInputValue(value);
    }
    console.log(inputValue);

    const handleSubmit =(e)=>{
        e.preventDefault();
        getDataFromSearchComponent(inputValue);
    }
    return(
        <form onSubmit={handleSubmit} className="Search">
          <input name="search" onChange={handleInputvalue} value={inputValue} placeholder="Search Recipies" id="search"/>
          <button type="submit">Search</button>
        </form>
    )
}
export default Search