import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    // intervalRef.current = setInterval(() => {
    //   setCounter((prevCounter) => prevCounter + 1);
    // }, 1000);

    // return () => {
    //   clearInterval(intervalRef.current);
    // };
    startTimer();
    stopTimer();
  }, []);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "24px",
        color: "red",
        cursor: "pointer",
        width: "200px",
        flexDirection: "column",
        margin: "100px auto",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <div>Timer: {counter} seconds</div>
      <br />

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
    </div>
  );
};

export default Timer;
