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

import { V2MetricIdentifier } from '../models/V2MetricIdentifier.js';
import { V2MetricTarget } from '../models/V2MetricTarget.js';
import { HttpFile } from '../http/http.js';

/**
* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
*/
export class V2ExternalMetricSource {
    'metric': V2MetricIdentifier;
    'target': V2MetricTarget;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metric",
            "baseName": "metric",
            "type": "V2MetricIdentifier",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "V2MetricTarget",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2ExternalMetricSource.attributeTypeMap;
    }

    public constructor() {
    }
}
