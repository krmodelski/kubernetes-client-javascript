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

import { V1NodeRuntimeHandlerFeatures } from '../models/V1NodeRuntimeHandlerFeatures.js';
import { HttpFile } from '../http/http.js';

/**
* NodeRuntimeHandler is a set of runtime handler information.
*/
export class V1NodeRuntimeHandler {
    'features'?: V1NodeRuntimeHandlerFeatures;
    /**
    * Runtime handler name. Empty for the default runtime handler.
    */
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "features",
            "baseName": "features",
            "type": "V1NodeRuntimeHandlerFeatures",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodeRuntimeHandler.attributeTypeMap;
    }

    public constructor() {
    }
}
