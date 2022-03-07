import { useContext } from "react";
import Modal from "./layout/Modal";
import NoteItem from "./NoteItem";
import NotebookContext from "../context/Notebook/NotebookContext";

export default function Notebook() {
  const { notebooks } = useContext(NotebookContext);
  return (
    <div>
      <h1 className="text-center text-5xl mb-6">Notes App</h1>
      <div className="form-control my-5">
        <div className="mx-auto">
          <Modal />
        </div>
      </div>
      {notebooks.length > 0 ? (
        <div className="grid gap-20 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {notebooks.map((notebook) => (
            <NoteItem notebook={notebook} key={notebook.id} />
          ))}
        </div>
      ) : (
        <h3 className="text-center">No Notebooks</h3>
      )}
    </div>
  );
}
