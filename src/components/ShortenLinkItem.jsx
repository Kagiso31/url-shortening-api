import { useState } from "react";

const ShortenLinkItem = ({ id, originalLink, shortLink, deleteListItem }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    copyToClipboard(shortLink);
    setIsCopied(true);
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link);
  };

  return (
    <li className="shorten-link-item">
      <a className="original-link">{originalLink}</a>
      <hr />
      <a className="shortened-link" href={shortLink} target="_blank">
        {shortLink}
      </a>
      <button
        onClick={handleClick}
        id="copyBtn"
        className={isCopied ? "btn btn-copy btn-copied" : "btn btn-copy"}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </li>
  );
};

export default ShortenLinkItem;
