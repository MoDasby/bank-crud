import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { commitMutation, graphql } from "relay-runtime";
import { RelayEnvironment } from "@/RelayEnvironment";
import { AddMoneyMutation } from "./__generated__/AddMoneyMutation.graphql";

export function AddMoney() {

    const [amount, setAmount] = useState<string>('')

    const mutation = graphql`
    mutation AddMoneyMutation($amount: Float!) {
      updateBalance(amount: $amount) {
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

  function onTransaction(amount: string) {
    commitMutation<AddMoneyMutation>(RelayEnvironment, {
        variables: {
            amount: Number.parseFloat(amount)
        },
        mutation: mutation,
        onCompleted: res => {
            if (!res.updateBalance) {
                alert("ocorreu um erro ao adicionar saldo, verifique as informações")
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
                    Adicionar Saldo
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Adicionar saldo
                    </DialogTitle>
                </DialogHeader>

                <Input
                    placeholder="Valor R$"
                    type="number"
                    value={amount}
                    onChange={val => setAmount(val.currentTarget.value)}
                />

                <Button
                    onClick={() => onTransaction(amount)}
                >
                    Adicionar
                </Button>
            </DialogContent>
        </Dialog>
    )
}