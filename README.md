# Member_Portal
Screen front-end coding.

## User flow

The sequence to view the screens one after another and show casing different user's scneraio. 

1) Login_screen.html : Login modal for Member Centre changed with new logo.
	
	`### Scenario 1: Become a member : Takes to account-setup.html`

	`### Scenario 2: Login (if a member is already signed up) : Takes to welcome_screen.html `

2) Scenario 1: When Account setup form is filled and sent.

	` ### Goes to register_confirmation.html : An email confirmation should sent to member. `

	`### Once member clicks on activation link in an email => goes to after_registertrationConfirms.html`

	`### Link "Login clicked" a member needs to login again. => Goes to welcome_Screen.html`

3) Scenario 2: Welcome_screen.html

	`Shop => https://www.zucorahome.com/Zuc/ecomplan
	Rewards => user_rewards.html
	Plans => user_plans.html
	Billing => /user_payment_options.html
	FAQ => membership_faq.html
	Profile  => memberProfile_afterConfirmation.html`

4) Profile (memberProfile_afterConfirmation.html) : Member can see their profile and should auto fill the data filled by member when set up the account. A member should be able to edit and save new data. 
	`### Address screen when clicked "My Addresses"`
	`### Payment options screen when clicked "My payment options"`
	` NOTE: Each screen have options to edit the address which is modal form and should populate the selected address to edit it. Further more, we have intentionally removed "delete" option for payment address.`


5) Plans screen have 3 scenario
	`### Scenario 1: when a user does not have any plans then user_plans.html will show up`
	`### Scenario 2: When a user have a Snarter living plan then user_plans_two.html will show up.` 
    `### Scenario 3: When a user's plan is inactive then user_plans_three.html will show. `
	`NOTE: 
	1) There is a button which will show up when a user have not bought ultimate Smarter living plan i.e Highest plan
	2) Phone number showing as per member plan. More information in code.`




