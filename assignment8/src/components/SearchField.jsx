import React, {useState} from 'react';
import axios from 'axios';
import App from './App';
import GifCard from './GifCard';

const SearchField = ({props}) => {
    const [searchTerm, setSearchTerm] = useState("");
    async function fetchGifData(event) {
        event.preventDefault();
         try {
             const Response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=v6usYOFUIzFDJrXo1YXNcdV5U44OchFm`);
             const gifData = Response.data;
             console.log(gifData);
         } catch (error) {
             console.error(error);
         }
     }
    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    }
    
    return (
        <div>
            <h1>Giphy Search</h1>
            <form id="search"> 
                <label>Search</label>
                <input type="text"></input>
                <button type="submit" onClick={fetchGifData}>Search</button>
                <button> Randomize Gif</button>
            </form>
        </div>

    );
}

export default SearchField; 