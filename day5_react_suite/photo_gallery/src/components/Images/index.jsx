import React, { useEffect } from 'react';
import useUnsplashApi from '../../hooks/useUnsplashApi';
import Image from '../Image'
import './index.scss'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Images = () => {
  const { data, loading, error } = useUnsplashApi();

  useEffect(() => {
    // Effect code here (e.g., update state based on API response)
    if (data && data.length > 0) {
        console.log(`data slug : ${data[0].slug}`);
      }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{200: 1, 350: 2, 750: 3, 900: 4}}>
        <Masonry gutter={"8px"} className='cardContainer'>
        {data.map((imageData) => (
            <Image data={imageData} key={imageData.id} />
        ))}
        </Masonry>
    </ResponsiveMasonry>
  );
};

export default Images;
