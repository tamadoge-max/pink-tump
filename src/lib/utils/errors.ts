export default function assert(
  condition: any,
  msg?: string
): asserts condition {
  if (!condition || condition === undefined || condition === null) {
    throw new Error(msg);
  }
}
