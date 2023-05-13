import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isTitlecase, setIsTitlecase] = useState(false);
  const [isSentencecase, setIsSentencecase] = useState(false);
  const [isCopyToClipboard, setIsCopyToClipboard] = useState(false);
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const upperCaseClick = () => {
    setIsUppercase(true);
    setIsLowercase(false);
    setIsSentencecase(false);
    setIsTitlecase(false);
    setIsCopyToClipboard(false);
    props.showAlert("Converted to Uppercase", "success");
  };
  const lowerCaseClick = () => {
    setIsLowercase(true);
    setIsUppercase(false);
    setIsSentencecase(false);
    setIsCopyToClipboard(false);
    setIsTitlecase(false);
    props.showAlert("Converted to Lowercase", "success");
  };
  const titleCaseClick = () => {
    setIsTitlecase(true);
    setIsLowercase(false);
    setIsCopyToClipboard(false);
    setIsUppercase(false);
    setIsSentencecase(false);
    props.showAlert("Converted to Titlecase", "success");
  };
  const sentenceCaseClick = () => {
    setIsSentencecase(true);
    setIsLowercase(false);
    setIsCopyToClipboard(false);
    setIsTitlecase(false);
    setIsUppercase(false);
    props.showAlert("Converted to Sentencecase", "success");
  };
  const copyToClipboardClick = () => {
    setIsSentencecase(false);
    setIsLowercase(false);
    setIsCopyToClipboard(true);
    setIsTitlecase(false);
    setIsUppercase(false);
    props.showAlert("Successfully Copy To Clipboard", "success");
  };
  const toTitleCase = (str) => {
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };
  const toSentenceCase = (str) => {
    return str.replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
      return c.toUpperCase();
    });
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  //Text Light on Dark Mode Varibale
  const darkText = props.mode === "dark" ? "light" : "dark";
  return (
    <>
      <div className="container my-4 bg-dark py-3 px-3 rounded">
        <div className={`container my-4 bg-${props.mode} p-4 rounded`}>
          <h1 className={`text-${darkText}`}>{props.heading}</h1>
          <div className="my-3">
            <textarea
              className={`form-control p-2 bg-${
                props.mode === "dark" ? "dark" : "light"
              } text-${darkText}`}
              value={text}
              onChange={handleChangeText}
              id="form"
              rows="4"
            ></textarea>
            <p className={`mt-3 fw-bold text-${darkText}`}>
              Your Text Has{" "}
              <span className="text-danger">
                {text.split(/\s+/).filter((e) => e.length !== 0).length}
              </span>{" "}
              Words and <span className="text-danger">{text.length}</span>{" "}
              Characters
            </p>
            <p className={`mt-3 fw-bold text-${darkText}`}>
              You can read this in{" "}
              <span className="text-danger">
                {text.trim() === "" ? 0 : 0.008 * text.trim().split(" ").length}{" "}
                Minutes
              </span>
            </p>
          </div>
        </div>
        <div className={`container my-4 bg-${props.mode} p-4 rounded`}>
          <div>
            <h3 className={`text-${darkText} mt-3`}>{props.para}</h3>
            <h5 className={`text-${darkText} my-2 py-3`}>
              {text.length > 0
                ? isUppercase
                  ? text.toUpperCase()
                  : isLowercase
                  ? text.toLowerCase()
                  : isTitlecase
                  ? toTitleCase(text)
                  : isSentencecase
                  ? toSentenceCase(text)
                  : isCopyToClipboard
                  ? copyToClipboard()
                  : text
                : "Enter Something In Textarea...!"}
            </h5>
          </div>
          <div className="mt-3 d-flex justify-content-between flex-wrap">
            <button
              disabled={text.length === 0}
              className="btn btn-warning my-2"
              onClick={upperCaseClick}
            >
              Upper Case
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-secondary my-2"
              onClick={lowerCaseClick}
            >
              Lower Case
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-danger my-2"
              onClick={titleCaseClick}
            >
              Title Case
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary my-2"
              onClick={sentenceCaseClick}
            >
              Sentence Case
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-success my-2"
              onClick={copyToClipboardClick}
            >
              Copy To Clipborad
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
