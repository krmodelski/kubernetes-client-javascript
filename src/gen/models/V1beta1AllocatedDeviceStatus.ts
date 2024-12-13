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

import { V1Condition } from '../models/V1Condition.js';
import { V1beta1NetworkDeviceData } from '../models/V1beta1NetworkDeviceData.js';
import { HttpFile } from '../http/http.js';

/**
* AllocatedDeviceStatus contains the status of an allocated device, if the driver chooses to report it. This may include driver-specific information.
*/
export class V1beta1AllocatedDeviceStatus {
    /**
    * Conditions contains the latest observation of the device\'s state. If the device has been configured according to the class and claim config references, the `Ready` condition should be True.
    */
    'conditions'?: Array<V1Condition>;
    /**
    * Data contains arbitrary driver-specific data.  The length of the raw data must be smaller or equal to 10 Ki.
    */
    'data'?: any;
    /**
    * Device references one device instance via its name in the driver\'s resource pool. It must be a DNS label.
    */
    'device': string;
    /**
    * Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.  Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
    */
    'driver': string;
    'networkData'?: V1beta1NetworkDeviceData;
    /**
    * This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).  Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.
    */
    'pool': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "string",
            "format": ""
        },
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string",
            "format": ""
        },
        {
            "name": "networkData",
            "baseName": "networkData",
            "type": "V1beta1NetworkDeviceData",
            "format": ""
        },
        {
            "name": "pool",
            "baseName": "pool",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1AllocatedDeviceStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
