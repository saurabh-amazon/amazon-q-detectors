// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=typescript-cdk-quicksight-ssl-connections@v1.0 defects=1}
import { CfnDataSource } from 'aws-cdk-lib/aws-quicksight';
import * as cdk from 'aws-cdk-lib';  
import { Stack } from 'aws-cdk-lib';
    
export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);    
    // Noncompliant: SSL disabled exposes data to security risks.
    new CfnDataSource(Stack, 'rDashboard', {
      sslProperties: { disableSsl: true }
    });
  }
}
// {/fact}
