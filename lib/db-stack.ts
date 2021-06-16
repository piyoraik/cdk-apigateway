import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { AttributeType, Table } from "aws-cdk-lib/lib/aws-dynamodb";
import { Construct } from "constructs";

export class DBStack extends Stack {
	public readonly Table: Table;
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		this.Table = new Table(this, "items", {
			partitionKey: {
				name: "itemId",
				type: AttributeType.STRING,
			},
			tableName: "items",
			removalPolicy: RemovalPolicy.DESTROY,
		});
	}
}
