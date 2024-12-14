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

import { HttpFile } from '../http/http.js';

/**
* PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
*/
export class V1PolicyRule {
    /**
    * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. \"\" represents the core API group and \"*\" represents all API groups.
    */
    'apiGroups'?: Array<string>;
    /**
    * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as \"pods\" or \"secrets\") or non-resource URL paths (such as \"/api\"),  but not both.
    */
    'nonResourceURLs'?: Array<string>;
    /**
    * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
    */
    'resourceNames'?: Array<string>;
    /**
    * Resources is a list of resources this rule applies to. \'*\' represents all resources.
    */
    'resources'?: Array<string>;
    /**
    * Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. \'*\' represents all verbs.
    */
    'verbs': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiGroups",
            "baseName": "apiGroups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nonResourceURLs",
            "baseName": "nonResourceURLs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "resourceNames",
            "baseName": "resourceNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "verbs",
            "baseName": "verbs",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PolicyRule.attributeTypeMap;
    }

    public constructor() {
    }
}
