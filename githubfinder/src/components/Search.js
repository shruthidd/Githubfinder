import React, {useState} from "react";



const Search = (props) => {
const[text, setText] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    props.searchName(text)
    setText('');
}
return (
    <>
        <form className='form' onSubmit={handleSubmit}>
            <input type ="text" placeholder='seacrh here' value = {text} onChange={ (e) => setText(e.target.value)}></input>
            <input type = "submit" value = "search" className='btn btn-dark btn-block '></input>  
        </form>
        {props.showClear && <button type = "submit"  className="btn btn-light btn-block" onClick={props.clearUser}>clear</button>}
   </> 
)


}

export default Search;