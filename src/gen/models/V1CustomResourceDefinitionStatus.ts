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

import { V1CustomResourceDefinitionCondition } from '../models/V1CustomResourceDefinitionCondition.js';
import { V1CustomResourceDefinitionNames } from '../models/V1CustomResourceDefinitionNames.js';
import { HttpFile } from '../http/http.js';

/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
*/
export class V1CustomResourceDefinitionStatus {
    'acceptedNames'?: V1CustomResourceDefinitionNames;
    /**
    * conditions indicate state for particular aspects of a CustomResourceDefinition
    */
    'conditions'?: Array<V1CustomResourceDefinitionCondition>;
    /**
    * storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
    */
    'storedVersions'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acceptedNames",
            "baseName": "acceptedNames",
            "type": "V1CustomResourceDefinitionNames",
            "format": ""
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1CustomResourceDefinitionCondition>",
            "format": ""
        },
        {
            "name": "storedVersions",
            "baseName": "storedVersions",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceDefinitionStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
