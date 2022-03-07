import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import NotebookContext from "../context/Notebook/NotebookContext";

function NoteItem({ notebook }) {
  return (
    <div
      className="mx-auto card w-72 bg-base-100 shadow-xl"
      style={{ backgroundColor: `${notebook.color}` }}
    >
      <div className="flex justify-between p-3 bg-gray-400">
        <h2 className="card-title">{notebook.title}</h2>
        <div>
          <EditModal notebook={notebook} />
          <DeleteModal notebook={notebook} />
        </div>
      </div>
      <Link to={`/notebook/${notebook.id}`} className="card-body">
        <div className="card-actions justify-end h-40"></div>
      </Link>
    </div>
  );
}

export default NoteItem;

function EditModal({ notebook }) {
  return (
    <label htmlFor="edit-notebook-modal" className="btn btn-ghost modal-button">
      <FaEdit size={25} />
    </label>
  );
}

function DeleteModal({ notebook }) {
  const { destroyNotebook } = useContext(NotebookContext);
  return (
    <button
      type="button"
      className="btn btn-ghost"
      onClick={() => destroyNotebook(notebook.id)}
    >
      <FaTrash size={25} />
    </button>
  );
}
