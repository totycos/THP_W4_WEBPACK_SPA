import React from 'react';
import { useState } from 'react';
import Image from '../Image'
import Modal from '../Modal';
import './index.scss'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Images = ({ response, loading, error }) => {

  const [selectedImageData, setSelectedImageData] = useState(null);

  const openModal = (imageData) => {
    setSelectedImageData(imageData);
  };

  const closeModal = () => {
    setSelectedImageData(null);
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 350: 2, 750: 3, 900: 4 }}>
      <Masonry gutter={"8px"} className='cardContainer'>
        {response.map((imageData) => (
          <Image data={imageData} key={imageData.id} onClick={() => openModal(imageData)} />
        ))}
        {selectedImageData && <Modal data={selectedImageData} onClose={closeModal} />} 
      </Masonry>
    </ResponsiveMasonry>
  );
}; // selectedImageData &&  = Si selectedImageData existe (ou different de null)

export default Images;
