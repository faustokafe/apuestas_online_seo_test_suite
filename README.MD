# QA Engineer Automation Task

## TEST PLAN

### TEST STRATEGY

The test strategy chosen is to fully cover the functional requirements, via an hybrid and automated testing approach. Test cases will exercise both the User Interface (UI) and the API, using a commom test automation framework: [Cypress](cypress.io).

### TEST FRAMEWORK

Cypress was selected to be the only used test automation framework, both on UI and API levels, due to the:
- Reduced complexity due to the usage of a single tooling.
- Ability of performing [API requests](https://docs.cypress.io/api/commands/request) and provide embedded assertions.
- User friendly UI and also command line support. 
- Wide range of [Assertions](https://docs.cypress.io/guides/references/assertions). 


### SYSTEM UNDER TEST
The https://apuestasonline.net/ website is the System Under Test (SUT) for this project. 

### TEST CASES
Vverify the check for the pages from the main menu on top.
1. Verify the site is SEO friendly in terms of technical SEO
- There is only one H1 element
- There are at least 2 H2 elements
- All images have alt tags
- Site has only one heading with with a title and meta description
- Site content is divided by multiple subheadings
- Site has all canconicals valid
- Site has an HTML lang set
2. Links are valid and working, check for 404 links and return their URLs as a result
3. Site has schema definition and robots.txt defined properly
4. Send results via email
5. Define a function to run the tests on a daily basis 


## TEST CASES DETAILS

-WORK IN PROGRESS-
