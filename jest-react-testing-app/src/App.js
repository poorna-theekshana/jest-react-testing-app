import React, { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const fetchData = () => {
  // Simulate fetching data, for testing purposes
  return Promise.resolve({ data: "mocked data" });
};

export default function App() {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <div
      className={status}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Hover over me
    </div>
  );
}

export { fetchData };
