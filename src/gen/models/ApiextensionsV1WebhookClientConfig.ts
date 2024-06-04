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

import { ApiextensionsV1ServiceReference } from '../models/ApiextensionsV1ServiceReference';
import { HttpFile } from '../http/http';

/**
* WebhookClientConfig contains the information to make a TLS connection with the webhook.
*/
export class ApiextensionsV1WebhookClientConfig {
    /**
    * caBundle is a PEM encoded CA bundle which will be used to validate the webhook\'s server certificate. If unspecified, system trust roots on the apiserver are used.
    */
    'caBundle'?: string;
    'service'?: ApiextensionsV1ServiceReference;
    /**
    * url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.  The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.  Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.  The scheme must be \"https\"; the URL must begin with \"https://\".  A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.  Attempting to use a user or basic auth e.g. \"user:password@\" is not allowed. Fragments (\"#...\") and query parameters (\"?...\") are not allowed, either.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "caBundle",
            "baseName": "caBundle",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "ApiextensionsV1ServiceReference",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiextensionsV1WebhookClientConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

