import { useState } from "react";
import Modal from "./Modal";

const Parent = () => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button onClick={openModal}>Open</button>
      {/* component */}
      {isOpen && (
        <Modal closeModal={closeModal}>
          <div>
            <label htmlFor="name">Enter Your name</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="name">Enter Your name</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="name">Enter Your name</label>
            <input type="text" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Parent;
