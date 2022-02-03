export default function dedupe<T>(list: T[]) {
  return [...new Set(list)]
}
