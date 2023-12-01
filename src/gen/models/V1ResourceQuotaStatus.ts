/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.28.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* ResourceQuotaStatus defines the enforced hard limits and observed use.
*/
export class V1ResourceQuotaStatus {
    /**
    * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
    */
    'hard'?: { [key: string]: string; };
    /**
    * Used is the current observed total usage of the resource in the namespace.
    */
    'used'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hard",
            "baseName": "hard",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "used",
            "baseName": "used",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ResourceQuotaStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

