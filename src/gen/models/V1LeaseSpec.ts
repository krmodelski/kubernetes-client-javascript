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

import { V1MicroTime } from '../../types.js';
import { HttpFile } from '../http/http.js';

/**
* LeaseSpec is a specification of a Lease.
*/
export class V1LeaseSpec {
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'acquireTime'?: V1MicroTime;
    /**
    * holderIdentity contains the identity of the holder of a current lease.
    */
    'holderIdentity'?: string;
    /**
    * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed renewTime.
    */
    'leaseDurationSeconds'?: number;
    /**
    * leaseTransitions is the number of transitions of a lease between holders.
    */
    'leaseTransitions'?: number;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'renewTime'?: V1MicroTime;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acquireTime",
            "baseName": "acquireTime",
            "type": "V1MicroTime",
            "format": "date-time-micro"
        },
        {
            "name": "holderIdentity",
            "baseName": "holderIdentity",
            "type": "string",
            "format": ""
        },
        {
            "name": "leaseDurationSeconds",
            "baseName": "leaseDurationSeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "leaseTransitions",
            "baseName": "leaseTransitions",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "renewTime",
            "baseName": "renewTime",
            "type": "V1MicroTime",
            "format": "date-time-micro"
        }    ];

    static getAttributeTypeMap() {
        return V1LeaseSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
