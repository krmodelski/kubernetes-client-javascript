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

import { V1IngressLoadBalancerStatus } from '../models/V1IngressLoadBalancerStatus';
import { HttpFile } from '../http/http';

/**
* IngressStatus describe the current state of the Ingress.
*/
export class V1IngressStatus {
    'loadBalancer'?: V1IngressLoadBalancerStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "V1IngressLoadBalancerStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1IngressStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
