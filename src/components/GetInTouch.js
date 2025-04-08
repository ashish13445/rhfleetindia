import React from "react";
import contact from '../images/contact.webp'
const GetInTouch = () =>{
return(
<div className="relative h-[60vh] bg-cover bg-center " style={{
      backgroundImage: `linear-gradient(to right,rgb(16, 16, 16), transparent), url(${contact})`,
    }}>
                    <div className="absolute inset-0  p-10 md:p-40 flex flex-col items-center md:items-start justify-center  bg-black bg-opacity-20    hover:hover:opacity-80 rounded-3xl ">
                        <div className="md:w-1/2">
                        <p className="text-white text-3xl md:text-5xl pb-5">Get In Touch</p>
                        <p className="text-white text-md md:text-3xl">Connect with us to experience service beyond expectations.</p>
                        <button className="relative px-6 py-3 my-5  font-bold text-white bg-white border-2 border-black  overflow-hidden group">
      <span className=" absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-0 bg-black group-hover:translate-x-full"></span>
      <span className="relative z-10 transition-colors duration-300 ease-in group-hover:text-black">
        CONTACT US
      </span>
    </button>
                        
</div>

                    </div>
                    </div>
)
}

export default GetInTouch;