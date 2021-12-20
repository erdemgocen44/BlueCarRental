import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";
const SearchPlace = () => {
  const [data, setData] = useState([]);
  return (
    <div className="search-place">
      <InputGroup className="mb-3">
        <InputGroup.Text style={{ flex: 1 }}>
          <FiMapPin />
          &nbsp;Pick up
        </InputGroup.Text>
        <FormControl
          placeholder="Type a place"
          style={{ flex: 3 }}
          autoComplete="off"
        />
      </InputGroup>
      <ul className={data.length <= 0 ? "d-none" : ""}>
        {data.map((item) => (
          <li key={item.objectID}>{item.state}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPlace;
