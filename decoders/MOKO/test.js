const decoder = require("./lw001bgpro");

payload = 'ARzgAAfmBxIAJQL8FaSXM968QsSwlXUTSIbANFPSJOBuvw=='
port = 2

console.log(
    decoder.Decoder(
        payload, 
        port)
)
