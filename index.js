class Utilities {
    constructor (runtime, extensionId) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            "id": 'utilities',
            "name": 'Utilities',
            "color1": '#ff9977',
            "color2": '#ec8c6c',
            "blocks": [
                {
                    "opcode": 'average',
                    "blockType": "reporter",
                    "text": "average of [INPUT]",
                    "arguments": {
                        "INPUT": {
                            "type": "string",
                            "defaultValue": ""
                        }
                    }
                }
            ],
            // "menus": {
            //     "menu": {
            //         "items": ["Hi", "Bye"]
            //     },
            // },
        };
    };
    
    // Code for blocks go here

    average({INPUT}){
        return JSON.stringify(INPUT)
    };
};

(function() {
    var extensionClass = Utilities;
    if (typeof window === "undefined" || !window.vm) {
        Scratch.extensions.register(new extensionClass());
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
    };
})()
