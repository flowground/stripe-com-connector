/**
 * Auto-generated action file for "Stripe" API.
 *
 * Generated at: 2019-05-07T14:44:17.323Z
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
 * Operation: 'PostTokens'
 * Endpoint Path: '/v1/tokens'
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
    "business_type": "business_type",
    "city": "city",
    "country": "country",
    "line1": "line1",
    "line2": "line2",
    "postal_code": "postal_code",
    "state": "state",
    "address": "address",
    "town": "town",
    "address_kana": "address_kana",
    "address_kanji": "address_kanji",
    "directors_provided": "directors_provided",
    "name": "name",
    "name_kana": "name_kana",
    "name_kanji": "name_kanji",
    "owners_provided": "owners_provided",
    "phone": "phone",
    "tax_id": "tax_id",
    "tax_id_registrar": "tax_id_registrar",
    "vat_id": "vat_id",
    "company": "company",
    "day": "day",
    "month": "month",
    "year": "year",
    "dob": "dob",
    "email": "email",
    "first_name": "first_name",
    "first_name_kana": "first_name_kana",
    "first_name_kanji": "first_name_kanji",
    "gender": "gender",
    "id_number": "id_number",
    "last_name": "last_name",
    "last_name_kana": "last_name_kana",
    "last_name_kanji": "last_name_kanji",
    "maiden_name": "maiden_name",
    "metadata": "metadata",
    "ssn_last_4": "ssn_last_4",
    "back": "back",
    "front": "front",
    "document": "document",
    "verification": "verification",
    "individual": "individual",
    "tos_shown_and_accepted": "tos_shown_and_accepted",
    "account": "account",
    "amount": "amount",
    "bank_account": "bank_account",
    "card": "card",
    "currency": "currency",
    "customer": "customer",
    "expand": "expand",
    "external_id": "external_id",
    "iovation_blackbox": "iovation_blackbox",
    "ip": "ip",
    "payment_user_agent": "payment_user_agent",
    "pii": "pii",
    "recipient": "recipient",
    "referrer": "referrer",
    "request_id": "request_id",
    "user_agent": "user_agent",
    "validation_type": "validation_type",
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
        operationId: 'PostTokens',
        pathName: '/v1/tokens',
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