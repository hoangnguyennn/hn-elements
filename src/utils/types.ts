export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null
}

export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}
