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

import { V1AWSElasticBlockStoreVolumeSource } from '../models/V1AWSElasticBlockStoreVolumeSource.js';
import { V1AzureDiskVolumeSource } from '../models/V1AzureDiskVolumeSource.js';
import { V1AzureFilePersistentVolumeSource } from '../models/V1AzureFilePersistentVolumeSource.js';
import { V1CSIPersistentVolumeSource } from '../models/V1CSIPersistentVolumeSource.js';
import { V1CephFSPersistentVolumeSource } from '../models/V1CephFSPersistentVolumeSource.js';
import { V1CinderPersistentVolumeSource } from '../models/V1CinderPersistentVolumeSource.js';
import { V1FCVolumeSource } from '../models/V1FCVolumeSource.js';
import { V1FlexPersistentVolumeSource } from '../models/V1FlexPersistentVolumeSource.js';
import { V1FlockerVolumeSource } from '../models/V1FlockerVolumeSource.js';
import { V1GCEPersistentDiskVolumeSource } from '../models/V1GCEPersistentDiskVolumeSource.js';
import { V1GlusterfsPersistentVolumeSource } from '../models/V1GlusterfsPersistentVolumeSource.js';
import { V1HostPathVolumeSource } from '../models/V1HostPathVolumeSource.js';
import { V1ISCSIPersistentVolumeSource } from '../models/V1ISCSIPersistentVolumeSource.js';
import { V1LocalVolumeSource } from '../models/V1LocalVolumeSource.js';
import { V1NFSVolumeSource } from '../models/V1NFSVolumeSource.js';
import { V1ObjectReference } from '../models/V1ObjectReference.js';
import { V1PhotonPersistentDiskVolumeSource } from '../models/V1PhotonPersistentDiskVolumeSource.js';
import { V1PortworxVolumeSource } from '../models/V1PortworxVolumeSource.js';
import { V1QuobyteVolumeSource } from '../models/V1QuobyteVolumeSource.js';
import { V1RBDPersistentVolumeSource } from '../models/V1RBDPersistentVolumeSource.js';
import { V1ScaleIOPersistentVolumeSource } from '../models/V1ScaleIOPersistentVolumeSource.js';
import { V1StorageOSPersistentVolumeSource } from '../models/V1StorageOSPersistentVolumeSource.js';
import { V1VolumeNodeAffinity } from '../models/V1VolumeNodeAffinity.js';
import { V1VsphereVirtualDiskVolumeSource } from '../models/V1VsphereVirtualDiskVolumeSource.js';
import { HttpFile } from '../http/http.js';

/**
* PersistentVolumeSpec is the specification of a persistent volume.
*/
export class V1PersistentVolumeSpec {
    /**
    * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
    */
    'accessModes'?: Array<string>;
    'awsElasticBlockStore'?: V1AWSElasticBlockStoreVolumeSource;
    'azureDisk'?: V1AzureDiskVolumeSource;
    'azureFile'?: V1AzureFilePersistentVolumeSource;
    /**
    * capacity is the description of the persistent volume\'s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
    */
    'capacity'?: { [key: string]: string; };
    'cephfs'?: V1CephFSPersistentVolumeSource;
    'cinder'?: V1CinderPersistentVolumeSource;
    'claimRef'?: V1ObjectReference;
    'csi'?: V1CSIPersistentVolumeSource;
    'fc'?: V1FCVolumeSource;
    'flexVolume'?: V1FlexPersistentVolumeSource;
    'flocker'?: V1FlockerVolumeSource;
    'gcePersistentDisk'?: V1GCEPersistentDiskVolumeSource;
    'glusterfs'?: V1GlusterfsPersistentVolumeSource;
    'hostPath'?: V1HostPathVolumeSource;
    'iscsi'?: V1ISCSIPersistentVolumeSource;
    'local'?: V1LocalVolumeSource;
    /**
    * mountOptions is the list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
    */
    'mountOptions'?: Array<string>;
    'nfs'?: V1NFSVolumeSource;
    'nodeAffinity'?: V1VolumeNodeAffinity;
    /**
    * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
    */
    'persistentVolumeReclaimPolicy'?: string;
    'photonPersistentDisk'?: V1PhotonPersistentDiskVolumeSource;
    'portworxVolume'?: V1PortworxVolumeSource;
    'quobyte'?: V1QuobyteVolumeSource;
    'rbd'?: V1RBDPersistentVolumeSource;
    'scaleIO'?: V1ScaleIOPersistentVolumeSource;
    /**
    * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
    */
    'storageClassName'?: string;
    'storageos'?: V1StorageOSPersistentVolumeSource;
    /**
    * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature.
    */
    'volumeAttributesClassName'?: string;
    /**
    * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
    */
    'volumeMode'?: string;
    'vsphereVolume'?: V1VsphereVirtualDiskVolumeSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "awsElasticBlockStore",
            "baseName": "awsElasticBlockStore",
            "type": "V1AWSElasticBlockStoreVolumeSource",
            "format": ""
        },
        {
            "name": "azureDisk",
            "baseName": "azureDisk",
            "type": "V1AzureDiskVolumeSource",
            "format": ""
        },
        {
            "name": "azureFile",
            "baseName": "azureFile",
            "type": "V1AzureFilePersistentVolumeSource",
            "format": ""
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "cephfs",
            "baseName": "cephfs",
            "type": "V1CephFSPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "cinder",
            "baseName": "cinder",
            "type": "V1CinderPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "claimRef",
            "baseName": "claimRef",
            "type": "V1ObjectReference",
            "format": ""
        },
        {
            "name": "csi",
            "baseName": "csi",
            "type": "V1CSIPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "fc",
            "baseName": "fc",
            "type": "V1FCVolumeSource",
            "format": ""
        },
        {
            "name": "flexVolume",
            "baseName": "flexVolume",
            "type": "V1FlexPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "flocker",
            "baseName": "flocker",
            "type": "V1FlockerVolumeSource",
            "format": ""
        },
        {
            "name": "gcePersistentDisk",
            "baseName": "gcePersistentDisk",
            "type": "V1GCEPersistentDiskVolumeSource",
            "format": ""
        },
        {
            "name": "glusterfs",
            "baseName": "glusterfs",
            "type": "V1GlusterfsPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "hostPath",
            "baseName": "hostPath",
            "type": "V1HostPathVolumeSource",
            "format": ""
        },
        {
            "name": "iscsi",
            "baseName": "iscsi",
            "type": "V1ISCSIPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "local",
            "baseName": "local",
            "type": "V1LocalVolumeSource",
            "format": ""
        },
        {
            "name": "mountOptions",
            "baseName": "mountOptions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nfs",
            "baseName": "nfs",
            "type": "V1NFSVolumeSource",
            "format": ""
        },
        {
            "name": "nodeAffinity",
            "baseName": "nodeAffinity",
            "type": "V1VolumeNodeAffinity",
            "format": ""
        },
        {
            "name": "persistentVolumeReclaimPolicy",
            "baseName": "persistentVolumeReclaimPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "photonPersistentDisk",
            "baseName": "photonPersistentDisk",
            "type": "V1PhotonPersistentDiskVolumeSource",
            "format": ""
        },
        {
            "name": "portworxVolume",
            "baseName": "portworxVolume",
            "type": "V1PortworxVolumeSource",
            "format": ""
        },
        {
            "name": "quobyte",
            "baseName": "quobyte",
            "type": "V1QuobyteVolumeSource",
            "format": ""
        },
        {
            "name": "rbd",
            "baseName": "rbd",
            "type": "V1RBDPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "scaleIO",
            "baseName": "scaleIO",
            "type": "V1ScaleIOPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "storageClassName",
            "baseName": "storageClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "storageos",
            "baseName": "storageos",
            "type": "V1StorageOSPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "volumeAttributesClassName",
            "baseName": "volumeAttributesClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeMode",
            "baseName": "volumeMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "vsphereVolume",
            "baseName": "vsphereVolume",
            "type": "V1VsphereVirtualDiskVolumeSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
