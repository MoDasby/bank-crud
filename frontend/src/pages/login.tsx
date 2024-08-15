import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { commitMutation, graphql } from "relay-runtime";
import { loginMutation } from "./__generated__/loginMutation.graphql";
import { RelayEnvironment } from "@/RelayEnvironment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type form = {
    name: string,
    email: string,
    password: string
}

export function Login() {

    const mutation = graphql`
    mutation loginMutation($email: String!, $name: String!, $password: String!) {
        account(email: $email, name: $name, password: $password) {
            name
            email
        }
    }`;

    const navigate = useNavigate()
    const [form, setForm] = useState<form>({
        name: '', email: '', password: ''
    })

    function createAccount({ email, name, password }: form) {

        if (name.length === 0 || email.length === 0 || password.length === 0) {
            alert("digite os campos corretamente")
            return
        }

        commitMutation<loginMutation>(RelayEnvironment, {
            mutation,
            variables: {
                name, email, password
            },
            onCompleted: res => {
                if (!res.account) {
                    alert("Ocorreu um erro ao criar conta");
                    return
                }

                localStorage.setItem("loginData", `${email};${password}`)
                navigate("/")
            }
        })
    }

    return (
        <main className="w-full h-screen grid justify-center items-center">
            <Card className="max-w-[600px] h-fit">
                <CardHeader>
                    <CardTitle>Fazer login ou criar conta</CardTitle>
                </CardHeader>

                <CardContent>
                    <form className="w-full min-w-[400px] space-y-4">
                        <Input
                            type="text"
                            placeholder="Nome"
                            value={form.name}
                            onChange={val => setForm({ ...form, name: val.currentTarget.value })}
                        />

                        <Input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={val => setForm({ ...form, email: val.currentTarget.value })}
                        />

                        <Input
                            type="password"
                            placeholder="Senha"
                            value={form.password}
                            onChange={val => setForm({ ...form, password: val.currentTarget.value })}
                        />

                        <Button
                            type="submit"
                            onClick={e => {
                                e.preventDefault()

                                createAccount(form)
                            }}
                        >
                            Entrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}