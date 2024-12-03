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

import { V1beta1MatchResources } from '../models/V1beta1MatchResources.js';
import { V1beta1ParamRef } from '../models/V1beta1ParamRef.js';
import { HttpFile } from '../http/http.js';

/**
* ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.
*/
export class V1beta1ValidatingAdmissionPolicyBindingSpec {
    'matchResources'?: V1beta1MatchResources;
    'paramRef'?: V1beta1ParamRef;
    /**
    * PolicyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.
    */
    'policyName'?: string;
    /**
    * validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.  Failures defined by the ValidatingAdmissionPolicy\'s FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.  validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.  The supported actions values are:  \"Deny\" specifies that a validation failure results in a denied request.  \"Warn\" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.  \"Audit\" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `\"validation.policy.admission.k8s.io/validation_failure\": \"[{\"message\": \"Invalid value\", {\"policy\": \"policy.example.com\", {\"binding\": \"policybinding.example.com\", {\"expressionIndex\": \"1\", {\"validationActions\": [\"Audit\"]}]\"`  Clients should expect to handle additional values by ignoring any values not recognized.  \"Deny\" and \"Warn\" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.  Required.
    */
    'validationActions'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "matchResources",
            "baseName": "matchResources",
            "type": "V1beta1MatchResources",
            "format": ""
        },
        {
            "name": "paramRef",
            "baseName": "paramRef",
            "type": "V1beta1ParamRef",
            "format": ""
        },
        {
            "name": "policyName",
            "baseName": "policyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "validationActions",
            "baseName": "validationActions",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1ValidatingAdmissionPolicyBindingSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
