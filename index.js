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
                },
                {
                    "opcode": 'gettimezone',
                    "blockType": "reporter",
                    "text": "get current timezone offset",
                    "arguments": {
                    }
                },
                {
                    "opcode": 'slice',
                    "blockType": "reporter",
                    "text": "characters [BEGINNING] to [END] in text [TEXT]",
                    "arguments": {
                        "BEGINNING": {
                            "type": "number",
                            "defaultValue": 1
                        },
                        "END": {
                            "type": "number",
                            "defaultValue": 5
                        },
                        "TEXT": {
                            "type": "string",
                            "defaultValue": "hello there"
                        }
                    }
                }
            ],
//             "menus": {
//                 "timezones": {
//                     "items": []
//                 },
//             },
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
    
    gettimezone(){
        var date = new Date()
        var offset = Date.getTimezoneOffset()
        return offset   
    }

    slice({BEGINNING, END, TEXT}){
        return TEXT.slice(BEGINNING - 1, END)
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
