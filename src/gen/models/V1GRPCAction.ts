/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.29.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class V1GRPCAction {
    /**
    * Port number of the gRPC service. Number must be in the range 1 to 65535.
    */
    'port': number;
    /**
    * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).  If this is not specified, the default behavior is defined by gRPC.
    */
    'service'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1GRPCAction.attributeTypeMap;
    }

    public constructor() {
    }
}

