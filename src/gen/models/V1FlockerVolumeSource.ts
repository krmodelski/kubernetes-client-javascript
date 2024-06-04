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

import { HttpFile } from '../http/http';

/**
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
*/
export class V1FlockerVolumeSource {
    /**
    * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
    */
    'datasetName'?: string;
    /**
    * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
    */
    'datasetUUID'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "datasetName",
            "baseName": "datasetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "datasetUUID",
            "baseName": "datasetUUID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1FlockerVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

