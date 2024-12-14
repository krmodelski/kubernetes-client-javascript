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

import { V1alpha1MigrationCondition } from '../models/V1alpha1MigrationCondition.js';
import { HttpFile } from '../http/http.js';

/**
* Status of the storage version migration.
*/
export class V1alpha1StorageVersionMigrationStatus {
    /**
    * The latest available observations of the migration\'s current state.
    */
    'conditions'?: Array<V1alpha1MigrationCondition>;
    /**
    * ResourceVersion to compare with the GC cache for performing the migration. This is the current resource version of given group, version and resource when kube-controller-manager first observes this StorageVersionMigration resource.
    */
    'resourceVersion'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1alpha1MigrationCondition>",
            "format": ""
        },
        {
            "name": "resourceVersion",
            "baseName": "resourceVersion",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1StorageVersionMigrationStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
