import NotebookForm from "../../NotebookForm";
import { FaPlus } from "react-icons/fa";

function Modal() {
  return (
    <>
      <label
        htmlFor="add-notebook-modal"
        className="btn modal-button text-7xl h-20 w-20 rounded-full"
      >
        <FaPlus />
      </label>

      <input type="checkbox" id="add-notebook-modal" className="modal-toggle" />
      <label htmlFor="add-notebook-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="font-bold text-lg text-center">Name your notebook</h3>
          <div className="py-4">
            <NotebookForm />
          </div>
        </label>
      </label>
    </>
  );
}

export default Modal;
