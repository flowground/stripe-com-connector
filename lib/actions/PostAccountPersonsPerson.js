/**
 * Auto-generated action file for "Stripe" API.
 *
 * Generated at: 2019-07-08T11:36:00.191Z
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
 * Operation: 'PostAccountPersonsPerson'
 * Endpoint Path: '/v1/account/persons/{person}'
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
    "person"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "person": "person",
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
    "day": "day",
    "month": "month",
    "year": "year",
    "dob": "dob",
    "email": "email",
    "expand": "expand",
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
    "phone": "phone",
    "account_opener": "account_opener",
    "director": "director",
    "owner": "owner",
    "percent_ownership": "percent_ownership",
    "title": "title",
    "relationship": "relationship",
    "ssn_last_4": "ssn_last_4",
    "back": "back",
    "front": "front",
    "document": "document",
    "verification": "verification",
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
        operationId: 'PostAccountPersonsPerson',
        pathName: '/v1/account/persons/{person}',
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