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

import { V1JSONSchemaProps } from '../models/V1JSONSchemaProps.js';
import { HttpFile } from '../http/http.js';

/**
* CustomResourceValidation is a list of validation methods for CustomResources.
*/
export class V1CustomResourceValidation {
    'openAPIV3Schema'?: V1JSONSchemaProps;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "openAPIV3Schema",
            "baseName": "openAPIV3Schema",
            "type": "V1JSONSchemaProps",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceValidation.attributeTypeMap;
    }

    public constructor() {
    }
}
