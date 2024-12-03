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

import { RbacV1Subject } from '../models/RbacV1Subject.js';
import { V1ObjectMeta } from '../models/V1ObjectMeta.js';
import { V1RoleRef } from '../models/V1RoleRef.js';
import { HttpFile } from '../http/http.js';

/**
* ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
*/
export class V1ClusterRoleBinding {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'roleRef': V1RoleRef;
    /**
    * Subjects holds references to the objects the role applies to.
    */
    'subjects'?: Array<RbacV1Subject>;

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
            "name": "roleRef",
            "baseName": "roleRef",
            "type": "V1RoleRef",
            "format": ""
        },
        {
            "name": "subjects",
            "baseName": "subjects",
            "type": "Array<RbacV1Subject>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ClusterRoleBinding.attributeTypeMap;
    }

    public constructor() {
    }
}
