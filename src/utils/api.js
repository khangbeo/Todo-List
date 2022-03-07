const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function listNotebooks() {
  try {
    const url = `${API_BASE_URL}/notebooks`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function readNotebook(notebookId) {
  const url = `${API_BASE_URL}/notebooks/${notebookId}`;
  const options = {
    method: "GET",
    headers,
  };
  return await fetch(url, options)
}

export async function createNotebook(newNotebook) {
  try {
    const url = `${API_BASE_URL}/notebooks`;
    return await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(newNotebook),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateNotebook(notebook, notebookId) {
  try {
    const url = `${API_BASE_URL}/notebooks/${notebookId}`;
    return await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify({ data: notebook }),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteNotebook(id) {
  try {
    const url = `${API_BASE_URL}/notebooks/${id}`;
    return await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
}
