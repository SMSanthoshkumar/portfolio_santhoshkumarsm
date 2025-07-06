import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <>
      <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        {/* Text + Skills Section */}
        <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
          {/* Hero Title */}
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8'>
            ABOUT ME
          </h1>

          {/* Hero Description */}
          <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
            I'm a B.Tech IT student passionate about full-stack development, problem-solving, and building real-world projects using React, Spring Boot, and modern web technologies. Always eager to learn.
          </p>

          {/* Skills Section */}
          <div className="mt-12">
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-6'>
              Skills
            </h2>

            <div className="flex flex-col gap-4">
              {/* Spring Boot */}
              <div className="relative group rounded-full overflow-hidden border border-[#2a2a2a]">
                <div className="py-2 px-6 sm:text-lg text-sm font-semibold tracking-wider relative z-10 text-white">
                  Spring Boot
                </div>
                <div className="absolute top-0 left-0 h-full bg-green-500 w-0 group-hover:w-[70%] transition-all duration-500 z-0" />
              </div>

              {/* Spring Boot */}
              <div className="relative group rounded-full overflow-hidden border border-[#2a2a2a]">
                <div className="py-2 px-6 sm:text-lg text-sm font-semibold tracking-wider relative z-10 text-white">
                  React
                </div>
                <div className="absolute top-0 left-0 h-full bg-green-500 w-0 group-hover:w-[60%] transition-all duration-500 z-0" />
              </div>

              {/* MySQL */}
              <div className="relative group rounded-full overflow-hidden border border-[#2a2a2a]">
                <div className="py-2 px-6 sm:text-lg text-sm font-semibold tracking-wider relative z-10 text-white">
                  MySQL
                </div>
                <div className="absolute top-0 left-0 h-full bg-green-500 w-0 group-hover:w-[60%] transition-all duration-500 z-0" />
              </div>

              {/* Python */}
              <div className="relative group rounded-full overflow-hidden border border-[#2a2a2a]">
                <div className="py-2 px-6 sm:text-lg text-sm font-semibold tracking-wider relative z-10 text-white">
                  Python
                </div>
                <div className="absolute top-0 left-0 h-full bg-green-500 w-0 group-hover:w-[60%] transition-all duration-500 z-0" />
              </div>

              {/* Figma */}
              <div className="relative group rounded-full overflow-hidden border border-[#2a2a2a]">
                <div className="py-2 px-6 sm:text-lg text-sm font-semibold tracking-wider relative z-10 text-white">
                  Figma
                </div>
                <div className="absolute top-0 left-0 h-full bg-green-500 w-0 group-hover:w-[60%] transition-all duration-500 z-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Spline 3D Model */}
        <Spline scene="https://prod.spline.design/77DHjXAhq-36DJSH/scene.splinecode" />
      </main>

      {/* Contact Section - Place BELOW the main */}
      <div className="mt-16 w-full text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-6 text-white">
          Contact Me
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-base sm:text-lg text-gray-300">
          {/* Gmail */}
          <a
            href="mailto:smsanthoshkumar2910@gmail.com"
            className="hover:text-white transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className='bx bx-envelope text-xl mr-2'></i>
            smsanthoshkumar2910@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+916374791390"
            className="hover:text-white transition-colors duration-300"
          >
            <i className='bx bx-phone-call text-xl mr-2'></i>
            +91 63747 91390
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
