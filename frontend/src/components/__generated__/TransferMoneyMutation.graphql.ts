/**
 * @generated SignedSource<<af475d307f46dcab7d1e83506fe23099>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TransferMoneyMutation$variables = {
  amount: number;
  receiver_email: string;
};
export type TransferMoneyMutation$data = {
  readonly transaction: {
    readonly amount: number | null | undefined;
    readonly receiver: {
      readonly email: string | null | undefined;
    } | null | undefined;
    readonly sender: {
      readonly email: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type TransferMoneyMutation = {
  response: TransferMoneyMutation$data;
  variables: TransferMoneyMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "amount"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "receiver_email"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "email",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "amount",
        "variableName": "amount"
      },
      {
        "kind": "Variable",
        "name": "receiver_email",
        "variableName": "receiver_email"
      }
    ],
    "concreteType": "Transaction",
    "kind": "LinkedField",
    "name": "transaction",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "sender",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionAccount",
        "kind": "LinkedField",
        "name": "receiver",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TransferMoneyMutation",
    "selections": (v2/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TransferMoneyMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bf30793180a3c8a9bd8068b7d8d2b12b",
    "id": null,
    "metadata": {},
    "name": "TransferMoneyMutation",
    "operationKind": "mutation",
    "text": "mutation TransferMoneyMutation(\n  $amount: Float!\n  $receiver_email: String!\n) {\n  transaction(amount: $amount, receiver_email: $receiver_email) {\n    amount\n    sender {\n      email\n    }\n    receiver {\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "38eb8863ed5e29a2fc42700e2be83b27";

export default node;
