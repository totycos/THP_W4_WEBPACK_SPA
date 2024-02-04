import React from 'react';
import Image from '../Image'
import './index.scss'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Images = ({ response, loading, error }) => {
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 350: 2, 750: 3, 900: 4 }}>
      <Masonry gutter={"8px"} className='cardContainer'>
        {response.map((imageData) => (
          <Image data={imageData} key={imageData.id} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Images;
