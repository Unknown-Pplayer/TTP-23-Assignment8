import React from 'react';

const GifCard = ({ gifData }) => {
  return (
    <div>
      {gifData && gifData.map((gif) => (
        <div key={gif.id}>
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
}

export default GifCard;
