import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import NotebookContext from "../../../context/Notebook/NotebookContext";

export default function DeleteModal({ notebook }) {
    const { destroyNotebook } = useContext(NotebookContext);
    return (
      <button
        type="button"
        className="btn btn-ghost text-neutral-content"
        onClick={() => destroyNotebook(notebook.id)}
      >
        <FaTrash size={17} />
      </button>
    );
  }
