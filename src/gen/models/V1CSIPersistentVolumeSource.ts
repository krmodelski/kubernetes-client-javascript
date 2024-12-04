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

import { V1SecretReference } from '../models/V1SecretReference.js';
import { HttpFile } from '../http/http.js';

/**
* Represents storage that is managed by an external CSI volume driver (Beta feature)
*/
export class V1CSIPersistentVolumeSource {
    'controllerExpandSecretRef'?: V1SecretReference;
    'controllerPublishSecretRef'?: V1SecretReference;
    /**
    * driver is the name of the driver to use for this volume. Required.
    */
    'driver': string;
    /**
    * fsType to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
    */
    'fsType'?: string;
    'nodeExpandSecretRef'?: V1SecretReference;
    'nodePublishSecretRef'?: V1SecretReference;
    'nodeStageSecretRef'?: V1SecretReference;
    /**
    * readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
    */
    'readOnly'?: boolean;
    /**
    * volumeAttributes of the volume to publish.
    */
    'volumeAttributes'?: { [key: string]: string; };
    /**
    * volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
    */
    'volumeHandle': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "controllerExpandSecretRef",
            "baseName": "controllerExpandSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "controllerPublishSecretRef",
            "baseName": "controllerPublishSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string",
            "format": ""
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeExpandSecretRef",
            "baseName": "nodeExpandSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "nodePublishSecretRef",
            "baseName": "nodePublishSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "nodeStageSecretRef",
            "baseName": "nodeStageSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeAttributes",
            "baseName": "volumeAttributes",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "volumeHandle",
            "baseName": "volumeHandle",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CSIPersistentVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}
