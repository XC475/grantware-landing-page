"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Mail } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full flex flex-col justify-center items-center bg-transparent py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 space-y-6 sm:space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          {/* Pricing Badge */}
          <div className="flex justify-center">
            <div className="px-3.5 py-1.5 backdrop-blur-md shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-full flex justify-start items-center gap-2 border bg-gray-100 border-gray-200">
              <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                  />
                </svg>
              </div>
              <div className="text-center flex justify-center flex-col text-xs font-medium leading-3 text-gray-700">
                Plans & Pricing
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-serif tracking-tight text-gray-900">
            Less than a missed funding opportunity
          </h2>

          {/* Description */}
          <p className="text-base font-normal leading-7 text-gray-600 max-w-2xl mx-auto">
            Start free or unlock the full power of GrantWare AI with Pro. Join early to help shape the platform.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 sm:gap-6">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex-1 px-4 sm:px-6 py-6 sm:py-8 rounded-2xl overflow-hidden flex flex-col justify-start items-start bg-white shadow-xl transition-all border border-gray-900 hover:shadow-2xl"
          >
            {/* Plan Header */}
            <div className="self-stretch flex flex-col justify-start items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-gray-900 text-lg font-medium leading-7">
                  Free
                </div>
                <div className="text-gray-500 text-sm font-normal leading-5">
                  Perfect for getting started with grant writing.
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="text-gray-900 text-4xl sm:text-5xl font-medium leading-[48px] sm:leading-[60px] font-serif">
                  $0
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  Forever free
                </div>
              </div>

              <Link href="https://grantware-ai.vercel.app/signup?step=1" className="w-full" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-gray-300 text-gray-900 hover:bg-gray-100 h-10 sm:h-11"
                >
                  Start for free
                </Button>
              </Link>
            </div>

            {/* Features - Organized by Category */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              {/* AI */}
              <div className="space-y-1.5">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">AI</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]"><strong>Standard AI Models</strong></span>
                </div>
              </div>

              {/* Usage Limits */}
              <div className="space-y-1.5">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Usage limits</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]"><strong>25</strong> AI chat messages / month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]"><strong>15</strong> Editor AI messages / month</span>
                </div>
              </div>

              {/* Knowledge Base */}
              <div className="space-y-1.5">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Knowledge base</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]"><strong>5</strong> documents</span>
                </div>
              </div>

              {/* Applications */}
              <div className="space-y-1.5">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Applications</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]"><strong>3</strong> active applications</span>
                </div>
              </div>

              {/* Integrations */}
              <div className="space-y-1.5">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Integrations</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]">Google Drive</span>
                </div>
              </div>

              {/* Not Included */}
              <div className="space-y-1.5">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide">Not included</div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-300 shrink-0" />
                  <span className="text-gray-400 text-[13px]">Opportunities access</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-300 shrink-0" />
                  <span className="text-gray-400 text-[13px]">Team collaboration</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pro Plan (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 px-4 sm:px-6 py-6 sm:py-8 bg-gray-900 rounded-2xl overflow-hidden flex flex-col justify-start items-start shadow-xl ring-2 ring-white/20 transition-all hover:shadow-2xl"
          >
            {/* Plan Header */}
            <div className="self-stretch flex flex-col justify-start items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex items-center gap-2">
                  <div className="text-white text-lg font-medium leading-7">
                    Pro
                  </div>
                  <Badge className="bg-[#5b8cff] text-white text-xs px-2 py-0.5 border-0">
                    Popular
                  </Badge>
                </div>
                <div className="text-white/70 text-sm font-normal leading-5">
                  Everything you need to win grants.
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="text-white text-4xl sm:text-5xl font-medium leading-[48px] sm:leading-[60px] font-serif">
                  $99.99
                </div>
                <div className="text-white/70 text-sm font-medium">
                  per month
                </div>
                <div className="text-[#5b8cff] text-xs font-medium">
                  14-day free trial included
                </div>
              </div>

              <Link href="https://grantware-ai.vercel.app/signup?step=1" className="w-full" target="_blank" rel="noopener noreferrer">
                <ShimmerButton className="w-full rounded-xl h-10 sm:h-11">
                  Get started
                </ShimmerButton>
              </Link>
            </div>

            {/* Features - Organized by Category */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              {/* AI */}
              <div className="space-y-1.5">
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wide">AI</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]"><strong>Advanced AI Models</strong></span>
                </div>
              </div>

              {/* Usage Limits */}
              <div className="space-y-1.5">
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wide">Usage limits</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]"><strong>50M tokens</strong> / month</span>
                </div>
              </div>

              {/* Knowledge Base */}
              <div className="space-y-1.5">
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wide">Knowledge base</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]">Unlimited</span>
                </div>
              </div>

              {/* Applications */}
              <div className="space-y-1.5">
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wide">Applications</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]">Unlimited</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]">Full Opportunities access</span>
                </div>
              </div>

              {/* Collaboration & Storage */}
              <div className="space-y-1.5">
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wide">Collaboration & storage</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]"><strong>1 seat</strong> included</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]"><strong>5 GB</strong> storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]"><strong>+$19.99/mo</strong> per additional user</span>
                </div>
              </div>

              {/* Integrations */}
              <div className="space-y-1.5">
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wide">Integrations</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white/70 shrink-0" />
                  <span className="text-white text-[13px]">Google Drive</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 px-4 sm:px-6 py-6 sm:py-8 bg-white rounded-2xl overflow-hidden flex flex-col justify-start items-start shadow-xl border border-gray-900"
          >
            {/* Plan Header */}
            <div className="self-stretch flex flex-col justify-start items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-gray-900 text-lg font-medium leading-7">
                  Enterprise
                </div>
                <div className="text-gray-500 text-sm font-normal leading-5">
                  Custom solutions for large organizations.
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="text-gray-900 text-4xl sm:text-5xl font-medium leading-[48px] sm:leading-[60px] font-serif">
                  Custom
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  Let&apos;s talk
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full rounded-xl border-gray-300 text-gray-900 hover:bg-gray-100 h-10 sm:h-11"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(
                    "mailto:ryan@grantware.ai?subject=Enterprise%20Plan%20Inquiry",
                    "_blank"
                  );
                }}
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact sales
              </Button>
            </div>

            {/* Features - Organized by Category */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              {/* AI */}
              <div className="space-y-1.5">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">AI</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]"><strong>Advanced AI Models</strong></span>
                </div>
              </div>

              {/* Usage Limits */}
              <div className="space-y-1.5">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Usage limits</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]">Custom token limits</span>
                </div>
              </div>

              {/* Everything in Pro, plus */}
              <div className="space-y-1.5">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Everything in Pro, plus</div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]">Dedicated support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]">Custom integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]">SSO integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-700 text-[13px]">White-label options</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
