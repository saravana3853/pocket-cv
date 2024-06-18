// Home.js

import React from "react";
import DownloadDoc from "./DownloadDoc";

const HomePage = () => {
    return (
        <div id="home" 
             className="w-full min-h-screen p-8 flex 
                         items-center bg-gradient-to-b 
                        from-white to-gray-400">
            <div className="max-w-7xl mx-auto md:flex 
                            md:flex-row-reverse md:items-center">
                <div className="md:w-1/2 md:pr-8 md:h-1/4 my-11">
                    <img
                        src="https://lkart-assests.s3.amazonaws.com/resume_icon.jpeg"
                        alt="Home"
                        className="w-1/2 h-1/4 object-cover"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <div className="md:w-1/2 md:pr-8 md:h-1/4 my-11">
                          <img
                              src="https://media.licdn.com/dms/image/D5635AQE-VxNT-H8LTQ/profile-framedphoto-shrink_400_400/0/1715434008912?e=1716040800&v=beta&t=i2jiRSAETKtRaTp9AfBmXZsbRwDTPuQT3s1qYxua4-0"
                              alt="Home"
                              className="w-1/2 h-1/4 object-cover"
                           />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">
                             <span className="text-amber-800">
                                 Saravanaraj Mariappan
                             </span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Engineering Leader | Fintech | Digital Lending | BNPL | Insurance | Cross Sell | Compliance & Support
                        </p>
                    </div>
                    <DownloadDoc/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

