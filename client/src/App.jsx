import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";


import AuthRoutes from "./Routes/Auth/AuthRoutes";
import TaskRoutes from "./Routes/Task/TaskRoutes";

import { TaskProvider } from "./context/tasksContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <AuthRoutes />
            <TaskRoutes />
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
