import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          setLoading(false);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return data;
};

// now in our component we can use this custom hook
export default useFetch;
