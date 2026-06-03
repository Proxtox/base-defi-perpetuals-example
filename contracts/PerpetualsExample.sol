// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title PerpetualsExample
/// @notice Simplified on-chain perpetuals primitive for Base (educational)
contract PerpetualsExample {
    struct Position {
        uint256 size;
        uint256 entryPrice;
        bool isLong;
    }

    mapping(address => Position) public positions;

    event PositionOpened(address indexed trader, uint256 size, uint256 entryPrice, bool isLong);
    event PositionClosed(address indexed trader, uint256 pnl);

    function openPosition(uint256 size, uint256 entryPrice, bool isLong) external {
        positions[msg.sender] = Position(size, entryPrice, isLong);
        emit PositionOpened(msg.sender, size, entryPrice, isLong);
    }

    function closePosition(uint256 exitPrice) external {
        Position memory pos = positions[msg.sender];
        require(pos.size > 0, "No open position");
        // Simplified PnL calculation
        int256 pnl = pos.isLong 
            ? int256(exitPrice) - int256(pos.entryPrice) 
            : int256(pos.entryPrice) - int256(exitPrice);
        delete positions[msg.sender];
        emit PositionClosed(msg.sender, uint256(pnl));
    }
}