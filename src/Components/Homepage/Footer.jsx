import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";

const Footer = () => {
  const { events } = useContext(AuthContext);
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="footer p-4 lg:p-10 max-w-screen-xl mx-auto text-gray-400 flex justify-around">
          <nav>
            <header className="footer-title text-base lg:text-xl">
              Categories
            </header>
            {events.map((event) => (
              <Link
                to={`/services/${event.id}`}
                key={event.id}
                className="text-xs lg:text-base hover:underline"
              >
                {event.title}
              </Link>
            ))}
          </nav>
          <nav>
            <header className="footer-title text-base lg:text-xl">
              Company
            </header>
            <a className="link link-hover text-xs lg:text-base">About us</a>
            <a className="link link-hover text-xs lg:text-base">Contact Us</a>
            <a className="link link-hover text-xs lg:text-base">Donate</a>
          </nav>
          <nav>
            <header className="footer-title text-base lg:text-xl">
              Social Media
            </header>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current w-4 lg:w-8"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current w-4 lg:w-8"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current w-4 lg:w-8"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>
      <div className="footer footer-center pb-5 -mt-2 lg:-mt-5 bg-gray-900 text-xs lg:text-base text-gray-400">
        <aside>
          <p>
            Copyright © 2024 - All right reserved by{" "}
            <span className="text-lg font-semibold text-stone-400 hover:text-blue-900 hover:underline ">
              <span className="font-logoFont font-medium">
                Event<span className="text-sky-500">Sync</span>
              </span>
            </span>
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
