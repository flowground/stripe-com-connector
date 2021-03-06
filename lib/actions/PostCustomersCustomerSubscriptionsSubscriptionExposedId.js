/**
 * Auto-generated action file for "Stripe" API.
 *
 * Generated at: 2019-07-08T11:36:00.299Z
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
 * Operation: 'PostCustomersCustomerSubscriptionsSubscriptionExposedId'
 * Endpoint Path: '/v1/customers/{customer}/subscriptions/{subscription_exposed_id}'
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
    "customer",
    "subscription_exposed_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "customer": "customer",
    "subscription_exposed_id": "subscription_exposed_id",
    "application_fee_percent": "application_fee_percent",
    "billing": "billing",
    "billing_cycle_anchor": "billing_cycle_anchor",
    "billing_thresholds": "billing_thresholds",
    "cancel_at_period_end": "cancel_at_period_end",
    "coupon": "coupon",
    "days_until_due": "days_until_due",
    "default_source": "default_source",
    "expand": "expand",
    "items": "items",
    "metadata": "metadata",
    "prorate": "prorate",
    "proration_date": "proration_date",
    "tax_percent": "tax_percent",
    "trial_end": "trial_end",
    "trial_from_plan": "trial_from_plan",
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
        operationId: 'PostCustomersCustomerSubscriptionsSubscriptionExposedId',
        pathName: '/v1/customers/{customer}/subscriptions/{subscription_exposed_id}',
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