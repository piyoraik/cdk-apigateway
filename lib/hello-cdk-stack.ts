import { Stack, StackProps, aws_dynamodb, RemovalPolicy } from "aws-cdk-lib";
import { AttributeType } from "aws-cdk-lib/lib/aws-dynamodb";
import { Construct } from "constructs";

export class HelloCdkStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);
	}
}
