[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
```
     OOOOOOOOO     RRRRRRRRRRRRRRRRR   MMMMMMMM               MMMMMMMMIIIIIIIIII
   OO:::::::::OO   R::::::::::::::::R  M:::::::M             M:::::::MI::::::::I
 OO:::::::::::::OO R::::::RRRRRR:::::R M::::::::M           M::::::::MI::::::::I
O:::::::OOO:::::::ORR:::::R     R:::::RM:::::::::M         M:::::::::MII::::::II
O::::::O   O::::::O  R::::R     R:::::RM::::::::::M       M::::::::::M  I::::I
O:::::O     O:::::O  R::::R     R:::::RM:::::::::::M     M:::::::::::M  I::::I
O:::::O     O:::::O  R::::RRRRRR:::::R M:::::::M::::M   M::::M:::::::M  I::::I
O:::::O     O:::::O  R:::::::::::::RR  M::::::M M::::M M::::M M::::::M  I::::I
O:::::O     O:::::O  R::::RRRRRR:::::R M::::::M  M::::M::::M  M::::::M  I::::I
O:::::O     O:::::O  R::::R     R:::::RM::::::M   M:::::::M   M::::::M  I::::I
O:::::O     O:::::O  R::::R     R:::::RM::::::M    M:::::M    M::::::M  I::::I
O::::::O   O::::::O  R::::R     R:::::RM::::::M     MMMMM     M::::::M  I::::I
O:::::::OOO:::::::ORR:::::R     R:::::RM::::::M               M::::::MII::::::II
 OO:::::::::::::OO R::::::R     R:::::RM::::::M               M::::::MI::::::::I
   OO:::::::::OO   R::::::R     R:::::RM::::::M               M::::::MI::::::::I
     OOOOOOOOO     RRRRRRRR     RRRRRRRMMMMMMMM               MMMMMMMMIIIIIIIIII

```
# Ormi Reputation Oracle Supergraph
The supergraph that combines multiple subgraphs to aggregate identity and reputation data related to an identifier. This server is built on top of GraphQL and Apollo and is the one stop destination for fetching data assoicated with a user's identifier such as a wallet address. Via GraphQL, anyone can query verifiable information associated with an address such as ERC20 assets in the wallet, NFT/POAP collections, Lens Protocol, DIDs and Verifiable credentials.


## Setup

Create an enviroment file named `.env` based on the .env.example file and fill out the stubbed enviroment variables.

```
$ cp .env.example > .env
```

Install associated packages via yarn
```
$ yarn
```

[Optional] Build Ormi's supergraph
```
$ yarn build-graph
```

Start the GraphQL server
```
$ yarn dev
```

Follow the command line output, go to the localhost server to access GraphQL playground to begin query.

## Supported queries
- Account activities
- ERC20 & LP positions
- Lens Protocol
- CyberConnect Social Graph

## Sample Query commands
```
query {
  accountActivities(address: "0x5680589efd50d8170e11b7ac26839dc24fc28975", chain: "eth") {
    transactionsPerMonth
    monthsSinceFirstTransaction
    activeBuyerSeller
    existedLongEnough
    userIsActive
  },
  
  erc20Balances(address: "0x5680589efd50d8170e11b7ac26839dc24fc28975", chain: "eth") {
      symbol
      name
      balance
      price
      value
      token_address
      logo
  }

  gitcoinPassport (address: $address) {
    issuanceDate
    expiryDate
    stamps {
      provider
      credential {
        type
        credentialSubject {
          id
          hash
          address
          provider
          challenge
        }
        proof {
          jws
          type
          created
          proofPurpose
          verificationMethod
        }
      }
    }
  }
}
```