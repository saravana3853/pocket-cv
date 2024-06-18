// Filename - DownloadDoc.js
import React from "react";
import axios from 'axios';

const DownloadDoc = () => {

        const onButtonClick = () => {
               const pdfGenUrl='http://localhost:5003/pdf'
               let data = JSON.stringify({
                       "url": "http://localhost:3000/"
               });

               let config = {
                       method: 'post',
                       maxBodyLength: Infinity,
                       url: pdfGenUrl,
                       headers: { 
                        'Content-Type': 'application/json'
                       },
                       data : data,
                       responseType: 'blob'
               };

               axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
               axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
               axios.request(config)
              .then((response) => {
                  console.log("Successful Download Response");
                  console.log(response.data);
                  const file = new Blob([response.data], { type: "application/pdf" });
                  //Build a URL from the file
                  const fileURL = URL.createObjectURL(file);
                  //Open the URL on new Window
                  const pdfWindow = window.open();
                  pdfWindow.location.href = fileURL;    
               })
              .catch((error) => {
                   console.log('Error in downloading');
                   console.log(error);
              });
         };


	return (
                   <div className="text-center md:text-left">
                        <button className="px-6 py-3 bg-amber-800 text-white rounded-full shadow-lg hover:bg-amber-900" onClick={onButtonClick}>
                                    Download
                        </button>
                    </div>
	);
};

export default DownloadDoc;

