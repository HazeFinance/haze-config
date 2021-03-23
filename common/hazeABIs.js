const ERC20 = require('../../contracts/ERC20.abi.json');
const SwapPair = require('../../contracts/SwapPair.abi.json');
const SwapRouter = require('../../contracts/SwapRouter.abi.json');
const HAZE = require('../../contracts/HAZE.abi.json');
const SHAZE = require('../../contracts/SHAZE.abi.json');
const Hazer = require('../../contracts/Hazer.abi.json');
const DepositReward = require('../../contracts/DepositRewardV2.abi.json');
const LiquidityMiningReward = require('../../contracts/LiquidityMiningReward.abi.json');
const TokenDistributor = require('../../contracts/TokenDistributor.abi.json');


const HAZE_COMMON_ABIS = { ERC20, SwapPair, SwapRouter, HAZE, SHAZE, Hazer, DepositReward, LiquidityMiningReward, TokenDistributor };


module.exports = HAZE_COMMON_ABIS;
