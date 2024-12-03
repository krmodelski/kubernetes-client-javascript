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

import { HttpFile } from '../http/http.js';

/**
* ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
*/
export class V1ResourceRule {
    /**
    * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  \"*\" means all.
    */
    'apiGroups'?: Array<string>;
    /**
    * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  \"*\" means all.
    */
    'resourceNames'?: Array<string>;
    /**
    * Resources is a list of resources this rule applies to.  \"*\" means all in the specified apiGroups.  \"*_/foo\" represents the subresource \'foo\' for all resources in the specified apiGroups.
    */
    'resources'?: Array<string>;
    /**
    * Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
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
        return V1ResourceRule.attributeTypeMap;
    }

    public constructor() {
    }
}
