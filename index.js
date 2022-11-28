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
                            "defaultValue": "10 20"
                        }
                    }
                },
                {
                    "opcode": 'randomdigits',
                    "blockType": "reporter",
                    "text": "generate [INPUT] random digits",
                    "arguments": {
                        "INPUT": {
                            "type": "number",
                            "defaultValue": 10
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
        var inputs = INPUT.split(" ")
        var output = 0
        inputs.forEach(input => {
            output += parseInt(input)
        })
        output = output / inputs.length
        return output
    };

    randomdigits({INPUT}){
        var output = ""
        for (let i = 0; i < INPUT; i++) {
            output += `${Math.round(Math.random() * 9)}`
        }
        return output
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
