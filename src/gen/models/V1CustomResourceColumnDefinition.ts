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

import { HttpFile } from '../http/http.js';

/**
* CustomResourceColumnDefinition specifies a column for server side printing.
*/
export class V1CustomResourceColumnDefinition {
    /**
    * description is a human readable description of this column.
    */
    'description'?: string;
    /**
    * format is an optional OpenAPI type definition for this column. The \'name\' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
    */
    'format'?: string;
    /**
    * jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
    */
    'jsonPath': string;
    /**
    * name is a human readable name for the column.
    */
    'name': string;
    /**
    * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
    */
    'priority'?: number;
    /**
    * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string",
            "format": ""
        },
        {
            "name": "jsonPath",
            "baseName": "jsonPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceColumnDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}
