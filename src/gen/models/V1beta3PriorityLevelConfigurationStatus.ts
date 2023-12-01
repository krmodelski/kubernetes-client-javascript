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

import { V1beta3PriorityLevelConfigurationCondition } from '../models/V1beta3PriorityLevelConfigurationCondition';
import { HttpFile } from '../http/http';

/**
* PriorityLevelConfigurationStatus represents the current state of a \"request-priority\".
*/
export class V1beta3PriorityLevelConfigurationStatus {
    /**
    * `conditions` is the current state of \"request-priority\".
    */
    'conditions'?: Array<V1beta3PriorityLevelConfigurationCondition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1beta3PriorityLevelConfigurationCondition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta3PriorityLevelConfigurationStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

