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

import { HttpFile } from '../http/http';

/**
* EventSource contains information for an event.
*/
export class V1EventSource {
    /**
    * Component from which the event is generated.
    */
    'component'?: string;
    /**
    * Node name on which the event is generated.
    */
    'host'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "component",
            "baseName": "component",
            "type": "string",
            "format": ""
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EventSource.attributeTypeMap;
    }

    public constructor() {
    }
}
