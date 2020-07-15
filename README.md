# Author
Gaurav Ochani

# Introduction
This repository is created to manage code for UI Automation of Vacation direct web application. 

# Getting Started
Clone this repository. And then below are the steps, dependencies and installation required for users getting through the code up and running on their local machines:

1. Download & Install Node

2. Install protractor globally using command < npm install -g protractor >  and then run command < webdriver-manager update >

3. Install Java(JDK) and set the environment variables if you want to run on standalone selenium server otherwise it is not required. 

4. Go to project root folder and run command < npm i > 

Note: For reference, please take a look on protractor installation on official website: <https://www.protractortest.org/#/tutorial>

# Build and Test
This can be integrated in any CICD pipeline if required. However, following are the steps to execute tests on your local agent:

1. Once you have cloned the repository, go to config folder

2. Run protractor command < protractor conf.js >

3. Test execution should begin now. After completing the tests, HTML report can be seen here: VD-UI-Automation/configs/reports_new

4. Short Video recording for test execution: <https://drive.google.com/file/d/1-a7OP5bc6aobdouSsDpMZ_1EVLicTrr3/view>

# Contribute
Contribution from outside teams are not required since this project is intended only for mock testing purpose.

