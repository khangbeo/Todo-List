import { useContext, useState } from "react";
import NotebookContext from "../context/Notebook/NotebookContext";

export default function NotebookForm() {
  const { addNotebook } = useContext(NotebookContext);

  const initialFormState = {
    title: "",
    color: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [message, setMessage] = useState("");

  const invalidTitle = formData.title.trim().length > 10;

  const handleChange = ({ target }) => {
    if (invalidTitle) {
      setMessage("Title can't be more than 10 characters");
    } else {
      setMessage(null);
    }
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.title.trim().length < 11) {
      addNotebook(formData);
      setFormData({ ...initialFormState });
      setMessage("Notebook created!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-around"
    >
      <input
        type="text"
        name="title"
        placeholder="Add a new Notebook"
        onChange={handleChange}
        value={formData.title}
        required
        className={`input input-lg text-black w-full pr-40 bg-gray-200 ${
          invalidTitle && "input-error"
        }`}
      />{" "}
      <div className="my-2">
        <label htmlFor="color" className="text-2xl">
          Choose your color:{" "}
        </label>
        <input
          type="color"
          name="color"
          className=""
          onChange={handleChange}
          value={formData.color}
          required
        />
      </div>
      <div className="mb-4">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-neutral text-neutral-content rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-pink-100 hover:text-neutral">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" className="hidden" />
        </label>
      </div>
      <button type="submit" className={`btn ${invalidTitle && "btn-disabled"}`}>
        Submit
      </button>
      <div className="absolute right-5 bottom-5">
        {invalidTitle && <div className="message">{message}</div>}
      </div>
    </form>
  );
}
