#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { DBStack } from "../lib/db-stack";
import { LambdaStack } from "../lib/lambda-stack";
import { APIStack } from "../lib/api-stack";

const app = new cdk.App();
const dbStack = new DBStack(app, "DBStack");
const lambdaStack = new LambdaStack(app, "getOneItemFunction", dbStack.Table);
const apiStack = new APIStack(app, "APIStack", lambdaStack.getItemLambda);
