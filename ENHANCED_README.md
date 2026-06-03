# base-defi-perpetuals-example

On-chain perpetuals trading primitive example built for Base.

## Overview
Educational starter showing how to implement basic perpetual futures logic on Base (or any EVM L2). Includes position management and simplified PnL calculation.

## Tech Stack
- Solidity ^0.8.20
- Hardhat / Foundry
- viem for frontend interaction

## Getting Started
```bash
git clone https://github.com/Proxtox/base-defi-perpetuals-example.git
cd base-defi-perpetuals-example
npm install
```

## Key Contract
`contracts/PerpetualsExample.sol` - Core logic for opening/closing positions

## Next Steps
- Add proper margin & liquidation logic
- Integrate price oracles (Pyth / Chainlink)
- Build a trading UI
- Add leverage support

## License
MIT