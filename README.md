# ![LOGO](logo.png) Stripe **flow**ground Connector

## Description

A generated **flow**ground connector for the Stripe API (version 2019-02-19).

Generated from: https://api.apis.guru/v2/specs/stripe.com/2019-02-19/swagger.json<br/>
Generated at: 2019-07-08T14:36:00+03:00

## API Description

The Stripe REST API. Please see https://stripe.com/docs/api for more details.<br/>

## Authorization

This API does not require authorization.

## Actions

### Post3dSecure
<blockquote><p>Initiate 3D Secure authentication.</p></blockquote>

### Get3dSecureThreeDSecure
<blockquote><p>Retrieves a 3D Secure object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `three_d_secure` - _required_ - The identifier of the 3D Secure object to be retrieved.<br/>

### DeleteAccount
<blockquote><p>With <a href="/docs/connect">Connect</a>, you may delete Custom accounts you manage.</p>

<p>Custom accounts created using test-mode keys can be deleted at any time. Custom accounts created using live-mode keys may only be deleted once all balances are zero.</p>

<p>If you are looking to close your own account, use the <a href="https://dashboard.stripe.com/account/data">data tab in your account settings</a> instead.</p></blockquote>

### GetAccount
<blockquote><p>Retrieves the details of an account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostAccount
<blockquote><p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p>

<p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p></blockquote>

### PostAccountBankAccounts
<blockquote><p>Create an external account for a given account.</p></blockquote>

### DeleteAccountBankAccountsId
<blockquote><p>Delete a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The ID of the external account to be deleted.<br/>

### GetAccountBankAccountsId
<blockquote><p>Retrieve a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostAccountBankAccountsId
<blockquote><p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The ID of the external account to update<br/>

### GetAccountExternalAccounts
<blockquote><p>List external accounts for an account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostAccountExternalAccounts
<blockquote><p>Create an external account for a given account.</p></blockquote>

### DeleteAccountExternalAccountsId
<blockquote><p>Delete a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The ID of the external account to be deleted.<br/>

### GetAccountExternalAccountsId
<blockquote><p>Retrieve a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostAccountExternalAccountsId
<blockquote><p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The ID of the external account to update<br/>

### PostAccountLoginLinks
<blockquote><p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>

<p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p></blockquote>

### PutAccountLogout
<blockquote><p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p>

<p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p></blockquote>

### GetAccountPeople
<blockquote><p>Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `relationship` - _optional_ - Filters on the list of people returned based on the person's relationship to the account's company.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostAccountPeople
<blockquote><p>Creates a new person.</p></blockquote>

### DeleteAccountPeoplePerson
<blockquote><p>Deletes an existing person's relationship to the account's legal entity.</p></blockquote>

#### Input Parameters
* `person` - _required_ - The ID of the person to be deleted.<br/>

### GetAccountPeoplePerson
<blockquote><p>Retrieves an existing person.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `person` - _required_ - The ID of a person to retrieve.<br/>

### PostAccountPeoplePerson
<blockquote><p>Updates an existing person.</p></blockquote>

#### Input Parameters
* `person` - _required_ - The ID of a person to update.<br/>

### GetAccountPersons
<blockquote><p>Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `relationship` - _optional_ - Filters on the list of people returned based on the person's relationship to the account's company.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostAccountPersons
<blockquote><p>Creates a new person.</p></blockquote>

### DeleteAccountPersonsPerson
<blockquote><p>Deletes an existing person's relationship to the account's legal entity.</p></blockquote>

#### Input Parameters
* `person` - _required_ - The ID of the person to be deleted.<br/>

### GetAccountPersonsPerson
<blockquote><p>Retrieves an existing person.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `person` - _required_ - The ID of a person to retrieve.<br/>

### PostAccountPersonsPerson
<blockquote><p>Updates an existing person.</p></blockquote>

#### Input Parameters
* `person` - _required_ - The ID of a person to update.<br/>

### PostAccountLinks
<blockquote><p>Creates an AccountLink object that returns a Stripe URL that the user can redirect their user to in order to take them through the Hosted Verification flow.</p></blockquote>

### GetAccounts
<blockquote><p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you're not a platform, the list is empty.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostAccounts
<blockquote><p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
To do this, you'll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p>

<p>For Standard accounts, parameters other than <code>country</code>, <code>email</code>, and <code>type</code>
are used to prefill the account application that we ask the account holder to complete.</p></blockquote>

### DeleteAccountsAccount
<blockquote><p>With <a href="/docs/connect">Connect</a>, you may delete Custom accounts you manage.</p>

<p>Custom accounts created using test-mode keys can be deleted at any time. Custom accounts created using live-mode keys may only be deleted once all balances are zero.</p>

<p>If you are looking to close your own account, use the <a href="https://dashboard.stripe.com/account/data">data tab in your account settings</a> instead.</p></blockquote>

#### Input Parameters
* `account` - _required_ - The identifier of the account to be deleted. If none is provided, will default to the account of the API key.<br/>

### GetAccountsAccount
<blockquote><p>Retrieves the details of an account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `account` - _required_ - The identifier of the account to retrieve. If none is provided, the account associated with the API key is returned.<br/>

### PostAccountsAccount
<blockquote><p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p>

<p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p></blockquote>

#### Input Parameters
* `account` - _required_

### PostAccountsAccountBankAccounts
<blockquote><p>Create an external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_

### DeleteAccountsAccountBankAccountsId
<blockquote><p>Delete a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `id` - _required_ - The ID of the external account to be deleted.<br/>

### GetAccountsAccountBankAccountsId
<blockquote><p>Retrieve a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `account` - _required_
* `id` - _required_

### PostAccountsAccountBankAccountsId
<blockquote><p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `id` - _required_ - The ID of the external account to update<br/>

### GetAccountsAccountExternalAccounts
<blockquote><p>List external accounts for an account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `account` - _required_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostAccountsAccountExternalAccounts
<blockquote><p>Create an external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_

### DeleteAccountsAccountExternalAccountsId
<blockquote><p>Delete a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `id` - _required_ - The ID of the external account to be deleted.<br/>

### GetAccountsAccountExternalAccountsId
<blockquote><p>Retrieve a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `account` - _required_
* `id` - _required_

### PostAccountsAccountExternalAccountsId
<blockquote><p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `id` - _required_ - The ID of the external account to update<br/>

### PostAccountsAccountLoginLinks
<blockquote><p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>

<p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p></blockquote>

#### Input Parameters
* `account` - _required_ - The identifier of the account to create a login link for.<br/>

### PutAccountsAccountLogout
<blockquote><p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p>

<p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p></blockquote>

#### Input Parameters
* `account` - _required_ - The identifier of the account to log out.<br/>

### GetAccountsAccountPeople
<blockquote><p>Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `account` - _required_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `relationship` - _optional_ - Filters on the list of people returned based on the person's relationship to the account's company.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostAccountsAccountPeople
<blockquote><p>Creates a new person.</p></blockquote>

#### Input Parameters
* `account` - _required_

### DeleteAccountsAccountPeoplePerson
<blockquote><p>Deletes an existing person's relationship to the account's legal entity.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `person` - _required_ - The ID of the person to be deleted.<br/>

### GetAccountsAccountPeoplePerson
<blockquote><p>Retrieves an existing person.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `account` - _required_
* `person` - _required_ - The ID of a person to retrieve.<br/>

### PostAccountsAccountPeoplePerson
<blockquote><p>Updates an existing person.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `person` - _required_ - The ID of a person to update.<br/>

### GetAccountsAccountPersons
<blockquote><p>Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `account` - _required_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `relationship` - _optional_ - Filters on the list of people returned based on the person's relationship to the account's company.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostAccountsAccountPersons
<blockquote><p>Creates a new person.</p></blockquote>

#### Input Parameters
* `account` - _required_

### DeleteAccountsAccountPersonsPerson
<blockquote><p>Deletes an existing person's relationship to the account's legal entity.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `person` - _required_ - The ID of the person to be deleted.<br/>

### GetAccountsAccountPersonsPerson
<blockquote><p>Retrieves an existing person.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `account` - _required_
* `person` - _required_ - The ID of a person to retrieve.<br/>

### PostAccountsAccountPersonsPerson
<blockquote><p>Updates an existing person.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `person` - _required_ - The ID of a person to update.<br/>

### PostAccountsAccountReject
<blockquote><p>With <a href="/docs/connect">Connect</a>, you may flag accounts as suspicious.</p>

<p>Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.</p></blockquote>

#### Input Parameters
* `account` - _required_ - The identifier of the account to reject<br/>

### GetApplePayDomains
<blockquote><p>List apple pay domains.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `domain_name` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostApplePayDomains
<blockquote><p>Create an apple pay domain.</p></blockquote>

### DeleteApplePayDomainsDomain
<blockquote><p>Delete an apple pay domain.</p></blockquote>

#### Input Parameters
* `domain` - _required_

### GetApplePayDomainsDomain
<blockquote><p>Retrieve an apple pay domain.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `domain` - _required_

### GetApplicationFees
<blockquote><p>Returns a list of application fees you've previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `charge` - _optional_ - Only return application fees for the charge specified by this charge ID.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetApplicationFeesFeeRefundsId
<blockquote><p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `fee` - _required_ - ID of the application fee refunded.<br/>
* `id` - _required_ - ID of refund to retrieve.<br/>

### PostApplicationFeesFeeRefundsId
<blockquote><p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata as an argument.</p></blockquote>

#### Input Parameters
* `fee` - _required_ - ID of the application fee refunded.<br/>
* `id` - _required_ - ID of refund to retrieve.<br/>

### GetApplicationFeesId
<blockquote><p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - The identifier of the fee to be retrieved.<br/>

### PostApplicationFeesIdRefund

#### Input Parameters
* `id` - _required_

### GetApplicationFeesIdRefunds
<blockquote><p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `id` - _required_ - The ID of the application fee whose refunds will be retrieved.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostApplicationFeesIdRefunds
<blockquote><p>Refunds an application fee that has previously been collected but not yet refunded.
Funds will be refunded to the Stripe account from which the fee was originally collected.</p>

<p>You can optionally refund only part of an application fee.
You can do so multiple times, until the entire fee has been refunded.</p>

<p>Once entirely refunded, an application fee can't be refunded again.
This method will raise an error when called on an already-refunded application fee,
or when trying to refund more money than is left on an application fee.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The identifier of the application fee to be refunded.<br/>

### GetBalance
<blockquote><p>Retrieves the current account balance, based on the authentication that was used to make the request.
 For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### GetBalanceHistory
<blockquote><p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `available_on` - _optional_
* `created` - _optional_
* `currency` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `payout` - _optional_ - For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.<br/>
* `source` - _optional_ - Only returns the original transaction.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `type` - _optional_ - Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, `payment`, `payout`, `payout_failure`, `stripe_fee`, or `network_cost`.<br/>

### GetBalanceHistoryId
<blockquote><p>Retrieves the balance transaction with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - The ID of the desired balance transaction, as found on any API object that affects the balance (e.g., a charge or transfer).<br/>

### GetBitcoinReceivers
<blockquote><p>Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `active` - _optional_ - Filter for active receivers.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `filled` - _optional_ - Filter for filled receivers.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `uncaptured_funds` - _optional_ - Filter for receivers with uncaptured funds.<br/>

### GetBitcoinReceiversId
<blockquote><p>Retrieves the Bitcoin receiver with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### GetBitcoinReceiversReceiverTransactions
<blockquote><p>List bitcoin transacitons for a given receiver.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _optional_ - Only return transactions for the customer specified by this customer ID.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `receiver` - _required_ - Only return transactions for the receiver specified by this receiver ID.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetBitcoinTransactions
<blockquote><p>List bitcoin transacitons for a given receiver.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _optional_ - Only return transactions for the customer specified by this customer ID.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `receiver` - _optional_ - Only return transactions for the receiver specified by this receiver ID.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetCharges
<blockquote><p>Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `customer` - _optional_ - Only return charges for the customer specified by this customer ID.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `source` - _optional_ - A filter on the list, based on the source of the charge. The value can be a dictionary with the following options:<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `transfer_group` - _optional_ - Only return charges for this transfer group.<br/>

### PostCharges
<blockquote><p>To charge a credit card or other payment source, you create a <code>Charge</code> object. If your API key is in test mode, the supplied payment source (e.g., card) won't actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).</p></blockquote>

### GetChargesCharge
<blockquote><p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `charge` - _required_ - The identifier of the charge to be retrieved.<br/>

### PostChargesCharge
<blockquote><p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `charge` - _required_

### PostChargesChargeCapture
<blockquote><p>Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you <a href="#create_charge">created a charge</a> with the capture option set to false.</p>

<p>Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.</p></blockquote>

#### Input Parameters
* `charge` - _required_

### GetChargesChargeDispute
<blockquote><p>Retrieve a dispute for a specified charge.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `charge` - _required_

### PostChargesChargeDispute

#### Input Parameters
* `charge` - _required_

### PostChargesChargeDisputeClose

#### Input Parameters
* `charge` - _required_

### PostChargesChargeRefund
<blockquote><p>When you create a new refund, you must specify a charge on which to create it.</p>

<p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
Funds will be refunded to the credit or debit card that was originally charged.</p>

<p>You can optionally refund only part of a charge.
You can do so multiple times, until the entire charge has been refunded.</p>

<p>Once entirely refunded, a charge can't be refunded again.
This method will raise an error when called on an already-refunded charge,
or when trying to refund more money than is left on a charge.</p></blockquote>

#### Input Parameters
* `charge` - _required_

### GetChargesChargeRefunds
<blockquote><p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `charge` - _required_ - The ID of the charge whose refunds will be retrieved.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostChargesChargeRefunds
<blockquote><p>Create a refund.</p></blockquote>

#### Input Parameters
* `charge` - _required_

### GetChargesChargeRefundsRefund
<blockquote><p>Retrieves the details of an existing refund.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `charge` - _required_
* `refund` - _required_

### PostChargesChargeRefundsRefund
<blockquote><p>Update a specified refund.</p></blockquote>

#### Input Parameters
* `charge` - _required_
* `refund` - _required_

### PostCheckoutSessions
<blockquote><p>Creates a Session object.</p></blockquote>

### GetCountrySpecs
<blockquote><p>Lists all Country Spec objects available in the API.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetCountrySpecsCountry
<blockquote><p>Returns a Country Spec for a given Country code.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `country` - _required_ - An ISO 3166-1 alpha-2 country code. Available country codes can be listed with the [List Country Specs](https://stripe.com/docs/api#list_country_specs) endpoint.<br/>

### GetCoupons
<blockquote><p>Returns a list of your coupons.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_ - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostCoupons
<blockquote><p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>

<p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice's subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p></blockquote>

### DeleteCouponsCoupon
<blockquote><p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can't redeem the coupon. You can also delete coupons via the API.</p></blockquote>

#### Input Parameters
* `coupon` - _required_ - The identifier of the coupon to be deleted.<br/>

### GetCouponsCoupon
<blockquote><p>Retrieves the coupon with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `coupon` - _required_ - The ID of the desired coupon.<br/>

### PostCouponsCoupon
<blockquote><p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p></blockquote>

#### Input Parameters
* `coupon` - _required_ - The identifier of the coupon to be updated.<br/>

### GetCustomers
<blockquote><p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `email` - _optional_ - A filter on the list based on the customer's `email` field. The value must be a string.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostCustomers
<blockquote><p>Creates a new customer object.</p></blockquote>

### DeleteCustomersCustomer
<blockquote><p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_ - The identifier of the customer to be deleted.<br/>

### GetCustomersCustomer
<blockquote><p>Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_ - The identifier of the customer to be retrieved.<br/>

### PostCustomersCustomer
<blockquote><p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer's active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer's current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>

<p>This request accepts mostly the same arguments as the customer creation call.</p></blockquote>

#### Input Parameters
* `customer` - _required_ - The identifier of the customer to subscribe.<br/>

### GetCustomersCustomerBankAccounts
<blockquote><p>You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional bank accounts.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_ - The ID of the customer whose bank accounts will be retrieved.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostCustomersCustomerBankAccounts
<blockquote><p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card's owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should either <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>,
or <a href="/docs/api#update_recipient">update the recipient</a> to have a new <code>default_card</code>.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### DeleteCustomersCustomerBankAccountsId
<blockquote><p>Delete a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be deleted.<br/>

### GetCustomersCustomerBankAccountsId
<blockquote><p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_
* `id` - _required_ - ID of bank account to retrieve.<br/>

### PostCustomersCustomerBankAccountsId
<blockquote><p>Update a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the card to be updated.<br/>

### PostCustomersCustomerBankAccountsIdVerify
<blockquote><p>Verify a specified bank account for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be verified.<br/>

### GetCustomersCustomerCards
<blockquote><p>You can see a list of the cards belonging to a customer.
Note that the 10 most recent sources are always available on the <code>Customer</code> object.
If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional cards.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_ - The ID of the customer whose cards will be retrieved.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostCustomersCustomerCards
<blockquote><p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card's owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should either <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>,
or <a href="/docs/api#update_recipient">update the recipient</a> to have a new <code>default_card</code>.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### DeleteCustomersCustomerCardsId
<blockquote><p>Delete a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be deleted.<br/>

### GetCustomersCustomerCardsId
<blockquote><p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_
* `id` - _required_ - The ID of the card to be retrieved.<br/>

### PostCustomersCustomerCardsId
<blockquote><p>Update a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the card to be updated.<br/>

### DeleteCustomersCustomerDiscount
<blockquote><p>Removes the currently applied discount on a customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### GetCustomersCustomerDiscount

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_

### GetCustomersCustomerSources
<blockquote><p>List sources for a specified customer.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_ - The ID of the customer whose sources will be retrieved.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `object` - _optional_ - Filter sources according to a particular object type.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `type` - _optional_

### PostCustomersCustomerSources
<blockquote><p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card's owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should either <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>,
or <a href="/docs/api#update_recipient">update the recipient</a> to have a new <code>default_card</code>.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### DeleteCustomersCustomerSourcesId
<blockquote><p>Delete a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be deleted.<br/>

### GetCustomersCustomerSourcesId
<blockquote><p>Retrieve a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_
* `id` - _required_ - The ID of the source to be retrieved.<br/>

### PostCustomersCustomerSourcesId
<blockquote><p>Update a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the card to be updated.<br/>

### PostCustomersCustomerSourcesIdVerify
<blockquote><p>Verify a specified bank account for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_ - The ID of the source to be verified.<br/>

### GetCustomersCustomerSubscriptions
<blockquote><p>You can see a list of the customer's active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_ - The ID of the customer whose subscriptions will be retrieved.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostCustomersCustomerSubscriptions
<blockquote><p>Creates a new subscription on an existing customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_ - The identifier of the customer to subscribe.<br/>

### DeleteCustomersCustomerSubscriptionsSubscriptionExposedId
<blockquote><p>Cancels a customer's subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>

<p>Note, however, that any pending invoice items that you've created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you've set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>

<p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `subscription_exposed_id` - _required_

### GetCustomersCustomerSubscriptionsSubscriptionExposedId
<blockquote><p>Retrieves the subscription with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_
* `subscription_exposed_id` - _required_ - ID of subscription to retrieve.<br/>

### PostCustomersCustomerSubscriptionsSubscriptionExposedId
<blockquote><p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p></blockquote>

#### Input Parameters
* `customer` - _required_ - The identifier of the customer to subscribe.<br/>
* `subscription_exposed_id` - _required_ - The identifier of the subscription to update.<br/>

### DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount
<blockquote><p>Removes the currently applied discount on a customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `subscription_exposed_id` - _required_

### GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `customer` - _required_
* `subscription_exposed_id` - _required_

### GetDisputes
<blockquote><p>Returns a list of your disputes.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetDisputesDispute
<blockquote><p>Retrieves the dispute with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `dispute` - _required_ - ID of dispute to retrieve.<br/>

### PostDisputesDispute
<blockquote><p>When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>

<p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p></blockquote>

#### Input Parameters
* `dispute` - _required_ - ID of the dispute to update.<br/>

### PostDisputesDisputeClose
<blockquote><p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>

<p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p></blockquote>

#### Input Parameters
* `dispute` - _required_ - ID of the dispute to close.<br/>

### PostEphemeralKeys
<blockquote><p>Creates a short-lived API key for a given resource.</p></blockquote>

### DeleteEphemeralKeysKey
<blockquote><p>Invalidates a short-lived API key for a given resource.</p></blockquote>

#### Input Parameters
* `key` - _required_ - The ID of the key you'd like to invalidate.<br/>

### GetEvents
<blockquote><p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="/docs/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `delivery_success` - _optional_ - Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `type` - _optional_ - A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.<br/>
* `types` - _optional_ - An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.<br/>

### GetEventsId
<blockquote><p>Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - The identifier of the event to be retrieved.<br/>

### PostEventsIdRetry
<blockquote><p>Resend an event. This only works in testmode</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetExchangeRates
<blockquote><p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include `starting_after=X` in order to fetch the next page of the list.<br/>

### GetExchangeRatesCurrency
<blockquote><p>Retrieves the exchange rates from the given currency to every supported currency.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `currency` - _required_ - Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).<br/>

### GetFileLinks
<blockquote><p>Returns a list of file links.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `expired` - _optional_ - Filter links by their expiration status. By default, all links are returned.<br/>
* `file` - _optional_ - Only return links for the given file.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostFileLinks
<blockquote><p>Creates a new file link object.</p></blockquote>

### GetFileLinksLink
<blockquote><p>Retrieves the file link with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `link` - _required_ - The identifier of the file link to be retrieved.<br/>

### PostFileLinksLink
<blockquote><p>Updates an existing file link object. Expired links can no longer be updated.</p></blockquote>

#### Input Parameters
* `link` - _required_ - The ID of the file link.<br/>

### GetFiles
<blockquote><p>Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `purpose` - _optional_ - The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostFiles
<blockquote><p>To upload a file to Stripe, you'll need to send a request of type <code>multipart/form-data</code>. The request should contain the file you would like to upload, as well as the parameters for creating a file.</p>

<p>All of Stripe's officially supported API libraries should have support for sending <code>multipart/form-data</code>.</p></blockquote>

### GetFilesFile
<blockquote><p>Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `file` - _required_ - The identifier of the file to be retrieved.<br/>

### GetInvoiceitems
<blockquote><p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `customer` - _optional_ - The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `invoice` - _optional_ - Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `pending` - _optional_ - Set to `true` to only show pending invoice items, which are not yet attached to any invoices. Set to `false` to only show invoice items already attached to invoices. If unspecified, no filter is applied.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostInvoiceitems
<blockquote><p>Creates an item to be added to a draft invoice. If no invoice is specified, the item will be on the next invoice created for the customer specified.</p></blockquote>

### DeleteInvoiceitemsInvoiceitem
<blockquote><p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they're not attached to invoices, or if it's attached to a draft invoice.</p></blockquote>

#### Input Parameters
* `invoiceitem` - _required_ - The identifier of the invoice item to be deleted.<br/>

### GetInvoiceitemsInvoiceitem
<blockquote><p>Retrieves the invoice item with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `invoiceitem` - _required_ - The ID of the desired invoice item.<br/>

### PostInvoiceitemsInvoiceitem
<blockquote><p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.</p></blockquote>

#### Input Parameters
* `invoiceitem` - _required_

### GetInvoices
<blockquote><p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `billing` - _optional_ - The billing mode of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.<br/>
* `created` - _optional_
* `customer` - _optional_ - Only return invoices for the customer specified by this customer ID.<br/>
* `due_date` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `subscription` - _optional_ - Only return invoices for the subscription specified by this subscription ID.<br/>

### PostInvoices
<blockquote><p>This endpoint creates a draft invoice for a given customer. The draft invoice created pulls in all pending invoice items on that customer, including prorations.</p></blockquote>

### GetInvoicesUpcoming
<blockquote><p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discount that is applicable to the customer.</p>

<p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview - the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer's discount.</p>

<p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass a <code>proration_date</code> parameter when doing the actual subscription update. The value passed in should be the same as the <code>subscription_proration_date</code> returned on the upcoming invoice resource. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_proration_date</code> on the upcoming invoice resource.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `coupon` - _optional_ - The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.<br/>
* `customer` - _optional_ - The identifier of the customer whose upcoming invoice you'd like to retrieve.<br/>
* `invoice_items` - _optional_ - List of invoice items to add or update in the upcoming invoice preview.<br/>
* `subscription` - _optional_ - The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.<br/>
* `subscription_billing_cycle_anchor` - _optional_ - For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`.<br/>
* `subscription_cancel_at_period_end` - _optional_ - Boolean indicating whether this subscription should cancel at the end of the current period.<br/>
* `subscription_cancel_now` - _optional_
* `subscription_items` - _optional_ - List of subscription items, each with an attached plan.<br/>
* `subscription_prorate` - _optional_ - If previewing an update to a subscription, this decides whether the preview will show the result of applying prorations or not. If set, one of `subscription_items` or `subscription`, and one of `subscription_items` or `subscription_trial_end` are required.<br/>
* `subscription_proration_date` - _optional_ - If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration` cannot be set to false.<br/>
* `subscription_tax_percent` - _optional_ - If provided, the invoice returned will preview updating or creating a subscription with that tax percent. If set, one of `subscription_items` or `subscription` is required.<br/>
* `subscription_trial_end` - _optional_ - If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.<br/>
* `subscription_trial_from_plan` - _optional_ - Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.<br/>

### GetInvoicesUpcomingLines
<blockquote><p>When retrieving an upcoming invoice, you'll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `coupon` - _optional_ - The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.<br/>
* `customer` - _optional_ - The identifier of the customer whose upcoming invoice you'd like to retrieve.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `invoice_items` - _optional_ - List of invoice items to add or update in the upcoming invoice preview.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `subscription` - _optional_ - The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.<br/>
* `subscription_billing_cycle_anchor` - _optional_ - For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`.<br/>
* `subscription_cancel_at_period_end` - _optional_ - Boolean indicating whether this subscription should cancel at the end of the current period.<br/>
* `subscription_cancel_now` - _optional_
* `subscription_items` - _optional_ - List of subscription items, each with an attached plan.<br/>
* `subscription_prorate` - _optional_ - If previewing an update to a subscription, this decides whether the preview will show the result of applying prorations or not. If set, one of `subscription_items` or `subscription`, and one of `subscription_items` or `subscription_trial_end` are required.<br/>
* `subscription_proration_date` - _optional_ - If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration` cannot be set to false.<br/>
* `subscription_tax_percent` - _optional_ - If provided, the invoice returned will preview updating or creating a subscription with that tax percent. If set, one of `subscription_items` or `subscription` is required.<br/>
* `subscription_trial_end` - _optional_ - If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.<br/>
* `subscription_trial_from_plan` - _optional_ - Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.<br/>

### DeleteInvoicesInvoice
<blockquote><p>Permanently deletes a draft invoice. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized, it must be <a href="#void_invoice">voided</a>.</p></blockquote>

#### Input Parameters
* `invoice` - _required_ - The identifier of the invoice to be deleted.<br/>

### GetInvoicesInvoice
<blockquote><p>Retrieves the invoice with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `invoice` - _required_ - The identifier of the desired invoice.<br/>

### PostInvoicesInvoice
<blockquote><p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
monetary values, as well as <code>billing</code>, become uneditable.</p>

<p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
<code>auto_advance=false</code>.</p></blockquote>

#### Input Parameters
* `invoice` - _required_

### PostInvoicesInvoiceFinalize
<blockquote><p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you'd like to finalize a draft invoice manually, you can do so using this method.</p></blockquote>

#### Input Parameters
* `invoice` - _required_ - The invoice to be finalized, it must have `status=draft`.<br/>

### GetInvoicesInvoiceLines
<blockquote><p>When retrieving an invoice, you'll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `invoice` - _required_ - The ID of the invoice containing the lines to be retrieved.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostInvoicesInvoiceMarkUncollectible
<blockquote><p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p></blockquote>

#### Input Parameters
* `invoice` - _required_ - The identifier of the invoice to be marked as uncollectible. The invoice must be `open`.<br/>

### PostInvoicesInvoicePay
<blockquote><p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/recurring">subscriptions settings</a>. However, if you'd like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p></blockquote>

#### Input Parameters
* `invoice` - _required_ - ID of invoice to pay.<br/>

### PostInvoicesInvoiceSend
<blockquote><p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/recurring">subscriptions settings</a>. However, if you'd like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>

<p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p></blockquote>

#### Input Parameters
* `invoice` - _required_ - The invoice you would like to send. The billing mode for this invoice must be `send_invoice`.<br/>

### PostInvoicesInvoiceVoid
<blockquote><p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p></blockquote>

#### Input Parameters
* `invoice` - _required_ - ID of invoice to void. It must be finalized.<br/>

### GetIssuerFraudRecords
<blockquote><p>Returns a list of issuer fraud records.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `charge` - _optional_ - Only return issuer fraud records for the charge specified by this charge ID.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetIssuerFraudRecordsIssuerFraudRecord
<blockquote><p>Retrieves the details of an issuer fraud record that has previously been created. </p>

<p>Please refer to the <a href="#issuer_fraud_record_object">issuer fraud record</a> object reference for more details.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `issuer_fraud_record` - _required_ - The identifier of the issuer fraud record to be retrieved.<br/>

### GetIssuingAuthorizations
<blockquote><p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `card` - _optional_ - Only return issuing transactions that belong to the given card.<br/>
* `cardholder` - _optional_ - Only return authorizations belonging to the given cardholder.<br/>
* `created` - _optional_ - Only return authorizations that were created during the given date interval.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `status` - _optional_ - Only return authorizations with the given status. One of pending, closed, or reversed.<br/>

### GetIssuingAuthorizationsAuthorization
<blockquote><p>Retrieves an Issuing <code>Authorization</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `authorization` - _required_ - The ID of the authorization to retrieve.<br/>

### PostIssuingAuthorizationsAuthorization
<blockquote><p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `authorization` - _required_ - The identifier of the authorization to update.<br/>

### PostIssuingAuthorizationsAuthorizationApprove
<blockquote><p>Approves a pending Issuing <code>Authorization</code> object.</p></blockquote>

#### Input Parameters
* `authorization` - _required_ - The identifier of the authorization to approve.<br/>

### PostIssuingAuthorizationsAuthorizationDecline
<blockquote><p>Declines a pending Issuing <code>Authorization</code> object.</p></blockquote>

#### Input Parameters
* `authorization` - _required_ - The identifier of the issuing authorization to decline.<br/>

### GetIssuingCardholders
<blockquote><p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_ - Only return cardholders that were created during the given date interval.<br/>
* `email` - _optional_ - Only return cardholders that have the given email address.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `is_default` - _optional_ - Only return the default cardholder.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `phone_number` - _optional_ - Only return cardholders that have the given phone number.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `status` - _optional_ - Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.<br/>
* `type` - _optional_ - Only return cardholders that have the given type. One of `individual` or `business_entity`.<br/>

### PostIssuingCardholders
<blockquote><p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p></blockquote>

### GetIssuingCardholdersCardholder
<blockquote><p>Retrieves an Issuing <code>Cardholder</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `cardholder` - _required_ - The identifier of the cardholder to be retrieved.<br/>

### PostIssuingCardholdersCardholder
<blockquote><p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `cardholder` - _required_ - The ID of the cardholder to update.<br/>

### GetIssuingCards
<blockquote><p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `cardholder` - _optional_ - Only return cards belonging to the Cardholder with the provided ID.<br/>
* `created` - _optional_ - Only return cards that were issued during the given date interval.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `exp_month` - _optional_ - Only return cards that have the given expiration month.<br/>
* `exp_year` - _optional_ - Only return cards that have the given expiration year.<br/>
* `last4` - _optional_ - Only return cards that have the given last four digits.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `name` - _optional_ - Only return cards that have the given name.<br/>
* `source` - _optional_ - Only return cards whose full card number matches that of this card source ID.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `status` - _optional_ - Only return cards that have the given status. One of `active`, `inactive`, or `canceled`.<br/>
* `type` - _optional_ - Only return cards that have the given type. One of `virtual` or `physical`.<br/>

### PostIssuingCards
<blockquote><p>Creates an Issuing <code>Card</code> object.</p></blockquote>

### GetIssuingCardsCard
<blockquote><p>Retrieves an Issuing <code>Card</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `card` - _required_ - The identifier of the card to be retrieved.<br/>

### PostIssuingCardsCard
<blockquote><p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `card` - _required_ - The identifier of the issued card to update.<br/>

### GetIssuingCardsCardDetails
<blockquote><p>For virtual cards only. Retrieves an Issuing <code>Card_details</code> object that contains <a href="/docs/issuing/cards/management#virtual-card-info">the sensitive details</a> of a virtual card.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `card` - _required_ - The identifier of the virtual card to be retrieved.<br/>

### GetIssuingCardsCardPin
<blockquote><p>Retrieves the PIN for a card object, subject to cardholder verification, see <a href="/docs/issuing/pin_management">Retrieve and update cardholder PIN</a></p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `card` - _required_ - The id of the `Card` that the PIN belongs to<br/>
* `verification` - _required_ - The id of the `Verification` that was sent and the code entered by the cardholder<br/>

### PostIssuingCardsCardPin
<blockquote><p>Updates the PIN for a card, subject to cardholder verification. See <a href="/docs/issuing/pin_management">Retrieve and update cardholder PIN</a></p></blockquote>

#### Input Parameters
* `card` - _required_ - The id of the `Card` that the PIN belongs to<br/>

### GetIssuingDisputes
<blockquote><p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_ - Only return issuing disputes that were created during the given date interval.<br/>
* `disputed_transaction` - _optional_ - Only return issuing disputes for the given transaction.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostIssuingDisputes
<blockquote><p>Creates an Issuing <code>Dispute</code> object.</p></blockquote>

### GetIssuingDisputesDispute
<blockquote><p>Retrieves an Issuing <code>Dispute</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `dispute` - _required_ - The ID of the dispute to retrieve.<br/>

### PostIssuingDisputesDispute
<blockquote><p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `dispute` - _required_ - The ID of the dispute to update.<br/>

### GetIssuingSettlements
<blockquote><p>Returns a list of Issuing <code>Settlement</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetIssuingSettlementsSettlement
<blockquote><p>Retrieves an Issuing <code>Settlement</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `settlement` - _required_ - The ID of the settlement to retrieve.<br/>

### PostIssuingSettlementsSettlement
<blockquote><p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `settlement` - _required_ - The ID of the settlement to update.<br/>

### GetIssuingTransactions
<blockquote><p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `card` - _optional_ - Only return issuing transactions that belong to the given card.<br/>
* `cardholder` - _optional_ - Only return authorizations belonging to the given cardholder.<br/>
* `created` - _optional_ - Only return transactions that were created during the given date interval.<br/>
* `dispute` - _optional_ - Only return transactions that originate from a given dispute.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `settlement` - _optional_ - Only return transactions that are associated with the given settlement.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetIssuingTransactionsTransaction
<blockquote><p>Retrieves an Issuing <code>Transaction</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `transaction` - _required_ - The ID of the transaction to retrieve.<br/>

### PostIssuingTransactionsTransaction
<blockquote><p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `transaction` - _required_ - The identifier of the transaction to update.<br/>

### PostIssuingVerifications
<blockquote><p>Some actions (eg: updating a PIN) need confirmation from the cardholder</p></blockquote>

### GetOrderReturns
<blockquote><p>Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_ - Date this return was created.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `order` - _optional_ - The order to retrieve returns for.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetOrderReturnsId
<blockquote><p>Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - The identifier of the order return to be retrieved.<br/>

### GetOrders
<blockquote><p>Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_ - Date this order was created.<br/>
* `customer` - _optional_ - Only return orders for the given customer.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `ids` - _optional_ - Only return orders with the given IDs.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `status` - _optional_ - Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.<br/>
* `status_transitions` - _optional_ - Filter orders based on when they were paid, fulfilled, canceled, or returned.<br/>
* `upstream_ids` - _optional_ - Only return orders with the given upstream order IDs.<br/>

### PostOrders
<blockquote><p>Creates a new order object.</p></blockquote>

### GetOrdersId
<blockquote><p>Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - The identifier of the order to be retrieved.<br/>

### PostOrdersId
<blockquote><p>Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostOrdersIdPay
<blockquote><p>Pay an order by providing a <code>source</code> to create a payment.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostOrdersIdReturns
<blockquote><p>Return all or part of an order. The order must have a status of <code>paid</code> or <code>fulfilled</code> before it can be returned. Once all items have been returned, the order will become <code>canceled</code> or <code>returned</code> depending on which status the order started in.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetPaymentIntents
<blockquote><p>Returns a list of PaymentIntents.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_ - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostPaymentIntents
<blockquote><p>Creates a PaymentIntent object.</p></blockquote>

### GetPaymentIntentsIntent
<blockquote><p>Retrieves the details of a PaymentIntent that has previously been created. </p>

<p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>

<p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `client_secret` - _optional_ - The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.<br/>
* `intent` - _required_

### PostPaymentIntentsIntent
<blockquote><p>Updates a PaymentIntent object.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostPaymentIntentsIntentCancel
<blockquote><p>A PaymentIntent object can be canceled when it is in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action. </p>

<p>Once canceled, no additional charges will be made by the PaymentIntent and any operations on the PaymentIntent will fail with an error. For PaymentIntents with <code>status='requires_capture'</code>, the remaining <code>amount_capturable</code> will automatically be refunded.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostPaymentIntentsIntentCapture
<blockquote><p>Capture the funds of an existing uncaptured PaymentIntent where <code>required_action="requires_capture"</code>.</p>

<p>Uncaptured PaymentIntents will be canceled exactly seven days after they are created.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostPaymentIntentsIntentConfirm
<blockquote><p>Confirm that your customer intends to pay with current or provided
<code>source</code>. Upon confirmation, the PaymentIntent will attempt to initiate
a payment.</p>

<p>If the selected <code>source</code> requires additional authentication steps, the
PaymentIntent will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_source_action</code>. If payment fails,
the PaymentIntent will transition to the <code>requires_payment_method</code> status. If
payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).</p>

<p>When using a publishable key, the
<a href="#payment_intent_object-client_secret">client_secret</a> must be provided
to confirm the PaymentIntent.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### GetPayouts
<blockquote><p>Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `arrival_date` - _optional_
* `created` - _optional_
* `destination` - _optional_ - The ID of an external account - only return payouts sent to this external account.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `status` - _optional_ - Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.<br/>

### PostPayouts
<blockquote><p>To send funds to your own bank account, you create a new payout object. Your <a href="#balance">Stripe balance</a> must be able to cover the payout amount, or you'll receive an "Insufficient Funds" error.</p>

<p>If your API key is in test mode, money won't actually be sent, though everything else will occur as if in live mode.</p>

<p>If you are creating a manual payout on a Stripe account that uses multiple payment source types, you'll need to specify the source type balance that the payout should draw from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p></blockquote>

### GetPayoutsPayout
<blockquote><p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `payout` - _required_ - The identifier of the payout to be retrieved.<br/>

### PostPayoutsPayout
<blockquote><p>Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.</p></blockquote>

#### Input Parameters
* `payout` - _required_ - The identifier of the payout to be updated.<br/>

### PostPayoutsPayoutCancel
<blockquote><p>A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic Stripe payouts.</p></blockquote>

#### Input Parameters
* `payout` - _required_ - The identifier of the payout to be canceled.<br/>

### GetPlans
<blockquote><p>Returns a list of your plans.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `active` - _optional_ - Only return plans that are active or inactive (e.g., pass `false` to list all inactive products).<br/>
* `created` - _optional_ - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `product` - _optional_ - Only return plans for the given product.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostPlans
<blockquote><p>You can create plans using the API, or in the Stripe <a href="https://dashboard.stripe.com/subscriptions/products">Dashboard</a>.</p></blockquote>

### DeletePlansPlan
<blockquote><p>Deleting plans means new subscribers can't be added. Existing subscribers aren't affected.</p></blockquote>

#### Input Parameters
* `plan` - _required_ - The identifier of the plan to be deleted.<br/>

### GetPlansPlan
<blockquote><p>Retrieves the plan with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `plan` - _required_ - The ID of the desired plan.<br/>

### PostPlansPlan
<blockquote><p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan's ID, amount, currency, or billing cycle.</p></blockquote>

#### Input Parameters
* `plan` - _required_ - The identifier of the plan to be updated.<br/>

### GetProducts
<blockquote><p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `active` - _optional_ - Only return products that are active or inactive (e.g., pass `false` to list all inactive products).<br/>
* `created` - _optional_ - Only return products that were created during the given date interval.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `ids` - _optional_ - Only return products with the given IDs.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `shippable` - _optional_ - Only return products that can be shipped (i.e., physical, not digital products).<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `type` - _optional_ - Only return products of this type.<br/>
* `url` - _optional_ - Only return products with the given url.<br/>

### PostProducts
<blockquote><p>Creates a new product object. To create a product for use with subscriptions, see <a href="#create_service_product">Subscriptions Products</a>.</p></blockquote>

### DeleteProductsId
<blockquote><p>Delete a product. Deleting a product with type=<code>good</code> is only possible if it has no SKUs associated with it. Deleting a product with type=<code>service</code> is only possible if it has no plans associated with it.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The ID of the product to delete.<br/>

### GetProductsId
<blockquote><p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - The identifier of the product to be retrieved.<br/>

### PostProductsId
<blockquote><p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>Note that a product's <code>attributes</code> are not editable. Instead, you would need to deactivate the existing product and create a new one with the new attribute values.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetRadarValueListItems
<blockquote><p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `value` - _optional_ - Return items belonging to the parent list whose value matches the specified value (using an "is like" match).<br/>
* `value_list` - _required_ - Identifier for the parent value list this item belongs to.<br/>

### PostRadarValueListItems
<blockquote><p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p></blockquote>

### DeleteRadarValueListItemsItem
<blockquote><p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p></blockquote>

#### Input Parameters
* `item` - _required_ - The identifier of the value list item to be deleted.<br/>

### GetRadarValueListItemsItem
<blockquote><p>Retrieves a <code>ValueListItem</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `item` - _required_ - The identifier of the value list item to be retrieved.<br/>

### GetRadarValueLists
<blockquote><p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `alias` - _optional_ - The alias used to reference the value list when writing rules.<br/>
* `contains` - _optional_ - A value contained within a value list - returns all value lists containing this value.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostRadarValueLists
<blockquote><p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p></blockquote>

### DeleteRadarValueListsValueList
<blockquote><p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p></blockquote>

#### Input Parameters
* `value_list` - _required_ - The identifier of the value list to be deleted.<br/>

### GetRadarValueListsValueList
<blockquote><p>Retrieves a <code>ValueList</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `value_list` - _required_ - The identifier of the value list to be retrieved.<br/>

### PostRadarValueListsValueList
<blockquote><p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p></blockquote>

#### Input Parameters
* `value_list` - _required_ - The identifier of the value list to be updated.<br/>

### GetRecipients
<blockquote><p>Returns a list of your recipients. The recipients are returned sorted by creation date, with the most recently created recipients appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `type` - _optional_
* `verified` - _optional_ - Only return recipients that are verified or unverified.<br/>

### PostRecipients
<blockquote><p>Creates a new <code>Recipient</code> object and verifies the recipient's identity.
Also verifies the recipient's bank account information or debit card, if either is provided.</p></blockquote>

### DeleteRecipientsId
<blockquote><p>Permanently deletes a recipient. It cannot be undone.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The identifier of the recipient to be deleted.<br/>

### GetRecipientsId
<blockquote><p>Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - The identifier of the recipient to be retrieved.<br/>

### PostRecipientsId
<blockquote><p>Updates the specified recipient by setting the values of the parameters passed.
Any parameters not provided will be left unchanged.</p>

<p>If you update the name or tax ID, the identity verification will automatically be rerun.
If you update the bank account, the bank account validation will automatically be rerun.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetRefunds
<blockquote><p>Returns a list of all refunds you've previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `charge` - _optional_ - Only return refunds for the charge specified by this charge ID.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostRefunds
<blockquote><p>Create a refund.</p></blockquote>

### GetRefundsRefund
<blockquote><p>Retrieves the details of an existing refund.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `refund` - _required_ - ID of refund to retrieve.<br/>

### PostRefundsRefund
<blockquote><p>Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts <code>metadata</code> as an argument.</p></blockquote>

#### Input Parameters
* `refund` - _required_

### GetReportingReportRuns
<blockquote><p>Returns a list of Report Runs, with the most recent appearing first. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostReportingReportRuns
<blockquote><p>Creates a new object and begin running the report. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p></blockquote>

### GetReportingReportRunsReportRun
<blockquote><p>Retrieves the details of an existing Report Run. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `report_run` - _required_ - The ID of the run to retrieve<br/>

### GetReportingReportTypes
<blockquote><p>Returns a full list of Report Types. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### GetReportingReportTypesReportType
<blockquote><p>Retrieves the details of a Report Type. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `report_type` - _required_ - The [ID of the Report Type](https://stripe.com/docs/reporting/statements/api#available-report-types) to retrieve, such as `balance.summary.1`.<br/>

### GetReviews
<blockquote><p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetReviewsReview
<blockquote><p>Retrieves a <code>Review</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `review` - _required_ - The identifier of the review to be retrieved.<br/>

### PostReviewsReviewApprove
<blockquote><p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p></blockquote>

#### Input Parameters
* `review` - _required_ - The identifier of the review to be approved.<br/>

### GetSigmaScheduledQueryRuns
<blockquote><p>Returns a list of scheduled query runs.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetSigmaScheduledQueryRunsScheduledQueryRun
<blockquote><p>Retrieves the details of an scheduled query run.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `scheduled_query_run` - _required_ - Unique identifier for the object.<br/>

### GetSkus
<blockquote><p>Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `active` - _optional_ - Only return SKUs that are active or inactive (e.g., pass `false` to list all inactive products).<br/>
* `attributes` - _optional_ - Only return SKUs that have the specified key-value pairs in this partially constructed dictionary. Can be specified only if `product` is also supplied. For instance, if the associated product has attributes `["color", "size"]`, passing in `attributes[color]=red` returns all the SKUs for this product that have `color` set to `red`.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `ids` - _optional_ - Only return SKUs with the given IDs.<br/>
* `in_stock` - _optional_ - Only return SKUs that are either in stock or out of stock (e.g., pass `false` to list all SKUs that are out of stock). If no value is provided, all SKUs are returned.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `product` - _optional_ - The ID of the product whose SKUs will be retrieved. Must be a product with type `good`.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostSkus
<blockquote><p>Creates a new SKU associated with a product.</p></blockquote>

### DeleteSkusId
<blockquote><p>Delete a SKU. Deleting a SKU is only possible until it has been used in an order.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The identifier of the SKU to be deleted.<br/>

### GetSkusId
<blockquote><p>Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - The identifier of the SKU to be retrieved.<br/>

### PostSkusId
<blockquote><p>Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>Note that a SKU's <code>attributes</code> are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostSources
<blockquote><p>Creates a new source object.</p></blockquote>

### GetSourcesSource
<blockquote><p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `client_secret` - _optional_ - The client secret of the source. Required if a publishable key is used to retrieve the source.<br/>
* `source` - _required_ - The identifier of the source to be retrieved.<br/>

### PostSourcesSource
<blockquote><p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p></blockquote>

#### Input Parameters
* `source` - _required_

### GetSourcesSourceMandateNotificationsMandateNotification
<blockquote><p>Retrieves a new Source MandateNotification.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `mandate_notification` - _required_ - The ID of the Source MandateNotification.<br/>
* `source` - _required_ - The ID of the Source that received a ManateNotification.<br/>

### GetSourcesSourceSourceTransactions
<blockquote><p>List source transactions for a given source.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `source` - _required_ - The ID of the source whose source transactions will be retrieved.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetSourcesSourceSourceTransactionsSourceTransaction
<blockquote><p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `source` - _required_ - The ID of the source whose source transaction will be retrieved.<br/>
* `source_transaction` - _required_ - The ID of the source transaction that will be retrieved.<br/>

### PostSourcesSourceVerify
<blockquote><p>Verify a given source.</p></blockquote>

#### Input Parameters
* `source` - _required_ - The ID of the desired source.<br/>

### GetSubscriptionItems
<blockquote><p>Returns a list of your subscription items for a given subscription.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `subscription` - _required_ - The ID of the subscription whose items will be retrieved.<br/>

### PostSubscriptionItems
<blockquote><p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p></blockquote>

### DeleteSubscriptionItemsItem
<blockquote><p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p></blockquote>

#### Input Parameters
* `item` - _required_ - The identifier of the subscription item to delete.<br/>

### GetSubscriptionItemsItem
<blockquote><p>Retrieves the invoice item with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `item` - _required_ - The identifier of the subscription item to retrieve.<br/>

### PostSubscriptionItemsItem
<blockquote><p>Updates the plan or quantity of an item on a current subscription.</p></blockquote>

#### Input Parameters
* `item` - _required_ - The identifier of the subscription item to modify.<br/>

### GetSubscriptionItemsSubscriptionItemUsageRecordSummaries
<blockquote><p>For the specified subscription item, returns a list of summary objects. Each object in the list provides usage information that's been summarized from multiple usage records and over a subscription billing period (e.g., 15 usage records in the billing plan's month of September).</p>

<p>The list is sorted in reverse-chronological order (newest first). The first list item represents the most current usage period that hasn't ended yet. Since new usage records can still be added, the returned summary information for the subscription item's ID should be seen as unstable until the subscription billing period ends.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `subscription_item` - _required_ - Only summary items for the given subscription item.<br/>

### PostSubscriptionItemsSubscriptionItemUsageRecords
<blockquote><p>Creates a usage record for a specified subscription item and date, and fills it with a quantity.</p>

<p>Usage records provide <code>quantity</code> information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the <a href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered billing</a> plan, Stripe helps you send accurate invoices to your customers.</p>

<p>The default calculation for usage is to add up all the <code>quantity</code> values of the usage records within a billing period. You can change this default behavior with the billing plan's <code>aggregate_usage</code> <a href="https://stripe.com/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>. When there is more than one usage record with the same timestamp, Stripe adds the <code>quantity</code> values together. In most cases, this is the desired resolution, however, you can change this behavior with the <code>action</code> parameter.</p>

<p>The default pricing model for metered billing is <a href="https://stripe.com/docs/api/plans/object#plan_object-billing_scheme">per-unit pricing</a>. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing</a> model.</p></blockquote>

#### Input Parameters
* `subscription_item` - _required_ - The ID of the subscription item for this usage record.<br/>

### GetSubscriptionSchedules
<blockquote><p>Retrieves the list of your subscription schedules.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `canceled_at` - _optional_ - Only return subscription schedules that were created canceled the given date interval.<br/>
* `completed_at` - _optional_ - Only return subscription schedules that completed during the given date interval.<br/>
* `created` - _optional_ - Only return subscription schedules that were created during the given date interval.<br/>
* `customer` - _optional_ - Only return subscription schedules for the given customer.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `released_at` - _optional_ - Only return subscription schedules that were released during the given date interval.<br/>
* `scheduled` - _optional_ - Only return subscription schedules that have not started yet.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostSubscriptionSchedules
<blockquote><p>Creates a new subscription schedule object.</p></blockquote>

### GetSubscriptionSchedulesSchedule
<blockquote><p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `schedule` - _required_ - The identifier of the subscription schedule to be retrieved.<br/>

### PostSubscriptionSchedulesSchedule
<blockquote><p>Updates an existing subscription schedule.</p></blockquote>

#### Input Parameters
* `schedule` - _required_

### PostSubscriptionSchedulesScheduleCancel
<blockquote><p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p></blockquote>

#### Input Parameters
* `schedule` - _required_ - The identifier of the subscription schedule to be canceled.<br/>

### PostSubscriptionSchedulesScheduleRelease
<blockquote><p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription's ID to the <code>released_subscription</code> property.</p></blockquote>

#### Input Parameters
* `schedule` - _required_ - The identifier of the subscription schedule to be released.<br/>

### GetSubscriptionSchedulesScheduleRevisions
<blockquote><p>Retrieves the list of subscription schedule revisions for a subscription schedule.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `schedule` - _required_ - The identifier of the subscription schedule to retrieve revisions for.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### GetSubscriptionSchedulesScheduleRevisionsRevision
<blockquote><p>Retrieves the details of an existing subscription schedule revision. You only need to supply the unique subscription schedule revision identifier that was returned upon subscription schedule creation or retrieval.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `revision` - _required_ - The identifier of the subscription schedule revision to be retrieved.<br/>
* `schedule` - _required_ - The identifier of the subscription schedule the revision is associated with.<br/>

### GetSubscriptions
<blockquote><p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `billing` - _optional_ - The billing mode of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`.<br/>
* `created` - _optional_
* `customer` - _optional_ - The ID of the customer whose subscriptions will be retrieved.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `plan` - _optional_ - The ID of the plan whose subscriptions will be retrieved.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `status` - _optional_ - The status of the subscriptions to retrieve. One of: `trialing`, `active`, `past_due`, `unpaid`, `canceled`, or `all`. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Passing in a value of `all` will return subscriptions of all statuses.<br/>

### PostSubscriptions
<blockquote><p>Creates a new subscription on an existing customer.</p></blockquote>

### DeleteSubscriptionsSubscriptionExposedId
<blockquote><p>Cancels a customer's subscription immediately. The customer will not be charged again for the subscription.</p>

<p>Note, however, that any pending invoice items that you've created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you've set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>

<p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p></blockquote>

#### Input Parameters
* `subscription_exposed_id` - _required_

### GetSubscriptionsSubscriptionExposedId
<blockquote><p>Retrieves the subscription with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `subscription_exposed_id` - _required_

### PostSubscriptionsSubscriptionExposedId
<blockquote><p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p></blockquote>

#### Input Parameters
* `subscription_exposed_id` - _required_

### DeleteSubscriptionsSubscriptionExposedIdDiscount
<blockquote><p>Removes the currently applied discount on a subscription.</p></blockquote>

#### Input Parameters
* `subscription_exposed_id` - _required_

### PostTerminalConnectionTokens
<blockquote><p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p></blockquote>

### GetTerminalLocations
<blockquote><p>Returns a list of <code>Location</code> objects.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `operator_account` - _optional_ - To group objects on your platform account by connected account, set this parameter to the connected account operating your application.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostTerminalLocations
<blockquote><p>Creates a new <code>Location</code> object.</p></blockquote>

### GetTerminalLocationsLocation
<blockquote><p>Retrieves a <code>Location</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `location` - _required_ - The identifier of the location to be retrieved.<br/>
* `operator_account` - _optional_ - To group objects on your platform account by connected account, set this parameter to the connected account operating your application.<br/>

### PostTerminalLocationsLocation
<blockquote><p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `location` - _required_ - The identifier of the location to be updated.<br/>

### GetTerminalReaders
<blockquote><p>Returns a list of <code>Reader</code> objects.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `location` - _optional_ - A location id to filter the response list to only readers at the specific location<br/>
* `operator_account` - _optional_ - To group objects on your platform account by connected account, set this parameter to the connected account operating your application.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `status` - _optional_ - A status filter to filter readers to only offline or online readers<br/>

### PostTerminalReaders
<blockquote><p>Creates a new <code>Reader</code> object.</p></blockquote>

### GetTerminalReadersReader
<blockquote><p>Retrieves a <code>Reader</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `operator_account` - _optional_ - To group objects on your platform account by connected account, set this parameter to the connected account operating your application.<br/>
* `reader` - _required_ - The identifier of the reader to be retrieved.<br/>

### PostTerminalReadersReader
<blockquote><p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `reader` - _required_ - The identifier of the reader to be updated.<br/>

### PostTokens
<blockquote><p>Creates a single-use token that represents a bank account's details.
This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a <a href="#accounts">Custom account</a>.</p></blockquote>

### GetTokensToken
<blockquote><p>Retrieves the token with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `token` - _required_ - The ID of the desired token.<br/>

### GetTopups
<blockquote><p>Returns a list of top-ups.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `amount` - _optional_ - A positive integer representing how much to transfer.<br/>
* `created` - _optional_ - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `status` - _optional_ - Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.<br/>

### PostTopups
<blockquote><p>Top up the balance of an account</p></blockquote>

### GetTopupsTopup
<blockquote><p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `topup` - _required_ - The ID of the top-up to retrieve.<br/>

### PostTopupsTopup
<blockquote><p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p></blockquote>

#### Input Parameters
* `topup` - _required_ - The ID of the top-up to retrieve.<br/>

### PostTopupsTopupCancel
<blockquote><p>Cancels a top-up. Only pending top-ups can be canceled.</p></blockquote>

#### Input Parameters
* `topup` - _required_ - The ID of the top-up to cancel.<br/>

### GetTransfers
<blockquote><p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `created` - _optional_
* `destination` - _optional_ - Only return transfers for the destination specified by this account ID.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>
* `transfer_group` - _optional_ - Only return transfers with the specified transfer group.<br/>

### PostTransfers
<blockquote><p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you'll receive an "Insufficient Funds" error.</p></blockquote>

### GetTransfersIdReversals
<blockquote><p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `id` - _required_ - The ID of the transfer whose reversals will be retrieved.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostTransfersIdReversals
<blockquote><p>When you create a new reversal, you must specify a transfer to create it on.</p>

<p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>

<p>Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p></blockquote>

#### Input Parameters
* `id` - _required_ - The ID of the transfer to be reversed.<br/>

### GetTransfersTransfer
<blockquote><p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `transfer` - _required_ - The identifier of the transfer to be retrieved.<br/>

### PostTransfersTransfer
<blockquote><p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts only metadata as an argument.</p></blockquote>

#### Input Parameters
* `transfer` - _required_ - The ID of the transfer to be updated.<br/>

### GetTransfersTransferReversalsId
<blockquote><p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_ - ID of reversal to retrieve.<br/>
* `transfer` - _required_ - ID of the transfer reversed.<br/>

### PostTransfersTransferReversalsId
<blockquote><p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata and description as arguments.</p></blockquote>

#### Input Parameters
* `id` - _required_ - ID of reversal to retrieve.<br/>
* `transfer` - _required_ - ID of the transfer reversed.<br/>

### GetWebhookEndpoints
<blockquote><p>Returns a list of your webhook endpoints.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `ending_before` - _optional_ - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.<br/>
* `limit` - _optional_ - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.<br/>
* `starting_after` - _optional_ - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.<br/>

### PostWebhookEndpoints
<blockquote><p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p></blockquote>

### DeleteWebhookEndpointsWebhookEndpoint
<blockquote><p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p></blockquote>

#### Input Parameters
* `webhook_endpoint` - _required_ - The ID of the webhook endpoint to delete.<br/>

### GetWebhookEndpointsWebhookEndpoint
<blockquote><p>Retrieves the webhook endpoint with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `webhook_endpoint` - _required_ - The ID of the desired webhook endpoint.<br/>

### PostWebhookEndpointsWebhookEndpoint
<blockquote><p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p></blockquote>

#### Input Parameters
* `webhook_endpoint` - _required_ - The ID of the desired webhook endpoint.<br/>

## License

**flow**ground :- Telekom iPaaS / stripe-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
