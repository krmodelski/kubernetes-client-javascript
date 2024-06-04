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

import { HttpFile } from '../http/http';

/**
* NonResourceRule holds information that describes a rule for the non-resource
*/
export class V1NonResourceRule {
    /**
    * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  \"*\" means all.
    */
    'nonResourceURLs'?: Array<string>;
    /**
    * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  \"*\" means all.
    */
    'verbs': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nonResourceURLs",
            "baseName": "nonResourceURLs",
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
        return V1NonResourceRule.attributeTypeMap;
    }

    public constructor() {
    }
}

