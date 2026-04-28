#!/usr/bin/env node
/**
 * Removes .next so `next dev` never serves a stale or half-deleted build cache.
 * Run automatically before `npm run dev` via the `predev` hook.
 */
const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '..', '.next')
try {
  fs.rmSync(dir, { recursive: true, force: true })
} catch (err) {
  if (err && err.code !== 'ENOENT') {
    console.error('[clean-next]', err.message)
    process.exit(1)
  }
}
