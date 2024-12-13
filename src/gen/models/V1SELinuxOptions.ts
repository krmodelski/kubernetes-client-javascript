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

import { HttpFile } from '../http/http.js';

/**
* SELinuxOptions are the labels to be applied to the container
*/
export class V1SELinuxOptions {
    /**
    * Level is SELinux level label that applies to the container.
    */
    'level'?: string;
    /**
    * Role is a SELinux role label that applies to the container.
    */
    'role'?: string;
    /**
    * Type is a SELinux type label that applies to the container.
    */
    'type'?: string;
    /**
    * User is a SELinux user label that applies to the container.
    */
    'user'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "level",
            "baseName": "level",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SELinuxOptions.attributeTypeMap;
    }

    public constructor() {
    }
}
