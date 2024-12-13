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

import { V1DownwardAPIVolumeFile } from '../models/V1DownwardAPIVolumeFile.js';
import { HttpFile } from '../http/http.js';

/**
* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
*/
export class V1DownwardAPIProjection {
    /**
    * Items is a list of DownwardAPIVolume file
    */
    'items'?: Array<V1DownwardAPIVolumeFile>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1DownwardAPIVolumeFile>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1DownwardAPIProjection.attributeTypeMap;
    }

    public constructor() {
    }
}
