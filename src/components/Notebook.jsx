import { useContext } from "react";
import Modal from "./layout/Modals/Modal";
import NoteItem from "./NoteItem";
import NotebookContext from "../context/Notebook/NotebookContext";
import logo from "../assets/logo.png";

export default function Notebook() {
  const { notebooks } = useContext(NotebookContext);
  return (
    <div>
      <img className="w-64 mx-auto" src={logo} alt="Skrapbook logo" />

      <div className="form-control my-5">
        <div className="mx-auto">
          <Modal />
        </div>
      </div>
      {notebooks.length > 0 ? (
        <div className="grid gap-10 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {notebooks.map((notebook) => (
            <NoteItem notebook={notebook} key={notebook.id} />
          ))}
        </div>
      ) : (
        <h3 className="text-center font-bold text-3xl">
          No Notebooks. Add some notebooks!
        </h3>
      )}
    </div>
  );
}
