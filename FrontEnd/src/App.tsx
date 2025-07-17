import { TaskProvider } from "./context/TaskProvider";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <TaskProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </>
  );
}

export default App;
