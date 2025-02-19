/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppPlatformManagementClient } from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List KPack builders result.
 *
 * @summary List KPack builders result.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2022-04-01/examples/BuildServiceBuilder_List.json
 */
async function buildServiceBuilderList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const buildServiceName = "default";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.buildServiceBuilder.list(
    resourceGroupName,
    serviceName,
    buildServiceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

buildServiceBuilderList().catch(console.error);
