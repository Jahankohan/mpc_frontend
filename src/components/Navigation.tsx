import "./Navigation.css";
function Navigation() {
  return (
    <div className="content-all relative">
      <div className="header fixed">
        <nav
          className="navbar navbar-expand-lg bg-dark px-3"
          data-bs-theme="dark"
        >
          <div className="container-fluid ">
            <a className="navbar-brand me-5" href="#">
              tokenex
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-0">
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    What is Tokenex
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    Platform
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    Solutions
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link " href="#">
                    Resources
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link " href="#">
                    About
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link " href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ">
                <li className="nav-item d-flex">
                  <svg
                    className="relative top-10"
                    width="30px"
                    height="30px"
                    viewBox="0 -4 30 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 17L21 21"
                      stroke="#323232"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#323232"
                      stroke-width="2"
                    />
                  </svg>
                  <a className="nav-link ps-1">Log in</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="header-content">
          <div className="grid1-2">
            <div className="content pt-5 px-5 bg-dark">
              <div className="top-content">
                <p className="fs-6 letter-spacing text-uppercase text-secondary mb-1">
                  What is tokenization?
                </p>
                <p className="fs-1 letter-space fw-semibold text-white">
                  The Future Of Cyber Security Is Here
                </p>
              </div>
              <div className="main-content text-secondary">
                <p>
                  Digital transactions don't have to introduce risk, cost, and
                  complexity. With TokenEx, you can reduce PCI scope, increase
                  authorization rates, and lower interchange fees to make your
                  payments profitable.
                </p>
                <div className="btns">
                  <button className="btn-yellow p-0"></button>
                  <button className="empty align-items-center">
                    DOWNLOAD RESOURCE
                  </button>
                </div>
              </div>
              <div className="bottom-content mt-5">
                <p className="fs-2 letter-space fw-semibold text-white">
                  The Future Of Cyber Security Is Here
                </p>
              </div>
            </div>
            <div className="animation"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
