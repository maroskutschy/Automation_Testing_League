*** Settings ***
Library   Browser
Library    Collections

*** Variables ***
&{response}

*** Test Cases ***

Search all users
    Open Browser
    &{response}=    Http    http://localhost:3000/users    GET
    Should Be Equal    &{response.status}    200
    



