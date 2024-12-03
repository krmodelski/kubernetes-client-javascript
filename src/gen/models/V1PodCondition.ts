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

import { HttpFile } from '../http/http.js';

/**
* PodCondition contains details for the current condition of this pod.
*/
export class V1PodCondition {
    /**
    * Last time we probed the condition.
    */
    'lastProbeTime'?: Date;
    /**
    * Last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * Human-readable message indicating details about last transition.
    */
    'message'?: string;
    /**
    * Unique, one-word, CamelCase reason for the condition\'s last transition.
    */
    'reason'?: string;
    /**
    * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
    */
    'status': string;
    /**
    * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastProbeTime",
            "baseName": "lastProbeTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodCondition.attributeTypeMap;
    }

    public constructor() {
    }
}
