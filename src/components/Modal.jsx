import ReactDOM from "react-dom";
import "../App.css";
const Modal = ({ closeModal, children }) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    transition: "opacity 0.3s ease-in-out",
    opacity: 2,
    flexDirection: "column",
  };

  return ReactDOM.createPortal(
    <div style={styles}>
      <div className="container">
        <div className="modal--header">
          <h4>Modal Box</h4>
          <button onClick={closeModal}>Close</button>
        </div>
        <div className="modal--content">
          <p> {children}</p>
        </div>
      </div>
    </div>,
    document.getElementById("sub")
  );
};

export default Modal;
