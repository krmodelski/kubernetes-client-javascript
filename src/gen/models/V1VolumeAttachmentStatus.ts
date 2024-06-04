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

import { V1VolumeError } from '../models/V1VolumeError';
import { HttpFile } from '../http/http';

/**
* VolumeAttachmentStatus is the status of a VolumeAttachment request.
*/
export class V1VolumeAttachmentStatus {
    'attachError'?: V1VolumeError;
    /**
    * attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
    */
    'attached': boolean;
    /**
    * attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
    */
    'attachmentMetadata'?: { [key: string]: string; };
    'detachError'?: V1VolumeError;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attachError",
            "baseName": "attachError",
            "type": "V1VolumeError",
            "format": ""
        },
        {
            "name": "attached",
            "baseName": "attached",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "attachmentMetadata",
            "baseName": "attachmentMetadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "detachError",
            "baseName": "detachError",
            "type": "V1VolumeError",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeAttachmentStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

