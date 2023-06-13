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
      <button className="delete-btn" onClick={() => deleteListItem(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
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
