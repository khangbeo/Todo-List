import { Link } from "react-router-dom";
import EditModal from "./layout/Modals/EditModal";
import DeleteModal from "./layout/Modals/DeleteModal";

function NoteItem({ notebook }) {
  return (
    <div
      className="mx-auto card w-96 md:w-72 bg-base-100 shadow-2xl"
      style={{ backgroundColor: `${notebook.color}` }}
    >
      <div className="flex justify-between p-3 bg-neutral">
        <h2 className="card-title text-neutral-content">{notebook.title}</h2>
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
