import { FaEdit } from "react-icons/fa";

function EditModal({ notebook }) {
  return (
    <label
      htmlFor="edit-notebook-modal"
      className="btn btn-ghost modal-button text-neutral-content"
    >
      <FaEdit size={17} />
    </label>
  );
}

export default EditModal;
