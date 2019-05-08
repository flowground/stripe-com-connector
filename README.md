# ![LOGO](logo.png) Stripe **flow**ground Connector

## Description

A generated **flow**ground connector for the Stripe API (version 2019-02-19).

Generated from: https://api.apis.guru/v2/specs/stripe.com/2019-02-19/swagger.json<br/>
Generated at: 2019-05-07T17:44:17+03:00

## API Description

The Stripe REST API. Please see https://stripe.com/docs/api for more details.

## Authorization

This API does not require authorization.

## Actions

### <p>Initiate 3D Secure authentication.</p>

### <p>Retrieves a 3D Secure object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `three_d_secure` - _required_ - The identifier of the 3D Secure object to be retrieved.

### <p>With <a href="/docs/connect">Connect</a>, you may delete Custom accounts you manage.</p><br/>
> <br/>
> <p>Custom accounts created using test-mode keys can be deleted at any time. Custom accounts created using live-mode keys may only be deleted once all balances are zero.</p><br/>
> <br/>
> <p>If you are looking to close your own account, use the <a href="https://dashboard.stripe.com/account/data">data tab in your account settings</a> instead.</p>

### <p>Retrieves the details of an account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.

### <p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p><br/>
> <br/>
> <p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>

### <p>Create an external account for a given account.</p>

### <p>Delete a specified external account for a given account.</p>

#### Input Parameters
* `id` - _required_ - The ID of the external account to be deleted.

### <p>Retrieve a specified external account for a given account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_

### <p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p><br/>
> <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>

#### Input Parameters
* `id` - _required_ - The ID of the external account to update

### <p>List external accounts for an account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Create an external account for a given account.</p>

### <p>Delete a specified external account for a given account.</p>

#### Input Parameters
* `id` - _required_ - The ID of the external account to be deleted.

### <p>Retrieve a specified external account for a given account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_

### <p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p><br/>
> <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>

#### Input Parameters
* `id` - _required_ - The ID of the external account to update

### <p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p><br/>
> <br/>
> <p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>

### <p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p><br/>
> <br/>
> <p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>

### <p>Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `relationship` - _optional_ - Filters on the list of people returned based on the person's relationship to the account's company.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new person.</p>

### <p>Deletes an existing person's relationship to the account's legal entity.</p>

#### Input Parameters
* `person` - _required_ - The ID of the person to be deleted.

### <p>Retrieves an existing person.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `person` - _required_ - The ID of a person to retrieve.

### <p>Updates an existing person.</p>

#### Input Parameters
* `person` - _required_ - The ID of a person to update.

### <p>Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `relationship` - _optional_ - Filters on the list of people returned based on the person's relationship to the account's company.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new person.</p>

### <p>Deletes an existing person's relationship to the account's legal entity.</p>

#### Input Parameters
* `person` - _required_ - The ID of the person to be deleted.

### <p>Retrieves an existing person.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `person` - _required_ - The ID of a person to retrieve.

### <p>Updates an existing person.</p>

#### Input Parameters
* `person` - _required_ - The ID of a person to update.

### <p>Creates an AccountLink object that returns a Stripe URL that the user can redirect their user to in order to take them through the Hosted Verification flow.</p>

### <p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you're not a platform, the list is empty.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.<br/>
> To do this, you'll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p><br/>
> <br/>
> <p>For Standard accounts, parameters other than <code>country</code>, <code>email</code>, and <code>type</code><br/>
> are used to prefill the account application that we ask the account holder to complete.</p>

### <p>With <a href="/docs/connect">Connect</a>, you may delete Custom accounts you manage.</p><br/>
> <br/>
> <p>Custom accounts created using test-mode keys can be deleted at any time. Custom accounts created using live-mode keys may only be deleted once all balances are zero.</p><br/>
> <br/>
> <p>If you are looking to close your own account, use the <a href="https://dashboard.stripe.com/account/data">data tab in your account settings</a> instead.</p>

#### Input Parameters
* `account` - _required_ - The identifier of the account to be deleted. If none is provided, will default to the account of the API key.

### <p>Retrieves the details of an account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `account` - _required_ - The identifier of the account to retrieve. If none is provided, the account associated with the API key is returned.

### <p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p><br/>
> <br/>
> <p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>

#### Input Parameters
* `account` - _required_

### <p>Create an external account for a given account.</p>

#### Input Parameters
* `account` - _required_

### <p>Delete a specified external account for a given account.</p>

#### Input Parameters
* `account` - _required_
* `id` - _required_ - The ID of the external account to be deleted.

### <p>Retrieve a specified external account for a given account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `account` - _required_
* `id` - _required_

### <p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p><br/>
> <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>

#### Input Parameters
* `account` - _required_
* `id` - _required_ - The ID of the external account to update

### <p>List external accounts for an account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `account` - _required_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Create an external account for a given account.</p>

#### Input Parameters
* `account` - _required_

### <p>Delete a specified external account for a given account.</p>

#### Input Parameters
* `account` - _required_
* `id` - _required_ - The ID of the external account to be deleted.

### <p>Retrieve a specified external account for a given account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `account` - _required_
* `id` - _required_

### <p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p><br/>
> <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>

#### Input Parameters
* `account` - _required_
* `id` - _required_ - The ID of the external account to update

### <p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p><br/>
> <br/>
> <p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>

#### Input Parameters
* `account` - _required_ - The identifier of the account to create a login link for.

### <p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p><br/>
> <br/>
> <p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>

#### Input Parameters
* `account` - _required_ - The identifier of the account to log out.

### <p>Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `account` - _required_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `relationship` - _optional_ - Filters on the list of people returned based on the person's relationship to the account's company.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new person.</p>

#### Input Parameters
* `account` - _required_

### <p>Deletes an existing person's relationship to the account's legal entity.</p>

#### Input Parameters
* `account` - _required_
* `person` - _required_ - The ID of the person to be deleted.

### <p>Retrieves an existing person.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `account` - _required_
* `person` - _required_ - The ID of a person to retrieve.

### <p>Updates an existing person.</p>

#### Input Parameters
* `account` - _required_
* `person` - _required_ - The ID of a person to update.

### <p>Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `account` - _required_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `relationship` - _optional_ - Filters on the list of people returned based on the person's relationship to the account's company.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new person.</p>

#### Input Parameters
* `account` - _required_

### <p>Deletes an existing person's relationship to the account's legal entity.</p>

#### Input Parameters
* `account` - _required_
* `person` - _required_ - The ID of the person to be deleted.

### <p>Retrieves an existing person.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `account` - _required_
* `person` - _required_ - The ID of a person to retrieve.

### <p>Updates an existing person.</p>

#### Input Parameters
* `account` - _required_
* `person` - _required_ - The ID of a person to update.

### <p>With <a href="/docs/connect">Connect</a>, you may flag accounts as suspicious.</p><br/>
> <br/>
> <p>Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.</p>

#### Input Parameters
* `account` - _required_ - The identifier of the account to reject

### <p>List apple pay domains.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `domain_name` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Create an apple pay domain.</p>

### <p>Delete an apple pay domain.</p>

#### Input Parameters
* `domain` - _required_

### <p>Retrieve an apple pay domain.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `domain` - _required_

### <p>Returns a list of application fees you've previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `charge` - _optional_ - Only return application fees for the charge specified by this charge ID.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `fee` - _required_ - ID of the application fee refunded.
* `id` - _required_ - ID of refund to retrieve.

### <p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><br/>
> <br/>
> <p>This request only accepts metadata as an argument.</p>

#### Input Parameters
* `fee` - _required_ - ID of the application fee refunded.
* `id` - _required_ - ID of refund to retrieve.

### <p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - The identifier of the fee to be retrieved.

### PostApplicationFeesIdRefund

#### Input Parameters
* `id` - _required_

### <p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `id` - _required_ - The ID of the application fee whose refunds will be retrieved.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Refunds an application fee that has previously been collected but not yet refunded.<br/>
> Funds will be refunded to the Stripe account from which the fee was originally collected.</p><br/>
> <br/>
> <p>You can optionally refund only part of an application fee.<br/>
> You can do so multiple times, until the entire fee has been refunded.</p><br/>
> <br/>
> <p>Once entirely refunded, an application fee can't be refunded again.<br/>
> This method will raise an error when called on an already-refunded application fee,<br/>
> or when trying to refund more money than is left on an application fee.</p>

#### Input Parameters
* `id` - _required_ - The identifier of the application fee to be refunded.

### <p>Retrieves the current account balance, based on the authentication that was used to make the request.<br/>
>  For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.

### <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `available_on` - _optional_
* `created` - _optional_
* `currency` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `payout` - _optional_ - For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.
* `source` - _optional_ - Only returns the original transaction.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `type` - _optional_ - Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, `payment`, `payout`, `payout_failure`, `stripe_fee`, or `network_cost`.

### <p>Retrieves the balance transaction with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - The ID of the desired balance transaction, as found on any API object that affects the balance (e.g., a charge or transfer).

### <p>Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `active` - _optional_ - Filter for active receivers.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `filled` - _optional_ - Filter for filled receivers.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `uncaptured_funds` - _optional_ - Filter for receivers with uncaptured funds.

### <p>Retrieves the Bitcoin receiver with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_

### <p>List bitcoin transacitons for a given receiver.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _optional_ - Only return transactions for the customer specified by this customer ID.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `receiver` - _required_ - Only return transactions for the receiver specified by this receiver ID.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>List bitcoin transacitons for a given receiver.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _optional_ - Only return transactions for the customer specified by this customer ID.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `receiver` - _optional_ - Only return transactions for the receiver specified by this receiver ID.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `customer` - _optional_ - Only return charges for the customer specified by this customer ID.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `source` - _optional_ - A filter on the list, based on the source of the charge. The value can be a dictionary with the following options:
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `transfer_group` - _optional_ - Only return charges for this transfer group.

### <p>To charge a credit card or other payment source, you create a <code>Charge</code> object. If your API key is in test mode, the supplied payment source (e.g., card) won't actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).</p>

### <p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `charge` - _required_ - The identifier of the charge to be retrieved.

### <p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `charge` - _required_

### <p>Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you <a href="#create_charge">created a charge</a> with the capture option set to false.</p><br/>
> <br/>
> <p>Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.</p>

#### Input Parameters
* `charge` - _required_

### <p>Retrieve a dispute for a specified charge.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `charge` - _required_

### PostChargesChargeDispute

#### Input Parameters
* `charge` - _required_

### PostChargesChargeDisputeClose

#### Input Parameters
* `charge` - _required_

### <p>When you create a new refund, you must specify a charge on which to create it.</p><br/>
> <br/>
> <p>Creating a new refund will refund a charge that has previously been created but not yet refunded.<br/>
> Funds will be refunded to the credit or debit card that was originally charged.</p><br/>
> <br/>
> <p>You can optionally refund only part of a charge.<br/>
> You can do so multiple times, until the entire charge has been refunded.</p><br/>
> <br/>
> <p>Once entirely refunded, a charge can't be refunded again.<br/>
> This method will raise an error when called on an already-refunded charge,<br/>
> or when trying to refund more money than is left on a charge.</p>

#### Input Parameters
* `charge` - _required_

### <p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `charge` - _required_ - The ID of the charge whose refunds will be retrieved.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Create a refund.</p>

#### Input Parameters
* `charge` - _required_

### <p>Retrieves the details of an existing refund.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `charge` - _required_
* `refund` - _required_

### <p>Update a specified refund.</p>

#### Input Parameters
* `charge` - _required_
* `refund` - _required_

### <p>Creates a Session object.</p>

### <p>Lists all Country Spec objects available in the API.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Returns a Country Spec for a given Country code.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `country` - _required_ - An ISO 3166-1 alpha-2 country code. Available country codes can be listed with the [List Country Specs](https://stripe.com/docs/api#list_country_specs) endpoint.

### <p>Returns a list of your coupons.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_ - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p><br/>
> <br/>
> <p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice's subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>

### <p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can't redeem the coupon. You can also delete coupons via the API.</p>

#### Input Parameters
* `coupon` - _required_ - The identifier of the coupon to be deleted.

### <p>Retrieves the coupon with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `coupon` - _required_ - The ID of the desired coupon.

### <p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>

#### Input Parameters
* `coupon` - _required_ - The identifier of the coupon to be updated.

### <p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `email` - _optional_ - A filter on the list based on the customer's `email` field. The value must be a string.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new customer object.</p>

### <p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>

#### Input Parameters
* `customer` - _required_ - The identifier of the customer to be deleted.

### <p>Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_ - The identifier of the customer to be retrieved.

### <p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer's active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer's current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p><br/>
> <br/>
> <p>This request accepts mostly the same arguments as the customer creation call.</p>

#### Input Parameters
* `customer` - _required_ - The identifier of the customer to subscribe.

### <p>You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional bank accounts.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_ - The ID of the customer whose bank accounts will be retrieved.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p><br/>
> <br/>
> <p>If the card's owner has no default card, then the new card will become the default.<br/>
> However, if the owner already has a default, then it will not change.<br/>
> To change the default, you should either <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>,<br/>
> or <a href="/docs/api#update_recipient">update the recipient</a> to have a new <code>default_card</code>.</p>

#### Input Parameters
* `customer` - _required_

### <p>Delete a specified source for a given customer.</p>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be deleted.

### <p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_
* `id` - _required_ - ID of bank account to retrieve.

### <p>Update a specified source for a given customer.</p>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the card to be updated.

### <p>Verify a specified bank account for a given customer.</p>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be verified.

### <p>You can see a list of the cards belonging to a customer.<br/>
> Note that the 10 most recent sources are always available on the <code>Customer</code> object.<br/>
> If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional cards.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_ - The ID of the customer whose cards will be retrieved.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p><br/>
> <br/>
> <p>If the card's owner has no default card, then the new card will become the default.<br/>
> However, if the owner already has a default, then it will not change.<br/>
> To change the default, you should either <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>,<br/>
> or <a href="/docs/api#update_recipient">update the recipient</a> to have a new <code>default_card</code>.</p>

#### Input Parameters
* `customer` - _required_

### <p>Delete a specified source for a given customer.</p>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be deleted.

### <p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_
* `id` - _required_ - The ID of the card to be retrieved.

### <p>Update a specified source for a given customer.</p>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the card to be updated.

### <p>Removes the currently applied discount on a customer.</p>

#### Input Parameters
* `customer` - _required_

### GetCustomersCustomerDiscount

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_

### <p>List sources for a specified customer.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_ - The ID of the customer whose sources will be retrieved.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `object` - _optional_ - Filter sources according to a particular object type.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `type` - _optional_

### <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p><br/>
> <br/>
> <p>If the card's owner has no default card, then the new card will become the default.<br/>
> However, if the owner already has a default, then it will not change.<br/>
> To change the default, you should either <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>,<br/>
> or <a href="/docs/api#update_recipient">update the recipient</a> to have a new <code>default_card</code>.</p>

#### Input Parameters
* `customer` - _required_

### <p>Delete a specified source for a given customer.</p>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be deleted.

### <p>Retrieve a specified source for a given customer.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_
* `id` - _required_ - The ID of the source to be retrieved.

### <p>Update a specified source for a given customer.</p>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the card to be updated.

### <p>Verify a specified bank account for a given customer.</p>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be verified.

### <p>You can see a list of the customer's active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_ - The ID of the customer whose subscriptions will be retrieved.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new subscription on an existing customer.</p>

#### Input Parameters
* `customer` - _required_ - The identifier of the customer to subscribe.

### <p>Cancels a customer's subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p><br/>
> <br/>
> <p>Note, however, that any pending invoice items that you've created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you've set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p><br/>
> <br/>
> <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>

#### Input Parameters
* `customer` - _required_
* `subscription_exposed_id` - _required_

### <p>Retrieves the subscription with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_
* `subscription_exposed_id` - _required_ - ID of subscription to retrieve.

### <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>

#### Input Parameters
* `customer` - _required_ - The identifier of the customer to subscribe.
* `subscription_exposed_id` - _required_ - The identifier of the subscription to update.

### <p>Removes the currently applied discount on a customer.</p>

#### Input Parameters
* `customer` - _required_
* `subscription_exposed_id` - _required_

### GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `customer` - _required_
* `subscription_exposed_id` - _required_

### <p>Returns a list of your disputes.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieves the dispute with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `dispute` - _required_ - ID of dispute to retrieve.

### <p>When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p><br/>
> <br/>
> <p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>

#### Input Parameters
* `dispute` - _required_ - ID of the dispute to update.

### <p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p><br/>
> <br/>
> <p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>

#### Input Parameters
* `dispute` - _required_ - ID of the dispute to close.

### <p>Creates a short-lived API key for a given resource.</p>

### <p>Invalidates a short-lived API key for a given resource.</p>

#### Input Parameters
* `key` - _required_ - The ID of the key you'd like to invalidate.

### <p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="/docs/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `delivery_success` - _optional_ - Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `type` - _optional_ - A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
* `types` - _optional_ - An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.

### <p>Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - The identifier of the event to be retrieved.

### <p>Resend an event. This only works in testmode</p>

#### Input Parameters
* `id` - _required_

### <p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include `starting_after=X` in order to fetch the next page of the list.

### <p>Retrieves the exchange rates from the given currency to every supported currency.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `currency` - _required_ - Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

### <p>Returns a list of file links.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `expired` - _optional_ - Filter links by their expiration status. By default, all links are returned.
* `file` - _optional_ - Only return links for the given file.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new file link object.</p>

### <p>Retrieves the file link with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `link` - _required_ - The identifier of the file link to be retrieved.

### <p>Updates an existing file link object. Expired links can no longer be updated.</p>

#### Input Parameters
* `link` - _required_ - The ID of the file link.

### <p>Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `purpose` - _optional_ - The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>To upload a file to Stripe, you'll need to send a request of type <code>multipart/form-data</code>. The request should contain the file you would like to upload, as well as the parameters for creating a file.</p><br/>
> <br/>
> <p>All of Stripe's officially supported API libraries should have support for sending <code>multipart/form-data</code>.</p>

### <p>Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `file` - _required_ - The identifier of the file to be retrieved.

### <p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `customer` - _optional_ - The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `invoice` - _optional_ - Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `pending` - _optional_ - Set to `true` to only show pending invoice items, which are not yet attached to any invoices. Set to `false` to only show invoice items already attached to invoices. If unspecified, no filter is applied.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates an item to be added to a draft invoice. If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>

### <p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they're not attached to invoices, or if it's attached to a draft invoice.</p>

#### Input Parameters
* `invoiceitem` - _required_ - The identifier of the invoice item to be deleted.

### <p>Retrieves the invoice item with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `invoiceitem` - _required_ - The ID of the desired invoice item.

### <p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.</p>

#### Input Parameters
* `invoiceitem` - _required_

### <p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `billing` - _optional_ - The billing mode of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
* `created` - _optional_
* `customer` - _optional_ - Only return invoices for the customer specified by this customer ID.
* `due_date` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `subscription` - _optional_ - Only return invoices for the subscription specified by this subscription ID.

### <p>This endpoint creates a draft invoice for a given customer. The draft invoice created pulls in all pending invoice items on that customer, including prorations.</p>

### <p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discount that is applicable to the customer.</p><br/>
> <br/>
> <p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview - the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer's discount.</p><br/>
> <br/>
> <p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass a <code>proration_date</code> parameter when doing the actual subscription update. The value passed in should be the same as the <code>subscription_proration_date</code> returned on the upcoming invoice resource. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_proration_date</code> on the upcoming invoice resource.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `coupon` - _optional_ - The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
* `customer` - _optional_ - The identifier of the customer whose upcoming invoice you'd like to retrieve.
* `invoice_items` - _optional_ - List of invoice items to add or update in the upcoming invoice preview.
* `subscription` - _optional_ - The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
* `subscription_billing_cycle_anchor` - _optional_ - For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`.
* `subscription_cancel_at_period_end` - _optional_ - Boolean indicating whether this subscription should cancel at the end of the current period.
* `subscription_cancel_now` - _optional_
* `subscription_items` - _optional_ - List of subscription items, each with an attached plan.
* `subscription_prorate` - _optional_ - If previewing an update to a subscription, this decides whether the preview will show the result of applying prorations or not. If set, one of `subscription_items` or `subscription`, and one of `subscription_items` or `subscription_trial_end` are required.
* `subscription_proration_date` - _optional_ - If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration` cannot be set to false.
* `subscription_tax_percent` - _optional_ - If provided, the invoice returned will preview updating or creating a subscription with that tax percent. If set, one of `subscription_items` or `subscription` is required.
* `subscription_trial_end` - _optional_ - If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.
* `subscription_trial_from_plan` - _optional_ - Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.

### <p>When retrieving an upcoming invoice, you'll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `coupon` - _optional_ - The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
* `customer` - _optional_ - The identifier of the customer whose upcoming invoice you'd like to retrieve.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `invoice_items` - _optional_ - List of invoice items to add or update in the upcoming invoice preview.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `subscription` - _optional_ - The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
* `subscription_billing_cycle_anchor` - _optional_ - For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`.
* `subscription_cancel_at_period_end` - _optional_ - Boolean indicating whether this subscription should cancel at the end of the current period.
* `subscription_cancel_now` - _optional_
* `subscription_items` - _optional_ - List of subscription items, each with an attached plan.
* `subscription_prorate` - _optional_ - If previewing an update to a subscription, this decides whether the preview will show the result of applying prorations or not. If set, one of `subscription_items` or `subscription`, and one of `subscription_items` or `subscription_trial_end` are required.
* `subscription_proration_date` - _optional_ - If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration` cannot be set to false.
* `subscription_tax_percent` - _optional_ - If provided, the invoice returned will preview updating or creating a subscription with that tax percent. If set, one of `subscription_items` or `subscription` is required.
* `subscription_trial_end` - _optional_ - If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.
* `subscription_trial_from_plan` - _optional_ - Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.

### <p>Permanently deletes a draft invoice. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized, it must be <a href="#void_invoice">voided</a>.</p>

#### Input Parameters
* `invoice` - _required_ - The identifier of the invoice to be deleted.

### <p>Retrieves the invoice with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `invoice` - _required_ - The identifier of the desired invoice.

### <p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,<br/>
> monetary values, as well as <code>billing</code>, become uneditable.</p><br/>
> <br/>
> <p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,<br/>
> sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass<br/>
> <code>auto_advance=false</code>.</p>

#### Input Parameters
* `invoice` - _required_

### <p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you'd like to finalize a draft invoice manually, you can do so using this method.</p>

#### Input Parameters
* `invoice` - _required_ - The invoice to be finalized, it must have `status=draft`.

### <p>When retrieving an invoice, you'll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `invoice` - _required_ - The ID of the invoice containing the lines to be retrieved.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>

#### Input Parameters
* `invoice` - _required_ - The identifier of the invoice to be marked as uncollectible. The invoice must be `open`.

### <p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/recurring">subscriptions settings</a>. However, if you'd like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>

#### Input Parameters
* `invoice` - _required_ - ID of invoice to pay.

### <p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/recurring">subscriptions settings</a>. However, if you'd like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p><br/>
> <br/>
> <p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>

#### Input Parameters
* `invoice` - _required_ - The invoice you would like to send. The billing mode for this invoice must be `send_invoice`.

### <p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>

#### Input Parameters
* `invoice` - _required_ - ID of invoice to void. It must be finalized.

### <p>Returns a list of issuer fraud records.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `charge` - _optional_ - Only return issuer fraud records for the charge specified by this charge ID.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieves the details of an issuer fraud record that has previously been created. </p><br/>
> <br/>
> <p>Please refer to the <a href="#issuer_fraud_record_object">issuer fraud record</a> object reference for more details.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `issuer_fraud_record` - _required_ - The identifier of the issuer fraud record to be retrieved.

### <p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `card` - _optional_ - Only return issuing transactions that belong to the given card.
* `cardholder` - _optional_ - Only return authorizations belonging to the given cardholder.
* `created` - _optional_ - Only return authorizations that were created during the given date interval.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `status` - _optional_ - Only return authorizations with the given status. One of pending, closed, or reversed.

### <p>Retrieves an Issuing <code>Authorization</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `authorization` - _required_ - The ID of the authorization to retrieve.

### <p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `authorization` - _required_ - The identifier of the authorization to update.

### <p>Approves a pending Issuing <code>Authorization</code> object.</p>

#### Input Parameters
* `authorization` - _required_ - The identifier of the authorization to approve.

### <p>Declines a pending Issuing <code>Authorization</code> object.</p>

#### Input Parameters
* `authorization` - _required_ - The identifier of the issuing authorization to decline.

### <p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_ - Only return cardholders that were created during the given date interval.
* `email` - _optional_ - Only return cardholders that have the given email address.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `is_default` - _optional_ - Only return the default cardholder.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `phone_number` - _optional_ - Only return cardholders that have the given phone number.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `status` - _optional_ - Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.
* `type` - _optional_ - Only return cardholders that have the given type. One of `individual` or `business_entity`.

### <p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p>

### <p>Retrieves an Issuing <code>Cardholder</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `cardholder` - _required_ - The identifier of the cardholder to be retrieved.

### <p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `cardholder` - _required_ - The ID of the cardholder to update.

### <p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `cardholder` - _optional_ - Only return cards belonging to the Cardholder with the provided ID.
* `created` - _optional_ - Only return cards that were issued during the given date interval.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `exp_month` - _optional_ - Only return cards that have the given expiration month.
* `exp_year` - _optional_ - Only return cards that have the given expiration year.
* `last4` - _optional_ - Only return cards that have the given last four digits.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `name` - _optional_ - Only return cards that have the given name.
* `source` - _optional_ - Only return cards whose full card number matches that of this card source ID.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `status` - _optional_ - Only return cards that have the given status. One of `active`, `inactive`, or `canceled`.
* `type` - _optional_ - Only return cards that have the given type. One of `virtual` or `physical`.

### <p>Creates an Issuing <code>Card</code> object.</p>

### <p>Retrieves an Issuing <code>Card</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `card` - _required_ - The identifier of the card to be retrieved.

### <p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `card` - _required_ - The identifier of the issued card to update.

### <p>For virtual cards only. Retrieves an Issuing <code>Card_details</code> object that contains <a href="/docs/issuing/cards/management#virtual-card-info">the sensitive details</a> of a virtual card.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `card` - _required_ - The identifier of the virtual card to be retrieved.

### <p>Retrieves the PIN for a card object, subject to cardholder verification, see <a href="/docs/issuing/pin_management">Retrieve and update cardholder PIN</a></p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `card` - _required_ - The id of the `Card` that the PIN belongs to
* `verification` - _required_ - The id of the `Verification` that was sent and the code entered by the cardholder

### <p>Updates the PIN for a card, subject to cardholder verification. See <a href="/docs/issuing/pin_management">Retrieve and update cardholder PIN</a></p>

#### Input Parameters
* `card` - _required_ - The id of the `Card` that the PIN belongs to

### <p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_ - Only return issuing disputes that were created during the given date interval.
* `disputed_transaction` - _optional_ - Only return issuing disputes for the given transaction.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates an Issuing <code>Dispute</code> object.</p>

### <p>Retrieves an Issuing <code>Dispute</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `dispute` - _required_ - The ID of the dispute to retrieve.

### <p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `dispute` - _required_ - The ID of the dispute to update.

### <p>Returns a list of Issuing <code>Settlement</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieves an Issuing <code>Settlement</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `settlement` - _required_ - The ID of the settlement to retrieve.

### <p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `settlement` - _required_ - The ID of the settlement to update.

### <p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `card` - _optional_ - Only return issuing transactions that belong to the given card.
* `cardholder` - _optional_ - Only return authorizations belonging to the given cardholder.
* `created` - _optional_ - Only return transactions that were created during the given date interval.
* `dispute` - _optional_ - Only return transactions that originate from a given dispute.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `settlement` - _optional_ - Only return transactions that are associated with the given settlement.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieves an Issuing <code>Transaction</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `transaction` - _required_ - The ID of the transaction to retrieve.

### <p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `transaction` - _required_ - The identifier of the transaction to update.

### <p>Some actions (eg: updating a PIN) need confirmation from the cardholder</p>

### <p>Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_ - Date this return was created.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `order` - _optional_ - The order to retrieve returns for.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - The identifier of the order return to be retrieved.

### <p>Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_ - Date this order was created.
* `customer` - _optional_ - Only return orders for the given customer.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `ids` - _optional_ - Only return orders with the given IDs.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `status` - _optional_ - Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.
* `status_transitions` - _optional_ - Filter orders based on when they were paid, fulfilled, canceled, or returned.
* `upstream_ids` - _optional_ - Only return orders with the given upstream order IDs.

### <p>Creates a new order object.</p>

### <p>Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - The identifier of the order to be retrieved.

### <p>Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `id` - _required_

### <p>Pay an order by providing a <code>source</code> to create a payment.</p>

#### Input Parameters
* `id` - _required_

### <p>Return all or part of an order. The order must have a status of <code>paid</code> or <code>fulfilled</code> before it can be returned. Once all items have been returned, the order will become <code>canceled</code> or <code>returned</code> depending on which status the order started in.</p>

#### Input Parameters
* `id` - _required_

### <p>Returns a list of PaymentIntents.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_ - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a PaymentIntent object.</p>

### <p>Retrieves the details of a PaymentIntent that has previously been created. </p><br/>
> <br/>
> <p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p><br/>
> <br/>
> <p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `client_secret` - _optional_ - The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.
* `intent` - _required_

### <p>Updates a PaymentIntent object.</p>

#### Input Parameters
* `intent` - _required_

### <p>A PaymentIntent object can be canceled when it is in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action. </p><br/>
> <br/>
> <p>Once canceled, no additional charges will be made by the PaymentIntent and any operations on the PaymentIntent will fail with an error. For PaymentIntents with <code>status='requires_capture'</code>, the remaining <code>amount_capturable</code> will automatically be refunded.</p>

#### Input Parameters
* `intent` - _required_

### <p>Capture the funds of an existing uncaptured PaymentIntent where <code>required_action="requires_capture"</code>.</p><br/>
> <br/>
> <p>Uncaptured PaymentIntents will be canceled exactly seven days after they are created.</p>

#### Input Parameters
* `intent` - _required_

### <p>Confirm that your customer intends to pay with current or provided<br/>
> <code>source</code>. Upon confirmation, the PaymentIntent will attempt to initiate<br/>
> a payment.</p><br/>
> <br/>
> <p>If the selected <code>source</code> requires additional authentication steps, the<br/>
> PaymentIntent will transition to the <code>requires_action</code> status and<br/>
> suggest additional actions via <code>next_source_action</code>. If payment fails,<br/>
> the PaymentIntent will transition to the <code>requires_payment_method</code> status. If<br/>
> payment succeeds, the PaymentIntent will transition to the <code>succeeded</code><br/>
> status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).</p><br/>
> <br/>
> <p>When using a publishable key, the<br/>
> <a href="#payment_intent_object-client_secret">client_secret</a> must be provided<br/>
> to confirm the PaymentIntent.</p>

#### Input Parameters
* `intent` - _required_

### <p>Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `arrival_date` - _optional_
* `created` - _optional_
* `destination` - _optional_ - The ID of an external account - only return payouts sent to this external account.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `status` - _optional_ - Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.

### <p>To send funds to your own bank account, you create a new payout object. Your <a href="#balance">Stripe balance</a> must be able to cover the payout amount, or you'll receive an "Insufficient Funds" error.</p><br/>
> <br/>
> <p>If your API key is in test mode, money won't actually be sent, though everything else will occur as if in live mode.</p><br/>
> <br/>
> <p>If you are creating a manual payout on a Stripe account that uses multiple payment source types, you'll need to specify the source type balance that the payout should draw from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>

### <p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `payout` - _required_ - The identifier of the payout to be retrieved.

### <p>Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.</p>

#### Input Parameters
* `payout` - _required_ - The identifier of the payout to be updated.

### <p>A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic Stripe payouts.</p>

#### Input Parameters
* `payout` - _required_ - The identifier of the payout to be canceled.

### <p>Returns a list of your plans.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `active` - _optional_ - Only return plans that are active or inactive (e.g., pass `false` to list all inactive products).
* `created` - _optional_ - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `product` - _optional_ - Only return plans for the given product.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>You can create plans using the API, or in the Stripe <a href="https://dashboard.stripe.com/subscriptions/products">Dashboard</a>.</p>

### <p>Deleting plans means new subscribers can't be added. Existing subscribers aren't affected.</p>

#### Input Parameters
* `plan` - _required_ - The identifier of the plan to be deleted.

### <p>Retrieves the plan with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `plan` - _required_ - The ID of the desired plan.

### <p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan's ID, amount, currency, or billing cycle.</p>

#### Input Parameters
* `plan` - _required_ - The identifier of the plan to be updated.

### <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `active` - _optional_ - Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
* `created` - _optional_ - Only return products that were created during the given date interval.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `ids` - _optional_ - Only return products with the given IDs.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `shippable` - _optional_ - Only return products that can be shipped (i.e., physical, not digital products).
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `type` - _optional_ - Only return products of this type.
* `url` - _optional_ - Only return products with the given url.

### <p>Creates a new product object. To create a product for use with subscriptions, see <a href="#create_service_product">Subscriptions Products</a>.</p>

### <p>Delete a product. Deleting a product with type=<code>good</code> is only possible if it has no SKUs associated with it. Deleting a product with type=<code>service</code> is only possible if it has no plans associated with it.</p>

#### Input Parameters
* `id` - _required_ - The ID of the product to delete.

### <p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - The identifier of the product to be retrieved.

### <p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><br/>
> <br/>
> <p>Note that a product's <code>attributes</code> are not editable. Instead, you would need to deactivate the existing product and create a new one with the new attribute values.</p>

#### Input Parameters
* `id` - _required_

### <p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `value` - _optional_ - Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
* `value_list` - _required_ - Identifier for the parent value list this item belongs to.

### <p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>

### <p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>

#### Input Parameters
* `item` - _required_ - The identifier of the value list item to be deleted.

### <p>Retrieves a <code>ValueListItem</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `item` - _required_ - The identifier of the value list item to be retrieved.

### <p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `alias` - _optional_ - The alias used to reference the value list when writing rules.
* `contains` - _optional_ - A value contained within a value list - returns all value lists containing this value.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>

### <p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>

#### Input Parameters
* `value_list` - _required_ - The identifier of the value list to be deleted.

### <p>Retrieves a <code>ValueList</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `value_list` - _required_ - The identifier of the value list to be retrieved.

### <p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>

#### Input Parameters
* `value_list` - _required_ - The identifier of the value list to be updated.

### <p>Returns a list of your recipients. The recipients are returned sorted by creation date, with the most recently created recipients appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `type` - _optional_
* `verified` - _optional_ - Only return recipients that are verified or unverified.

### <p>Creates a new <code>Recipient</code> object and verifies the recipient's identity.<br/>
> Also verifies the recipient's bank account information or debit card, if either is provided.</p>

### <p>Permanently deletes a recipient. It cannot be undone.</p>

#### Input Parameters
* `id` - _required_ - The identifier of the recipient to be deleted.

### <p>Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - The identifier of the recipient to be retrieved.

### <p>Updates the specified recipient by setting the values of the parameters passed.<br/>
> Any parameters not provided will be left unchanged.</p><br/>
> <br/>
> <p>If you update the name or tax ID, the identity verification will automatically be rerun.<br/>
> If you update the bank account, the bank account validation will automatically be rerun.</p>

#### Input Parameters
* `id` - _required_

### <p>Returns a list of all refunds you've previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `charge` - _optional_ - Only return refunds for the charge specified by this charge ID.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Create a refund.</p>

### <p>Retrieves the details of an existing refund.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `refund` - _required_ - ID of refund to retrieve.

### <p>Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><br/>
> <br/>
> <p>This request only accepts <code>metadata</code> as an argument.</p>

#### Input Parameters
* `refund` - _required_

### <p>Returns a list of Report Runs, with the most recent appearing first. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new object and begin running the report. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

### <p>Retrieves the details of an existing Report Run. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `report_run` - _required_ - The ID of the run to retrieve

### <p>Returns a full list of Report Types. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.

### <p>Retrieves the details of a Report Type. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `report_type` - _required_ - The [ID of the Report Type](https://stripe.com/docs/reporting/statements/api#available-report-types) to retrieve, such as `balance.summary.1`.

### <p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieves a <code>Review</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `review` - _required_ - The identifier of the review to be retrieved.

### <p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>

#### Input Parameters
* `review` - _required_ - The identifier of the review to be approved.

### <p>Returns a list of scheduled query runs.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieves the details of an scheduled query run.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `scheduled_query_run` - _required_ - Unique identifier for the object.

### <p>Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `active` - _optional_ - Only return SKUs that are active or inactive (e.g., pass `false` to list all inactive products).
* `attributes` - _optional_ - Only return SKUs that have the specified key-value pairs in this partially constructed dictionary. Can be specified only if `product` is also supplied. For instance, if the associated product has attributes `["color", "size"]`, passing in `attributes[color]=red` returns all the SKUs for this product that have `color` set to `red`.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `ids` - _optional_ - Only return SKUs with the given IDs.
* `in_stock` - _optional_ - Only return SKUs that are either in stock or out of stock (e.g., pass `false` to list all SKUs that are out of stock). If no value is provided, all SKUs are returned.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `product` - _optional_ - The ID of the product whose SKUs will be retrieved. Must be a product with type `good`.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new SKU associated with a product.</p>

### <p>Delete a SKU. Deleting a SKU is only possible until it has been used in an order.</p>

#### Input Parameters
* `id` - _required_ - The identifier of the SKU to be deleted.

### <p>Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - The identifier of the SKU to be retrieved.

### <p>Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><br/>
> <br/>
> <p>Note that a SKU's <code>attributes</code> are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.</p>

#### Input Parameters
* `id` - _required_

### <p>Creates a new source object.</p>

### <p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `client_secret` - _optional_ - The client secret of the source. Required if a publishable key is used to retrieve the source.
* `source` - _required_ - The identifier of the source to be retrieved.

### <p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><br/>
> <br/>
> <p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>

#### Input Parameters
* `source` - _required_

### <p>Retrieves a new Source MandateNotification.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `mandate_notification` - _required_ - The ID of the Source MandateNotification.
* `source` - _required_ - The ID of the Source that received a ManateNotification.

### <p>List source transactions for a given source.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `source` - _required_ - The ID of the source whose source transactions will be retrieved.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `source` - _required_ - The ID of the source whose source transaction will be retrieved.
* `source_transaction` - _required_ - The ID of the source transaction that will be retrieved.

### <p>Verify a given source.</p>

#### Input Parameters
* `source` - _required_ - The ID of the desired source.

### <p>Returns a list of your subscription items for a given subscription.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `subscription` - _required_ - The ID of the subscription whose items will be retrieved.

### <p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>

### <p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>

#### Input Parameters
* `item` - _required_ - The identifier of the subscription item to delete.

### <p>Retrieves the invoice item with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `item` - _required_ - The identifier of the subscription item to retrieve.

### <p>Updates the plan or quantity of an item on a current subscription.</p>

#### Input Parameters
* `item` - _required_ - The identifier of the subscription item to modify.

### <p>For the specified subscription item, returns a list of summary objects. Each object in the list provides usage information that's been summarized from multiple usage records and over a subscription billing period (e.g., 15 usage records in the billing plan's month of September).</p><br/>
> <br/>
> <p>The list is sorted in reverse-chronological order (newest first). The first list item represents the most current usage period that hasn't ended yet. Since new usage records can still be added, the returned summary information for the subscription item's ID should be seen as unstable until the subscription billing period ends.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `subscription_item` - _required_ - Only summary items for the given subscription item.

### <p>Creates a usage record for a specified subscription item and date, and fills it with a quantity.</p><br/>
> <br/>
> <p>Usage records provide <code>quantity</code> information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the <a href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered billing</a> plan, Stripe helps you send accurate invoices to your customers.</p><br/>
> <br/>
> <p>The default calculation for usage is to add up all the <code>quantity</code> values of the usage records within a billing period. You can change this default behavior with the billing plan's <code>aggregate_usage</code> <a href="https://stripe.com/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>. When there is more than one usage record with the same timestamp, Stripe adds the <code>quantity</code> values together. In most cases, this is the desired resolution, however, you can change this behavior with the <code>action</code> parameter.</p><br/>
> <br/>
> <p>The default pricing model for metered billing is <a href="https://stripe.com/docs/api/plans/object#plan_object-billing_scheme">per-unit pricing</a>. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing</a> model.</p>

#### Input Parameters
* `subscription_item` - _required_ - The ID of the subscription item for this usage record.

### <p>Retrieves the list of your subscription schedules.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `canceled_at` - _optional_ - Only return subscription schedules that were created canceled the given date interval.
* `completed_at` - _optional_ - Only return subscription schedules that completed during the given date interval.
* `created` - _optional_ - Only return subscription schedules that were created during the given date interval.
* `customer` - _optional_ - Only return subscription schedules for the given customer.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `released_at` - _optional_ - Only return subscription schedules that were released during the given date interval.
* `scheduled` - _optional_ - Only return subscription schedules that have not started yet.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new subscription schedule object.</p>

### <p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `schedule` - _required_ - The identifier of the subscription schedule to be retrieved.

### <p>Updates an existing subscription schedule.</p>

#### Input Parameters
* `schedule` - _required_

### <p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>

#### Input Parameters
* `schedule` - _required_ - The identifier of the subscription schedule to be canceled.

### <p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription's ID to the <code>released_subscription</code> property.</p>

#### Input Parameters
* `schedule` - _required_ - The identifier of the subscription schedule to be released.

### <p>Retrieves the list of subscription schedule revisions for a subscription schedule.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `schedule` - _required_ - The identifier of the subscription schedule to retrieve revisions for.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Retrieves the details of an existing subscription schedule revision. You only need to supply the unique subscription schedule revision identifier that was returned upon subscription schedule creation or retrieval.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `revision` - _required_ - The identifier of the subscription schedule revision to be retrieved.
* `schedule` - _required_ - The identifier of the subscription schedule the revision is associated with.

### <p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `billing` - _optional_ - The billing mode of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`.
* `created` - _optional_
* `customer` - _optional_ - The ID of the customer whose subscriptions will be retrieved.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `plan` - _optional_ - The ID of the plan whose subscriptions will be retrieved.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `status` - _optional_ - The status of the subscriptions to retrieve. One of: `trialing`, `active`, `past_due`, `unpaid`, `canceled`, or `all`. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Passing in a value of `all` will return subscriptions of all statuses.

### <p>Creates a new subscription on an existing customer.</p>

### <p>Cancels a customer's subscription immediately. The customer will not be charged again for the subscription.</p><br/>
> <br/>
> <p>Note, however, that any pending invoice items that you've created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you've set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p><br/>
> <br/>
> <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>

#### Input Parameters
* `subscription_exposed_id` - _required_

### <p>Retrieves the subscription with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `subscription_exposed_id` - _required_

### <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>

#### Input Parameters
* `subscription_exposed_id` - _required_

### <p>Removes the currently applied discount on a subscription.</p>

#### Input Parameters
* `subscription_exposed_id` - _required_

### <p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>

### <p>Returns a list of <code>Location</code> objects.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `operator_account` - _optional_ - To group objects on your platform account by connected account, set this parameter to the connected account operating your application.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>Creates a new <code>Location</code> object.</p>

### <p>Retrieves a <code>Location</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `location` - _required_ - The identifier of the location to be retrieved.
* `operator_account` - _optional_ - To group objects on your platform account by connected account, set this parameter to the connected account operating your application.

### <p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `location` - _required_ - The identifier of the location to be updated.

### <p>Returns a list of <code>Reader</code> objects.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `location` - _optional_ - A location id to filter the response list to only readers at the specific location
* `operator_account` - _optional_ - To group objects on your platform account by connected account, set this parameter to the connected account operating your application.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `status` - _optional_ - A status filter to filter readers to only offline or online readers

### <p>Creates a new <code>Reader</code> object.</p>

### <p>Retrieves a <code>Reader</code> object.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `operator_account` - _optional_ - To group objects on your platform account by connected account, set this parameter to the connected account operating your application.
* `reader` - _required_ - The identifier of the reader to be retrieved.

### <p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

#### Input Parameters
* `reader` - _required_ - The identifier of the reader to be updated.

### <p>Creates a single-use token that represents a bank account's details.<br/>
> This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a <a href="#accounts">Custom account</a>.</p>

### <p>Retrieves the token with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `token` - _required_ - The ID of the desired token.

### <p>Returns a list of top-ups.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `amount` - _optional_ - A positive integer representing how much to transfer.
* `created` - _optional_ - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `status` - _optional_ - Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.

### <p>Top up the balance of an account</p>

### <p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `topup` - _required_ - The ID of the top-up to retrieve.

### <p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>

#### Input Parameters
* `topup` - _required_ - The ID of the top-up to retrieve.

### <p>Cancels a top-up. Only pending top-ups can be canceled.</p>

#### Input Parameters
* `topup` - _required_ - The ID of the top-up to cancel.

### <p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `created` - _optional_
* `destination` - _optional_ - Only return transfers for the destination specified by this account ID.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
* `transfer_group` - _optional_ - Only return transfers with the specified transfer group.

### <p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you'll receive an "Insufficient Funds" error.</p>

### <p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `id` - _required_ - The ID of the transfer whose reversals will be retrieved.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>When you create a new reversal, you must specify a transfer to create it on.</p><br/>
> <br/>
> <p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p><br/>
> <br/>
> <p>Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>

#### Input Parameters
* `id` - _required_ - The ID of the transfer to be reversed.

### <p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `transfer` - _required_ - The identifier of the transfer to be retrieved.

### <p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><br/>
> <br/>
> <p>This request accepts only metadata as an argument.</p>

#### Input Parameters
* `transfer` - _required_ - The ID of the transfer to be updated.

### <p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `id` - _required_ - ID of reversal to retrieve.
* `transfer` - _required_ - ID of the transfer reversed.

### <p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><br/>
> <br/>
> <p>This request only accepts metadata and description as arguments.</p>

#### Input Parameters
* `id` - _required_ - ID of reversal to retrieve.
* `transfer` - _required_ - ID of the transfer reversed.

### <p>Returns a list of your webhook endpoints.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

### <p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>

### <p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>

#### Input Parameters
* `webhook_endpoint` - _required_ - The ID of the webhook endpoint to delete.

### <p>Retrieves the webhook endpoint with the given ID.</p>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.
* `webhook_endpoint` - _required_ - The ID of the desired webhook endpoint.

### <p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>

#### Input Parameters
* `webhook_endpoint` - _required_ - The ID of the desired webhook endpoint.

## License

**flow**ground :- Telekom iPaaS / stripe-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
