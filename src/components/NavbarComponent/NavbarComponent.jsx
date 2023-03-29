import React from 'react';

export default function Navbar({ options }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { home, services, projects, about, blog, letsTalk } = options;

  return (
    <>
      <nav className="relative flex font-main flex-wrap items-center bg-white dark:bg-black pl-20 pr-20 pt-5 pb-5">
        <div className="container px-4 mx-auto flex flex-wrap items-center">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="text-xl font-thin leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black dark:text-white">
              XFOLIO.
            </div>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-black dark:text-white"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs leading-snug text-black dark:text-white hover:opacity-75"
                  href={home}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-black dark:text-white opacity-75"></i>
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs leading-snug text-black dark:text-white hover:opacity-75"
                  href={services}
                >
                  <i className="fab fa-twitter text-lg leading-lg text-black dark:text-white opacity-75"></i>
                  <span>Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs leading-snug text-black dark:text-white hover:opacity-75"
                  href={projects}
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black dark:text-white opacity-75"></i>
                  <span>Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs leading-snug text-black dark:text-white hover:opacity-75"
                  href={about}
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black dark:text-white opacity-75"></i>
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs leading-snug text-black dark:text-white hover:opacity-75"
                  href={blog}
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black dark:text-white opacity-75"></i>
                  <span>Blog</span>
                </a>
              </li>
              <div className="nav-item">
                <a
                  className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white dark:text-black dark:bg-white bg-black mt-4 lg:mt-0"
                  href={letsTalk}
                >
                  <i className="fab fa-pinterest text-md leading-md text-black dark:text-white opacity-75"></i>
                  <span>LET'S TALK</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
