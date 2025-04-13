import React,{useState} from 'react';
import carIcon from '../images/yellow-car-icon.png';
import heroImage from '../images/black_car.png';
import locationIcon from '../images/yellow-map-icon.png';

const Hero = () => {

  const [num1] = useState(Math.floor(Math.random() * 10));
  const [num2] = useState(Math.floor(Math.random() * 10));
  const [captchaInput, setCaptchaInput] = useState("");


  const isCaptchaCorrect = parseInt(captchaInput) === num1 + num2;

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "64bd3b30-2849-48ea-91f1-f59f18f2145c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='bg-gray-900 flex flex-col items-center mt-5'>

    <section
      className=" h-content md:h-screen  w-full flex  items-center justify-center md:justify-start px-6 md:px-20 lg:px-40 bg-no-repeat bg-top md:bg-right pb-20 filter brightness-150"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(255, 255, 255, 0.05) 100%), url(${heroImage})`,
        backgroundBlendMode: 'soft-light',
        backgroundSize: 'contain',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      {/* Content */}
      <div className="relative z-10 text-white w-full md:w-1/2 mt-48 sm:mt-0">
        <h1 className="text-2xl md:text-5xl font-bold mt-40 mb-6 text-transparent bg-clip-text bg-[length:200%_100%] bg-gradient-to-r from-yellow-500 to-black animate-fillText">
          Tailored Rides for Corporates, Consulates & Global Travelers
        </h1>

        <p className="text-base sm:text-lg mb-8 px-2 sm:px-0">
        We specialize in providing tailored services to a diverse range of clients including corporate, consulates, hotels, and FITs (Foreign Independent Travelers)
        </p>

        {/* Icons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 text-white text-lg">
          {/* <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r-2 border-yellow-600 px-6">
            <img src={carIcon} alt="car icon" className="w-16 sm:w-20 p-2" />
            <span>100+ Vehicles</span>
          </div> */}
          <div className="flex flex-col items-center px-6">
            <img src={locationIcon} alt="location icon" className="w-10 sm:w-20 p-2" />
            <span>Pan India Services</span>
          </div>
        </div>
      </div>
         </section>
          <div className='bg-white p-5 md:p-10 mx-5 mt-32 md:mx-20 md:mt-28 relative -top-40 md:w-5/6 rounded-3xl'>
            <h1 className='text-center text-3xl font-bold text-yellow-600 mb-5'>Book Your Car</h1>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className='md:flex w-full'>
            <div className='md:w-1/2 mb-4 md:mr-2'>
                <input
                  type="text"
                  required='true'
                  placeholder="Your Name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className='md:w-1/2'>
                <input
                  type="email"
                  required='true'
                  name='email'

                  placeholder="your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>
              <div className='w-full md:flex'>
              <div className='md:w-1/2 mb-4 md:mr-2'>
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-yellow-400">
  <span className="px-3 bg-gray-100 text-gray-700 text-sm">+91</span>
  <input
    type="tel"
    required='true'
    placeholder="0000000000"
    name="phone"
    maxLength={10}
    pattern="[0-9]{10}"
    className="w-full px-4 py-3 outline-none"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    }}
  />
</div>
              </div>
              <div className='md:w-1/2'>
                <input
                  type="date"
                  name='date'
                  

                  required='true'
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              </div>
              
              <div className='w-full md:flex'>
              <div className='md:w-1/2 mb-4 md:mr-2'>
                <select
                  required='true'
                  name='serviceType'

                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option>Select Service Type</option>
                  <option>self driven</option>
                  <option>Chauffeur driven</option>

                  </select>
              </div>
              <div className='md:w-1/2'>
                <input
                  required='true'
                  type="number"
                  name='travelers'

                  placeholder="No. of Travellers"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              </div>
              <div className=''>
                <input
                  type="text"
                  name='message'

                  placeholder="Any specific requirement/itinerary"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <label className='text-md mr-5'>Solve Captcha</label>
        <label className="text-sm">
          What is {num1} + {num2}?
        </label>
        <input
          type="number"
          required='true'
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          className="w-20 px-3 py-2 border border-yellow-500 rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
              <button
                type="submit"
                disabled={!isCaptchaCorrect}

                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Send Message
              </button>
              {result}
            </form>
          </div>
    </div>

    
  );
};

export default Hero;
