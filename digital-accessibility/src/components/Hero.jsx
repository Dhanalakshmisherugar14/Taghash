import React from "react";
import heroimg from "../assets/Web-Accessibility.png";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-4 sm:pb-24 
                      lg:flex lg:items-center lg:px-8 lg:py-12">

        {/* LEFT CONTENT */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl 
                        lg:flex-shrink-0 lg:pt-0">

          <div className="mt-6 sm:mt-12 lg:mt-0">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 
                               text-sm font-semibold leading-6 text-blue-600 
                               ring-1 ring-inset ring-blue-600/10">
                DIGITAL ACCESSIBILITY
              </span>
            </a>
          </div>

          {/* Heading slightly smaller */}
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold tracking-tight 
                       text-gray-900 sm:text-6xl"
          >
            Create Accessible, <br /> Inclusive &amp; Compliant Investor Platforms.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Align every digital interaction with SEBI’s mandatory 
            accessibility requirements.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm 
                         font-semibold text-white shadow-sm hover:bg-blue-500 
                         focus-visible:outline focus-visible:outline-2 
                         focus-visible:outline-offset-2 
                         focus-visible:outline-blue-600
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Start Your Accessibility Audit
            </a>

           
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="mx-auto mt-12 flex max-w-2xl sm:mt-16 
                        lg:ml-5 lg:mt-0 lg:mr-0 lg:max-w-none 
                        lg:flex-none xl:ml-12 justify-center lg:justify-start">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="lg:rounded-2xl">

              {/* Image slightly bigger */}
              <img
                src={heroimg}
                alt="Accessibility Illustration"
                className="w-full max-w-lg rounded-md mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
