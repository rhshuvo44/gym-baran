import Link from "next/link";

const Navbar = ({ children }) => {
  
  const menu = (
    <>
      <li>
        <Link href="/" className="capitalize rounded">
          home
        </Link>
      </li>
      <li>
        <Link href="/program" className="capitalize rounded">
          program
        </Link>
      </li>
      <li>
        <Link href="/blog" className="capitalize rounded">
          blog
        </Link>
      </li>
      <li>
        <Link href="/about" className="capitalize mr-20 rounded">
          about us
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          className="capitalize btn bg-secondary text-white rounded px-5"
        >
          Log in
        </Link>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar px-20 top-0 fixed bg-base-100 z-50">
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
            <Link href="/">
              <span
                className="bg-primary text-white rounded font-SportingGrotesque
          "
              >
                Gym
              </span>{" "}
              <span className="text-primary px-2">baran</span>
            </Link>
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
