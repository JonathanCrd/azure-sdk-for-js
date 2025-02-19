/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  PacketCoreDataPlane,
  PacketCoreDataPlanesListByPacketCoreControlPlaneOptionalParams,
  PacketCoreDataPlanesDeleteOptionalParams,
  PacketCoreDataPlanesGetOptionalParams,
  PacketCoreDataPlanesGetResponse,
  PacketCoreDataPlanesCreateOrUpdateOptionalParams,
  PacketCoreDataPlanesCreateOrUpdateResponse,
  TagsObject,
  PacketCoreDataPlanesUpdateTagsOptionalParams,
  PacketCoreDataPlanesUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PacketCoreDataPlanes. */
export interface PacketCoreDataPlanes {
  /**
   * Lists all the packetCoreDataPlanes associated with a packetCoreControlPlane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param options The options parameters.
   */
  listByPacketCoreControlPlane(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: PacketCoreDataPlanesListByPacketCoreControlPlaneOptionalParams
  ): PagedAsyncIterableIterator<PacketCoreDataPlane>;
  /**
   * Deletes the specified packet core data plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    options?: PacketCoreDataPlanesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified packet core data plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    options?: PacketCoreDataPlanesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets information about the specified packet core data plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    options?: PacketCoreDataPlanesGetOptionalParams
  ): Promise<PacketCoreDataPlanesGetResponse>;
  /**
   * Creates or updates a PacketCoreDataPlane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param parameters Parameters supplied to the create or update packet core data plane operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    parameters: PacketCoreDataPlane,
    options?: PacketCoreDataPlanesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PacketCoreDataPlanesCreateOrUpdateResponse>,
      PacketCoreDataPlanesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a PacketCoreDataPlane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param parameters Parameters supplied to the create or update packet core data plane operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    parameters: PacketCoreDataPlane,
    options?: PacketCoreDataPlanesCreateOrUpdateOptionalParams
  ): Promise<PacketCoreDataPlanesCreateOrUpdateResponse>;
  /**
   * Updates a PacketCoreDataPlane update tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param packetCoreDataPlaneName The name of the packet core data plane.
   * @param parameters Parameters supplied to update PacketCoreDataPlane tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    packetCoreDataPlaneName: string,
    parameters: TagsObject,
    options?: PacketCoreDataPlanesUpdateTagsOptionalParams
  ): Promise<PacketCoreDataPlanesUpdateTagsResponse>;
}
