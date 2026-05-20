"use client";

import { useRef, useEffect, useState } from "react";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const whatsappChats = [
  {
    avatar: "AO",
    avatarBg: "bg-emerald-600",
    name: "Adaeze O.",
    time: "10:42 AM",
    messages: [
      { from: "them", text: "Please are you guys available this Saturday? My sis just moved in and the place is a mess 😩" },
      { from: "us",   text: "Yes we are! We have a slot at 9am or 12pm. Which works for you?" },
      { from: "them", text: "9am please! And can you bring the eco products? I have a toddler" },
      { from: "us",   text: "Absolutely — all our products are child-safe. See you Saturday! 🙌" },
      { from: "them", text: "You guys are AMAZING. The flat looks brand new. Booking again next month for sure 🏠✨" },
    ],
  },
  {
    avatar: "TK",
    avatarBg: "bg-teal-600",
    name: "Tunde K.",
    time: "Yesterday",
    messages: [
      { from: "them", text: "Hi, do you clean offices too or just homes?" },
      { from: "us",   text: "We do both! Office deep-cleans, post-event cleanups, you name it." },
      { from: "them", text: "Perfect. Our open-plan needs a deep clean after renovations. 3 floors." },
      { from: "us",   text: "No problem at all. We'll send a quote same day 👍" },
      { from: "them", text: "Honestly couldn't believe how thorough the team was. Worth every naira 💯" },
    ],
  },
  {
    avatar: "CN",
    avatarBg: "bg-purple-600",
    name: "Chisom N.",
    time: "Mon",
    messages: [
      { from: "them", text: "I saw your page on IG. Are your cleaners vetted? I stay alone" },
      { from: "us",   text: "Yes — every cleaner is background-checked, trained, and arrives in uniform 🛡️" },
      { from: "them", text: "Ok good. I booked and honestly? Best decision ever. My bathroom is SPARKLING" },
      { from: "us",   text: "That's what we love to hear! See you next time 😄" },
      { from: "them", text: "Already referred 3 of my friends. You guys are simply the best in Lagos 🙌🏾" },
    ],
  },
];

const igComments = [
  {
    avatar: "FO",
    avatarBg: "bg-pink-500",
    handle: "@funke.ofili",
    post: "My kitchen after Tinsel did their thing 🤩🤩",
    likes: "2.4k",
    img: "https://images.pexels.com/photos/6996095/pexels-photo-6996095.jpeg?auto=compress&cs=tinysrgb&w=640&h=400&dpr=1",
    comments: [
      { handle: "@blessedmama_ng",   text: "Please drop their number! My house needs this urgently 😭" },
      { handle: "@tinselcleans",      text: "Thank you so much Funke 💚 We're glad it came out perfect!" },
      { handle: "@lagos_homegirl",    text: "This is unreal omg I thought this was a stock photo 😂😂" },
      { handle: "@chiomaikenna",      text: "Booked them last week — came home and literally screamed 🙌🏾" },
    ],
  },
  {
    avatar: "EA",
    avatarBg: "bg-orange-500",
    handle: "@emeka.aso",
    post: "Shoutout to @tinselcleans for showing up and showing OUT on my Airbnb unit 🏠🔥",
    likes: "1.1k",
    img: null,
    comments: [
      { handle: "@airbnbhosts_ng",    text: "Need their contact ASAP for my 4 units in VI 🙏" },
      { handle: "@tinselcleans",      text: "Always a pleasure Emeka! Your guests are going to love it 😊" },
      { handle: "@reginah_lagos",     text: "They cleaned my whole house in 3 hours. Genuinely shocked 👏🏾" },
    ],
  },
];

const tweets = [
  {
    avatar: "ZA",
    avatarBg: "bg-sky-500",
    name: "Zara Adeyemi",
    handle: "@zaraadeyemi_",
    time: "2h",
    text: "Booked @tinselcleans for my flat in Lekki and honestly I have never seen my floors shine like that. Fully recommend if you're in Lagos 🧹✨",
    likes: "312",
    retweets: "87",
    verified: false,
  },
  {
    avatar: "IB",
    avatarBg: "bg-indigo-500",
    name: "Ifeanyi B.",
    handle: "@ifeanyibros",
    time: "5h",
    text: "PSA for Lagos people: stop sleeping on Tinsel Cleaning Services. Same-day availability, eco products, affordable pricing. What more do you want? 😭",
    likes: "541",
    retweets: "204",
    verified: false,
  },
  {
    avatar: "NE",
    avatarBg: "bg-rose-500",
    name: "Ngozi E.",
    handle: "@ngozieverything",
    time: "1d",
    text: "The before/after in my bathroom 😭😭 I actually cried when I saw it. @tinselcleans you have a customer for life.",
    likes: "899",
    retweets: "163",
    verified: false,
  },
  {
    avatar: "KA",
    avatarBg: "bg-amber-500",
    name: "Kemi A.",
    handle: "@kemiadey__",
    time: "3d",
    text: "Just found out @tinselcleans does post-renovation deep cleans. Saved my entire sanity after our Ikoyi apartment reno 🙏🏾 Their team is meticulous.",
    likes: "427",
    retweets: "98",
    verified: false,
  },
];

/* ─── WhatsApp Card ─────────────────────────────────────────────────────── */

function WhatsAppCard({ chat }: { chat: typeof whatsappChats[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 flex-shrink-0 border border-gray-100">
      {/* Header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${chat.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {chat.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm truncate">{chat.name}</p>
          <p className="text-green-200 text-[10px]">online</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.19z"/>
          </svg>
          <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
          </svg>
        </div>
      </div>

      {/* Chat body */}
      <div
        className="px-3 py-3 space-y-2 h-64 overflow-y-auto text-sm"
        style={{ background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='%23e5ddd5'/%3E%3C/svg%3E\")" }}
      >
        {chat.messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "us" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-3 py-1.5 rounded-xl text-xs leading-relaxed shadow-sm ${
                msg.from === "us"
                  ? "bg-[#dcf8c6] text-gray-800 rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
              {i === chat.messages.length - 1 && msg.from === "us" && (
                <span className="ml-2 text-[10px] text-gray-400">✓✓</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[11px] text-gray-400">Type a message</div>
        <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Instagram Card ────────────────────────────────────────────────────── */

function InstagramCard({ post }: { post: typeof igComments[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 flex-shrink-0 border border-gray-100">
      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-3 border-b border-gray-100">
        <div className={`w-9 h-9 rounded-full ${post.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ring-2 ring-pink-400 ring-offset-1`}>
          {post.avatar}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-gray-900 font-semibold text-sm">{post.handle}</p>
        </div>
        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>
        </svg>
      </div>

      {/* Image or caption */}
      {post.img ? (
        <img src={post.img} alt="Post" className="w-full h-40 object-cover" />
      ) : (
        <div className="px-4 py-4 bg-gradient-to-br from-pink-50 to-purple-50">
          <p className="text-gray-800 text-sm leading-relaxed">{post.post}</p>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 pt-2.5 pb-1 flex items-center gap-4">
        <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364l-7.682 7.682-7.682-7.682a4.5 4.5 0 010-6.364z"/>
        </svg>
        <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        <svg className="w-6 h-6 text-gray-800 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
      </div>

      <div className="px-4 pb-1">
        <p className="text-gray-900 text-xs font-semibold">{post.likes} likes</p>
        {post.img && <p className="text-gray-800 text-xs mt-1 leading-snug"><span className="font-semibold">{post.handle}</span> {post.post}</p>}
      </div>

      {/* Comments */}
      <div className="px-4 pb-3 space-y-1.5 mt-1">
        {post.comments.map((c, i) => (
          <p key={i} className="text-xs text-gray-700 leading-snug">
            <span className="font-semibold text-gray-900">{c.handle}</span>{" "}
            <span className={c.handle === "@tinselcleans" ? "text-brand-600" : ""}>{c.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

/* ─── Tweet Card ────────────────────────────────────────────────────────── */

function TweetCard({ tweet }: { tweet: typeof tweets[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 flex-shrink-0 border border-gray-100 p-4">
      {/* Author */}
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full ${tweet.avatarBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
          {tweet.avatar}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <p className="text-gray-900 font-bold text-sm truncate">{tweet.name}</p>
          </div>
          <p className="text-gray-500 text-xs">{tweet.handle} · {tweet.time}</p>
        </div>
        {/* X logo */}
        <svg className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>

      {/* Tweet text */}
      <p className="text-gray-900 text-sm leading-relaxed mb-3">
        {tweet.text.split("@tinselcleans").map((part, i, arr) =>
          i < arr.length - 1
            ? <span key={i}>{part}<span className="text-sky-500">@tinselcleans</span></span>
            : <span key={i}>{part}</span>
        )}
      </p>

      {/* Actions */}
      <div className="flex items-center justify-between text-gray-500 text-xs pt-2 border-t border-gray-100">
        <button className="flex items-center gap-1.5 hover:text-sky-500 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        </button>
        <button className="flex items-center gap-1.5 hover:text-green-500 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
          </svg>
          <span>{tweet.retweets}</span>
        </button>
        <button className="flex items-center gap-1.5 hover:text-pink-500 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364l-7.682 7.682-7.682-7.682a4.5 4.5 0 010-6.364z"/>
          </svg>
          <span>{tweet.likes}</span>
        </button>
        <button className="hover:text-sky-500 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Scrolling row ─────────────────────────────────────────────────────── */

function MarqueeRow({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden">
      {/* left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
      {/* right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-gray-50 to-transparent" />

      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {children}
        {/* duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Lagos is{" "}
            <span className="text-brand-600">saying about us</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Real conversations, real reactions — straight from WhatsApp, Instagram, and X.
          </p>
        </div>
      </div>

      {/* Row 1 — WhatsApp chats */}
      <div className="mb-5">
        <MarqueeRow>
          {whatsappChats.map((c) => (
            <WhatsAppCard key={c.name} chat={c} />
          ))}
        </MarqueeRow>
      </div>

      {/* Row 2 — Instagram posts (reverse direction) */}
      <div className="mb-5">
        <MarqueeRow reverse>
          {igComments.map((p) => (
            <InstagramCard key={p.handle} post={p} />
          ))}
        </MarqueeRow>
      </div>

      {/* Row 3 — Tweets */}
      <div>
        <MarqueeRow>
          {tweets.map((t) => (
            <TweetCard key={t.handle} tweet={t} />
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}
