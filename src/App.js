import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  console.log(time);

  const [currentTime, setTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  return (
    <>
      <div className="container">
        <div className="second">
          <div className="main-area">
            <p className="time-text">{currentTime}</p>
            <br />
            <button className="time-btn" onClick={UpdateTime}>
              Get Time
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
