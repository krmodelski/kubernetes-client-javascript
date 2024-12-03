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

import { V1CustomResourceSubresourceScale } from '../models/V1CustomResourceSubresourceScale';
import { HttpFile } from '../http/http';

/**
* CustomResourceSubresources defines the status and scale subresources for CustomResources.
*/
export class V1CustomResourceSubresources {
    'scale'?: V1CustomResourceSubresourceScale;
    /**
    * status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
    */
    'status'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "scale",
            "baseName": "scale",
            "type": "V1CustomResourceSubresourceScale",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceSubresources.attributeTypeMap;
    }

    public constructor() {
    }
}
