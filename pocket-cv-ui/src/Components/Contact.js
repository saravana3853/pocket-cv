// Contact.js


import React from "react";
import Divider from "./Divider";

const Contact = () => {
    return (

       <div id="about" 
             className="flex flex-col
                         w-full h-screen bg-gradient-to-b
                        from-white to-gray-400">
    
            <div className="flex flex-row   bg-gray-300  h-1/4  p-8">
                <img
                    src=
"https://lkart-assests.s3.amazonaws.com/phone-call.png"
                    alt="About Us" className='object-left  object-scale-down h-24 w-48'/>
                <div className="p-8">
                   <h1 className="text-4xl font-bold text-gray-800 mb-6">
                             <span className="text-amber-800">
                                 9632200338
                             </span>
                   </h1>
                </div>
            </div>
          
            <div className="flex flex-row  bg-gray-300  h-1/4  p-8">
                <img
                    src=
"https://lkart-assests.s3.amazonaws.com/email (1).png"
                    alt="About Us" className='object-left object-contain h-24 2-48'
                    
                />
                <div className="p-8"> 
                  <h1 className="text-4xl font-bold text-gray-800 mb-6">
                             <span className="text-amber-800">
                                 saravana3853@gmail.com
                             </span>
                 </h1>
                </div>
            </div>
            <div className="flex flex-row  bg-gray-300  h-1/4  p-8">
                <img
                    src=
"https://lkart-assests.s3.amazonaws.com/whatsapp.png"
                    alt="About Us" className='object-left object-contain h-24 w-48'

                />
                    <img
                    src=
"https://lkart-assests.s3.amazonaws.com/wlink.png"
                    alt="About Us" className='object-left object-contain h-24 w-48'

                />
            </div>
            <Divider/>
            <div className="flex flex-row  bg-gray-400  h-1/4  p-8">
               <a href="https://www.linkedin.com/in/saravanaraj-mariappan-967b3217">
                 <img src="https://lkart-assests.s3.amazonaws.com/in.png"
                    alt="About Us" className='object-left object-contain h-12 w-24'

                />
                </a>
               <a href="https://github.com/saravana3853">
                <img
                    src=
"https://lkart-assests.s3.amazonaws.com/github.png"
                    alt="About Us" className='object-left object-contain h-12 w-24'

                />
               </a>
               <a href="https://stackoverflow.com/users/459297/saravana">
                <img
                    src=
"https://lkart-assests.s3.amazonaws.com/stack.png"
                    alt="About Us" className='object-left object-contain h-12 w-24'

                />
               </a>
            </div>
       </div>
    );
};


export default Contact;
