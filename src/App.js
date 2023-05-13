import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
function App() {
  const [mode, setMode] = useState("info");

  const [alert, setAlert] = useState(null);
  const [myStyles, setMyStyle] = useState({
    color: "#f8f9fa",
    backgroundColor: "#0dcaf0",
  });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "info") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Has Been Enabled!", "success");
      document.title = "Word Counter - Dark Mode";
      setMyStyle({
        color: "#f8f9fa",
        backgroundColor: "#212529",
      });
    } else {
      setMode("info");
      document.body.style.backgroundColor = "#c1c1c1";
      showAlert("Light Mode Has Been Enabled!", "success");
      document.title = "Word Counter - Light Mode";
      setMyStyle({
        color: "#212529",
        backgroundColor: "#0dcaf0",
      });
    }
  };

  return (
    <>
      <Navbar toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Form
        heading="Enter Text"
        para="Text Preview"
        mode={mode}
        showAlert={showAlert}
      />
      <Accordion myStyles={myStyles} />
    </>
  );
}

export default App;
