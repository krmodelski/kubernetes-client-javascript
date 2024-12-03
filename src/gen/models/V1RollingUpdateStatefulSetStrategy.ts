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

import { IntOrString } from '../../types';
import { HttpFile } from '../http/http';

/**
* RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
*/
export class V1RollingUpdateStatefulSetStrategy {
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'maxUnavailable'?: IntOrString;
    /**
    * Partition indicates the ordinal at which the StatefulSet should be partitioned for updates. During a rolling update, all pods from ordinal Replicas-1 to Partition are updated. All pods from ordinal Partition-1 to 0 remain untouched. This is helpful in being able to do a canary based deployment. The default value is 0.
    */
    'partition'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxUnavailable",
            "baseName": "maxUnavailable",
            "type": "IntOrString",
            "format": "int-or-string"
        },
        {
            "name": "partition",
            "baseName": "partition",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1RollingUpdateStatefulSetStrategy.attributeTypeMap;
    }

    public constructor() {
    }
}
