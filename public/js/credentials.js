function publicKeyCredentialToJSON(publicKey){
    console.log(publicKey)
    return '';
}

function createCredentials(){
    const createCredentialDefaultArgs = {
        publicKey: {
            rp: {
                name: "test"
            },
            // User:
            user: {
                id: new Uint8Array(16),
                name: "test",
                displayName: "Test User"
            },
            pubKeyCredParams: [{
                type: "public-key",
                alg: -7
            }],
            authenticatorSelection: { userVerification: "preferred" },
            attestation: "direct",
            timeout: 60000,
            challenge: new Uint8Array([ // must be a cryptographically random number sent from a server
                0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
                0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
            ]).buffer
        }
    };

    navigator.credentials.create(createCredentialDefaultArgs).then((res) => {
        console.log('OK')
        var json = publicKeyCredentialToJSON(res);
        // Send data to relying party's servers
        post("/webauthn/register", {
            state: "<%= state %>",
            provider: "<%= provider %>",
            res: JSON.stringify(json)
        });
    }).catch(console.error);
}

function getCredentials(){
    navigator.credentials
        .get({
            publicKey: {
                challenge: new Uint8Array(16),
                allowCredentials: [
                    {
                        id: new Uint8Array(16),
                        type: "public-key"
                    }
                ],
                timeout: 15000,
                authenticatorSelection: { userVerification: "preferred" }
            }
        })
        .then(res => {
            var json = publicKeyCredentialToJSON(res);
            // Send data to relying party's servers
            post("/webauthn/authenticate", {
                state: "<%= state %>",
                provider: "<%= provider %>",
                res: JSON.stringify(json)
            });
        })
        .catch(err => {
            alert("Invalid FIDO device");
        });
}

if (window.isSecureContext) {
    console.log('Secure context: on')
    //createCredentials()
} else {
    console.log('Secure context: OFF')
}
