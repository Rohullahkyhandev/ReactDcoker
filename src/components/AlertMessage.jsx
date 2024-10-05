const AlertMessage = ({ copyied }) => {
  return (
    <section>
      {copyied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          The entered text copyied{" "}
        </div>
      )}
    </section>
  );
};

export default AlertMessage;
