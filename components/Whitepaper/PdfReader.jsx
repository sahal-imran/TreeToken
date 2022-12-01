import React from 'react';
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function pdfReader() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <div className="relative w-full h-[calc(100vh-80px)] ">
                <div className="max-w-[1440px] md:px-6 px-3 m-auto w-full h-full">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                        <div className='h-[calc(100vh-80px)]' >
                            <Viewer
                                fileUrl="/files/whitepaper.pdf"
                                plugins={[defaultLayoutPluginInstance]}
                            />
                        </div>
                    </Worker>
                </div>
            </div>
        </>
    )
}

export default pdfReader