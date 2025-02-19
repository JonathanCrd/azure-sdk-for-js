/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ContainerApps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ContainerApp,
  ContainerAppsListBySubscriptionNextOptionalParams,
  ContainerAppsListBySubscriptionOptionalParams,
  ContainerAppsListByResourceGroupNextOptionalParams,
  ContainerAppsListByResourceGroupOptionalParams,
  ContainerAppsListBySubscriptionResponse,
  ContainerAppsListByResourceGroupResponse,
  ContainerAppsGetOptionalParams,
  ContainerAppsGetResponse,
  ContainerAppsCreateOrUpdateOptionalParams,
  ContainerAppsCreateOrUpdateResponse,
  ContainerAppsDeleteOptionalParams,
  ContainerAppsUpdateOptionalParams,
  ContainerAppsListCustomHostNameAnalysisOptionalParams,
  ContainerAppsListCustomHostNameAnalysisResponse,
  ContainerAppsListSecretsOptionalParams,
  ContainerAppsListSecretsResponse,
  ContainerAppsListBySubscriptionNextResponse,
  ContainerAppsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ContainerApps operations. */
export class ContainerAppsImpl implements ContainerApps {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ContainerApps class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Container Apps in a given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ContainerAppsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ContainerApp> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ContainerAppsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ContainerApp[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ContainerAppsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ContainerApp> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get the Container Apps in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ContainerAppsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ContainerApp> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ContainerAppsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ContainerApp[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ContainerAppsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ContainerApp> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the Container Apps in a given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ContainerAppsListBySubscriptionOptionalParams
  ): Promise<ContainerAppsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Get the Container Apps in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ContainerAppsListByResourceGroupOptionalParams
  ): Promise<ContainerAppsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get the properties of a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsGetOptionalParams
  ): Promise<ContainerAppsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, containerAppName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param containerAppEnvelope Properties used to create a container app
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    containerAppName: string,
    containerAppEnvelope: ContainerApp,
    options?: ContainerAppsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ContainerAppsCreateOrUpdateResponse>,
      ContainerAppsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ContainerAppsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, containerAppName, containerAppEnvelope, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param containerAppEnvelope Properties used to create a container app
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    containerAppName: string,
    containerAppEnvelope: ContainerApp,
    options?: ContainerAppsCreateOrUpdateOptionalParams
  ): Promise<ContainerAppsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      containerAppName,
      containerAppEnvelope,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, containerAppName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      containerAppName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patches a Container App using JSON Merge Patch
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param containerAppEnvelope Properties of a Container App that need to be updated
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    containerAppName: string,
    containerAppEnvelope: ContainerApp,
    options?: ContainerAppsUpdateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, containerAppName, containerAppEnvelope, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patches a Container App using JSON Merge Patch
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param containerAppEnvelope Properties of a Container App that need to be updated
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    containerAppName: string,
    containerAppEnvelope: ContainerApp,
    options?: ContainerAppsUpdateOptionalParams
  ): Promise<void> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      containerAppName,
      containerAppEnvelope,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Analyzes a custom hostname for a Container App
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  listCustomHostNameAnalysis(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsListCustomHostNameAnalysisOptionalParams
  ): Promise<ContainerAppsListCustomHostNameAnalysisResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, containerAppName, options },
      listCustomHostNameAnalysisOperationSpec
    );
  }

  /**
   * List secrets for a container app
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsListSecretsOptionalParams
  ): Promise<ContainerAppsListSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, containerAppName, options },
      listSecretsOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ContainerAppsListBySubscriptionNextOptionalParams
  ): Promise<ContainerAppsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ContainerAppsListByResourceGroupNextOptionalParams
  ): Promise<ContainerAppsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/containerApps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerApp
    },
    404: {
      isError: true
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerApp
    },
    201: {
      bodyMapper: Mappers.ContainerApp
    },
    202: {
      bodyMapper: Mappers.ContainerApp
    },
    204: {
      bodyMapper: Mappers.ContainerApp
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.containerAppEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}",
  httpMethod: "PATCH",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.containerAppEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listCustomHostNameAnalysisOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/listCustomHostNameAnalysis",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CustomHostnameAnalysisResult
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.customHostname],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSecretsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/listSecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SecretsCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
