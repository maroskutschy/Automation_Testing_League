*** Settings ***
Library    SeleniumLibrary
Test Setup    Open Chrome Browser
Test Teardown    Close All Browsers

*** Keywords ***
Open Chrome Browser
    Open Browser    file:///C:/testautomation-playground/index.html    chrome 
    #Open Browser    file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/index.html    chrome 
    Maximize Browser Window

*** Test Cases ***

Login
    Click Element    xpath://a[@href='login.html']
    Title Should Be    Login
    Input Text    id:user    admin
    Input Text    id:password    admin
    Click Element    id:login
    Title Should Be    Order Pizza

Mouse actions
    Click Element    xpath://a[@href='mouse_events.html']
    Title Should Be    Mouse Actions
    # click, right click, double click
    Element Text Should Be    id:click_type    ${EMPTY}
    Click Element    id:click_area
    Element Text Should Be    id:click_type    Click
    Open Context Menu    id:click_area
    Element Text Should Be    id:click_type    Right-Click
    Double Click Element    id:click_area
    Element Text Should Be    id:click_type    Double-Click
    # drag and drop
    Element Text Should Be    id:drag_source    Drop me on to the green box
    Element Text Should Be    id:drop_target    Target
    Drag And Drop    id:drag_source    id:drop_target
    Element Text Should Be    id:drop_target    Drop is successful!
    # hover
    Element Text Should Be    class:dropbtn    Choose Language
    Element Text Should Be    id:hover_validate    ${EMPTY}
    Mouse Over    class:dropbtn
    Click Element    id:dd_java
    Element Text Should Be    id:hover_validate    Java
    Click Element    id:dd_python
    Element Text Should Be    id:hover_validate    Python
    Click Element    id:dd_javascript
    Element Text Should Be    id:hover_validate    JavaScript

 Iframes
    Click Element    xpath://a[@href='frames.html']
    Title Should Be    Frame Interactions
    Select Frame    id:frame1
    Element Text Should Be    id:click_me_1    Click Me 1
    Click Element    id:click_me_1
    Element Text Should Be    id:click_me_1    Clicked
    Select Frame    id:frame2
    Element Text Should Be    id:click_me_2    Click Me 2
    Click Element    id:click_me_2
    Element Text Should Be    id:click_me_2    Clicked
    Unselect Frame
    Select Frame    id:frame1
    Select Frame    id:frame3
    Select Frame    id:frame4
    Element Text Should Be    id:click_me_4    Click Me 4
    Click Element    id:click_me_4
    Element Text Should Be    id:click_me_4    Clicked