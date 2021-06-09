import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('car');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=21996305-de690d8b5fa92d58de684ebc7&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, [term])


  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {
        !isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32 text-white">No Images Found</h1>}

      {
        isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="mx-auto mb-2 md:grid grid-cols-3 gap-4">
          {
            images.map((image, index) => <ImageCard key={image.id} image={image} index={index} />)
          }
        </div>
      }
    </div>
  );
}

export default App;
