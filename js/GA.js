var gaPlugin;

function initialize() {
    document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
    gaPlugin = window.plugins.gaPlugin;

    // Note: A request for permission is REQUIRED by google. You probably want to do this just once, though, and remember the answer for subsequent runs.
    navigator.notification.confirm('GA_PLUGIN would like your permission to collect usage data. No personal or user identifiable data will be collected.', permissionCallback, 'Attention', 'Allow,Deny');
}

function permissionCallback (button) {
    if (button === 1)
        gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-49492406-1", 10);
}

function nativePluginResultHandler (result) {
    //alert('nativePluginResultHandler - '+result);
    console.log('nativePluginResultHandler: '+result);

}

function nativePluginErrorHandler (error) {
    //alert('nativePluginErrorHandler - '+error);
    console.log('nativePluginErrorHandler: '+error);
}

function goingAway() {
    gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
}