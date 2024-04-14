*** Settings ***
Library    Browser
Test Setup    Open browser with 'Wait Conditions' webpage and setup the wait times

*** Keywords ***
Open browser with 'Wait Conditions' webpage and setup the wait times 
    New Browser    chromium    headless=No
    New Context    viewport={'width': 1920, 'height': 1080}
    New Page    file:///C:/testautomation-playground/expected_conditions.html
    Get Title   contains    Wait Conditions
    Type Text    id=min_wait    10
    Get Text     id=min_wait    ==    10
    Type Text    id=max_wait    10
    Get Text     id=max_wait    ==    10

*** Test Cases ***

Waiting for Alert and Prompt
    Get Element States    id=alert_handled_badge    contains    hidden
    Get Element States    id=alert_handled_badge    not contains    visible 
    Click    id=alert_trigger
    Wait For Elements State    id=alert_handled_badge    visible    timeout=15 s    
    Get Element States    id=alert_handled_badge    not contains    hidden
    Get Element States    id=alert_handled_badge    contains    visible 
    Get Element States    id=confirm_ok_badge    contains    hidden
    Get Element States    id=confirm_ok_badge    not contains    visible 
    Click    id=prompt_trigger
    Handle Future Dialogs    action=accept
    Wait For Elements State    id=confirm_ok_badge    visible    timeout=15 s    
    Get Element States    id=confirm_ok_badge    not contains    hidden
    Get Element States    id=confirm_ok_badge    contains    visible 
