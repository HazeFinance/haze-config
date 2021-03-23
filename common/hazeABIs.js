const ERC20 = require('./ABIs/ERC20.abi.json');
const SwapPair = require('./ABIs/SwapPair.abi.json');
const SwapRouter = require('./ABIs/SwapRouter.abi.json');
const HAZE = require('./ABIs/HAZE.abi.json');
const SHAZE = require('./ABIs/SHAZE.abi.json');
const Hazer = require('./ABIs/Hazer.abi.json');
const DepositReward = require('./ABIs/DepositRewardV2.abi.json');
const LiquidityMiningReward = require('./ABIs/LiquidityMiningReward.abi.json');
const TokenDistributor = require('./ABIs/TokenDistributor.abi.json');


const HAZE_COMMON_ABIS = { ERC20, SwapPair, SwapRouter, HAZE, SHAZE, Hazer, DepositReward, LiquidityMiningReward, TokenDistributor };


module.exports = HAZE_COMMON_ABIS;
