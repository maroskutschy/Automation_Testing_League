*** Settings ***
Library    Browser
Test Setup    Open browser with 'Wait Conditions' webpage and setup the wait times

*** Keywords ***
Open browser with 'Wait Conditions' webpage and setup the wait times 
    New Browser    chromium    headless=No    args=["--start-maximized"]
    #New Context    viewport={'width': 1920, 'height': 1080}
    New Context    viewport=${None}
    #New Page    file:///C:/testautomation-playground/expected_conditions.html
    New Page    file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/expected_conditions.html
    Get Title   contains    Wait Conditions
    Type Text    id=min_wait    10
    Get Text     id=min_wait    ==    10
    Type Text    id=max_wait    10
    Get Text     id=max_wait    ==    10

*** Test Cases ***

Waiting for Alert and Prompt
    Wait For Elements State    id=alert_handled_badge    hidden
    Get Element States    id=alert_handled_badge    contains    hidden
    Get Element States    id=alert_handled_badge    not contains    visible 
    Click    id=alert_trigger
    Wait For Elements State    id=alert_handled_badge    visible    timeout=15 s    
    Get Element States    id=alert_handled_badge    not contains    hidden
    Get Element States    id=alert_handled_badge    contains    visible 
    Wait For Elements State    id=confirm_ok_badge    hidden
    Get Element States    id=confirm_ok_badge    contains    hidden
    Get Element States    id=confirm_ok_badge    not contains    visible 
    Click    id=prompt_trigger
    Handle Future Dialogs    action=accept
    Wait For Elements State    id=confirm_ok_badge    visible    timeout=15 s    
    Get Element States    id=confirm_ok_badge    not contains    hidden
    Get Element States    id=confirm_ok_badge    contains    visible 

Waiting for Element to be Visible
    Wait For Elements State    id=visibility_target    hidden
    Get Element States    id=visibility_target    contains    hidden
    Get Element States    id=visibility_target    not contains    visible 
    Click    id=visibility_trigger
    Wait For Elements State    id=visibility_target    visible    timeout=15 s    
    Get Element States    id=visibility_target    not contains    hidden
    Get Element States    id=visibility_target    contains    visible
    Get Element States    text= just removed my invisibility cloak!!    contains    detached
    Get Element States    text= just removed my invisibility cloak!!    not contains    visible
    Get Element States    text= Can you see me?    contains    detached
    Get Element States    text= Can you see me?    not contains    visible
    Click    id=visibility_target
    Wait For Elements State    text= just removed my invisibility cloak!!    visible
    Wait For Elements State    text= Can you see me?    visible
    Get Element States    text= just removed my invisibility cloak!!    not contains    detached
    Get Element States    text= just removed my invisibility cloak!!    contains    visible
    Get Element States    text= Can you see me?    not contains    detached
    Get Element States    text= Can you see me?    contains    visible

Waiting for Element to be Invisible
    Get Element States    id=invisibility_target    contains    visible
    Get Element States    id=invisibility_target    not contains    hidden
    Get Element States    id=spinner_gone    not contains    visible
    Get Element States    id=spinner_gone    contains    hidden   
    Click    id=invisibility_trigger
    Wait For Elements State    id=invisibility_target    hidden    timeout=15 s
    Get Element States    id=invisibility_target    not contains    visible
    Get Element States    id=invisibility_target    contains    hidden
    Get Element States    id=spinner_gone    contains    visible
    Get Element States    id=spinner_gone    not contains    hidden 

Waiting for Element to be Enabled/has class
    Get Element States    id=enabled_target    contains    disabled
    Get Element States    id=enabled_target    not contains    enabled
    Get Text     id=enabled_target    ==    Disabled Button
    Get Classes    id=enabled_target    ==    btn    btn-danger  
    Click    id=enabled_trigger
    Wait For Elements State    id=enabled_target    enabled    timeout=15 s
    Get Element States    id=enabled_target    not contains    disabled
    Get Element States    id=enabled_target    contains    enabled
    Get Text     id=enabled_target    ==    Enabled Button
    Get Classes    id=enabled_target    ==    btn    btn-success       

Waiting for Page Title change
    Get Title   contains    Wait Conditions
    Click    id=page_title_trigger
    #Set Browser Timeout    15 seconds
    Set Retry Assertions For    15 seconds
    Get Title   contains    My New Title!

Waiting for Text
    Get Attribute    id=wait_for_value    placeholder    ==    Creator of C
    Get Text    id=wait_for_text    ==    ${EMPTY}
    Click    id=text_value_trigger
    Set Retry Assertions For    15 seconds
    Get Text    id=wait_for_text    ==    Submit

Waiting for Frame
    Get Element States    id=frm    ==    detached 
    Click    id=wait_for_frame
    Wait For Elements State    id=frm    visible    timeout=15 s
    Get Element States    id=frm    ==    attached     defocused    editable    enabled    visible
    Get Text    id=frm >>> id=inner_button    ==    Inner Button
    Click    id=frm >>> id=inner_button
    Get Text    id=frm >>> id=inner_button    ==    Clicked


    