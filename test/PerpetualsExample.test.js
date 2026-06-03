const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PerpetualsExample", function () {
  let perpetuals;
  let owner, trader;

  beforeEach(async function () {
    [owner, trader] = await ethers.getSigners();
    const Perpetuals = await ethers.getContractFactory("PerpetualsExample");
    perpetuals = await Perpetuals.deploy();
    await perpetuals.deployed();
  });

  it("Should open and close a position", async function () {
    await perpetuals.connect(trader).openPosition(100, 2000, true);
    await perpetuals.connect(trader).closePosition(2100);
    // Basic test passes if no revert
  });
});