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

import { FlowcontrolV1Subject } from '../models/FlowcontrolV1Subject.js';
import { V1NonResourcePolicyRule } from '../models/V1NonResourcePolicyRule.js';
import { V1ResourcePolicyRule } from '../models/V1ResourcePolicyRule.js';
import { HttpFile } from '../http/http.js';

/**
* PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
*/
export class V1PolicyRulesWithSubjects {
    /**
    * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
    */
    'nonResourceRules'?: Array<V1NonResourcePolicyRule>;
    /**
    * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
    */
    'resourceRules'?: Array<V1ResourcePolicyRule>;
    /**
    * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
    */
    'subjects': Array<FlowcontrolV1Subject>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nonResourceRules",
            "baseName": "nonResourceRules",
            "type": "Array<V1NonResourcePolicyRule>",
            "format": ""
        },
        {
            "name": "resourceRules",
            "baseName": "resourceRules",
            "type": "Array<V1ResourcePolicyRule>",
            "format": ""
        },
        {
            "name": "subjects",
            "baseName": "subjects",
            "type": "Array<FlowcontrolV1Subject>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PolicyRulesWithSubjects.attributeTypeMap;
    }

    public constructor() {
    }
}
