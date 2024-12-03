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

import { V1NonResourceAttributes } from '../models/V1NonResourceAttributes';
import { V1ResourceAttributes } from '../models/V1ResourceAttributes';
import { HttpFile } from '../http/http';

/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export class V1SubjectAccessReviewSpec {
    /**
    * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
    */
    'extra'?: { [key: string]: Array<string>; };
    /**
    * Groups is the groups you\'re testing for.
    */
    'groups'?: Array<string>;
    'nonResourceAttributes'?: V1NonResourceAttributes;
    'resourceAttributes'?: V1ResourceAttributes;
    /**
    * UID information about the requesting user.
    */
    'uid'?: string;
    /**
    * User is the user you\'re testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
    */
    'user'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "extra",
            "baseName": "extra",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>",
            "format": ""
        },
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
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SubjectAccessReviewSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
