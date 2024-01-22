import { useContext, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isActiveRoute = useParams();
  const { events, user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    userSignOut()
      .then(navigate("/login"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="navbar bg-sky-100 w-full lg:max-w-screen-2xl lg:px-16 mx-auto pb-5">
      <div className="navbar-start">
        <div className="dropdown" onClick={() => setOpen(!open)}>
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* <ul
            tabIndex={0}
            className={` dropdown-content mt-3 p-2 z-[1] ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg w-52`}
          > */}
          {/* <span className="block mx-1 my-1 px-2 rounded-md py-1">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-sky-700 underline rounded-md font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </span> */}
          {/* {events.map((event) => (
              <div
                key={event.id}
                className="block mx-1 my-1 px-2 rounded-md py-1"
              >
                <NavLink
                  to={`/services/${event.id}`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-sky-700 underline rounded-md font-bold"
                      : ""
                  }
                >
                  {event.title}
                </NavLink>
              </div>
            ))} */}
          {/* <span
              className={
                user ? "block mx-1 my-1 px-2 rounded-md py-1" : "hidden"
              }
            >
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-sky-700 underline rounded-md font-bold"
                    : ""
                }
              >
                Profile
              </NavLink>
            </span> */}
          {/* <span
              className={
                user ? "block mx-1 my-1 px-2 rounded-md py-1" : "hidden"
              }
            >
              <NavLink
                to="/user/booked-events"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-sky-700 underline rounded-md font-bold"
                    : ""
                }
              >
                BookedList
              </NavLink>
            </span> */}
          {/* </ul> */}
        </div>
        <Link to="/" className="text-2xl">
          <span className="font-medium font-logoFont">
            Event<span className="text-sky-600">Sync</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <span className="flex mx-2 py-1 font-semibold hover:text-sky-600">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 underline rounded-md font-bold"
                : ""
            }
          >
            Home
          </NavLink>

        </span>
        
        <span className="flex mx-2 py-1 font-semibold hover:text-sky-600">
          <NavLink
            to="/explore"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 underline rounded-md font-bold"
                : ""
            }
          >
            Explore
          </NavLink>
        </span>
       
        <span className="flex mx-2 py-1 font-semibold hover:text-sky-600">
          <NavLink
            to="/create"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 underline rounded-md font-bold"
                : ""
            }
          >
            Create
          </NavLink>
        </span>

        <span className="flex mx-2 py-1 font-semibold hover:text-sky-600">
          <NavLink
            to="/MyEvent"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 underline rounded-md font-bold"
                : ""
            }
          >
            My Events
          </NavLink>
        </span>

        <span className="flex mx-2 py-1 font-semibold hover:text-sky-600">
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 underline rounded-md font-bold"
                : ""
            }
          >
            Profile
          </NavLink>
        </span>

      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center space-x-3">
            <div className="">
              <img
                className="w-10 h-10 rounded-full ml-2"
                src={user.photoURL}
                alt=""
              />
              <p className="text-xs font-logoFont text-center">
                {user.displayName}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-sky-500 hover:bg-sky-300 hover:text-black text-white rounded-md"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-3"
              src="https://i.ibb.co/By0YFNn/default-profile-picture-grey-male-icon.png"
              alt=""
            />
            <button
              onClick={handleLogin}
              className="px-5 py-2 bg-sky-500 hover:bg-sky-300 hover:text-black text-white rounded-md"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;