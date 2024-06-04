/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.29.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V2HPAScalingRules } from '../models/V2HPAScalingRules';
import { HttpFile } from '../http/http';

/**
* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
*/
export class V2HorizontalPodAutoscalerBehavior {
    'scaleDown'?: V2HPAScalingRules;
    'scaleUp'?: V2HPAScalingRules;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "scaleDown",
            "baseName": "scaleDown",
            "type": "V2HPAScalingRules",
            "format": ""
        },
        {
            "name": "scaleUp",
            "baseName": "scaleUp",
            "type": "V2HPAScalingRules",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2HorizontalPodAutoscalerBehavior.attributeTypeMap;
    }

    public constructor() {
    }
}

