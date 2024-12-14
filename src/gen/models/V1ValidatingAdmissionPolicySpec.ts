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

import { V1AuditAnnotation } from '../models/V1AuditAnnotation.js';
import { V1MatchCondition } from '../models/V1MatchCondition.js';
import { V1MatchResources } from '../models/V1MatchResources.js';
import { V1ParamKind } from '../models/V1ParamKind.js';
import { V1Validation } from '../models/V1Validation.js';
import { V1Variable } from '../models/V1Variable.js';
import { HttpFile } from '../http/http.js';

/**
* ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
*/
export class V1ValidatingAdmissionPolicySpec {
    /**
    * auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.
    */
    'auditAnnotations'?: Array<V1AuditAnnotation>;
    /**
    * failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.  A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.  failurePolicy does not define how validations that evaluate to false are handled.  When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.  Allowed values are Ignore or Fail. Defaults to Fail.
    */
    'failurePolicy'?: string;
    /**
    * MatchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.  If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.  The exact matching logic is (in order):   1. If ANY matchCondition evaluates to FALSE, the policy is skipped.   2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.   3. If any matchCondition evaluates to an error (but none are FALSE):      - If failurePolicy=Fail, reject the request      - If failurePolicy=Ignore, the policy is skipped
    */
    'matchConditions'?: Array<V1MatchCondition>;
    'matchConstraints'?: V1MatchResources;
    'paramKind'?: V1ParamKind;
    /**
    * Validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.
    */
    'validations'?: Array<V1Validation>;
    /**
    * Variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.  The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.
    */
    'variables'?: Array<V1Variable>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "auditAnnotations",
            "baseName": "auditAnnotations",
            "type": "Array<V1AuditAnnotation>",
            "format": ""
        },
        {
            "name": "failurePolicy",
            "baseName": "failurePolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchConditions",
            "baseName": "matchConditions",
            "type": "Array<V1MatchCondition>",
            "format": ""
        },
        {
            "name": "matchConstraints",
            "baseName": "matchConstraints",
            "type": "V1MatchResources",
            "format": ""
        },
        {
            "name": "paramKind",
            "baseName": "paramKind",
            "type": "V1ParamKind",
            "format": ""
        },
        {
            "name": "validations",
            "baseName": "validations",
            "type": "Array<V1Validation>",
            "format": ""
        },
        {
            "name": "variables",
            "baseName": "variables",
            "type": "Array<V1Variable>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ValidatingAdmissionPolicySpec.attributeTypeMap;
    }

    public constructor() {
    }
}
