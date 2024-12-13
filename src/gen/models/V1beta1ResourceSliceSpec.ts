/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.32.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1NodeSelector } from '../models/V1NodeSelector.js';
import { V1beta1Device } from '../models/V1beta1Device.js';
import { V1beta1ResourcePool } from '../models/V1beta1ResourcePool.js';
import { HttpFile } from '../http/http.js';

/**
* ResourceSliceSpec contains the information published by the driver in one ResourceSlice.
*/
export class V1beta1ResourceSliceSpec {
    /**
    * AllNodes indicates that all nodes have access to the resources in the pool.  Exactly one of NodeName, NodeSelector and AllNodes must be set.
    */
    'allNodes'?: boolean;
    /**
    * Devices lists some or all of the devices in this pool.  Must not have more than 128 entries.
    */
    'devices'?: Array<V1beta1Device>;
    /**
    * Driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.  Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. This field is immutable.
    */
    'driver': string;
    /**
    * NodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.  This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.  Exactly one of NodeName, NodeSelector and AllNodes must be set. This field is immutable.
    */
    'nodeName'?: string;
    'nodeSelector'?: V1NodeSelector;
    'pool': V1beta1ResourcePool;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allNodes",
            "baseName": "allNodes",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "devices",
            "baseName": "devices",
            "type": "Array<V1beta1Device>",
            "format": ""
        },
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "V1NodeSelector",
            "format": ""
        },
        {
            "name": "pool",
            "baseName": "pool",
            "type": "V1beta1ResourcePool",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1ResourceSliceSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
