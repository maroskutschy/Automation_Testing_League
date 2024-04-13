*** Settings ***
Library    RequestsLibrary

*** Variables ***
&{response}

*** Test Cases ***

Search all users
    ${response}    GET    http://localhost:3000/users
    Status Should Be    200
    Should Be Equal    ${response.json()}[0][id]    1
    Should Be Equal    ${response.json()}[0][name]    David
    Should Be Equal As Strings    ${response.json()}[0][age]   30
    Should Be Equal    ${response.json()}[1][id]    2
    Should Be Equal    ${response.json()}[1][name]    John
    Should Be Equal As Strings    ${response.json()}[1][age]   40
 


