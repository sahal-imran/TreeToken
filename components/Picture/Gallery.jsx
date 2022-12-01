import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'img/1.jpg',
        thumbnail: 'img/1.jpg',
    },
    {
        original: 'img/2.jpg',
        thumbnail: 'img/2.jpg',
    },
    {
        original: 'img/3.jpg',
        thumbnail: 'img/3.jpg',
    },
    {
        original: 'img/4.jpg',
        thumbnail: 'img/4.jpg',
    },
    {
        original: 'img/5.jpg',
        thumbnail: 'img/5.jpg',
    },
    {
        original: 'img/6.jpg',
        thumbnail: 'img/6.jpg',
    },
    {
        original: 'img/7.jpg',
        thumbnail: 'img/7.jpg',
    },
    {
        original: 'img/8.jpg',
        thumbnail: 'img/8.jpg',
    },
];

function Gallery() {
    return (
        <>
            <div className="relative w-full h-[calc(100vh-80px)] ">
                <div className="max-w-[1440px] md:px-6 px-3 m-auto w-full h-full flex justify-center items-center flex-col ">
                    <ImageGallery showNav={false} items={images} />
                </div>
            </div>
        </>
    )
}

export default Gallery