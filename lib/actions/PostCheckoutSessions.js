/**
 * Auto-generated action file for "Stripe" API.
 *
 * Generated at: 2019-05-07T14:44:17.261Z
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
 * Operation: 'PostCheckoutSessions'
 * Endpoint Path: '/v1/checkout/sessions'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "cancel_url": "cancel_url",
    "client_reference_id": "client_reference_id",
    "customer_email": "customer_email",
    "expand": "expand",
    "line_items": "line_items",
    "locale": "locale",
    "application_fee_amount": "application_fee_amount",
    "description": "description",
    "metadata": "metadata",
    "on_behalf_of": "on_behalf_of",
    "receipt_email": "receipt_email",
    "city": "city",
    "country": "country",
    "line1": "line1",
    "line2": "line2",
    "postal_code": "postal_code",
    "state": "state",
    "address": "address",
    "carrier": "carrier",
    "name": "name",
    "phone": "phone",
    "tracking_number": "tracking_number",
    "shipping": "shipping",
    "statement_descriptor": "statement_descriptor",
    "destination": "destination",
    "transfer_data": "transfer_data",
    "payment_intent_data": "payment_intent_data",
    "payment_method_types": "payment_method_types",
    "items": "items",
    "trial_end": "trial_end",
    "trial_period_days": "trial_period_days",
    "subscription_data": "subscription_data",
    "success_url": "success_url",
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
        operationId: 'PostCheckoutSessions',
        pathName: '/v1/checkout/sessions',
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