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

import { V1JobCondition } from '../models/V1JobCondition.js';
import { V1UncountedTerminatedPods } from '../models/V1UncountedTerminatedPods.js';
import { HttpFile } from '../http/http.js';

/**
* JobStatus represents the current state of a Job.
*/
export class V1JobStatus {
    /**
    * The number of pending and running pods which are not terminating (without a deletionTimestamp). The value is zero for finished jobs.
    */
    'active'?: number;
    /**
    * completedIndexes holds the completed indexes when .spec.completionMode = \"Indexed\" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as \"1,3-5,7\".
    */
    'completedIndexes'?: string;
    /**
    * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. The completion time is set when the job finishes successfully, and only then. The value cannot be updated or removed. The value indicates the same or later point in time as the startTime field.
    */
    'completionTime'?: Date;
    /**
    * The latest available observations of an object\'s current state. When a Job fails, one of the conditions will have type \"Failed\" and status true. When a Job is suspended, one of the conditions will have type \"Suspended\" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type \"Complete\" and status true.  A job is considered finished when it is in a terminal condition, either \"Complete\" or \"Failed\". A Job cannot have both the \"Complete\" and \"Failed\" conditions. Additionally, it cannot be in the \"Complete\" and \"FailureTarget\" conditions. The \"Complete\", \"Failed\" and \"FailureTarget\" conditions cannot be disabled.  More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
    */
    'conditions'?: Array<V1JobCondition>;
    /**
    * The number of pods which reached phase Failed. The value increases monotonically.
    */
    'failed'?: number;
    /**
    * FailedIndexes holds the failed indexes when spec.backoffLimitPerIndex is set. The indexes are represented in the text format analogous as for the `completedIndexes` field, ie. they are kept as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the failed indexes are 1, 3, 4, 5 and 7, they are represented as \"1,3-5,7\". The set of failed indexes cannot overlap with the set of completed indexes.  This field is beta-level. It can be used when the `JobBackoffLimitPerIndex` feature gate is enabled (enabled by default).
    */
    'failedIndexes'?: string;
    /**
    * The number of pods which have a Ready condition.
    */
    'ready'?: number;
    /**
    * Represents time when the job controller started processing a job. When a Job is created in the suspended state, this field is not set until the first time it is resumed. This field is reset every time a Job is resumed from suspension. It is represented in RFC3339 form and is in UTC.  Once set, the field can only be removed when the job is suspended. The field cannot be modified while the job is unsuspended or finished.
    */
    'startTime'?: Date;
    /**
    * The number of pods which reached phase Succeeded. The value increases monotonically for a given spec. However, it may decrease in reaction to scale down of elastic indexed jobs.
    */
    'succeeded'?: number;
    /**
    * The number of pods which are terminating (in phase Pending or Running and have a deletionTimestamp).  This field is beta-level. The job controller populates the field when the feature gate JobPodReplacementPolicy is enabled (enabled by default).
    */
    'terminating'?: number;
    'uncountedTerminatedPods'?: V1UncountedTerminatedPods;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "completedIndexes",
            "baseName": "completedIndexes",
            "type": "string",
            "format": ""
        },
        {
            "name": "completionTime",
            "baseName": "completionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1JobCondition>",
            "format": ""
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "failedIndexes",
            "baseName": "failedIndexes",
            "type": "string",
            "format": ""
        },
        {
            "name": "ready",
            "baseName": "ready",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "succeeded",
            "baseName": "succeeded",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "terminating",
            "baseName": "terminating",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "uncountedTerminatedPods",
            "baseName": "uncountedTerminatedPods",
            "type": "V1UncountedTerminatedPods",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1JobStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
