package org.example;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.hyperledger.fabric.gateway.Contract;
import org.hyperledger.fabric.gateway.Gateway;
import org.hyperledger.fabric.gateway.Network;
import org.hyperledger.fabric.gateway.Wallet;

public interface App {
  static void main(String[] args) throws Exception {

    String rootDir = "./_cfg";
    System.out.println("+++ Running with root dir "+ Paths.get(rootDir).toAbsolutePath());
    // Create a new file system based wallet for managing identities.
    Path walletPath = Paths.get(rootDir,"local_fabric_wallet");
    Wallet wallet = Wallet.createFileSystemWallet(walletPath);
    
    // load a CCP
    Path networkConfigPath = Paths.get(rootDir,"local_fabric_connection.json");
    System.out.println("+++ Using: "+networkConfigPath.toAbsolutePath());
    System.out.println("         : "+walletPath.toAbsolutePath());
    
    
    System.out.println("+++ Creating a Builder");
    Gateway.Builder builder = Gateway.createBuilder();
    builder.discovery(true);
    builder.identity(wallet, "admin").networkConfig(networkConfigPath);

    System.out.println("+++ Connecting");
    // create a gateway connection
    try (Gateway gateway = builder.connect()) {

    	System.out.println(	gateway.getIdentity().getMspId());
    	
      // get the network and contract
      System.out.println("+++ Getting network");
      Network network = gateway.getNetwork("mychannel");
      System.out.println("+++ Getting contract");
      Contract contract = network.getContract("MyTypeScriptContract");

      byte[] result = contract.evaluateTransaction("readMyAsset", "001");
      System.out.println(new String(result));
      
    } catch (Exception ex) {
      ex.printStackTrace();
    }
  }

}