/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to updating settings about different configurations in security center
 *
 * @summary updating settings about different configurations in security center
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2021-07-01/examples/Settings/UpdateSetting_example.json
 */
async function updateASettingForSubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const settingName = "MCAS";
  const setting = {
    enabled: true,
    kind: "DataExportSettings",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.settings.update(settingName, setting);
  console.log(result);
}

updateASettingForSubscription().catch(console.error);
