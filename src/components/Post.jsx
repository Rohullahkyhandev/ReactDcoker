import useFetch from "./CustomHook";

const Post = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div
      style={{
        textAlign: "center",
        margin: "10px auto",
        background: "lightblue",
        width: "600px",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        overflow: "auto",
      }}
    >
      <h2>List of Post data that fetch from jsonplaceholder website and</h2>
      <hr />
      {data.map((data) => (
        <div
          key={data.id}
          style={{
            background: "white",
            width: "300px",
            fontFamily: "sans-serif",
            padding: "10px",
            margin: "10px auto",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)",
            cursor: "pointer",
            textTransform: "capitalize",
          }}
        >
          <h3>{data.title}</h3>
          <p>{data.body}</p>
          <p>Author: {data.userId}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
