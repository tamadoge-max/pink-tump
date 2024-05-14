export const parseIpfsUrl = (url: string) => {
  const cid = url.split("ipfs://")[1];
  return `https://amethyst-historic-lobster-163.mypinata.cloud/ipfs/${cid}`;
};
