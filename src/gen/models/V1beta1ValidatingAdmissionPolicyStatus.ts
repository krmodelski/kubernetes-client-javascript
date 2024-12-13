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

import { V1Condition } from '../models/V1Condition.js';
import { V1beta1TypeChecking } from '../models/V1beta1TypeChecking.js';
import { HttpFile } from '../http/http.js';

/**
* ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
*/
export class V1beta1ValidatingAdmissionPolicyStatus {
    /**
    * The conditions represent the latest available observations of a policy\'s current state.
    */
    'conditions'?: Array<V1Condition>;
    /**
    * The generation observed by the controller.
    */
    'observedGeneration'?: number;
    'typeChecking'?: V1beta1TypeChecking;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "typeChecking",
            "baseName": "typeChecking",
            "type": "V1beta1TypeChecking",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1ValidatingAdmissionPolicyStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
