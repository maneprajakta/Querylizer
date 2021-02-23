import Container from "react-bootstrap/Container";
import classes from "./Home.module.css";
import logo from "../../assets/Query.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const App = () => {
  return (
    <div className="App">
      <Navbar>
        <div
          style={{
            fontSize: "2.3rem",
            paddingTop: "10px",
            paddingLeft: "30px",
            fontFamily: "Poppins",
          }}
        >
          <img
            src={logo}
            style={{ height: "50px", width: "50px" }}
            alt="astsdsad"
          />
          <span style={{ fontWeight: "800" }}>Query</span>
          lizer
        </div>
        <div
          style={{
            fontSize: "1.7rem",
            paddingTop: "10px",
            paddingRight: "30px"
          }}
          className="ml-auto"
        >
          <Nav>
            <Nav.Link href="#home">
              <i
                className="far fa-envelope"
                style={{ color: "black", padding: "5px" }}
              ></i>
            </Nav.Link>
            <Nav.Link href="#features">
              <i
                className="fab fa-github"
                style={{ color: "black", padding: "5px" }}
              ></i>
            </Nav.Link>
            <Nav.Link>
              <i
                class="fas fa-sign-in-alt"
                style={{ color: "black", padding: "5px" }}
              ></i>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <Container className="text-center">
        <div>
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: "600",
              color: "#333",
              lineHeight: "75px"
            }}
          >
            Create Stunning 🚩 Blazing ⚡ Interactive{" "}
            <span className={classes.home_span_gradient}>
              Database Diagrams{" "}
            </span>
            🚀
          </h1>
        </div>
        <br />
        <h2 style={{ fontSize: "2.0rem", fontWeight: "300" }}>
          Say Hi 👋 to the No Code Era
        </h2>
        <br />
        <br />
        <br />
        <h2 style={{ fontSize: "2.0rem", fontWeight: "300" }}>
          Easily convert your Database Diagram to code. Hassle Free.
        </h2>
      </Container>
    </div>
  );
}


export default App;