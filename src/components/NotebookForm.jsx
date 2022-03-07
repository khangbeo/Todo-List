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
  const [btnDisabled, setBtnDisabled] = useState(true);

  const invalidTitle = formData.title.trim().length > 10;

  const handleChange = ({ target }) => {
    if (formData.title === "") {
      setBtnDisabled(true);
      setMessage(null);
    }
    if (invalidTitle) {
      setBtnDisabled(true);
      setMessage("Title can't be more than 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.title.trim().length <= 10) {
      addNotebook(formData);
      setFormData({ ...initialFormState });
      setMessage("Success");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
        />
      </div>
      <button type="submit" className={`btn ${btnDisabled && "btn-disabled"}`}>
        Submit
      </button>
      {message && <div className="message">{message}</div>}
    </form>
  );
}
