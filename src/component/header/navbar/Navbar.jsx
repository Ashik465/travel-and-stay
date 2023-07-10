import logo from "../../../assets/picture/logo.png";
import eng from "../../../assets/picture/eng.png";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <a>HOME</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>FEATURES</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>PAGES</a>
      </li>
      <li>
        <a>TOURS</a>
      </li>
      <li>
        <a>CARS</a>
      </li>
      <li>
        <a>HOTEL</a>
      </li>
      <li>
        <a>FLIGHTS</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
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
            <div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
              >
                <ul className="lg:flex gap-3">
                  <li>
                    <a>HOTELS</a>
                  </li>
                  <li>
                    <details>
                      <summary>USD</summary>
                      <ul className="p-2">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li className="flex justify-center lg:items-center gap-2">
                    <div>
                      <img src={eng} alt="" />
                    </div>
                    <div>
                      <details>
                        <summary>EN</summary>
                        <ul className="p-2">
                          <li>
                            <a>Submenu 1</a>
                          </li>
                          <li>
                            <a>Submenu 2</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </li>
                </ul>

                {navOption}
              </ul>
            </div>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">


    
     {navOption}
    </ul> */}

          <div>
            <ul className="lg:flex gap-3">
              <li>
                <a>HOTELS</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>USD</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>

              <li className="flex justify-center lg:items-center gap-2">
                <div>
                  <img src={eng} alt="" />
                </div>
                <div>
                  <details>
                    <summary>EN</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </div>
              </li>
            </ul>
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
          </div>
        </div>
        <div className="navbar-end">
         
          <div className="flex flex-col">
            <a >sign Up / sign In</a>
            <button className="btn btn-ghost btn-circle ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
