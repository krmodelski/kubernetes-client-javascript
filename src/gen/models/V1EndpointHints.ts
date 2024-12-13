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

import { V1ForZone } from '../models/V1ForZone.js';
import { HttpFile } from '../http/http.js';

/**
* EndpointHints provides hints describing how an endpoint should be consumed.
*/
export class V1EndpointHints {
    /**
    * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
    */
    'forZones'?: Array<V1ForZone>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "forZones",
            "baseName": "forZones",
            "type": "Array<V1ForZone>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EndpointHints.attributeTypeMap;
    }

    public constructor() {
    }
}
