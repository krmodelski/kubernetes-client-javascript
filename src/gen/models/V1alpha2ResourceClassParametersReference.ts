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

import { HttpFile } from '../http/http';

/**
* ResourceClassParametersReference contains enough information to let you locate the parameters for a ResourceClass.
*/
export class V1alpha2ResourceClassParametersReference {
    /**
    * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
    */
    'apiGroup'?: string;
    /**
    * Kind is the type of resource being referenced. This is the same value as in the parameter object\'s metadata.
    */
    'kind': string;
    /**
    * Name is the name of resource being referenced.
    */
    'name': string;
    /**
    * Namespace that contains the referenced resource. Must be empty for cluster-scoped resources and non-empty for namespaced resources.
    */
    'namespace'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiGroup",
            "baseName": "apiGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2ResourceClassParametersReference.attributeTypeMap;
    }

    public constructor() {
    }
}
