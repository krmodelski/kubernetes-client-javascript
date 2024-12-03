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

import { V1IPBlock } from '../models/V1IPBlock.js';
import { V1LabelSelector } from '../models/V1LabelSelector.js';
import { HttpFile } from '../http/http.js';

/**
* NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
*/
export class V1NetworkPolicyPeer {
    'ipBlock'?: V1IPBlock;
    'namespaceSelector'?: V1LabelSelector;
    'podSelector'?: V1LabelSelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ipBlock",
            "baseName": "ipBlock",
            "type": "V1IPBlock",
            "format": ""
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "podSelector",
            "baseName": "podSelector",
            "type": "V1LabelSelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NetworkPolicyPeer.attributeTypeMap;
    }

    public constructor() {
    }
}
