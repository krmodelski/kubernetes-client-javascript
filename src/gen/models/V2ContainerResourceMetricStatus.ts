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

import { V2MetricValueStatus } from '../models/V2MetricValueStatus';
import { HttpFile } from '../http/http';

/**
* ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
*/
export class V2ContainerResourceMetricStatus {
    /**
    * container is the name of the container in the pods of the scaling target
    */
    'container': string;
    'current': V2MetricValueStatus;
    /**
    * name is the name of the resource in question.
    */
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "container",
            "baseName": "container",
            "type": "string",
            "format": ""
        },
        {
            "name": "current",
            "baseName": "current",
            "type": "V2MetricValueStatus",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2ContainerResourceMetricStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
