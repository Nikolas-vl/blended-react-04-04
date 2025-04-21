import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import { getPhotos } from '../apiService/photos';
import Text from '../components/Text/Text';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getPhotos(query, page);
        setImages(prev => [...prev, ...data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const getQuery = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
  };

  return (
    <>
      <Form onSubmit={handleSearch} />
      {error && <p>❌ {error}</p>}
      <PhotosGallery photos={images} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
    </>
  );
};

export default Photos;
