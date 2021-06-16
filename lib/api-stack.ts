import { Stack, StackProps } from "aws-cdk-lib";
import {
	Cors,
	LambdaIntegration,
	RestApi,
} from "aws-cdk-lib/lib/aws-apigateway";
import { Function } from "aws-cdk-lib/lib/aws-lambda";
import { Construct } from "constructs";

export class APIStack extends Stack {
	constructor(
		scope: Construct,
		id: string,
		Lambda: Function,
		props?: StackProps
	) {
		super(scope, id, props);

		const api = new RestApi(this, "sampleApi", {
			restApiName: "SampleAPI",
			defaultCorsPreflightOptions: {
				allowOrigins: Cors.ALL_ORIGINS,
				allowMethods: Cors.ALL_METHODS,
			},
		});
		// `/items`
		const items = api.root.addResource("items");

		// `/{id}`, method: GET
		const singleItem = items.addResource("{id}");
		const getItemIntegration = new LambdaIntegration(Lambda);
		singleItem.addMethod("GET", getItemIntegration);
	}
}
