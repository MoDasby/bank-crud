import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Login } from "./pages/login";
import { ProtectedRoute } from "./pages/protectedRoute";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <App />
                    </ProtectedRoute>
                } />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}