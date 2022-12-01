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
        original: 'img/Gallery/1-min.png',
        thumbnail: 'img/Gallery/1-min.png',
    },
    {
        original: 'img/Gallery/2-min.png',
        thumbnail: 'img/Gallery/2-min.png',
    },
    {
        original: 'img/Gallery/3-min.png',
        thumbnail: 'img/Gallery/3-min.png',
    },
    {
        original: 'img/Gallery/4-min.png',
        thumbnail: 'img/Gallery/4-min.png',
    },
    {
        original: 'img/Gallery/5-min.png',
        thumbnail: 'img/Gallery/5-min.png',
    },
    {
        original: 'img/Gallery/6-min.png',
        thumbnail: 'img/Gallery/6-min.png',
    },
    // {
    //     original: 'img/Gallery/7-min.png',
    //     thumbnail: 'img/Gallery/7-min.png',
    // },
    // {
    //     original: 'img/Gallery/8-min.png',
    //     thumbnail: 'img/Gallery/8-min.png',
    // },
];