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

import { V1beta3QueuingConfiguration } from '../models/V1beta3QueuingConfiguration.js';
import { HttpFile } from '../http/http.js';

/**
* LimitResponse defines how to handle requests that can not be executed right now.
*/
export class V1beta3LimitResponse {
    'queuing'?: V1beta3QueuingConfiguration;
    /**
    * `type` is \"Queue\" or \"Reject\". \"Queue\" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. \"Reject\" means that requests that can not be executed upon arrival are rejected. Required.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "queuing",
            "baseName": "queuing",
            "type": "V1beta3QueuingConfiguration",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta3LimitResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
