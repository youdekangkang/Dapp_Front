Technologies to be used: solidity, truffle, JavaScript, web3.js, Java, Springboot, Node.js, Vue.js

A digital asset trading project built on truffle. This project is mainly based on Ethereum to develop an auction system DApp. The default detection of Metamask wallet plug-in, if available, use MetaMask for interaction, if not, connect to the local 8545 port.

#### Front-end startup

All operations in this section are implemented in the frontend folder

```
cd frontend
```

1. First, make sure that **truffle, webpack, ganache-cli** have been installed on the computer

```shell
npm install -g truffle@5.7.4 webpack@5.75.0 ganache-cli@6.12.2
```

2. Then open the front-end folder and install the corresponding package

```shell
cd app
npm install
```

3. You also need to install IPFS, [download link](https://dist.ipfs.tech/#kubo), the recommended version is kubo_v0.18.1 (ipfs is already included in the project folder, if it cannot be used, please reinstall)

```
cd kubo
init ipfs
```

Double-click **ipfs.exe** to start the IPFS network, open the IPFS UI front-end (usually http://localhost:5001/webui), modify the gateway and other configuration files and save them, then restart IPFS

![f5a89e7dd9c9070f9e3589d99dd3fdc](README\f5a89e7dd9c9070f9e3589d99dd3fdc.webp)

![f2d95a188a141bf29f04824e5a27b60](README\f2d95a188a141bf29f04824e5a27b60.webp)

```shell
{
"API": {
"HTTPHeaders": {
"Access-Control-Allow-Credentials": ["true"],
"Access-Control-Allow-Headers": ["Authorization"],
"Access-Control-Allow-Methods": ["GET","POST"],
"Access-Control-Allow-Origin": ["*"],
"Access-Control-Expose-Headers": ["Location"]
}
},
"Addresses": {
...
"Gateway": "/ip4/127.0.0.1/tcp/9001",
...
}
...
}
```

Then start ganache and record the private key for linking the metamask wallet:

```cmd
ganache-cli
```
![4793bcbdc9412a149f62c3b170dbc0d](README\4793bcbdc9412a149f62c3b170dbc0d.webp)

5. After starting ganache-cli and IPFS, use truffle to deploy the contract in the front-end folder directory

```shell
cd app
truffle migrations
```

After waiting for the contract deployment to be completed, there are four json files in the build/contracts folder, which means the deployment is complete

6. Then start the vue front-end in the project app directory to start the front-end page

```shell
cd frontend
npm run serve
```

#### Back-end startup

The backend of this project adopts the architecture of Spingboot+MybatisPlus+Mysql.

1. Import the project back-end program through idea and wait for the dependency configuration to load.

![cdbe6f9b30b5370da2de19bdd2afe2b](README\cdbe6f9b30b5370da2de19bdd2afe2b.png)

2. Create new data on your own database management software (we used Navicat) and run the chickEtherealStore.sql file

![4a797a59b055d1fb0f64f7f32916459](README\4a797a59b055d1fb0f64f7f32916459.png)

3. The database user name, password, and database library name are configured in the application.yml file of the back-end project.

![c477cf059b759062b9054e77047e740](README\c477cf059b759062b9054e77047e740.png)

4. Click the start button, run BlockchainAuctionSystemApplication start the program

![fd98614e1a5832db88a16e12e07c89a](README\fd98614e1a5832db88a16e12e07c89a.png)