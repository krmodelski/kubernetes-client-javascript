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

import { V1ObjectFieldSelector } from '../models/V1ObjectFieldSelector.js';
import { V1ResourceFieldSelector } from '../models/V1ResourceFieldSelector.js';
import { HttpFile } from '../http/http.js';

/**
* DownwardAPIVolumeFile represents information to create the file containing the pod field
*/
export class V1DownwardAPIVolumeFile {
    'fieldRef'?: V1ObjectFieldSelector;
    /**
    * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'mode'?: number;
    /**
    * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the \'..\' path. Must be utf-8 encoded. The first item of the relative path must not start with \'..\'
    */
    'path': string;
    'resourceFieldRef'?: V1ResourceFieldSelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "V1ObjectFieldSelector",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceFieldRef",
            "baseName": "resourceFieldRef",
            "type": "V1ResourceFieldSelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1DownwardAPIVolumeFile.attributeTypeMap;
    }

    public constructor() {
    }
}
