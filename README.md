# Hackathon Starter

This repo contains a number of starter applications and smart contracts to help you get started quickly.

## Step 0: Have a development environment

You'll need a development environment; Ubuntu or CentOS are good choices; especially if you can run them in VMs.

- One option is to use vagrant to setup your own VM - [use this example](https://github.com/hyperledgendary/fabric-devenv) from [@jtonline](https://twitter.com/jtonline)
- If you have a CentOS or Ubuntu system - here some scripts that show the fastest way to get setup
  - [Ubuntu](https://gist.github.com/mbwhite/9d0ff3c3f35e8bc9a33d32bd6899f11b)
  - [CentOS](https://gist.github.com/mbwhite/0cc46aba41569551a214827f89895eeb)

## Step 1: Install VSCode

Get the following extensions depending on your preference of langauge

- [Java Language support](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [Java Debugger](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

And the essential
- [Blockchain Extension](https://marketplace.visualstudio.com/items?itemName=IBMBlockchain.ibm-blockchain-platform)

  `code --install-extension ibmblockchain.ibm-blockchain-platform`

## Step 2: Clone this repo

Clone this repo using git

```
cd a/suitable/directory/for/coding
git clone https://github.com/hyperledgendary/hackathon-starter.git
```

Open VSCode, within that open the workspace that is within the `hackathon-starter` directory.

## Step 3: Plan your project

Do you have a domain in mind? Supply chain for example, or financial asset transfer? 
It is important to have a domain and scenario in mind, most scenarions are asset based in some way hence the starter applications are based around assets. 

Within the solution, there will be contracts and applications.  There are basic examples of both of these within this repo and in different langauges. The basic examples are designed to work with each other.

## Step 4: Tutorials

Here are some suggested tutorials to start to understand what you can do. 

- Within the IBM Blockchain Platform Extension there are some starter tutorials; worth doing these as they show you how the extension can help you develop.
- It is worth reviewing this longer tutorial https://hyperledger-fabric.readthedocs.io/en/latest/developapps/developing_applications.html


## Practical Notes and Queries

The VSCode extension will ONLY see Contract packages at the root of the workspace. Therefore if you wish to use one of the examples, add the folder directory to the top of the root of the workspace. (right click in the workspace and select 'Add Folder to Workspace...' and then navigate to the contract to use).

When running a client application example, export the Connection Profile and Local wallet to a directory local to the application. For example a `_cfg` directory within the application. Load the Connection Profile and wallet from there into the application.

It is recommended to use the VSCode extensions to start a running Fabric Infrastructure and to use that to install the contracts.

In the applications there is a `_cfg` directory, the examples are setup to assume that you've exported the connection profile and wallet from VSCode to that directory.

## API References

- [Contract JavaDoc API Reference](https://fabric-chaincode-java.github.io/)
- [Contract Node.js API Reference](https://fabric-shim.github.io/release-1.4/index.html)
- [Client application JavaDoc API Reference](https://fabric-gateway-java.github.io/)
- [Client application Node.js API Reference](https://fabric-sdk-node.github.io/release-1.4/index.html)

