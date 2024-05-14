export function safeValue<T>(value: T | null): T | undefined;
export function safeValue<T>(value: T | null, defaultValue: T): T;
export function safeValue<T>(value: T | null, defaultValue?: T): T | undefined {
  return value !== null ? value : defaultValue;
}
