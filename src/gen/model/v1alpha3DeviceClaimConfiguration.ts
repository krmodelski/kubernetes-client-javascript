/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1alpha3OpaqueDeviceConfiguration } from './v1alpha3OpaqueDeviceConfiguration';

/**
* DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
*/
export class V1alpha3DeviceClaimConfiguration {
    'opaque'?: V1alpha3OpaqueDeviceConfiguration;
    /**
    * Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
    */
    'requests'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "opaque",
            "baseName": "opaque",
            "type": "V1alpha3OpaqueDeviceConfiguration"
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha3DeviceClaimConfiguration.attributeTypeMap;
    }
}
