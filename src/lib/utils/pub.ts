import { PublicKey } from "@solana/web3.js";

export function toPubString(pub: PublicKey | string | undefined) {
  if (pub === undefined) return "";
  if (pub instanceof PublicKey) return pub.toBase58();
  return pub;
}

export function isPubEqual(
  p1: PublicKey | undefined,
  p2: PublicKey | undefined
) {
  if (p1 == undefined || p2 == undefined) return false;
  if (p1 instanceof PublicKey && p2 instanceof PublicKey) return p1.equals(p2);
  return toPubString(p1) === toPubString(p2);
}
