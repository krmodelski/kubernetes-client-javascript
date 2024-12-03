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

import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1alpha2ResourceClassParametersReference } from '../models/V1alpha2ResourceClassParametersReference';
import { V1alpha2ResourceFilter } from '../models/V1alpha2ResourceFilter';
import { V1alpha2VendorParameters } from '../models/V1alpha2VendorParameters';
import { HttpFile } from '../http/http';

/**
* ResourceClassParameters defines resource requests for a ResourceClass in an in-tree format understood by Kubernetes.
*/
export class V1alpha2ResourceClassParameters {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Filters describes additional contraints that must be met when using the class.
    */
    'filters'?: Array<V1alpha2ResourceFilter>;
    'generatedFrom'?: V1alpha2ResourceClassParametersReference;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    /**
    * VendorParameters are arbitrary setup parameters for all claims using this class. They are ignored while allocating the claim. There must not be more than one entry per driver.
    */
    'vendorParameters'?: Array<V1alpha2VendorParameters>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<V1alpha2ResourceFilter>",
            "format": ""
        },
        {
            "name": "generatedFrom",
            "baseName": "generatedFrom",
            "type": "V1alpha2ResourceClassParametersReference",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "vendorParameters",
            "baseName": "vendorParameters",
            "type": "Array<V1alpha2VendorParameters>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2ResourceClassParameters.attributeTypeMap;
    }

    public constructor() {
    }
}
