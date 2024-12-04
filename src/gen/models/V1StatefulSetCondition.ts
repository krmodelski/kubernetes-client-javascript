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
* StatefulSetCondition describes the state of a statefulset at a certain point.
*/
export class V1StatefulSetCondition {
    /**
    * Last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * A human readable message indicating details about the transition.
    */
    'message'?: string;
    /**
    * The reason for the condition\'s last transition.
    */
    'reason'?: string;
    /**
    * Status of the condition, one of True, False, Unknown.
    */
    'status': string;
    /**
    * Type of statefulset condition.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        return V1StatefulSetCondition.attributeTypeMap;
    }

    public constructor() {
    }
}
