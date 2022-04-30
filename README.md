# macro-world-script
Foundry module that runs any macro named 'World Script' on the canvasInit hook
Code in any macro named 'World Script' will be executed on all clients.
Any hooks set here that are fired before canvasInit, like init, will not be hooked in time.
