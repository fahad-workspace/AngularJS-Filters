exports.config = {
    allScriptsTimeout: 15000,
    specs: [
        'e2e/*.js'
    ],
    capabilities: {
        'browserName': 'firefox'
    },
    firefoxOnly: true,
    baseUrl: 'http://localhost:8000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};