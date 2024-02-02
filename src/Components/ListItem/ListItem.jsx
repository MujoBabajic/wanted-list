import React from "react";
import "./ListItem.css";

const ListItem = ({
  fugitiveName,
  fugitivePictureUrl,
  fugitiveDescription,
  url,
}) => {
  return (
    <div className="list-item">
      <a href={url} target="_blank" rel="noreferrer">
        <img className="list-item-picture" src={fugitivePictureUrl} />
      </a>
      <h3 className="list-item-name">{fugitiveName}</h3>
      <p className="list-item-description">{fugitiveDescription}</p>
    </div>
  );
};

export default ListItem;
