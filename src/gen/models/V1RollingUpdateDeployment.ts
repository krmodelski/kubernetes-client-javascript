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

import { IntOrString } from '../../types.js';
import { HttpFile } from '../http/http.js';

/**
* Spec to control the desired behavior of rolling update.
*/
export class V1RollingUpdateDeployment {
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'maxSurge'?: IntOrString;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'maxUnavailable'?: IntOrString;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxSurge",
            "baseName": "maxSurge",
            "type": "IntOrString",
            "format": "int-or-string"
        },
        {
            "name": "maxUnavailable",
            "baseName": "maxUnavailable",
            "type": "IntOrString",
            "format": "int-or-string"
        }    ];

    static getAttributeTypeMap() {
        return V1RollingUpdateDeployment.attributeTypeMap;
    }

    public constructor() {
    }
}
