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

import { V1PriorityLevelConfigurationCondition } from '../models/V1PriorityLevelConfigurationCondition.js';
import { HttpFile } from '../http/http.js';

/**
* PriorityLevelConfigurationStatus represents the current state of a \"request-priority\".
*/
export class V1PriorityLevelConfigurationStatus {
    /**
    * `conditions` is the current state of \"request-priority\".
    */
    'conditions'?: Array<V1PriorityLevelConfigurationCondition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1PriorityLevelConfigurationCondition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PriorityLevelConfigurationStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
