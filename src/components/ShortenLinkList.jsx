import ShortenLinkItem from "./ShortenLinkItem";

const ShortenLinkList = ({ linkList, deleteListItem }) => {
  return (
    <ul className="shorten-link-list">
      {linkList.map((link) => {
        return (
          <ShortenLinkItem
            {...link}
            key={link.id}
            deleteListItem={deleteListItem}
          />
        );
      })}
    </ul>
  );
};

export default ShortenLinkList;
