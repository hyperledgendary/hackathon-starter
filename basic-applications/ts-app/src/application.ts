/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Bring key classes into scope, most importantly Fabric SDK network class
import { FileSystemWallet, Gateway } from 'fabric-network';
import * as fs from 'fs';
import * as path from 'path';
import { hasLocalhostURLs } from './util';

const root = path.resolve(__dirname, '../_cfg');

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet(path.join(root, 'local_fabric_wallet'));
const gatewayConnectionProfileFile = path.join(root, 'local_fabric_connection.json');

async function main() {

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

        // define the identity to use
        const identityLabel = 'admin';

        // Load connection profile; will be used to locate a gateway
        const gatewayprofile = JSON.parse(fs.readFileSync(gatewayConnectionProfileFile, 'utf8'));

        // Set connection options; use 'admin' identity from application wallet
        const connectionOptions = {
            discovery: {
                asLocalhost: hasLocalhostURLs(gatewayprofile),
                enabled: true,
            },
            identity:identityLabel,
            wallet,
        };

        // Connect to gateway using application specified parameters
        await gateway.connect(gatewayprofile, connectionOptions);

        console.log('Connected to Fabric gateway.');

        // Get addressability to PaperNet network
        const network = await gateway.getNetwork('mychannel');

        // Get addressability to commercial paper contract
        const contract = await network.getContract('MyTypeScriptContract');

        // read the asset that under id 001 (if it's there...)
        let response = await contract.evaluateTransaction('readMyAsset', '001');
        console.log(`readMyAsset: ${response.toString('utf8')}`);

        response = await contract.submitTransaction('updateMyAsset','001','A valuable asset');
        console.log(`updateMyAsset: ${response.toString('utf8')}`);

        response = await contract.evaluateTransaction('readMyAsset', '001');
        console.log(`readMyAsset: ${response.toString('utf8')}`);

    } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
    } finally {
        // Disconnect from the gateway
        console.log('\nDisconnect from Fabric gateway.');
        gateway.disconnect();
    }
}

// invoke the main function, can catch any error that might escape
main().then(() => {
    console.log('\n...done');
}).catch((e) => {
    process.exit(-1);
});
