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

import { IntOrString } from '../../types.js';
import { HttpFile } from '../http/http.js';

/**
* NetworkPolicyPort describes a port to allow traffic on
*/
export class V1NetworkPolicyPort {
    /**
    * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
    */
    'endPort'?: number;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'port'?: IntOrString;
    /**
    * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
    */
    'protocol'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "endPort",
            "baseName": "endPort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "IntOrString",
            "format": "int-or-string"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NetworkPolicyPort.attributeTypeMap;
    }

    public constructor() {
    }
}
