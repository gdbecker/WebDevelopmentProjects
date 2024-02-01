import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x8CDb504360199aB2A75b8229750e60A7441342f9",
);

export default instance;
