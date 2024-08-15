import { graphql } from "relay-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { useLazyLoadQuery } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import { TransferMoney } from "./components/TransferMoney";
import { AddMoney } from "./components/AddMoney";

export function App() {

  const query = graphql`
  query AppQuery {
    account {
      name
      email
      availableBalance
    },
    transactions {
      amount,
      sender {
        email
      },
      receiver {
        email
      }
    }
  }`

  const data = useLazyLoadQuery<AppQuery>(query, {})

  function formatMonetaryValue(val: number) {
    return val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  return (
    <main className="w-full min-h-screen grid bg-card p-8 justify-items-center">
      <Card className="w-full max-w-[600px] pt-12">
        <CardHeader>
          <CardTitle>
            <h1 className="font-bold text-xl">Olá, {data.account?.name}</h1>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="flex flex-row items-end space-x-2">
            <h1 className="font-bold text-2xl">{formatMonetaryValue(data.account?.availableBalance || 0)}</h1>
            <span className="text-sm">Disponíveis</span>
          </div>

          <div className="space-x-4">
            <TransferMoney />
            <AddMoney />
          </div>

          <div>
            <h1 className="font-bold text-xl">Últimas Transações</h1>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    Remetente
                  </TableHead>

                  <TableHead>
                    Destinatário
                  </TableHead>

                  <TableHead>
                    Valor
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {
                  data.transactions?.map(t => (
                    <TableRow>
                      <TableCell className="font-medium">
                        {
                          t?.receiver?.email === t?.sender?.email ? "Saldo adicionado" : t?.sender?.email
                        }
                      </TableCell>
                      <TableCell>{t?.receiver?.email}</TableCell>
                      <TableCell>{formatMonetaryValue(t?.amount || 0)}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}