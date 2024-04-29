*** Settings ***
Library    Browser
Test Setup    Open Chromium Browser

*** Keywords ***
Open Chromium Browser
    New Browser    chromium    headless=No    args=["--start-maximized"]
    New Context    viewport=${None}
    
*** Test Cases ***

Login
    New Page    file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/login.html
    Get Title   contains    Login
    Type Text    id=user    admin
    Type Text    id=password   admin
    Click    id=login
    Get Title   contains    Order Pizza

Mouse actions
    New Page    file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/mouse_events.html
    Get Title   contains    Mouse Actions
    # click, right click, double click
    Get Text    id=click_type    ==    ${EMPTY}
    Click    id=click_area
    Get Text    id=click_type    ==    Click
    Click With Options    id=click_area    right 
    Get Text    id=click_type    ==    Right-Click
    Click With Options    id=click_area    clickCount=2
    Get Text    id=click_type    ==    Double-Click
    # drag and drop
    Get Text    id=drop_target    ==    Target
    Get Text    id=drag_source    ==    Drop me on to the green box   
    # without click on source - drag and drop was doing nothing
    Click    id=drag_source
    Drag And Drop    id=drag_source    id=drop_target
    Get Text    id=drop_target    ==    Drop is successful!
    # hover
    Get Text    .dropbtn    ==    Choose Language
    Get Text    id=hover_validate    ==    ${EMPTY}
    Hover    .dropbtn
    Click    id=dd_java
    Get Text    id=hover_validate    ==    Java
    Click    id=dd_python
    Get Text    id=hover_validate    ==    Python
    Click    id=dd_javascript
    Get Text    id=hover_validate    ==    JavaScript

Iframes
    New Page    file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/frames.html
    Get Title   contains    Frame Interactions
    Get Text    id=frame1 >>> id=click_me_1    ==    Click Me 1
    Click    id=frame1 >>> id=click_me_1
    Get Text    id=frame1 >>> id=click_me_1    ==    Clicked
    Get Text    id=frame1 >>> id=frame2 >>> id=click_me_2    ==    Click Me 2
    Click    id=frame1 >>> id=frame2 >>> id=click_me_2
    Get Text    id=frame1 >>> id=frame2 >>> id=click_me_2    ==    Clicked
    Get Text    id=frame1 >>> id=frame3 >>> id=frame4 >>> id=click_me_4    ==    Click Me 4
    Click    id=frame1 >>> id=frame3 >>> id=frame4 >>> id=click_me_4
    Get Text    id=frame1 >>> id=frame3 >>> id=frame4 >>> id=click_me_4    ==    Clicked