/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.28.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1UserInfo } from '../models/V1UserInfo';
import { HttpFile } from '../http/http';

/**
* SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
*/
export class V1beta1SelfSubjectReviewStatus {
    'userInfo'?: V1UserInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userInfo",
            "baseName": "userInfo",
            "type": "V1UserInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1SelfSubjectReviewStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

