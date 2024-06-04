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

import { V1SecretReference } from '../models/V1SecretReference';
import { HttpFile } from '../http/http';

/**
* ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
*/
export class V1ScaleIOPersistentVolumeSource {
    /**
    * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\"
    */
    'fsType'?: string;
    /**
    * gateway is the host address of the ScaleIO API Gateway.
    */
    'gateway': string;
    /**
    * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
    */
    'protectionDomain'?: string;
    /**
    * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef': V1SecretReference;
    /**
    * sslEnabled is the flag to enable/disable SSL communication with Gateway, default false
    */
    'sslEnabled'?: boolean;
    /**
    * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
    */
    'storageMode'?: string;
    /**
    * storagePool is the ScaleIO Storage Pool associated with the protection domain.
    */
    'storagePool'?: string;
    /**
    * system is the name of the storage system as configured in ScaleIO.
    */
    'system': string;
    /**
    * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
    */
    'volumeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "gateway",
            "baseName": "gateway",
            "type": "string",
            "format": ""
        },
        {
            "name": "protectionDomain",
            "baseName": "protectionDomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "sslEnabled",
            "baseName": "sslEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "storageMode",
            "baseName": "storageMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "storagePool",
            "baseName": "storagePool",
            "type": "string",
            "format": ""
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ScaleIOPersistentVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

