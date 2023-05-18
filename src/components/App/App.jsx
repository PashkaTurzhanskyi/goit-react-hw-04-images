import React, { useState, useEffect } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import css from './App.module.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34756481-ec8746fc3857b8c268e985924';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState('');

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      fetch(
        `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&${searchParams}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error('There is no results for {this.state.searchQuery}')
          );
        })
        .then(images => {
          setImages(prev => [...prev, ...images.hits]);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }
  }, [searchQuery, page]);

  const toggleModal = () => setShowModal(prev => !prev);

  const formSubmitHandler = value => {
    if (searchQuery !== value) {
      setImages([]);
      setSearchQuery(value);
      setPage(1);
    } else {
      alert(`You are already viewing the results on request "${searchQuery}"`);
    }
  };

  const onPageChange = () => setPage(prev => prev + 1);

  const onChoseImage = large => {
    setImageModal(large);
    toggleModal();
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={formSubmitHandler} />

      {error && <h1>There is no results for {searchQuery}</h1>}

      {loading && <Loader />}

      {images && <ImageGallery images={images} onChoseImage={onChoseImage} />}

      {images.length !== 0 && !loading && (
        <Button onPageChange={onPageChange} />
      )}

      {showModal && <Modal largeImage={imageModal} onClose={toggleModal} />}
    </div>
  );
};
