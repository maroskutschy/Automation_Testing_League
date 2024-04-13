*** Settings ***
Library    Browser

*** Test Cases ***

Waiting for Alert and Prompt
    #Open Browser
    New Browser    chromium    headless=No
    New Context    viewport={'width': 1920, 'height': 1080}
    New Page    file:///C:/testautomation-playground/expected_conditions.html
    Get Title   contains    Wait Conditions
    Type Text    id=min_wait    10
    Get Text     id=min_wait    ==    10
    Type Text    id=max_wait    10
    Get Text     id=max_wait    ==    10
    Get Element States    id=alert_handled_badge    contains    hidden
    Get Element States    id=alert_handled_badge    not contains    visible 
    Click    id=alert_trigger
    Wait For Elements State    id=alert_handled_badge    visible    timeout=15 s    
    Get Element States    id=alert_handled_badge    not contains    hidden
    Get Element States    id=alert_handled_badge    contains    visible 
