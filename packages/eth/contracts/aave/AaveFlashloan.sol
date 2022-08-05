// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

import "./IPool.sol";
import "./FlashLoanSimpleReceiverBase.sol";

import "hardhat/console.sol";

contract AaveFlashloan is FlashLoanSimpleReceiverBase {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    address private constant QUICKSWAP_ROUTER_ADDRESS =
        0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff;
    address private constant USDC_MUM_POLY_ADDRESS =
        0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;
    address private constant WETH_MUM_POLY_ADDRESS =
        0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619;
    address private constant AAVE_LENDING_POOL =
        0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf;
    IUniswapV2Router02 private quickSwapRouter =
        IUniswapV2Router02(QUICKSWAP_ROUTER_ADDRESS);

    constructor(IPoolAddressesProvider provider)
        FlashLoanSimpleReceiverBase(provider)
    {}

    function aaveFlashloan(address loanToken, uint256 loanAmount) external {
        IPool(address(POOL)).flashLoanSimple(
            address(this),
            loanToken,
            loanAmount,
            "0x",
            0
        );
    }

    //stack exchange
    // function swapExactTokensForTokensProxy(address asset) public payable {
    //     require(
    //         IERC20(asset).balanceOf(address(this)) > 0,
    //         "Cannot handle 0 ETH"
    //     );

    //     ERC20(quickSwapRouter.WETH()).increaseAllowance(
    //         QUICKSWAP_ROUTER_ADDRESS,
    //         IERC20(asset).balanceOf(address(this))
    //     );

    //     address[] memory path = new address[](2);
    //     path[0] = quickSwapRouter.WETH();
    //     path[1] = USDC_MUM_POLY_ADDRESS;

    //     uint256 amountOutMin = 0;
    //     uint256 deadline = block.timestamp + 15;
    //     uint256 amountIn = IERC20(asset).balanceOf(address(this));
    //     address to = payable(address(this));

    //     swapExact(amountIn, amountOutMin, path, to, deadline);
    // }

    //stack exchange
    function swapExact(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] memory path,
        address to,
        uint256 deadline
    ) internal {
        quickSwapRouter.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            to,
            deadline
        );
    }

    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium, // .09%
        address, // initiator
        bytes memory
    ) public override returns (bool) {
        require(
            amount <= IERC20(asset).balanceOf(address(this)),
            "Invalid balance for the contract"
        );
        console.log("borrowed amount:", amount);

        deposit(asset, 1);

        console.log(
            "balance after deposit",
            IERC20(asset).balanceOf(address(this))
        );

        withdraw(asset, 1);
        // swapExactTokensForTokensProxy(asset);
        console.log(
            "balance after withdraw ",
            IERC20(asset).balanceOf(address(this))
        );

        // pay back the loan amount and the premium (flashloan fee)
        uint256 amountToReturn = amount.add(premium);
        require(
            IERC20(asset).balanceOf(address(this)) >= amountToReturn,
            "Not enough amount to return loan"
        );
        console.log("flashloan fee: ", premium);

        approveToken(asset, address(POOL), amountToReturn);

        return true;
    }

    function deposit(address asset, uint256 amount) public {
        uint16 referral = 0;

        IPool(AAVE_LENDING_POOL).deposit(asset, amount, msg.sender, referral);
    }

    function withdraw(address asset, uint256 amount) public {
        IPool(AAVE_LENDING_POOL).withdraw(asset, amount, address(this));
    }

    function approveToken(
        address token,
        address to,
        uint256 amountIn
    ) internal {
        require(IERC20(token).approve(to, amountIn), "approve failed");
    }
}
