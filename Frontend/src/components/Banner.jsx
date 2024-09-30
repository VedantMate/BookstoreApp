import React from "react";
import banner from "/Banner.png"; // Assuming the banner image is properly imported

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        {/* Text Section */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            {/* Heading with Animation */}
            <h1 className="text-2xl md:text-5xl font-bold animate-slideIn">
              Discover the joy of reading{" "}
              <span className="text-pink-500">something new every day!</span>
            </h1>
            
            {/* Subheading with Slide Animation */}
            <p className="text-sm md:text-xl text-gray-700 animate-fadeIn">
              Explore our wide collection of books from different genres.
              Whether you're into fiction, history, or self-development, we have
              something for everyone. Start your reading journey today!
            </p>
            
            {/* Email Input */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Enter your email to join our book club!" />
            </label>
          </div>
          
          {/* Get Started Button */}
          <button className="btn mt-6 btn-secondary hover:scale-105 transform transition">
            Get Started
          </button>
        </div>

        {/* Banner Image Section */}
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Bookstore Banner"
          />
        </div>
      </div>

      {/* Adding Keyframes for Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-20%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }

        .animate-slideIn {
          animation: slideIn 1s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default Banner;
