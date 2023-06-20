import React, {useState} from 'react';
import axios from 'axios';
import App from './App';
import GifCard from './GifCard';

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [gifData, setGifData] = useState([]);
    async function fetchGifData(event) {
        event.preventDefault();
         try {
             const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=v6usYOFUIzFDJrXo1YXNcdV5U44OchFm`);
             const gifData = response.data.data;
             setGifData(gifData);
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
            <input type="text" onChange={handleSearch} value={searchTerm} />
            <button type="submit" onClick={fetchGifData}>Search</button>
            <button>Randomize Gif</button>
          </form>
          <GifCard gifData={gifData} />
        </div>
      );
}

export default SearchField; 