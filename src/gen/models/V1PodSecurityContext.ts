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

import { V1AppArmorProfile } from '../models/V1AppArmorProfile.js';
import { V1SELinuxOptions } from '../models/V1SELinuxOptions.js';
import { V1SeccompProfile } from '../models/V1SeccompProfile.js';
import { V1Sysctl } from '../models/V1Sysctl.js';
import { V1WindowsSecurityContextOptions } from '../models/V1WindowsSecurityContextOptions.js';
import { HttpFile } from '../http/http.js';

/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
*/
export class V1PodSecurityContext {
    'appArmorProfile'?: V1AppArmorProfile;
    /**
    * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
    */
    'fsGroup'?: number;
    /**
    * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are \"OnRootMismatch\" and \"Always\". If not specified, \"Always\" is used. Note that this field cannot be set when spec.os.name is windows.
    */
    'fsGroupChangePolicy'?: string;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsGroup'?: number;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsNonRoot'?: boolean;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsUser'?: number;
    /**
    * seLinuxChangePolicy defines how the container\'s SELinux label is applied to all volumes used by the Pod. It has no effect on nodes that do not support SELinux or to volumes does not support SELinux. Valid values are \"MountOption\" and \"Recursive\".  \"Recursive\" means relabeling of all files on all Pod volumes by the container runtime. This may be slow for large volumes, but allows mixing privileged and unprivileged Pods sharing the same volume on the same node.  \"MountOption\" mounts all eligible Pod volumes with `-o context` mount option. This requires all Pods that share the same volume to use the same SELinux label. It is not possible to share the same volume among privileged and unprivileged Pods. Eligible volumes are in-tree FibreChannel and iSCSI volumes, and all CSI volumes whose CSI driver announces SELinux support by setting spec.seLinuxMount: true in their CSIDriver instance. Other volumes are always re-labelled recursively. \"MountOption\" value is allowed only when SELinuxMount feature gate is enabled.  If not specified and SELinuxMount feature gate is enabled, \"MountOption\" is used. If not specified and SELinuxMount feature gate is disabled, \"MountOption\" is used for ReadWriteOncePod volumes and \"Recursive\" for all other volumes.  This field affects only Pods that have SELinux label set, either in PodSecurityContext or in SecurityContext of all containers.  All Pods that use the same volume should use the same seLinuxChangePolicy, otherwise some pods can get stuck in ContainerCreating state. Note that this field cannot be set when spec.os.name is windows.
    */
    'seLinuxChangePolicy'?: string;
    'seLinuxOptions'?: V1SELinuxOptions;
    'seccompProfile'?: V1SeccompProfile;
    /**
    * A list of groups applied to the first process run in each container, in addition to the container\'s primary GID and fsGroup (if specified).  If the SupplementalGroupsPolicy feature is enabled, the supplementalGroupsPolicy field determines whether these are in addition to or instead of any group memberships defined in the container image. If unspecified, no additional groups are added, though group memberships defined in the container image may still be used, depending on the supplementalGroupsPolicy field. Note that this field cannot be set when spec.os.name is windows.
    */
    'supplementalGroups'?: Array<number>;
    /**
    * Defines how supplemental groups of the first container processes are calculated. Valid values are \"Merge\" and \"Strict\". If not specified, \"Merge\" is used. (Alpha) Using the field requires the SupplementalGroupsPolicy feature gate to be enabled and the container runtime must implement support for this feature. Note that this field cannot be set when spec.os.name is windows.
    */
    'supplementalGroupsPolicy'?: string;
    /**
    * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
    */
    'sysctls'?: Array<V1Sysctl>;
    'windowsOptions'?: V1WindowsSecurityContextOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appArmorProfile",
            "baseName": "appArmorProfile",
            "type": "V1AppArmorProfile",
            "format": ""
        },
        {
            "name": "fsGroup",
            "baseName": "fsGroup",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "fsGroupChangePolicy",
            "baseName": "fsGroupChangePolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "seLinuxChangePolicy",
            "baseName": "seLinuxChangePolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "V1SELinuxOptions",
            "format": ""
        },
        {
            "name": "seccompProfile",
            "baseName": "seccompProfile",
            "type": "V1SeccompProfile",
            "format": ""
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "supplementalGroupsPolicy",
            "baseName": "supplementalGroupsPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "sysctls",
            "baseName": "sysctls",
            "type": "Array<V1Sysctl>",
            "format": ""
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "V1WindowsSecurityContextOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodSecurityContext.attributeTypeMap;
    }

    public constructor() {
    }
}
