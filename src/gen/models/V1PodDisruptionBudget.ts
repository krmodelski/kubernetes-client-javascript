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

import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1PodDisruptionBudgetSpec } from '../models/V1PodDisruptionBudgetSpec';
import { V1PodDisruptionBudgetStatus } from '../models/V1PodDisruptionBudgetStatus';
import { HttpFile } from '../http/http';

/**
* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
*/
export class V1PodDisruptionBudget {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1PodDisruptionBudgetSpec;
    'status'?: V1PodDisruptionBudgetStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1PodDisruptionBudgetSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1PodDisruptionBudgetStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodDisruptionBudget.attributeTypeMap;
    }

    public constructor() {
    }
}
