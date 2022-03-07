import NotebookForm from "../NotebookForm";

function Modal() {
  return (
    <>
      <label htmlFor="add-notebook-modal" className="btn modal-button">
        Add Notebook
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
