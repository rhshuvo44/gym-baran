const Navbar = ({ children }) => {
  const menu = (
    <>
      <li>
        <a className="capitalize">home</a>
      </li>
      <li>
        <a className="capitalize">program</a>
      </li>
      <li>
        <a className="capitalize">blog</a>
      </li>
      <li>
        <a className="capitalize">about us</a>
      </li>
      <li>
        <a className="capitalize btn bg-secondary text-white">Log in</a>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300 px-20">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span
              className="bg-primary text-white rounded
          "
            >
              Gym
            </span>{" "}
             <span className="text-primary px-2">baran</span>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {menu}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
