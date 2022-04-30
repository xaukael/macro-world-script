# Macro World Script
Foundry module that runs any macro named 'World Script' on the canvasInit hook
Code in any macro named 'World Script' will be executed on all clients.
Any hooks set here that are fired before canvasInit, like init, will not be hooked in time.

This will not execute any macros authored by non-gm users.

errors from code inside the macros may be hard to debug from the error messages in the console.
