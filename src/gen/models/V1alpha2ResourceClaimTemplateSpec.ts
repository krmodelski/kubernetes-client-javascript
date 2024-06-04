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

import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1alpha2ResourceClaimSpec } from '../models/V1alpha2ResourceClaimSpec';
import { HttpFile } from '../http/http';

/**
* ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
*/
export class V1alpha2ResourceClaimTemplateSpec {
    'metadata'?: V1ObjectMeta;
    'spec': V1alpha2ResourceClaimSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha2ResourceClaimSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2ResourceClaimTemplateSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

