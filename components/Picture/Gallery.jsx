import React from 'react';
import ImageGallery from 'react-image-gallery';



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

export default Gallery;

const images = [
    {
        original: 'img/About/1.jpg',
        thumbnail: 'img/About/1.jpg',
    },
    {
        original: 'img/About/2.jpg',
        thumbnail: 'img/About/2.jpg',
    },
    {
        original: 'img/About/3.jpg',
        thumbnail: 'img/About/3.jpg',
    },
    {
        original: 'img/About/4.jpg',
        thumbnail: 'img/About/4.jpg',
    },
    {
        original: 'img/About/5.jpg',
        thumbnail: 'img/About/5.jpg',
    },
    {
        original: 'img/About/6.jpg',
        thumbnail: 'img/About/6.jpg',
    },
    {
        original: 'img/About/7.jpg',
        thumbnail: 'img/About/7.jpg',
    },
    {
        original: 'img/About/8.jpg',
        thumbnail: 'img/About/8.jpg',
    },
];