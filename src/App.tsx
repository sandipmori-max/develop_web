import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  MessageCircle,
  Mail,
  ArrowUp,
} from "lucide-react";

import logo from './assets/logo.png';
import Header from './Header';
import HeroSlider from './HeroSlider';
import WhyChooseUs from './WhyChooseUs';
import ServicesOffer from './ServicesOffer';
import OurProducts from './OurProducts';
import CareerCulture from './CareerCulture';
import HappyClientele from './HappyClientele';
import ClientTestimonials from './ClientTestimonials';
import ScheduleAppointment from './ScheduleAppointment';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Clients from './Clients';
import CareerPage from './CareerPage';
import BlogPage from './BlogPage';
import ContactUs from './ContactUs';
import ServiceList from './ServiceList';
import ProductDetails from './ProductDetails';
import StickyActions from './StickyActions';
import BookDemoButton from './BookDemoButton';
import ScrollProgress from './ScrollProgress';
import ScrollReveal from './ScrollReveal';
import "./ScrollReveal.css";

// ── Smooth scroll helper ──────────────────────────────────────────────────────
function scrollToBooking() {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
}

// ── Hooks ─────────────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function useCountUp(target: number, triggered: boolean, duration = 1800) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const start = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, triggered, duration])
  return val
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const Ic = {
  check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5"><polyline points="20 6 9 17 4 12" /></svg>,
  play: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><polygon points="5 3 19 12 5 21 5 3" /></svg>,
  eye: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  db: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /></svg>,
  trend: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  target: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  cal: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  recycle: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" /></svg>,
  users: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
  globe: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
  award: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>,
  barChart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
  chevL: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><polyline points="15 18 9 12 15 6" /></svg>,
  chevR: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><polyline points="9 18 15 12 9 6" /></svg>,
  clock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  map: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>,
  lock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
}


// ── Section 1: Hero ───────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: '#ffffff',
      }}
    >
      {/* Soft blue background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '650px',
          height: '650px',
          top: '-220px',
          right: '-180px',
          borderRadius: '50%',
          background: 'rgba(3,158,227,0.10)',
          filter: 'blur(90px)',
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          bottom: '-220px',
          left: '-180px',
          borderRadius: '50%',
          background: 'rgba(56,189,248,0.08)',
          filter: 'blur(90px)',
        }}
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.35,
          backgroundImage:
            'radial-gradient(circle, rgba(3,158,227,0.25) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'linear-gradient(to bottom, black 0%, transparent 75%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, transparent 75%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center py-28">

          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-7"
              style={{
                background: 'rgba(3,158,227,0.08)',
                border: '1px solid rgba(3,158,227,0.18)',
                color: '#0284C7',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-dot"
                style={{
                  background: '#039EE3',
                  boxShadow: '0 0 10px rgba(3,158,227,0.45)',
                }}
              />
              Smart ERP for Modern Businesses
            </div>

            {/* Heading */}
            <h1
              className="font-black tracking-tight leading-[1.05] mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
                color: '#040D20',
              }}
            >
              Run Your Business
              <br />
              <span style={{ color: '#039EE3' }}>
                Smarter. Faster.
              </span>
              <br />
              Better.
            </h1>

            {/* Description */}
            <p
              className="text-lg lg:text-xl leading-relaxed max-w-xl mb-8"
              style={{
                color: '#64748B',
              }}
            >
              DevERP brings production, inventory, sales, purchase,
              finance and operations together in one powerful ERP
              platform built for growing businesses.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="px-7 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background:
                    'linear-gradient(135deg, #039EE3 0%, #38BDF8 100%)',
                  boxShadow:
                    '0 10px 30px rgba(3,158,227,0.25)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow =
                    '0 14px 38px rgba(3,158,227,0.35)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow =
                    '0 10px 30px rgba(3,158,227,0.25)'
                }}
              >
                Book Your Free Demo →
              </button>

              <button
                onClick={scrollToBooking}
                className="px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #BAE6FD',
                  color: '#040D20',
                  boxShadow:
                    '0 6px 20px rgba(3,158,227,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#F8FCFF'
                  e.currentTarget.style.borderColor = '#039EE3'
                  e.currentTarget.style.color = '#039EE3'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#ffffff'
                  e.currentTarget.style.borderColor = '#BAE6FD'
                  e.currentTarget.style.color = '#040D20'
                }}
              >
                Explore Platform
              </button>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9">
              {[
                'Production',
                'Inventory',
                'Finance',
                'Sales & Purchase',
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: '#64748B' }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(3,158,227,0.10)',
                      color: '#039EE3',
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative">
            {/* Blue glow behind dashboard */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '8%',
                borderRadius: '32px',
                background: 'rgba(3,158,227,0.14)',
                filter: 'blur(45px)',
              }}
            />

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: '#ffffff',
                border: '1px solid #DDF2FC',
                boxShadow:
                  '0 24px 70px rgba(3,158,227,0.14), 0 8px 28px rgba(15,23,42,0.06)',
              }}
            >
              {/* Dashboard Header */}
              <div
                className="px-6 py-5 flex items-center justify-between"
                style={{
                  background: '#F8FCFF',
                  borderBottom: '1px solid #E0F2FE',
                }}
              >
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: '#94A3B8' }}
                  >
                    DevERP Dashboard
                  </div>

                  <div
                    className="font-bold text-lg"
                    style={{ color: '#040D20' }}
                  >
                    Business Overview
                  </div>
                </div>

                <div
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(34,197,94,0.10)',
                    color: '#16A34A',
                  }}
                >
                  ● Live Data
                </div>
              </div>

              {/* KPI Cards */}
              <div className="p-6 grid grid-cols-2 gap-4">
                {[
                  {
                    label: 'Production',
                    value: '92%',
                    change: '+12.4%',
                    icon: '↗',
                    color: '#22C55E',
                  },
                  {
                    label: 'Machine Utilization',
                    value: '87%',
                    change: '+8.2%',
                    icon: '⚙',
                    color: '#039EE3',
                  },
                  {
                    label: 'Pending Orders',
                    value: '24',
                    change: '-14.5%',
                    icon: '◷',
                    color: '#F59E0B',
                  },
                  {
                    label: 'Revenue',
                    value: '₹48.6L',
                    change: '+18.7%',
                    icon: '₹',
                    color: '#039EE3',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5"
                    style={{
                      background: '#F8FCFF',
                      border: '1px solid #DDF2FC',
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-medium"
                        style={{ color: '#64748B' }}
                      >
                        {item.label}
                      </span>

                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                        style={{
                          background: `${item.color}14`,
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </span>
                    </div>

                    <div
                      className="text-2xl font-black mb-1"
                      style={{ color: '#040D20' }}
                    >
                      {item.value}
                    </div>

                    <div
                      className="text-xs font-semibold"
                      style={{ color: item.color }}
                    >
                      {item.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="px-6 pb-6">
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: '#F8FCFF',
                    border: '1px solid #DDF2FC',
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div
                        className="text-xs font-medium"
                        style={{ color: '#64748B' }}
                      >
                        Monthly Revenue
                      </div>

                      <div
                        className="text-xl font-black mt-1"
                        style={{ color: '#040D20' }}
                      >
                        ₹48.6L
                      </div>
                    </div>

                    <div
                      className="text-xs font-semibold"
                      style={{ color: '#16A34A' }}
                    >
                      +18.7%
                    </div>
                  </div>

                  <div className="flex items-end gap-2 h-28">
                    {[35, 48, 42, 62, 58, 76, 68, 88, 80, 96].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md transition-all duration-300"
                          style={{
                            height: `${height}%`,
                            background:
                              i === 9
                                ? '#039EE3'
                                : 'rgba(3,158,227,0.22)',
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Alert */}
              <div
                className="mx-6 mb-6 rounded-xl px-4 py-3 flex items-center gap-3"
                style={{
                  background: 'rgba(3,158,227,0.06)',
                  border: '1px solid rgba(3,158,227,0.14)',
                  boxShadow:
                    '0 6px 20px rgba(3,158,227,0.06)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'rgba(3,158,227,0.10)',
                    color: '#039EE3',
                  }}
                >
                  ✦
                </div>

                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: '#040D20' }}
                  >
                    AI Business Alert
                  </div>

                  <div
                    className="text-xs"
                    style={{ color: '#64748B' }}
                  >
                    Production efficiency improved by 12.4%
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Status Card */}
            <div
              className="absolute -bottom-7 -left-7 hidden sm:block rounded-2xl px-5 py-4"
              style={{
                background: '#ffffff',
                border: '1px solid #DDF2FC',
                boxShadow:
                  '0 16px 40px rgba(3,158,227,0.16)',
              }}
            >
              <div
                className="text-xs font-medium mb-1"
                style={{ color: '#64748B' }}
              >
                Quality Score
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="text-2xl font-black"
                  style={{ color: '#040D20' }}
                >
                  98.4%
                </div>

                <span
                  className="text-xs font-bold"
                  style={{ color: '#16A34A' }}
                >
                  ↑ 4.2%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
// ── Benefits ──────────────────────────────────────────────────────────────────
const BENEFITS = [
  { icon: <Ic.trend />, label: 'Increase Productivity', stat: '+32%', color: '#039EE3', desc: 'Up to 32% improvement in plant output within 6 months of go-live.' },
  { icon: <Ic.recycle />, label: 'Reduce Waste', stat: '−18%', color: '#0891B2', desc: 'Precise inventory tracking and MRP cuts raw material wastage significantly.' },
  { icon: <Ic.cal />, label: 'Improve Planning', stat: '98%', color: '#7C3AED', desc: 'Production plans that hold — with machines, shifts, and materials in sync.' },
  { icon: <Ic.db />, label: 'Better Inventory', stat: '0 gaps', color: '#059669', desc: 'Real-time multi-location stock with automatic replenishment triggers.' },
  { icon: <Ic.eye />, label: 'Real-time Insights', stat: 'Live', color: '#D97706', desc: 'Every KPI updated every minute. No waiting, no guessing, no surprises.' },
  { icon: <Ic.target />, label: 'Increase Profitability', stat: '+24%', color: '#DC2626', desc: 'Faster quotes, accurate costing, and reduced waste add directly to your margin.' },
]

function Benefits() {
  const [hovered, setHovered] = useState<number | null>(null)
  const { ref, visible } = useFadeIn()

  return (
    <section
      id="solutions"
      className="py-2"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'none'
              : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: 'rgba(3,158,227,0.08)',
              color: '#039EE3',
            }}
          >
            Business Benefits
          </div>

          <h2
            className="font-black tracking-tight mb-4"
            style={{
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              color: '#040D20',
            }}
          >
            Results That Move
            <br />
            Your Business Forward
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 cursor-pointer transition-all duration-300"
              style={{
                background:
                  hovered === i
                    ? '#040D20'
                    : '#F8FCFF',

                border:
                  hovered === i
                    ? '1.5px solid rgba(3,158,227,0.35)'
                    : '1.5px solid #DDF2FC',

                boxShadow:
                  hovered === i
                    ? '0 16px 48px rgba(3,158,227,0.15)'
                    : 'none',

                transform:
                  hovered === i
                    ? 'translateY(-4px)'
                    : 'none',

                opacity: visible ? 1 : 0,

                transition: `all 0.3s ease, opacity 0.6s ease ${i * 0.1}s`,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background:
                    hovered === i
                      ? 'rgba(3,158,227,0.18)'
                      : 'rgba(3,158,227,0.08)',

                  color: '#039EE3',
                }}
              >
                {b.icon}
              </div>

              {/* Stat */}
              <div
                className="text-4xl font-black mb-1 leading-none"
                style={{
                  color:
                    hovered === i
                      ? '#ffffff'
                      : '#039EE3',
                }}
              >
                {b.stat}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-base mb-2"
                style={{
                  color:
                    hovered === i
                      ? '#ffffff'
                      : '#040D20',
                }}
              >
                {b.label}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  color:
                    hovered === i
                      ? 'rgba(255,255,255,0.5)'
                      : '#64748B',
                }}
              >
                {b.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


// ── Section: Dashboard Showcase ───────────────────────────────────────────────
type Slide = { industry: string; impact: string; tag: string; accent: string; widgets: { label: string; value: string; delta: string; up: boolean }[]; bars: number[] }

const SLIDES: Slide[] = [
  {
    industry: 'Printing & Packaging ERP',
    impact: 'Track production, inventory and dispatch in real time.',
    tag: 'Printing & Packaging',
    accent: '#039EE3',
    widgets: [
      { label: 'Jobs In Production', value: '38', delta: '+4 today', up: true },
      { label: 'Substrate Stock', value: '92%', delta: 'Optimal', up: true },
      { label: 'Dispatch Pending', value: '14', delta: '3 urgent', up: false },
      { label: 'Monthly Revenue', value: '₹52.3L', delta: '+18.2%', up: true },
    ],
    bars: [55, 70, 48, 82, 65, 90, 73, 88, 60, 92, 78, 95],
  },
  {
    industry: 'Gravure / Cylinder Manufacturing ERP',
    impact: 'Manage cylinder specs, engraving jobs and quality in one place.',
    tag: 'Gravure & Cylinder',
    accent: '#7C3AED',
    widgets: [
      { label: 'Engraving Queue', value: '21 cyl', delta: '6 urgent', up: false },
      { label: 'Chrome Plating OEE', value: '91.4%', delta: '+2.8%', up: true },
      { label: 'QC Pass Rate', value: '99.1%', delta: '+0.3%', up: true },
      { label: 'Jobs Delivered', value: '143', delta: 'This month', up: true },
    ],
    bars: [62, 75, 55, 80, 68, 85, 72, 90, 65, 88, 76, 94],
  },
  {
    industry: 'Ready Mix Concrete ERP',
    impact: 'From batch plant to delivery — every pour tracked in real time.',
    tag: 'Ready Mix Concrete',
    accent: '#D97706',
    widgets: [
      { label: 'Batches Today', value: '184', delta: '+22 vs yesterday', up: true },
      { label: 'Trucks Dispatched', value: '67', delta: '8 en route', up: true },
      { label: 'Mix Design Accuracy', value: '99.7%', delta: '+0.1%', up: true },
      { label: 'Revenue Today', value: '₹8.4L', delta: '+12.5%', up: true },
    ],
    bars: [48, 66, 52, 78, 60, 84, 70, 86, 58, 90, 74, 92],
  },
  {
    industry: 'Medical ERP',
    impact: 'Control procurement, inventory, billing and compliance from one platform.',
    tag: 'Medical',
    accent: '#059669',
    widgets: [
      { label: 'Stock SKUs Active', value: '4,281', delta: '12 expiring', up: false },
      { label: 'Purchase Orders', value: '37', delta: '₹6.2L value', up: true },
      { label: 'Billing Today', value: '₹1.8L', delta: '+9.4%', up: true },
      { label: 'Compliance Score', value: '100%', delta: 'All audits clear', up: true },
    ],
    bars: [50, 68, 45, 76, 58, 82, 66, 88, 54, 86, 72, 93],
  },
]

function DashboardCard({ slide }: { slide: Slide }) {
  return (
    <div
      className="rounded-2xl overflow-hidden h-full"
      style={{
        background: '#ffffff',
        border: '1px solid #DDF2FC',
        boxShadow:
          '0 20px 60px rgba(3,158,227,0.14), 0 6px 20px rgba(15,23,42,0.05)',
      }}
    >
      {/* Titlebar */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{
          background: '#F8FCFF',
          borderBottom: '1px solid #E0F2FE',
        }}
      >
        {/* Browser dots */}
        <div className="flex gap-1.5">
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: 'rgba(239,68,68,0.45)' }}
          />

          <div
            className="w-3 h-3 rounded-full"
            style={{ background: 'rgba(245,158,11,0.45)' }}
          />

          <div
            className="w-3 h-3 rounded-full"
            style={{ background: 'rgba(34,197,94,0.45)' }}
          />
        </div>
        {/* Address bar */}
        <div
          className="flex-1 mx-4 h-5 rounded-md flex items-center px-2 gap-1.5"
          style={{
            background: '#ffffff',

          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{
              background: '#22C55E',
              boxShadow: '0 0 6px rgba(34,197,94,0.35)',
            }}
          />

          <span
            className="text-xs"
            style={{
              color: '#64748B',
            }}
          >
            DevERP — {slide.tag}
          </span>
        </div>

        {/* Live */}
        <span
          className="text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{
            background: 'rgba(3,158,227,0.08)',
            color: '#039EE3',
            border: '1px solid rgba(3,158,227,0.15)',
          }}
        >
          Live
        </span>
      </div>

      {/* Dashboard Content */}
      <div className="p-5 space-y-4">

        {/* Metric widgets */}
        <div className="grid grid-cols-4 gap-3">
          {slide.widgets.map(w => (
            <div
              key={w.label}
              className="rounded-xl p-3 transition-all duration-300"
              style={{
                background: '#F8FCFF',
                border: '1px solid #DDF2FC',
              }}
            >
              <div
                className="text-xs mb-1.5"
                style={{
                  color: '#64748B',
                }}
              >
                {w.label}
              </div>

              <div
                className="text-lg font-black mb-1"
                style={{
                  color: '#040D20',
                }}
              >
                {w.value}
              </div>

              <div
                className="text-xs font-semibold"
                style={{
                  color: w.up ? '#16A34A' : '#F59E0B',
                }}
              >
                {w.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div
          className="rounded-xl p-4"
          style={{
            background: '#F8FCFF',
            border: '1px solid #DDF2FC',
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-sm font-semibold"
              style={{
                color: '#040D20',
              }}
            >
              Monthly Performance
            </span>

            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(3,158,227,0.08)',
                color: '#039EE3',
                border: '1px solid rgba(3,158,227,0.12)',
              }}
            >
              ↑ Trending up
            </span>
          </div>

          <div className="flex items-end gap-1 h-16">
            {slide.bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm transition-all duration-300"
                style={{
                  height: `${h}%`,
                  background:
                    i === slide.bars.length - 1
                      ? 'linear-gradient(to top, #039EE3, #38BDF8)'
                      : `rgba(3,158,227,${Math.min(
                        0.18 + h * 0.003,
                        0.45
                      )})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Mini status row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              label: 'Active Users',
              val: '24 online',
            },
            {
              label: 'Data Sync',
              val: '2s ago',
            },
            {
              label: 'Uptime',
              val: '99.98%',
            },
          ].map(r => (
            <div
              key={r.label}
              className="rounded-lg px-3 py-2 flex items-center justify-between"
              style={{
                background: '#F8FCFF',
                border: '1px solid #DDF2FC',
              }}
            >
              <span
                className="text-xs"
                style={{
                  color: '#64748B',
                }}
              >
                {r.label}
              </span>

              <span
                className="text-xs font-semibold"
                style={{
                  color: '#040D20',
                }}
              >
                {r.val}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}


function DashboardShowcase() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { ref, visible } = useFadeIn()

  const next = () => setActive(a => (a + 1) % SLIDES.length)

  const prev = () =>
    setActive(a => (a - 1 + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    if (paused) return

    timerRef.current = setInterval(next, 4500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, active])

  return (
    <section
      className="py-12 overflow-hidden"
      style={{
        background: '#ffffff',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'none'
              : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}
        >
          {/* Badge */}
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: 'rgba(3,158,227,0.08)',
              border: '1px solid rgba(3,158,227,0.18)',
              color: '#039EE3',
            }}
          >
            Platform Showcase
          </div>

          {/* Heading */}
          <h2
            className="font-black tracking-tight mb-4"
            style={{
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              color: '#040D20',
            }}
          >
            See DevERP
            <br />

            <span style={{ color: '#039EE3' }}>
              Across Industries
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg max-w-lg mx-auto"
            style={{
              color: '#64748B',
            }}
          >
            One ERP platform. Industry-specific dashboards.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Slide */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.7s ease 0.2s',
            }}
          >
            <div
              className="transition-all duration-500"
              style={{
                opacity: 1,
              }}
            >
              <DashboardCard
                slide={SLIDES[active]}
                key={active}
              />
            </div>
          </div>

          {/* Industry Label + Impact */}
          <div className="mt-8 text-center">

            <h3
              className="text-xl font-bold mb-1"
              style={{
                color: '#040D20',
              }}
            >
              {SLIDES[active].industry}
            </h3>

            <p
              style={{
                color: '#64748B',
              }}
            >
              {SLIDES[active].impact}
            </p>

          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">

            {/* Previous */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(3,158,227,0.06)',
                border: '1px solid rgba(3,158,227,0.20)',
                color: '#039EE3',
                boxShadow:
                  '0 4px 14px rgba(3,158,227,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background =
                  'rgba(3,158,227,0.12)'
                e.currentTarget.style.borderColor =
                  'rgba(3,158,227,0.45)'
                e.currentTarget.style.boxShadow =
                  '0 6px 18px rgba(3,158,227,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background =
                  'rgba(3,158,227,0.06)'
                e.currentTarget.style.borderColor =
                  'rgba(3,158,227,0.20)'
                e.currentTarget.style.boxShadow =
                  '0 4px 14px rgba(3,158,227,0.06)'
              }}
            >
              <Ic.chevL />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:
                      active === i
                        ? '24px'
                        : '8px',

                    height: '8px',

                    background:
                      active === i
                        ? '#039EE3'
                        : '#BAE6FD',

                    boxShadow:
                      active === i
                        ? '0 0 12px rgba(3,158,227,0.40)'
                        : 'none',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(3,158,227,0.06)',
                border: '1px solid rgba(3,158,227,0.20)',
                color: '#039EE3',
                boxShadow:
                  '0 4px 14px rgba(3,158,227,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background =
                  'rgba(3,158,227,0.12)'
                e.currentTarget.style.borderColor =
                  'rgba(3,158,227,0.45)'
                e.currentTarget.style.boxShadow =
                  '0 6px 18px rgba(3,158,227,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background =
                  'rgba(3,158,227,0.06)'
                e.currentTarget.style.borderColor =
                  'rgba(3,158,227,0.20)'
                e.currentTarget.style.boxShadow =
                  '0 4px 14px rgba(3,158,227,0.06)'
              }}
            >
              <Ic.chevR />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}


// ── Qualification + Calendar ──────────────────────────────────────────────────
type QualData = { industry: string; employees: string; challenges: string[]; intent: string }

const QUAL_INDUSTRIES = ['Printing & Packaging', 'Gravure / Cylinder Manufacturing', 'Cylinder Engraving', 'Ready Mix Concrete', 'Construction', 'Medical', 'Other']
const QUAL_EMP = ['1–25', '26–50', '51–100', '101–250', '250+']
const QUAL_CHALLENGES = ['Production Planning', 'Inventory', 'Quality', 'Job Costing', 'Dispatch', 'Manual Work', 'Reporting', 'Purchase', 'Sales', 'Other']
const QUAL_INTENT = ['Book Live Demo', 'Need ERP Consultation', 'Want Pricing', 'Need Product Information', 'Exploring ERP Solutions']

const CAL_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const CAL_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const ALL_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']

function genCalendarDays(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()
  const days: (number | null)[] = Array(firstDay).fill(null)
  for (let d = 1; d <= total; d++) days.push(d)
  return days
}
function isAvailableDate(y: number, m: number, d: number) {
  const date = new Date(y, m, d); date.setHours(0, 0, 0, 0)
  const tomorrow = new Date(); tomorrow.setHours(0, 0, 0, 0); tomorrow.setDate(tomorrow.getDate() + 1)
  if (date < tomorrow) return false
  const dow = date.getDay()
  if (dow === 0 || dow === 6) return false
  const max = new Date(tomorrow); max.setDate(max.getDate() + 27)
  return date <= max
}
function getSlotsForDate(d: number) {
  return ALL_SLOTS.filter((_, i) => (d * 7 + i * 3) % 7 !== 0)
}

function QualificationCard({ onComplete }: { onComplete: (d: QualData) => void }) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<QualData>({ industry: '', employees: '', challenges: [], intent: '' })

  const canNext = (step === 1 && !!data.industry) || (step === 2 && !!data.employees) || (step === 3 && data.challenges.length > 0) || (step === 4 && !!data.intent)

  function toggleChallenge(c: string) {
    setData(d => ({ ...d, challenges: d.challenges.includes(c) ? d.challenges.filter(x => x !== c) : [...d.challenges, c] }))
  }

  return (
    <div className="h-full flex flex-col">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-7">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
              style={{ background: s < step ? '#22C55E' : s === step ? '#039EE3' : 'rgba(30,111,255,0.1)', color: s <= step ? 'white' : '#94A3B8' }}>
              {s < step ? '✓' : s}
            </div>
            {s < 4 && <div className="w-6 h-0.5 rounded" style={{ background: s < step ? '#22C55E' : '#E2E8F0' }} />}
          </div>
        ))}
        <span className="ml-auto text-xs font-medium" style={{ color: '#94A3B8' }}>Step {step} of 4</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        {step === 1 && (
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#040D20' }}>Which industry best describes your business?</h3>
            <p className="text-sm mb-5" style={{ color: '#94A3B8' }}>We'll personalize your demo based on your industry.</p>
            <div className="relative">
              <select value={data.industry} onChange={e => setData(d => ({ ...d, industry: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-200 pr-10"
                style={{ background: '#F8FAFF', border: data.industry ? '1.5px solid #039EE3' : '1.5px solid #E2E8F0', color: data.industry ? '#040D20' : '#94A3B8', appearance: 'none', cursor: 'pointer' }}>
                <option value="">Select your industry</option>
                {QUAL_INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#040D20' }}>How many employees does your company have?</h3>
            <p className="text-sm mb-5" style={{ color: '#94A3B8' }}>This helps us recommend the right plan.</p>
            <div className="grid grid-cols-5 gap-2">
              {QUAL_EMP.map(opt => (
                <button key={opt} onClick={() => setData(d => ({ ...d, employees: opt }))}
                  className="py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ background: data.employees === opt ? '#039EE3' : '#F8FAFF', color: data.employees === opt ? 'white' : '#64748B', border: data.employees === opt ? '1.5px solid #039EE3' : '1.5px solid #E2E8F0', transform: data.employees === opt ? 'scale(1.04)' : 'none' }}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#040D20' }}>What is your biggest operational challenge?</h3>
            <p className="text-sm mb-5" style={{ color: '#94A3B8' }}>Select all that apply.</p>
            <div className="grid grid-cols-2 gap-2">
              {QUAL_CHALLENGES.map(opt => {
                const sel = data.challenges.includes(opt)
                return (
                  <button key={opt} onClick={() => toggleChallenge(opt)}
                    className="py-2.5 px-3 rounded-xl text-sm font-semibold text-left transition-all duration-200 flex items-center gap-2"
                    style={{ background: sel ? 'rgba(30,111,255,0.08)' : '#F8FAFF', color: sel ? '#039EE3' : '#64748B', border: sel ? '1.5px solid rgba(30,111,255,0.4)' : '1.5px solid #E2E8F0' }}>
                    <div className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center transition-all"
                      style={{ background: sel ? '#039EE3' : 'transparent', border: sel ? 'none' : '1.5px solid #CBD5E1' }}>
                      {sel && <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} className="w-3 h-3"><polyline points="20 6 9 17 4 12" /></svg>}
                    </div>
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#040D20' }}>What are you looking for today?</h3>
            <p className="text-sm mb-5" style={{ color: '#94A3B8' }}>Choose the option that best matches your goal.</p>
            <div className="grid grid-cols-1 gap-2">
              {QUAL_INTENT.map(opt => (
                <button key={opt} onClick={() => setData(d => ({ ...d, intent: opt }))}
                  className="py-3 px-4 rounded-xl text-sm font-semibold text-left flex items-center gap-3 transition-all duration-200"
                  style={{ background: data.intent === opt ? 'rgba(30,111,255,0.08)' : '#F8FAFF', color: data.intent === opt ? '#039EE3' : '#64748B', border: data.intent === opt ? '1.5px solid rgba(30,111,255,0.4)' : '1.5px solid #E2E8F0' }}>
                  <div className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ border: `2px solid ${data.intent === opt ? '#039EE3' : '#CBD5E1'}` }}>
                    {data.intent === opt && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                  </div>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between mt-6 pt-5" style={{ borderTop: '1px solid #F1F5F9' }}>
        {step > 1
          ? <button onClick={() => setStep(s => s - 1)} className="text-sm font-medium px-4 py-2 rounded-lg transition-colors hover:bg-slate-100" style={{ color: '#64748B' }}>← Back</button>
          : <div />
        }
        {step < 4
          ? <button disabled={!canNext} onClick={() => setStep(s => s + 1)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-40 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg,#039EE3,#3B82F6)' }}>
            Continue →
          </button>
          : <button disabled={!canNext} onClick={() => onComplete(data)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-40 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg,#039EE3,#3B82F6)', boxShadow: '0 4px 16px rgba(30,111,255,0.4)' }}>
            Choose My Demo Slot →
          </button>
        }
      </div>
    </div>
  )
}

function CalendarView({ industry, qualData }: { industry: string, qualData: any }) {
  const now = new Date()
  const [month, setMonth] = useState(new Date(now.getFullYear(), now.getMonth(), 1))
  const [selDate, setSelDate] = useState<number | null>(null)
  const [selSlot, setSelSlot] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [submitted, setSubmitted] = useState(false)

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const y = month.getFullYear(), m = month.getMonth()
  const days = genCalendarDays(y, m)
  const slots = selDate ? getSlotsForDate(selDate) : []

  function prevMonth() { setMonth(new Date(y, m - 1, 1)); setSelDate(null); setSelSlot(null); setShowForm(false) }
  function nextMonth() { setMonth(new Date(y, m + 1, 1)); setSelDate(null); setSelSlot(null); setShowForm(false) }
  function selectSlot(s: string) { setSelSlot(s); setTimeout(() => setShowForm(true), 200) }

  function validate() {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.company.trim()) e.company = 'Company name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.phone.trim()) e.phone = 'Mobile number is required'
    else if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number'
    return e
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const errs = validate()

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const submitData = {
      qualification: {
        step1: {
          industry: qualData?.industry ?? '',
        },
        step2: {
          employees: qualData?.employees ?? '',
        },
        step3: {
          challenges: qualData?.challenges ?? [],
        },
        step4: {
          intent: qualData?.intent ?? '',
        },
      },

      booking: {
        date: selDate
          ? `${y}-${String(m + 1).padStart(2, '0')}-${String(selDate).padStart(2, '0')}`
          : '',
        time: selSlot ?? '',
        timezone: tz,
      },

      contact: {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        notes: form.notes,
      },
    }

    console.log('FINAL SUBMIT DATA:', submitData)

    try {
      // ==========================================
      // 1. ADMIN EMAIL
      // ==========================================

      const body = `
      <h2>New ERP Inquiry</h2>

      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>Company:</strong> ${form.company}</p>
      <p><strong>Email:</strong> ${form.email}</p>
      <p><strong>Phone:</strong> ${form.phone}</p>
      <p><strong>Notes:</strong> ${form.notes}</p>

      <h3>Qualification</h3>
      <p><strong>Industry:</strong> ${qualData?.industry ?? ''}</p>
      <p><strong>Employees:</strong> ${qualData?.employees ?? ''}</p>
      <p>
        <strong>Challenges:</strong>
        ${(qualData?.challenges ?? []).join(', ')}
      </p>
      <p><strong>Intent:</strong> ${qualData?.intent ?? ''}</p>

      <h3>Booking</h3>
      <p><strong>Date:</strong> ${selDate
          ? `${y}-${String(m + 1).padStart(2, '0')}-${String(selDate).padStart(2, '0')}`
          : ''
        }</p>
      <p><strong>Time:</strong> ${selSlot ?? ''}</p>
      <p><strong>Timezone:</strong> ${tz}</p>
    `

      const adminPayload = {
        key: 'Deverp@2021',
        Subject: 'ERP Inquiry',
        To: 'admin@deverp.com',
        CC: '',
        BCC: '',
        Body: body,
      }

      console.log('ADMIN MAIL PAYLOAD:', adminPayload)

      const adminResponse = await fetch(
        '/APP/api.aspx/SendMail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adminPayload),
        }
      )

      const adminResult = await adminResponse.json()

      console.log('ADMIN MAIL RESPONSE:', adminResult)

      if (!adminResponse.ok) {
        throw new Error('Admin mail API request failed')
      }


      // ==========================================
      // 2. USER THANK YOU EMAIL
      // ==========================================

      const userPayload = {
        key: 'Deverp@2021',
        Subject: 'Deverp inquiry',
        To: form.email,
        CC: '',
        BCC: '',
        Body: 'Thank you for your inquiry. We will inform time shortly.',
      }

      console.log('USER MAIL PAYLOAD:', userPayload)

      const userResponse = await fetch(
        '/APP/api.aspx/SendMail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userPayload),
        }
      )

      const userResult = await userResponse.json()

      console.log('USER MAIL RESPONSE:', userResult)

      if (!userResponse.ok) {
        throw new Error('User confirmation mail API request failed')
      }


      // ==========================================
      // BOTH SUCCESS
      // ==========================================

      setSubmitted(true)

    } catch (error) {
      console.error('SUBMIT ERROR:', error)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(34,197,94,0.12)', border: '2px solid rgba(34,197,94,0.3)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth={2.5} className="w-10 h-10"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3 className="font-black text-2xl mb-2" style={{ color: '#040D20' }}>Your Demo Is Confirmed!</h3>
        <p className="text-base mb-1" style={{ color: '#64748B' }}>Our ERP Consultant will contact you shortly.</p>
        <p className="text-sm" style={{ color: '#94A3B8' }}>
          {selDate && selSlot && `${CAL_MONTHS[m]} ${selDate}, ${y} · ${selSlot}`}
        </p>
        <div className="mt-6 px-4 py-2 rounded-xl text-sm font-medium" style={{ background: 'rgba(30,111,255,0.08)', color: '#039EE3' }}>
          Check your email for confirmation
        </div>
      </div>
    )
  }

  if (showForm && selDate && selSlot) {
    return (
      <div>
        <button onClick={() => { setShowForm(false); setSelSlot(null) }} className="text-sm font-medium mb-5 flex items-center gap-1" style={{ color: '#64748B' }}>
          ← Change time slot
        </button>
        <div className="mb-5 rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: 'rgba(30,111,255,0.06)', border: '1px solid rgba(30,111,255,0.15)' }}>
          <Ic.clock />
          <span className="text-sm font-semibold" style={{ color: '#039EE3' }}>{CAL_MONTHS[m]} {selDate}, {y} · {selSlot} · {tz}</span>
        </div>
        {industry && (
          <div className="mb-4 rounded-xl px-4 py-2.5 flex items-center gap-2" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth={2} className="w-4 h-4"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-xs font-semibold text-green-600">{industry}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          {([
            { key: 'name', placeholder: 'Full Name', type: 'text' },
            { key: 'company', placeholder: 'Company Name', type: 'text' },
            { key: 'email', placeholder: 'Work Email', type: 'email' },
          ] as const).map(f => (
            <div key={f.key}>
              <input type={f.type} placeholder={`${f.placeholder} *`} value={form[f.key]}
                onChange={e => { setForm(d => ({ ...d, [f.key]: e.target.value })); setErrors(d => ({ ...d, [f.key]: '' })) }}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{ background: '#F8FAFF', border: `1.5px solid ${errors[f.key] ? '#EF4444' : '#E2E8F0'}`, color: '#0F172A' }}
                onFocus={e => (e.target.style.border = `1.5px solid ${errors[f.key] ? '#EF4444' : '#039EE3'}`)}
                onBlur={e => (e.target.style.border = `1.5px solid ${errors[f.key] ? '#EF4444' : '#E2E8F0'}`)}
              />
              {errors[f.key] && <p className="text-xs mt-1 pl-1" style={{ color: '#EF4444' }}>{errors[f.key]}</p>}
            </div>
          ))}
          <div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold select-none" style={{ color: '#94A3B8' }}>+91</span>
              <input type="tel" placeholder="Mobile Number *" maxLength={10} value={form.phone}
                onChange={e => { const v = e.target.value.replace(/\D/g, '').slice(0, 10); setForm(d => ({ ...d, phone: v })); setErrors(d => ({ ...d, phone: '' })) }}
                className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{ background: '#F8FAFF', border: `1.5px solid ${errors.phone ? '#EF4444' : '#E2E8F0'}`, color: '#0F172A' }}
                onFocus={e => (e.target.style.border = `1.5px solid ${errors.phone ? '#EF4444' : '#039EE3'}`)}
                onBlur={e => (e.target.style.border = `1.5px solid ${errors.phone ? '#EF4444' : '#E2E8F0'}`)}
              />
            </div>
            {errors.phone
              ? <p className="text-xs mt-1 pl-1" style={{ color: '#EF4444' }}>{errors.phone}</p>
              : <p className="text-xs mt-1 pl-1" style={{ color: '#94A3B8' }}>10-digit number, without country code</p>
            }
          </div>
          <textarea placeholder="Optional message" rows={2} value={form.notes}
            onChange={e => setForm(d => ({ ...d, notes: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200"
            style={{ background: '#F8FAFF', border: '1.5px solid #E2E8F0', color: '#0F172A' }}
            onFocus={e => (e.target.style.border = '1.5px solid #039EE3')}
            onBlur={e => (e.target.style.border = '1.5px solid #E2E8F0')}
          />
          <button type="submit" className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg,#039EE3,#3B82F6)', boxShadow: '0 4px 20px rgba(30,111,255,0.35)' }}>
            Schedule My Free Demo →
          </button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-base" style={{ color: '#040D20' }}>{CAL_MONTHS[m]} {y}</h3>
        <div className="flex gap-1">
          <button onClick={prevMonth} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-slate-100" style={{ color: '#64748B' }}><Ic.chevL /></button>
          <button onClick={nextMonth} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-slate-100" style={{ color: '#64748B' }}><Ic.chevR /></button>
        </div>
      </div>
      <div className="flex items-center gap-1.5 mb-4 text-xs" style={{ color: '#94A3B8' }}>
        <Ic.map /><span>{tz}</span>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {CAL_DAYS.map(d => <div key={d} className="text-center text-xs font-semibold py-1" style={{ color: '#94A3B8' }}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 mb-5">
        {days.map((d, i) => {
          if (!d) return <div key={i} />
          const avail = isAvailableDate(y, m, d)
          const sel = selDate === d
          return (
            <button key={i} disabled={!avail} onClick={() => { setSelDate(d); setSelSlot(null); setShowForm(false) }}
              className="h-9 rounded-lg text-sm font-medium transition-all duration-150"
              style={{ background: sel ? '#039EE3' : 'transparent', color: sel ? 'white' : avail ? '#040D20' : '#CBD5E1', cursor: avail ? 'pointer' : 'default' }}
              onMouseEnter={e => { if (avail && !sel) e.currentTarget.style.background = '#F0F7FF' }}
              onMouseLeave={e => { if (avail && !sel) e.currentTarget.style.background = 'transparent' }}>
              {d}
            </button>
          )
        })}
      </div>
      {selDate ? (
        <div>
          <div className="text-xs font-semibold mb-3" style={{ color: '#64748B' }}>Available slots — {CAL_MONTHS[m]} {selDate}</div>
          <div className="grid grid-cols-2 gap-2">
            {slots.map(s => (
              <button key={s} onClick={() => selectSlot(s)}
                className="py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 hover:scale-[1.02]"
                style={{ background: selSlot === s ? '#039EE3' : 'rgba(30,111,255,0.06)', color: selSlot === s ? 'white' : '#039EE3', border: `1.5px solid ${selSlot === s ? '#039EE3' : 'rgba(30,111,255,0.2)'}` }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-xs text-center py-3" style={{ color: '#CBD5E1' }}>Select a date above to see available slots</p>
      )}
    </div>
  )
}

function BookingSection() {
  const [qualDone, setQualDone] = useState(false)
  const [qualData, setQualData] = useState<QualData | null>(null)
  const { ref, visible } = useFadeIn()

  function handleQualComplete(data: QualData) {
    setQualData(data)
    setQualDone(true)
  }

  return (
    <section
      id="booking"
      className="py-6"
      style={{ background: '#F8FCFF' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'none'
              : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: 'rgba(3,158,227,0.08)',
              border: '1px solid rgba(3,158,227,0.15)',
              color: '#039EE3',
            }}
          >
            Book Your Demo
          </div>

          <h2
            className="font-black tracking-tight mb-4"
            style={{
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              color: '#040D20',
            }}
          >
            {qualDone
              ? 'Choose Your Demo Slot'
              : 'Tell Us About Your Business'}
          </h2>

          <p
            className="text-lg max-w-lg mx-auto"
            style={{
              color: '#64748B',
            }}
          >
            {qualDone
              ? 'Pick a date and time. Our consultant will be ready with a demo tailored to your industry.'
              : 'Answer four quick questions — then unlock your personalized calendar booking.'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ========================================
              Left: Qualification Card / Summary
          ======================================== */}

          <div
            className="rounded-2xl p-8 transition-all duration-500"
            style={{
              background: '#ffffff',
              border: '1.5px solid #DDF2FC',
              boxShadow:
                '0 4px 24px rgba(3,158,227,0.06)',
              minHeight: '520px',
            }}
          >
            {!qualDone ? (
              <QualificationCard
                onComplete={handleQualComplete}
              />
            ) : (
              <div>

                {/* Profile Complete */}
                <div className="flex items-center gap-2 mb-6">

                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      background: '#22C55E',
                    }}
                  >
                    ✓
                  </div>

                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: '#16A34A',
                    }}
                  >
                    Profile Complete
                  </span>

                </div>

                <h3
                  className="font-bold text-xl mb-5"
                  style={{
                    color: '#040D20',
                  }}
                >
                  Your Demo Profile
                </h3>

                <div className="space-y-3">

                  {[
                    {
                      label: 'Industry',
                      value: qualData!.industry,
                    },
                    {
                      label: 'Company Size',
                      value:
                        qualData!.employees +
                        ' employees',
                    },
                    {
                      label: 'Key Challenges',
                      value:
                        qualData!.challenges.join(', ') ||
                        '—',
                    },
                    {
                      label: 'Looking For',
                      value: qualData!.intent,
                    },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="rounded-xl px-4 py-3 transition-all duration-200"
                      style={{
                        background: '#F8FCFF',
                        border:
                          '1px solid #DDF2FC',
                      }}
                    >
                      <div
                        className="text-xs font-semibold mb-0.5"
                        style={{
                          color: '#94A3B8',
                        }}
                      >
                        {item.label}
                      </div>

                      <div
                        className="text-sm font-semibold"
                        style={{
                          color: '#040D20',
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}

                </div>

                {/* Edit */}
                <button
                  onClick={() => setQualDone(false)}
                  className="mt-5 text-sm font-medium transition-all duration-200"
                  style={{
                    color: '#64748B',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color =
                      '#039EE3'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color =
                      '#64748B'
                  }}
                >
                  Edit answers
                </button>

              </div>
            )}
          </div>

          {/* ========================================
              Right: Calendar
          ======================================== */}

          <div
            className="relative rounded-2xl transition-all duration-700"
            style={{
              background: '#ffffff',

              border: qualDone
                ? '1.5px solid rgba(3,158,227,0.3)'
                : '1.5px solid #DDF2FC',

              boxShadow: qualDone
                ? '0 12px 40px rgba(3,158,227,0.12)'
                : '0 4px 24px rgba(0,0,0,0.04)',

              minHeight: '520px',
              overflow: 'hidden',
            }}
          >

            {/* ========================================
                Lock Overlay
            ======================================== */}

            <div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl transition-all duration-700 pointer-events-none z-10"
              style={{
                opacity: qualDone ? 0 : 1,

                background:
                  'rgba(248,252,255,0.88)',

                backdropFilter:
                  qualDone
                    ? 'none'
                    : 'blur(4px)',
              }}
            >

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background:
                    'rgba(3,158,227,0.08)',

                  border:
                    '1px solid rgba(3,158,227,0.15)',

                  color: '#039EE3',
                }}
              >
                <Ic.lock />
              </div>

              <p
                className="text-sm font-semibold mb-1"
                style={{
                  color: '#040D20',
                }}
              >
                Calendar Locked
              </p>

              <p
                className="text-xs text-center max-w-[200px]"
                style={{
                  color: '#94A3B8',
                }}
              >
                Complete the 4-step form to unlock
                your booking slot
              </p>

            </div>

            {/* ========================================
                Calendar Slides In
            ======================================== */}

            <div
              className="p-8 transition-all duration-700"
              style={{
                opacity: qualDone ? 1 : 0,

                transform: qualDone
                  ? 'translateY(0)'
                  : 'translateY(16px)',
              }}
            >
              {qualDone && (
                <CalendarView
                  industry={
                    qualData?.industry ?? ''
                  }
                  qualData={qualData}
                />
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
// ── Process Timeline ──────────────────────────────────────────────────────────
const TIMELINE_STEPS = [
  { step: '01', label: 'Book Your Demo', desc: 'Select a date and time — we\'ll confirm within minutes.', icon: '📅', color: '#039EE3' },
  { step: '02', label: 'We Understand Your Business', desc: 'Our consultant maps your workflows, pain points, and goals before the call.', icon: '💬', color: '#7C3AED' },
  { step: '03', label: 'Your Personalized Walkthrough', desc: 'A live ERP demo configured for your exact industry, processes, and team size.', icon: '🖥️', color: '#0891B2' },
  { step: '04', label: 'Your Implementation Roadmap', desc: 'A clear go-live plan with timelines, training schedule, and dedicated onboarding support.', icon: '🚀', color: '#22C55E' },
]

function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const { ref, visible } = useFadeIn()

  return (
    <section
      className="py-6"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'none'
              : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: 'rgba(3,158,227,0.08)',
              border: '1px solid rgba(3,158,227,0.15)',
              color: '#039EE3',
            }}
          >
            Your Journey
          </div>

          <h2
            className="font-black tracking-tight mb-4"
            style={{
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              color: '#040D20',
            }}
          >
            From Demo to
            <br />

            <span style={{ color: '#039EE3' }}>
              Digital Transformation
            </span>
          </h2>

          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              color: '#64748B',
            }}
          >
            A guided journey from first conversation to a fully
            running ERP — without the guesswork.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

          {/* Timeline Track */}
          <div
            className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                'linear-gradient(90deg, #039EE3, #38BDF8, #7DD3FC, #039EE3)',
              backgroundSize: '200% 100%',
              animation:
                'gradientFlow 3s linear infinite',
            }}
          />

          {TIMELINE_STEPS.map((s, i) => {

            const isActive = activeStep === i

            return (
              <div
                key={i}
                className="flex flex-col items-center text-center cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? 'none'
                    : 'translateY(24px)',
                  transition: `all 0.6s ease ${i * 0.12}s`,
                }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >

                {/* Step Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 relative z-10 transition-all duration-300"
                  style={{
                    background: isActive
                      ? '#039EE3'
                      : '#ffffff',

                    border:
                      '2px solid #039EE3',

                    boxShadow: isActive
                      ? '0 8px 32px rgba(3,158,227,0.28)'
                      : '0 4px 16px rgba(3,158,227,0.10)',

                    transform: isActive
                      ? 'scale(1.1) translateY(-4px)'
                      : 'none',
                  }}
                >
                  <span
                    className="text-2xl transition-all duration-300"
                    style={{
                      color: isActive
                        ? '#ffffff'
                        : '#039EE3',
                    }}
                  >
                    {s.icon}
                  </span>
                </div>

                {/* Step Number */}
                <div
                  className="text-xs font-bold mb-1"
                  style={{
                    color: '#039EE3',
                  }}
                >
                  {s.step}
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-base mb-2"
                  style={{
                    color: '#040D20',
                  }}
                >
                  {s.label}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: '#64748B',
                  }}
                >
                  {s.desc}
                </p>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

// ── Trust Stats ───────────────────────────────────────────────────────────────
const STATS = [
  { icon: <Ic.users />, value: 200, suffix: '+', label: 'Happy Customers', color: '#039EE3' },
  { icon: <Ic.globe />, value: 14, suffix: '', label: 'Industries Served', color: '#7C3AED' },
  { icon: <Ic.award />, value: 8, suffix: '+', label: 'Years Experience', color: '#0891B2' },
  { icon: <Ic.barChart />, value: 500, suffix: '+', label: 'Successful Implementations', color: '#22C55E' },
]

function StatCard({ icon, value, suffix, label, color, triggered }: typeof STATS[0] & { triggered: boolean }) {
  const count = useCountUp(value, triggered)
  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}10`, color }}>{icon}</div>
      <div className="text-5xl font-black mb-2 tabular-nums text-black">{count}{suffix}</div>
      <div className="text-base font-medium" style={{ color: '#64748B' }}>{label}</div>
    </div>
  )
}

function TrustStats() {
  const { ref, visible } = useFadeIn()

  return (
    <section
      className="py-4"
      style={{
        background: '#ffffff',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'none'
              : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}
        >
          {/* Badge */}
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: 'rgba(3,158,227,0.08)',
              border: '1px solid rgba(3,158,227,0.18)',
              color: '#039EE3',
            }}
          >
            Trusted Across India
          </div>

          {/* Heading */}
          <h2
            className="font-black tracking-tight mb-4"
            style={{
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              color: '#040D20',
            }}
          >
            Numbers That Speak
            <br />

            <span style={{ color: '#039EE3' }}>
              For Themselves
            </span>
          </h2>

          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              color: '#64748B',
            }}
          >
            Trusted by businesses looking to simplify operations,
            improve visibility and accelerate growth.
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
          style={{
            background: '#ffffff',
            border: '1px solid #DDF2FC',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow:
              '0 12px 40px rgba(3,158,227,0.08)',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? 'none'
                  : 'translateY(24px)',
                transition: `all 0.6s ease ${i * 0.12}s`,
                borderColor: '#DDF2FC',
              }}
            >
              <StatCard
                {...s}
                triggered={visible}
              />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-12 rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, #F8FCFF 0%, #EAF8FE 100%)',

            border:
              '1px solid rgba(3,158,227,0.20)',

            boxShadow:
              '0 16px 50px rgba(3,158,227,0.10)',
          }}
        >

          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(3,158,227,0.18) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Soft Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '300px',
              height: '300px',
              top: '-180px',
              right: '-80px',
              borderRadius: '50%',
              background: 'rgba(3,158,227,0.10)',
              filter: 'blur(60px)',
            }}
          />

          {/* CTA Content */}
          <div className="relative z-10">

            <h2
              className="font-black text-3xl mb-3"
              style={{
                color: '#040D20',
              }}
            >
              Ready to Transform Your Factory?
            </h2>

            <p
              className="text-lg mb-7"
              style={{
                color: '#64748B',
              }}
            >
              Book your personalized DevERP demo today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Primary CTA */}
              <button
                onClick={scrollToBooking}
                className="px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background:
                    'linear-gradient(135deg, #039EE3, #38BDF8)',

                  boxShadow:
                    '0 8px 28px rgba(3,158,227,0.28)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow =
                    '0 12px 36px rgba(3,158,227,0.38)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow =
                    '0 8px 28px rgba(3,158,227,0.28)'
                }}
              >
                Book Your Free Demo →
              </button>

              {/* Secondary CTA */}
              <button
                onClick={scrollToBooking}
                className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: '#ffffff',
                  border: '1px solid #BAE6FD',
                  color: '#040D20',
                  boxShadow:
                    '0 6px 20px rgba(3,158,227,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background =
                    '#F0F9FF'

                  e.currentTarget.style.borderColor =
                    '#039EE3'

                  e.currentTarget.style.color =
                    '#039EE3'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background =
                    '#ffffff'

                  e.currentTarget.style.borderColor =
                    '#BAE6FD'

                  e.currentTarget.style.color =
                    '#040D20'
                }}
              >
                Talk to a Specialist
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}


// ── Footer ────────────────────────────────────────────────────────────────────
// function Footer() {
//   return (
//     <footer
//       style={{
//         background: '#040D20',
//         borderTop: '1px solid rgba(3,158,227,0.12)',
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

//         {/* Logo / Company Name */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center gap-2">

//             <span
//               className="font-bold text-xl tracking-tight"
//               style={{
//                 color: '#ffffff',
//               }}
//             >
//               DevERP
//             </span>

//           </div>
//         </div>

//         {/* Contact Info */}
//         <div
//           className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm"
//           style={{
//             color: 'rgba(255,255,255,0.45)',
//           }}
//         >

//           {/* Email */}
//           <a
//             href="mailto:mkt@deverp.in"
//             className="flex items-center gap-2 transition-all duration-200"
//             style={{
//               color: 'rgba(255,255,255,0.45)',
//             }}
//             onMouseEnter={e => {
//               e.currentTarget.style.color = '#039EE3'
//             }}
//             onMouseLeave={e => {
//               e.currentTarget.style.color =
//                 'rgba(255,255,255,0.45)'
//             }}
//           >
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={1.5}
//               className="w-4 h-4"
//             >
//               <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//               <polyline points="22,6 12,13 2,6" />
//             </svg>

//             mkt@deverp.in
//           </a>

//           {/* Separator */}
//           <span
//             className="hidden sm:block"
//             style={{
//               color: 'rgba(3,158,227,0.20)',
//             }}
//           >
//             |
//           </span>

//           {/* Phone */}
//           <a
//             href="tel:+918799692554"
//             className="flex items-center gap-2 transition-all duration-200"
//             style={{
//               color: 'rgba(255,255,255,0.45)',
//             }}
//             onMouseEnter={e => {
//               e.currentTarget.style.color = '#039EE3'
//             }}
//             onMouseLeave={e => {
//               e.currentTarget.style.color =
//                 'rgba(255,255,255,0.45)'
//             }}
//           >
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={1.5}
//               className="w-4 h-4"
//             >
//               <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.1 2.22 2 2 0 012.08 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.07 7.91a16 16 0 006.02 6.02l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
//             </svg>

//             +91 87996 92554
//           </a>

//           {/* Separator */}
//           <span
//             className="hidden sm:block"
//             style={{
//               color: 'rgba(3,158,227,0.20)',
//             }}
//           >
//             |
//           </span>

//           {/* Location */}
//           <span
//             className="flex items-center gap-2"
//             style={{
//               color: 'rgba(255,255,255,0.45)',
//             }}
//           >
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={1.5}
//               className="w-4 h-4"
//             >
//               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//               <circle cx="12" cy="10" r="3" />
//             </svg>

//             Ahmedabad, Gujarat, India
//           </span>

//         </div>

//         {/* Bottom Bar */}
//         <div
//           className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs"
//           style={{
//             borderTop:
//               '1px solid rgba(3,158,227,0.10)',
//             color: 'rgba(255,255,255,0.22)',
//           }}
//         >

//           <span>
//             DevERP
//           </span>

//           <div className="flex gap-6">

//             {/* Privacy Policy */}
//             <a
//               href="#"
//               className="transition-all duration-200"
//               style={{
//                 color: 'rgba(255,255,255,0.30)',
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.color =
//                   '#039EE3'
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.color =
//                   'rgba(255,255,255,0.30)'
//               }}
//             >
//               Privacy Policy
//             </a>

//             {/* Terms */}
//             <a
//               href="#"
//               className="transition-all duration-200"
//               style={{
//                 color: 'rgba(255,255,255,0.30)',
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.color =
//                   '#039EE3'
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.color =
//                   'rgba(255,255,255,0.30)'
//               }}
//             >
//               Terms &amp; Conditions
//             </a>

//           </div>

//         </div>
//       </div>
//     </footer>
//   )
// }

// ── Root ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });

    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{
          fontFamily:
            "'Inter',-apple-system,BlinkMacSystemFont,sans-serif",
        }}
      >
         <ScrollReveal />
        

        <Header/>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>

                <HeroSlider />
                <WhyChooseUs />
                <ServicesOffer />
                <OurProducts />
                <CareerCulture />
                <HappyClientele />
                <ClientTestimonials />

              </>
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={
              <>

                <AboutUs />
              </>
            }
          />
          {/* ServiceList */}
          <Route
            path="/services"
            element={
              <>
                <ServiceList />
              </>
            }
          />
          {/* Product list */}
          <Route
            path="/productslist"
            element={
              <>
                <OurProducts />
              </>
            }
          />
          {/* Products */}
          <Route
            path="/products"
            element={
              <>
                <ProductDetails />
              </>
            }
          />
          {/* Clients */}
          <Route
            path="/clients"
            element={
              <>
                <Clients />
              </>
            }
          />

          {/* Clients */}
          <Route
            path="/career"
            element={
              <>
                <CareerPage />
              </>
            }
          />
          {/* Blog */}
          <Route
            path="/blog"
            element={
              <>
                <BlogPage />
              </>
            }
          />

          {/* contact_us */}
          <Route
            path="/contact_us"
            element={
              <>
                <ContactUs />
              </>
            }
          />

          {/* Book Demo */}
          <Route
            path="/book-demo"
            element={
              <>
                <Hero />
                <Benefits />
                <DashboardShowcase />
                <BookingSection />
                <ProcessTimeline />
                <TrustStats />
              </>
            }
          />
        </Routes> 
        <BookDemoButton />
            <StickyActions />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
