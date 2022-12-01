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
        original: 'img/Gallery/1.jpg',
        thumbnail: 'img/Gallery/1.jpg',
    },
    {
        original: 'img/Gallery/2.jpg',
        thumbnail: 'img/Gallery/2.jpg',
    },
    {
        original: 'img/Gallery/3.jpg',
        thumbnail: 'img/Gallery/3.jpg',
    },
    {
        original: 'img/Gallery/4.jpg',
        thumbnail: 'img/Gallery/4.jpg',
    },
    {
        original: 'img/Gallery/5.jpg',
        thumbnail: 'img/Gallery/5.jpg',
    },
    {
        original: 'img/Gallery/6.jpg',
        thumbnail: 'img/Gallery/6.jpg',
    },
    {
        original: 'img/Gallery/7.jpg',
        thumbnail: 'img/Gallery/7.jpg',
    },
    {
        original: 'img/Gallery/8.jpg',
        thumbnail: 'img/Gallery/8.jpg',
    },
];