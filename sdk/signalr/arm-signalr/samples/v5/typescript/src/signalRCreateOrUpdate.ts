/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Create or update a resource.
 *
 * @summary Create or update a resource.
 * x-ms-original-file: specification/signalr/resource-manager/Microsoft.SignalRService/stable/2021-10-01/examples/SignalR_CreateOrUpdate.json
 */
import { SignalRResource, SignalRManagementClient } from "@azure/arm-signalr";
import { DefaultAzureCredential } from "@azure/identity";

async function signalRCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const resourceName = "mySignalRService";
  const parameters: SignalRResource = {
    cors: { allowedOrigins: ["https://foo.com", "https://bar.com"] },
    disableAadAuth: false,
    disableLocalAuth: false,
    features: [
      { flag: "ServiceMode", properties: {}, value: "Serverless" },
      { flag: "EnableConnectivityLogs", properties: {}, value: "True" },
      { flag: "EnableMessagingLogs", properties: {}, value: "False" },
      { flag: "EnableLiveTrace", properties: {}, value: "False" }
    ],
    identity: { type: "SystemAssigned" },
    kind: "SignalR",
    location: "eastus",
    networkACLs: {
      defaultAction: "Deny",
      privateEndpoints: [
        {
          name: "mysignalrservice.1fa229cd-bf3f-47f0-8c49-afb36723997e",
          allow: ["ServerConnection"]
        }
      ],
      publicNetwork: { allow: ["ClientConnection"] }
    },
    publicNetworkAccess: "Enabled",
    sku: { name: "Standard_S1", capacity: 1, tier: "Standard" },
    tags: { key1: "value1" },
    tls: { clientCertEnabled: false },
    upstream: {
      templates: [
        {
          auth: {
            type: "ManagedIdentity",
            managedIdentity: { resource: "api://example" }
          },
          categoryPattern: "*",
          eventPattern: "connect,disconnect",
          hubPattern: "*",
          urlTemplate: "https://example.com/chat/api/connect"
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SignalRManagementClient(credential, subscriptionId);
  const result = await client.signalR.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

signalRCreateOrUpdate().catch(console.error);
