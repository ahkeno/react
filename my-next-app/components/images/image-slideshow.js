'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import classes from './image-slideshow.module.css';

const images = [
  { image: 'burgerImg', alt: 'A delicious, juicy burger' },
  { image: 'curryImg', alt: 'A delicious, spicy curry' },
  { image: 'dumplingsImg', alt: 'Steamed dumplings' },
  { image: 'macncheeseImg', alt: 'Mac and cheese' },
  { image: 'pizzaImg', alt: 'A delicious pizza' },
  { image: 'schnitzelImg', alt: 'A delicious schnitzel' },
  { image: 'tomatoSaladImg', alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
       
        <h1  className={index === currentImageIndex ? classes.active : classes.hide} key={index}>{image.alt}</h1>
       
      ))}
    </div>
  );
}