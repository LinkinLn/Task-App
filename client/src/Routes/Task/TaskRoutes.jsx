import { Routes, Route } from "react-router-dom";
import TaskFormPage from "../../pages/Task/TaskFormPage";
import TasksPage from "../../pages/Task/TasksPage";
import TaskHome from "../../pages/Task/TaskHome";
import ProtectedRoute from "../../Services/ProtectedRoute";

export default function TaskRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TaskHome />}>
                    <Route path="/tasks/List" element={<TasksPage />} />
                    <Route path="/tasks/add-task" element={<TaskFormPage />} />
                    <Route path="/tasks/edit/:id" element={<TaskFormPage />} />
                </Route>
            </Route>
        </Routes>
    )
}
