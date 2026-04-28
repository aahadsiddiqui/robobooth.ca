import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  // Third-party form integration has been removed.
  return res.status(410).json({
    ok: false,
    error: 'Contact form integration is currently disabled. Please contact us by phone or email.',
  })
}
