import React, { useState, useEffect } from "react";

function NameList({ names, setSelectedIndex }) {
  const [localNames, setLocalNames] = useState(names);

  useEffect(() => {
    setLocalNames(names);
  }, [JSON.stringify(names), names]);
  const items = localNames.map((item, index) => {
    return (
      <li
        onClick={() => setSelectedIndex(index)}
        key={`${index}${item.middleName}`}
      >
        {`${item.firstName} ${item.middleName} ${item.lastName}`}
      </li>
    );
  });
  console.log(names);

  return <ul>{items}</ul>;
}

export default NameList;
