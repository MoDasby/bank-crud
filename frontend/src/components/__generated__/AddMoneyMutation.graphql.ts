/**
 * @generated SignedSource<<103b4120573ad8ddfb430256b48e164a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddMoneyMutation$variables = {
  amount: number;
};
export type AddMoneyMutation$data = {
  readonly updateBalance: {
    readonly amount: number | null | undefined;
    readonly receiver: {
      readonly email: string | null | undefined;
    } | null | undefined;
    readonly sender: {
      readonly email: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type AddMoneyMutation = {
  response: AddMoneyMutation$data;
  variables: AddMoneyMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "amount"
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
      }
    ],
    "concreteType": "Transaction",
    "kind": "LinkedField",
    "name": "updateBalance",
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
    "name": "AddMoneyMutation",
    "selections": (v2/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddMoneyMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "32dea4ed0d7eaa1efc1c266dea6e1b10",
    "id": null,
    "metadata": {},
    "name": "AddMoneyMutation",
    "operationKind": "mutation",
    "text": "mutation AddMoneyMutation(\n  $amount: Float!\n) {\n  updateBalance(amount: $amount) {\n    amount\n    sender {\n      email\n    }\n    receiver {\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc4603ec5232e9ab085f9f48ebdbf3bd";

export default node;
