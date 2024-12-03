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

import { HttpFile } from '../http/http.js';

/**
* SleepAction describes a \"sleep\" action.
*/
export class V1SleepAction {
    /**
    * Seconds is the number of seconds to sleep.
    */
    'seconds': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return V1SleepAction.attributeTypeMap;
    }

    public constructor() {
    }
}
