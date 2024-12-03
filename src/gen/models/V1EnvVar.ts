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

import { V1EnvVarSource } from '../models/V1EnvVarSource.js';
import { HttpFile } from '../http/http.js';

/**
* EnvVar represents an environment variable present in a Container.
*/
export class V1EnvVar {
    /**
    * Name of the environment variable. Must be a C_IDENTIFIER.
    */
    'name': string;
    /**
    * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\".
    */
    'value'?: string;
    'valueFrom'?: V1EnvVarSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "valueFrom",
            "baseName": "valueFrom",
            "type": "V1EnvVarSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EnvVar.attributeTypeMap;
    }

    public constructor() {
    }
}
