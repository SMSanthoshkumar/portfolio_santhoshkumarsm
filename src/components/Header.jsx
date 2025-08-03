import 'boxicons/css/boxicons.min.css';

const Header = () => {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    };

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-2xl md:text-3xl lg:text-4xl font-light m-0"
            >
                SANTHOSHKUMAR S M
            </h1>

            <nav className="hidden md:flex items-center gap-12">
                <a
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="text-base tracking-wider transition-colors hover:text-grey-300 z-50"
                    href="https://in.linkedin.com/in/smsanthoshkumar07"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LINKEDIN
                </a>

                <a
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="text-base tracking-wider transition-colors hover:text-grey-300 z-50"
                    href="https://leetcode.com/u/SanthoshkumarSM7x/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LEETCODE
                </a>

                <a
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className="text-base tracking-wider transition-colors hover:text-grey-300 z-50"
                    href="https://github.com/SMSanthoshkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GITHUB
                </a>

                <a
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500"
                    className="text-base tracking-wider transition-colors hover:text-grey-300 z-50"
                    href="https://in.linkedin.com/in/smsanthoshkumar07"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    DOCS
                </a>
            </nav>

            <a href="/smsanthoshkumar_resume.pdf" download>
                <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
                    RESUME
                </button>
            </a>

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i className="bx bx-menu"></i>
            </button>

            {/* Mobile Menu */}
            <div id="mobileMenu" className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
                <nav className="flex flex-col gap-6 items-center">
                    <a className="text-base tracking-wider transition-colors hover:text-grey-300 z-50" href="https://in.linkedin.com/in/smsanthoshkumar07" target="_blank" rel="noopener noreferrer">
                        LINKEDIN
                    </a>

                    <a className="text-base tracking-wider transition-colors hover:text-grey-300 z-50" href="https://leetcode.com/u/SanthoshkumarSM7x/" target="_blank" rel="noopener noreferrer">
                        LEETCODE
                    </a>

                    <a className="text-base tracking-wider transition-colors hover:text-grey-300 z-50" href="https://github.com/SMSanthoshkumar" target="_blank" rel="noopener noreferrer">
                        GITHUB
                    </a>

                    <a className="text-base tracking-wider transition-colors hover:text-grey-300 z-50" href="https://in.linkedin.com/in/smsanthoshkumar07" target="_blank" rel="noopener noreferrer">
                        DOCS
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
