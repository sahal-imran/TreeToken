import React from 'react';
import ImageGallery from 'react-image-gallery';

// const images = [
//     {
//         original: '/assets/1.jpg',
//         thumbnail: '/assets/1.jpg',
//     },
//     {
//         original: '/assets/2.jpg',
//         thumbnail: '/assets/2.jpg',
//     },
//     {
//         original: '/assets/3.jpg',
//         thumbnail: '/assets/3.jpg',
//     },
//     {
//         original: '/assets/4.jpg',
//         thumbnail: '/assets/4.jpg',
//     },
//     {
//         original: '/assets/5.jpg',
//         thumbnail: '/assets/5.jpg',
//     },
//     {
//         original: '/assets/6.jpg',
//         thumbnail: '/assets/6.jpg',
//     },
//     {
//         original: '/assets/7.jpg',
//         thumbnail: '/assets/7.jpg',
//     },
//     {
//         original: '/assets/8.jpg',
//         thumbnail: '/assets/8.jpg',
//     },
// ];

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
        original: 'img/About/slide1.png',
        thumbnail: 'img/About/t1.png',
    },
    {
        original: 'img/About/slide1.png',
        thumbnail: 'img/About/t2.png',
    },
    {
        original: 'img/About/slide1.png',
        thumbnail: 'img/About/t1.png',
    },
    {
        original: 'img/About/slide1.png',
        thumbnail: 'img/About/t2.png',
    },
];