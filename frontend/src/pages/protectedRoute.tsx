import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: ReactNode }) {

    const navigate = useNavigate()

    useEffect(() => {
        const credentials = localStorage.getItem("loginData")

        if (!credentials) navigate("/login")
    }, [])

    return children
}