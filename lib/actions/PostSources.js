/**
 * Auto-generated action file for "Stripe" API.
 *
 * Generated at: 2019-07-08T11:36:00.481Z
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
 * Operation: 'PostSources'
 * Endpoint Path: '/v1/sources'
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
    "amount": "amount",
    "currency": "currency",
    "customer": "customer",
    "expand": "expand",
    "flow": "flow",
    "date": "date",
    "ip": "ip",
    "contact_email": "contact_email",
    "offline": "offline",
    "user_agent": "user_agent",
    "online": "online",
    "status": "status",
    "type": "type",
    "acceptance": "acceptance",
    "interval": "interval",
    "notification_method": "notification_method",
    "mandate": "mandate",
    "metadata": "metadata",
    "original_source": "original_source",
    "city": "city",
    "country": "country",
    "line1": "line1",
    "line2": "line2",
    "postal_code": "postal_code",
    "state": "state",
    "address": "address",
    "email": "email",
    "name": "name",
    "phone": "phone",
    "owner": "owner",
    "refund_attributes_method": "refund_attributes_method",
    "receiver": "receiver",
    "return_url": "return_url",
    "redirect": "redirect",
    "statement_descriptor": "statement_descriptor",
    "token": "token",
    "usage": "usage",
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
        operationId: 'PostSources',
        pathName: '/v1/sources',
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