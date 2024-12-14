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

import { V1NonResourceAttributes } from '../models/V1NonResourceAttributes.js';
import { V1ResourceAttributes } from '../models/V1ResourceAttributes.js';
import { HttpFile } from '../http/http.js';

/**
* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export class V1SelfSubjectAccessReviewSpec {
    'nonResourceAttributes'?: V1NonResourceAttributes;
    'resourceAttributes'?: V1ResourceAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nonResourceAttributes",
            "baseName": "nonResourceAttributes",
            "type": "V1NonResourceAttributes",
            "format": ""
        },
        {
            "name": "resourceAttributes",
            "baseName": "resourceAttributes",
            "type": "V1ResourceAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SelfSubjectAccessReviewSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
