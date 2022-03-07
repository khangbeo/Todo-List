import { createContext, useState, useEffect } from "react";
import { listNotebooks, createNotebook, deleteNotebook } from "../../utils/api";
const NotebookContext = createContext();

export const NotebookProvider = ({ children }) => {
  const [notebooks, setNotebooks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchNotebooks();
    return () => abortController.abort();
  }, []);

  async function fetchNotebooks() {
    try {
      const response = await listNotebooks();
      setNotebooks(response);
    } catch (error) {
      console.log(error);
    }
  }

  const addNotebook = async (newNotebook) => {
    const response = await createNotebook(newNotebook);
    const data = await response.json();
    setNotebooks([...notebooks, data]);
  };

  const destroyNotebook = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this notebook?")) {
        await deleteNotebook(id);
      }
      await fetchNotebooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NotebookContext.Provider
      value={{
        notebooks,
        addNotebook,
        destroyNotebook,
      }}
    >
      {children}
    </NotebookContext.Provider>
  );
};

export default NotebookContext;
