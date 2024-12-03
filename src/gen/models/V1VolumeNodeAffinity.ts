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

import { V1NodeSelector } from '../models/V1NodeSelector';
import { HttpFile } from '../http/http';

/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
*/
export class V1VolumeNodeAffinity {
    'required'?: V1NodeSelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "required",
            "baseName": "required",
            "type": "V1NodeSelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeNodeAffinity.attributeTypeMap;
    }

    public constructor() {
    }
}
