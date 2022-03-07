import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import NotebookDetail from "./pages/NotebookDetail";
import { NotebookProvider } from "./context/Notebook/NotebookContext";

function App() {
  return (
    <NotebookProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-20 pb-12 flex-grow">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/notebook/:id" element={<NotebookDetail />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </NotebookProvider>
  );
}

export default App;
