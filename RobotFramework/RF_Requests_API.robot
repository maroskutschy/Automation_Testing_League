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

Create User
    ${body}    Create Dictionary    id=3    name=Susan    age=50
    ${response}    POST    http://localhost:3000/users    json=${body}
    Status Should Be    201
    Should Be Equal    ${response.json()}[id]    3
    Should Be Equal    ${response.json()}[name]    Susan
    Should Be Equal As Strings    ${response.json()}[age]   50 

Search for created user
    ${response}    GET    http://localhost:3000/users/3
    Status Should Be    200
    Should Be Equal    ${response.json()}[id]    3
    Should Be Equal    ${response.json()}[name]    Susan
    Should Be Equal As Strings    ${response.json()}[age]   50  
 


