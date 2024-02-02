import React from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = ({ data }) => {
  console.log(data.items);
  return (
    <ul className="list-container">
      {data.items &&
        data.items.map((item) => (
          <li key={item.uid}>
            <ListItem
              url={item.url}
              fugitivePictureUrl={item.images[0].large}
              fugitiveName={item.title}
              fugitiveDescription={item.description || "No description"}
            />
          </li>
        ))}
    </ul>
  );
};

export default List;
