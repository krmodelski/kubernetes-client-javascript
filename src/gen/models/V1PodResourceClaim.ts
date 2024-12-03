/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ClaimSource } from '../models/V1ClaimSource';
import { HttpFile } from '../http/http';

/**
* PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
*/
export class V1PodResourceClaim {
    /**
    * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
    */
    'name': string;
    'source'?: V1ClaimSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "V1ClaimSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodResourceClaim.attributeTypeMap;
    }

    public constructor() {
    }
}
