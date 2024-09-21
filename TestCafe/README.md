**ReportPortal**:
you need to run tests via terminal:
testcafe chrome TestCafe.js --start-fullscreen
becasue it does not send results to RP via VSCode Plugin


**Notes for Setup of TestCafe**

in root of the project (for VS Code Plugin): install:
and also in the sufolder install:
npm install -g testcafe
OR
npm install testcafe

install Plugins:
TestCafe Snippets
TestCafe Test Runner

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

testcafe chrome TestCafe.js

testcafe chrome TestCafe.js --start-fullscreen