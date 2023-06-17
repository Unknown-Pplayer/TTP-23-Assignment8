import React, {useState} from 'react';
import axios from 'axios';

const SearchField = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
          
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={searchTerm} 
            onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>

    );
}

export default SearchField; 