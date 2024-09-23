
import React from 'react'
import DarkModeToggle from 'react-dark-mode-toggle';

const Navbar = (props) => {
    

    return (
        <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TextUtilize</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
                    {/* <div class={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
                        <input class="form-check-input" type="checkbox"onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Enable to Dark Mode</label>
                    </div>
                     */}
                    <div class={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <DarkModeToggle
                            onChange={props.toggleMode}
                            checked={props.mode === "dark"}
                            size={60} // You can adjust the size of the button
                        />
                        <label class="form-check-label mx-2" for="flexSwitchCheckDefault">Enable to Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar