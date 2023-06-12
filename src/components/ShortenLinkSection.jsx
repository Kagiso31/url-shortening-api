import { useState } from "react";
import useLocalStorage from "use-local-storage";
import ShortenLinkForm from "./ShortenLinkForm";
import ShortenLinkList from "./ShortenLinkList";

const ShortenLinkSection = () => {
  const [linkList, setLinkList] = useLocalStorage("links", []);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getShortLink = async (url) => {
    if (!url) return setErrorMessage("Please add a link");
    else {
      try {
        setIsLoading(true);
        const api_url = "https://api.shrtco.de/v2/shorten?url=";
        const response = await fetch(api_url + url);
        const data = await response.json();

        if (data.ok) {
          setIsLoading(false);
          console.log(data);

          setLinkList((currentLinkList) => {
            return [
              ...currentLinkList,
              {
                id: crypto.randomUUID(),
                originalLink: data.result.original_link,
                shortLink: data.result.full_short_link,
              },
            ];
          });
        } else {
          setIsLoading(false);
          return setErrorMessage("Could not shorten link");
        }

        if (errorMessage) setErrorMessage("");
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const deleteListItem = (id) => {
    setLinkList((currentLinkList) => {
      return currentLinkList.filter((link) => link.id !== id);
    });
  };

  return (
    <section className="shorten-link-section">
      <div className="container">
        <ShortenLinkForm
          getShortLink={getShortLink}
          errorMessage={errorMessage}
          linkList={linkList}
          isLoading={isLoading}
        />
        <ShortenLinkList linkList={linkList} deleteListItem={deleteListItem} />
      </div>
    </section>
  );
};

export default ShortenLinkSection;
