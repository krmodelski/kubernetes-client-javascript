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
* current status of a horizontal pod autoscaler
*/
export class V1HorizontalPodAutoscalerStatus {
    /**
    * currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
    */
    'currentCPUUtilizationPercentage'?: number;
    /**
    * currentReplicas is the current number of replicas of pods managed by this autoscaler.
    */
    'currentReplicas': number;
    /**
    * desiredReplicas is the  desired number of replicas of pods managed by this autoscaler.
    */
    'desiredReplicas': number;
    /**
    * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
    */
    'lastScaleTime'?: Date;
    /**
    * observedGeneration is the most recent generation observed by this autoscaler.
    */
    'observedGeneration'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentCPUUtilizationPercentage",
            "baseName": "currentCPUUtilizationPercentage",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currentReplicas",
            "baseName": "currentReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "desiredReplicas",
            "baseName": "desiredReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "lastScaleTime",
            "baseName": "lastScaleTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return V1HorizontalPodAutoscalerStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

