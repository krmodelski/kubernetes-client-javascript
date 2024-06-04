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

import { V2CrossVersionObjectReference } from '../models/V2CrossVersionObjectReference';
import { V2MetricIdentifier } from '../models/V2MetricIdentifier';
import { V2MetricTarget } from '../models/V2MetricTarget';
import { HttpFile } from '../http/http';

/**
* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
export class V2ObjectMetricSource {
    'describedObject': V2CrossVersionObjectReference;
    'metric': V2MetricIdentifier;
    'target': V2MetricTarget;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "describedObject",
            "baseName": "describedObject",
            "type": "V2CrossVersionObjectReference",
            "format": ""
        },
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
        return V2ObjectMetricSource.attributeTypeMap;
    }

    public constructor() {
    }
}

