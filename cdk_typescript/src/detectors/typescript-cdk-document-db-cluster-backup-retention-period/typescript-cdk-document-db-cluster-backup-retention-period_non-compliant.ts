// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=typescript-cdk-document-db-cluster-backup-retention-period@v1.0 defects=1}
import { DatabaseCluster } from 'aws-cdk-lib/aws-docdb';
import {
  InstanceType,
  InstanceClass,
  InstanceSize,
  Vpc
} from 'aws-cdk-lib/aws-ec2';
import { SecretValue, Stack } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';

export class CdkStarterStack extends cdk.Stack {
	constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
		super(scope, id, props);
    // Noncompliant: Lacks backup retention configuration, risking potential data loss.
    new DatabaseCluster(Stack, 'rDatabaseCluster', {
      instanceType: InstanceType.of(InstanceClass.R5, InstanceSize.LARGE),
      vpc: new Vpc(Stack, 'rVpc'),
      masterUser: {
        username: SecretValue.secretsManager('foo').toString(),
        password: SecretValue.secretsManager('bar')
      }
    });
	}
}
// {/fact}