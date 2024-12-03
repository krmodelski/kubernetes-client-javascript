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

import { V1AggregationRule } from '../models/V1AggregationRule';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1PolicyRule } from '../models/V1PolicyRule';
import { HttpFile } from '../http/http';

/**
* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
*/
export class V1ClusterRole {
    'aggregationRule'?: V1AggregationRule;
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    /**
    * Rules holds all the PolicyRules for this ClusterRole
    */
    'rules'?: Array<V1PolicyRule>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggregationRule",
            "baseName": "aggregationRule",
            "type": "V1AggregationRule",
            "format": ""
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<V1PolicyRule>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ClusterRole.attributeTypeMap;
    }

    public constructor() {
    }
}
