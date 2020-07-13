const fakeWallet = [
  {
    id: 1,
    profile: { name: 'Pablo' },
    assets: { BTC: 0.1005, ETH: 2.2349, DASH: 0.2527, BAT: 82.4851, USDC: 14.5099 },
  },
  {
    id: 2,
    profile: { name: 'Diego' },
    assets: { BTC: 0.2205, ETH: 0.2349, DASH: 1.2527, BAT: 2.4851, USDC: 14.5099 },
  },
];

export type wallet = {
  id: number;
  profile: {
    name: string;
  };
  assets: {
    [key: string]: number;
  };
};
export default fakeWallet;
