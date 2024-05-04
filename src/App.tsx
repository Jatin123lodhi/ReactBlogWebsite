import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostListing from "./screens/PostListing";
import PostDetail from "./screens/PostDetail";

function App() {
  return (
    <>
    <div className="text-center shadow-md text-2xl font-bold p-6 text-white mb-5 bg-sky-800">Blog Website</div>
    <BrowserRouter>
      <Routes>
        
        <Route path="/"  element={<PostListing />} />
        <Route path="/post/:id"  element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
