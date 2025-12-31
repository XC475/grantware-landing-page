"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { HeaderPill } from "@/components/header-pill"
import { FooterSection } from "@/components/footer-section"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { BLOG_POSTS, type BlogPost } from "./data"

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="flex flex-col gap-4 h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden">
          {/* Image */}
          <AspectRatio ratio={4 / 3} className="overflow-hidden bg-gray-50">
            <Image
              src={post.image}
              alt={`${post.title} thumbnail`}
              fill
              className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${
                post.image.includes("redhat") ? "object-contain p-8" : "object-cover"
              }`}
            />
          </AspectRatio>

          {/* Content */}
          <div className="flex flex-col gap-3 p-5 pt-0 flex-1">
            {/* Meta */}
            <div className="flex items-center gap-2 text-left">
              <span className="text-gray-500 text-sm">{post.date}</span>
              <span className="text-gray-400 text-sm">·</span>
              <span className="text-[#5b8cff] text-sm font-medium">{post.category}</span>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-[#5b8cff] transition-colors">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {post.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function BlogPage() {
  return (
    <main className="min-h-screen relative bg-white">
      {/* Header */}
      <HeaderPill />

      {/* Blog Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-3.5 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200"
          >
            <span className="text-gray-700 text-xs font-medium">Resources</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-gray-900"
          >
            GrantWare Blog
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Insights, tips, and best practices to help you discover funding opportunities and write winning grant applications.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  )
}
