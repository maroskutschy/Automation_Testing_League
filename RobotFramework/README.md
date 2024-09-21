**ReportPortal**: 

ReportPortal Demo instance:
https://demo.reportportal.io/ui/#userProfile/apiKeys

https://reportportal.io/docs/log-data-in-reportportal/test-framework-integration/Python/RobotFramework/
https://github.com/reportportal/agent-Python-RobotFramework#readme
https://dev.to/juperala/how-to-run-robot-framework-test-from-command-line-5aa

from root project directory: switch to Robot_Framework directory, then:

robot --listener robotframework_reportportal.listener --variable RP_API_KEY:"XXX" --variable RP_ENDPOINT:"https://demo.reportportal.io" --variable RP_LAUNCH:"Robot_Framework" --variable RP_PROJECT:"default_personal" --test Login RF_Selenium_standard.robot

**Notes for Setup of Robot Framework**

pip install robotframework-requests

python --version 

https://docs.robotframework.org/docs/examples/restfulbooker

how to upgrade Selenium library:
pip install --upgrade robotframework-seleniumlibrary

chromedriver download:
https://googlechromelabs.github.io/chrome-for-testing/#stable

Chromedriver:
a)This didn't help:
chromedriver is stoed in: C:\Chromedriver\chromedriver.exe
adn this path is added to env. variables
b) This helped:
store chromedriver.exe in the root of the project

ReportPortal Demo instance:
https://demo.reportportal.io/ui/#userProfile/apiKeys

learn finnish language
https://www.youtube.com/watch?v=NYz_rWFlTnM&list=PLERGeJGfknBTRTnq_scur-CXrLY8A3YRH
Mac where is stored chromedriver: /usr/local/bin/

