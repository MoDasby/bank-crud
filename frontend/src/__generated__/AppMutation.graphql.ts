/**
 * @generated SignedSource<<38063ae9968c17ae2e73646e220a8c5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AppMutation$variables = {
  amount: number;
  receiver_email: string;
};
export type AppMutation$data = {
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
export type AppMutation = {
  response: AppMutation$data;
  variables: AppMutation$variables;
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
    "name": "AppMutation",
    "selections": (v2/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f58f082794a524dafc880fe2d82861a2",
    "id": null,
    "metadata": {},
    "name": "AppMutation",
    "operationKind": "mutation",
    "text": "mutation AppMutation(\n  $amount: Float!\n  $receiver_email: String!\n) {\n  transaction(amount: $amount, receiver_email: $receiver_email) {\n    amount\n    sender {\n      email\n    }\n    receiver {\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e464892481b37ecba042cd885c812d8";

export default node;
