import Head from 'next/head'
import Navigation from "../components/navigation";
import Sidebar from "../components/sidebar";
import ChatTimeline from "../components/chat_timeline";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active_chat: null
        }
        this.representChat = this.representChat.bind(this);
    }
    representChat(chatUuid) {
        this.setState({active_chat: chatUuid})
    }
    createCredentials(){
        const createCredentialDefaultArgs = {
            publicKey: {
                rp: {
                    name: "test"
                },
                user: {
                    id: new Uint8Array(16),
                    name: "test",
                    displayName: "Test User"
                },
                pubKeyCredParams: [{
                    type: "public-key",
                    alg: -7
                }],
                authenticatorSelection: {
                    authenticatorAttachmentOptional: "cross-platform",
                    userVerification: "required"
                },
                attestation: "direct",
                timeout: 60000,
                challenge: new Uint8Array([ // must be a cryptographically random number sent from a server
                    0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
                    0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
                ]).buffer
            }
        };

        navigator.credentials.create(createCredentialDefaultArgs).then((res) => {
            console.log('OK', res)
            // Send data to relying party's servers
            fetch("/api/credentials", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    state: "state",
                    provider: "provider",
                    res: res
                })
            });
        }).catch(console.error);
    }
    getCredentials(){
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
    componentDidMount() {
        if (window.isSecureContext) {
            console.log('Secure context: on')
            //this.createCredentials()
        } else {
            console.log('Secure context: OFF')
        }
    }
    render() {
        return (
            <div className="layout">
                <Head>
                    <title>Demo application</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="manifest.json"/>

                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name="application-name" content="GazChat"/>
                    <meta name="apple-mobile-web-app-title" content="GazChat"/>
                    <meta name="msapplication-starturl" content="/"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                </Head>
                <Navigation/>
                <Sidebar representChat={this.representChat}/>
                <ChatTimeline/>
            </div>
        )
    }
}
