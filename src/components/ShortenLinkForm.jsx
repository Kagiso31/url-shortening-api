import { useState } from "react";

const ShortenLinkForm = ({ getShortLink, errorMessage, isLoading }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getShortLink(url);
    setUrl("");
  };

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Shorten a link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={errorMessage ? "url-textbox error" : "url-textbox"}
        />
        {errorMessage && (
          <p className="error-message">
            <em>{errorMessage}</em>
          </p>
        )}
        <button className="btn btn-form">
          {isLoading ? "Loading..." : "Shorten It!"}
        </button>
      </form>
    </div>
  );
};

export default ShortenLinkForm;
