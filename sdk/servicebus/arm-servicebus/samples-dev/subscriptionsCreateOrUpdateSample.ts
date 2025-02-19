/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SBSubscription,
  ServiceBusManagementClient
} from "@azure/arm-servicebus";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a topic subscription.
 *
 * @summary Creates a topic subscription.
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/stable/2021-11-01/examples/Subscriptions/SBSubscriptionCreate.json
 */
async function subscriptionCreate() {
  const subscriptionId = "Subscriptionid";
  const resourceGroupName = "ResourceGroup";
  const namespaceName = "sdk-Namespace-1349";
  const topicName = "sdk-Topics-8740";
  const subscriptionName = "sdk-Subscriptions-2178";
  const parameters: SBSubscription = { enableBatchedOperations: true };
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const result = await client.subscriptions.createOrUpdate(
    resourceGroupName,
    namespaceName,
    topicName,
    subscriptionName,
    parameters
  );
  console.log(result);
}

subscriptionCreate().catch(console.error);
