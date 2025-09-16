export default function assetPath(p) {
  // NEXT_PUBLIC_BASE_PATH is set by next.config via basePath at build time
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  // ensure leading slash for p
  if (!p) return base || p
  if (p.startsWith('/')) return `${base}${p}`
  return `${base}/${p}`
}
