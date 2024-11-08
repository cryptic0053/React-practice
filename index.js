ReactDOM.render(<h1 className="header">Hello,everyone!</h1>,document.getElementById("root"))

ReactDOM.render(<p>Hey,I am Argha</p>,document.querySelector("#root"))

ReactDOM.render(<ul>
    <li>
        Thing 1
    </li>
    <li>
        Thing 2
    </li>
</ul>,document.getElementById("root"))

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
  
  function MainContent(){
    return(
        <h1>I'm learning React!</h1>
    )
  }

  ReactDOM.render(
    <div>
      <Navbar />
      <MainContent/>
    </div>,
    document.getElementById("root")
  );
  

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

const element = <h1 className="header">This is JSX</h1>
console.log(element)

ReactDOM.render(element,document.getElementById("root"))

ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
    ,document.getElementById("root")
)

const page=(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root")
)



const navbar = (
    <nav><h1>Stylo</h1><ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul></nav>
)

ReactDOM.render(navbar,document.getElementById("root"))
import React from "react"
import ReactDOM from "react-dom"

const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
    </ol>
  </div>
);


ReactDOM.render(page, document.getElementById("root"));

const page=(
  <div>
    <img src="./react-logo.png" width="40px"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps,including mobile apps</li>

    </ul>
  </div>
)

ReactDOM.render(page,document.getElementById("root"))

function Temporary(){
  return(
  <div>
    <img src="./react-logo.png" width="40px"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps,including mobile apps</li>
    </ul>
  </div>)
}

ReactDOM.render(<Temporary/>,document.getElementById("root"))

function Page(){
  return(
    <h1>Its working</h1>
  )
}

ReactDOM.render(<Page/>,document.getElementById("root"))



function Page() {
  return (
    <div>
      <header>
      <nav className="nav">
        {/* Image path assumes react-logo.png is inside the public folder */}
        <img src="/react-logo.png" className="nav-logo" alt="React Logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library</li>
        <li>Likely to get a job</li>
      </ol>
      <small>2024 Cryptic Development. All rights reserved.</small>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
