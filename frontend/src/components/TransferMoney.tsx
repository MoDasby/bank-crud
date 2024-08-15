import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { commitMutation, graphql } from "relay-runtime";
import { TransferMoneyMutation } from "./__generated__/TransferMoneyMutation.graphql";
import { RelayEnvironment } from "@/RelayEnvironment";

type form = {
    receiverEmail: string,
    amount: string
}

export function TransferMoney() {

    const [form, setForm] = useState<form>({ receiverEmail: '', amount: '' })

    const mutation = graphql`
    mutation TransferMoneyMutation($amount: Float!, $receiver_email: String!) {
      transaction(amount: $amount, receiver_email: $receiver_email) {
        amount
        sender {
          email
        }
        receiver {
          email
        }
      }
    }
  `;

    function onTransaction({ amount, receiverEmail }: form) {
        commitMutation<TransferMoneyMutation>(RelayEnvironment, {
            variables: {
                amount: Number.parseFloat(amount), receiver_email: receiverEmail
            },
            mutation: mutation,
            onCompleted: res => {
                if (!res.transaction) {
                    alert("ocorreu um erro ao transferir, verifique as informações")
                    return
                }

                alert("completado")
            },
            onError: err => alert("erro " + err)
        })
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button>
                    Transferir
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Fazer transação
                    </DialogTitle>
                </DialogHeader>

                <Input
                    placeholder="Email do destinatário"
                    type="text"
                    value={form.receiverEmail}
                    onChange={val => setForm({ ...form, receiverEmail: val.currentTarget.value })}
                />
                <Input
                    placeholder="Valor R$"
                    type="number"
                    value={form.amount}
                    onChange={val => setForm({ ...form, amount: val.currentTarget.value })}
                />

                <Button
                    onClick={() => onTransaction(form)}
                >
                    Enviar
                </Button>
            </DialogContent>
        </Dialog>
    )
}