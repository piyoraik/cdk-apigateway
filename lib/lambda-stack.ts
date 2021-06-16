import { Stack, StackProps } from "aws-cdk-lib";
import { Table } from "aws-cdk-lib/lib/aws-dynamodb";
import { Code, Function, Runtime } from "aws-cdk-lib/lib/aws-lambda";
import { Construct } from "constructs";

export class LambdaStack extends Stack {
	public readonly getItemLambda: Function;
	constructor(scope: Construct, id: string, table: Table, props?: StackProps) {
		super(scope, id, props);

		//! Lambda関数の定義
		this.getItemLambda = new Function(this, "getOneItemFunction", {
			runtime: Runtime.NODEJS_12_X,
			code: Code.fromAsset("lambda"),
			handler: "get-item.handler",
			environment: {
				TABLE_NAME: table.tableName,
				PRIMARY_KEY: "itemId",
			},
		});

		//! Lambda関数に、dynamodb読み取り権限を付与
		table.grantReadData(this.getItemLambda);
	}
}
