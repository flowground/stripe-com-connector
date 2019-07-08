/**
 * Auto-generated action file for "Stripe" API.
 *
 * Generated at: 2019-07-08T11:36:00.307Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / stripe-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'PostDisputesDispute'
 * Endpoint Path: '/v1/disputes/{dispute}'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "dispute"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "dispute": "dispute",
    "access_activity_log": "access_activity_log",
    "billing_address": "billing_address",
    "cancellation_policy": "cancellation_policy",
    "cancellation_policy_disclosure": "cancellation_policy_disclosure",
    "cancellation_rebuttal": "cancellation_rebuttal",
    "customer_communication": "customer_communication",
    "customer_email_address": "customer_email_address",
    "customer_name": "customer_name",
    "customer_purchase_ip": "customer_purchase_ip",
    "customer_signature": "customer_signature",
    "duplicate_charge_documentation": "duplicate_charge_documentation",
    "duplicate_charge_explanation": "duplicate_charge_explanation",
    "duplicate_charge_id": "duplicate_charge_id",
    "product_description": "product_description",
    "receipt": "receipt",
    "refund_policy": "refund_policy",
    "refund_policy_disclosure": "refund_policy_disclosure",
    "refund_refusal_explanation": "refund_refusal_explanation",
    "service_date": "service_date",
    "service_documentation": "service_documentation",
    "shipping_address": "shipping_address",
    "shipping_carrier": "shipping_carrier",
    "shipping_date": "shipping_date",
    "shipping_documentation": "shipping_documentation",
    "shipping_tracking_number": "shipping_tracking_number",
    "uncategorized_file": "uncategorized_file",
    "uncategorized_text": "uncategorized_text",
    "evidence": "evidence",
    "expand": "expand",
    "metadata": "metadata",
    "submit": "submit",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/x-www-form-urlencoded';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'PostDisputesDispute',
        pathName: '/v1/disputes/{dispute}',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}