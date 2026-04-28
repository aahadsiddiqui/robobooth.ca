import type { ReactNode } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiShield } from 'react-icons/fi'
import Navbar from '../components/Navbar'

const SITE = 'https://roboboothusa.com'

function formatPrivacyDate(d: Date) {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PrivacyPolicy() {
  const lastUpdated = new Date()

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Head>
        <title>Privacy Policy | Robo Booth</title>
        <meta
          name="description"
          content="Robo Booth privacy policy: how we collect, use, and protect personal information for our photo booth and event services."
        />
        <meta property="og:title" content="Privacy Policy | Robo Booth" />
        <meta
          property="og:description"
          content="How Robo Booth handles personal data across our websites, bookings, and event activations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/privacy-policy`} />
        <link rel="canonical" href={`${SITE}/privacy-policy`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <article className="pt-24 md:pt-28 pb-16 md:pb-24">
        <header className="relative border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_rgba(252,228,166,0.08)_0%,_transparent_55%)]">
          <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-2 text-[#fce4a6]/80 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              <FiShield className="w-4 h-4 text-[#fce4a6]" aria-hidden />
              Legal
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4"
            >
              Privacy{' '}
              <span className="text-[#fce4a6]">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-white/55 text-sm md:text-base"
            >
              Last updated:{' '}
              <time dateTime={lastUpdated.toISOString()}>{formatPrivacyDate(lastUpdated)}</time>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-6 text-white/75 text-sm md:text-base leading-relaxed"
            >
              Robo Booth (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) explains how we collect, use, store, and protect personal
              information when you use{' '}
              <a href={SITE} className="text-[#fce4a6] underline decoration-[#fce4a6]/40 underline-offset-2 hover:decoration-[#fce4a6]">
                roboboothusa.com
              </a>
              , book our services, or interact with our team at events across the USA.
            </motion.p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12 md:py-14 space-y-12 md:space-y-14">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={1}>Information we collect</SectionTitle>
            <Body>
              Depending on how you interact with us, we may collect:
            </Body>
            <BulletList items={[
              'Identity & contact details you submit via forms or email (for example name, phone, email, company, event location and date)',
              'Preferences and correspondence related to quotes, bookings, logistics, or support',
              'Photos, videos, and related media captured when you hire our booths or robots for an event — including optional branded overlays',
              'Payment-related information handled by processors (we typically do not store full card numbers on our servers)',
              'Technical data from visits to our site (IP region, browser type, device, pages viewed, referrer) and optional cookies/pixels described below',
            ]} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={2}>How we use information</SectionTitle>
            <Body>We process personal information to:</Body>
            <BulletList items={[
              'Deliver contracted services (equipment, staffing, timelines, onsite operations)',
              'Communicate with you before and after events, including confirmations and follow-ups',
              'Deliver shareable outputs (for example branded photos to guests\' phones where your package includes that)',
              'Operate and improve our website, quoting tools, analytics, fraud prevention, and security',
              'Meet legal or safety obligations where applicable',
            ]} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={3}>Sharing with third parties</SectionTitle>
            <Body>
              We do not sell your personal information. We may disclose information where needed to vendors who help run our business —
              hosting, CRM, calendars, invoicing/payments, messaging, analytics/ad platforms, and similar tools — under strict instructions
              to use data only for those services. We may also disclose information if required by law, to protect rights and safety, or in
              connection with a merger or asset sale (with notice where required).
            </Body>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={4}>Retention</SectionTitle>
            <Body>
              We keep information only as long as needed for the purposes above, including legal, accounting, and dispute resolution
              requirements. Event media may be retained per your package, contract, or written instructions; ask us for deletion options
              where available.
            </Body>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={5}>Your choices & rights</SectionTitle>
            <Body>Depending on where you live, you may have rights to:</Body>
            <BulletList items={[
              'Access a copy of personal information we hold about you',
              'Request correction of inaccurate information',
              'Request deletion where applicable (some legal exceptions may apply)',
              'Opt out of certain marketing communications',
            ]} />
            <Body className="mt-4">
              To exercise these rights, reach us via the{' '}
              <a
                href="/contact"
                className="text-[#fce4a6] underline decoration-[#fce4a6]/30 underline-offset-2 hover:decoration-[#fce4a6]"
              >
                Contact
              </a>{' '}
              page or the information in the site footer. We may need to verify your request.
            </Body>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={6}>Security</SectionTitle>
            <Body>
              We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No online
              transmission or storage is completely secure; we encourage strong passwords and caution when sharing links to galleries or
              downloads.
            </Body>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={7}>Cookies, analytics & advertising</SectionTitle>
            <Body>
              We may use cookies, pixels, and similar technologies to remember preferences, measure traffic, and support advertising
              performance (for example Meta or other platforms if enabled on your visit). You can control cookies through your browser
              settings. Some features may not work if you disable certain cookies.
            </Body>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={8}>Children</SectionTitle>
            <Body>
              Our services are not directed to children under 13, and we do not knowingly collect personal information from children under
              13 without appropriate consent. If you believe we have collected such information, contact us and we will take appropriate
              steps.
            </Body>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-28"
          >
            <SectionTitle n={9}>Changes to this policy</SectionTitle>
            <Body>
              We may update this policy from time to time. We will post the revised version on this page and adjust the &quot;Last
              updated&quot; date. Material changes may be communicated by email or a notice on our site where appropriate.
            </Body>
          </motion.section>
        </div>
      </article>
    </div>
  )
}

function SectionTitle({ n, children }: { n: number; children: ReactNode }) {
  return (
    <h2 className="text-lg md:text-xl font-black text-white mb-4 flex items-baseline gap-3">
      <span className="text-[#fce4a6]/90 tabular-nums text-sm font-bold w-7 flex-shrink-0">{n}.</span>
      <span>{children}</span>
    </h2>
  )
}

function Body({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-white/70 text-sm md:text-base leading-relaxed ${className}`}>{children}</p>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 pl-1">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-white/70 text-sm md:text-base leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#fce4a6]/80" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
