import { useState } from "react";
import { healingEarthSchedule } from "../data/healingEarthSchedule";
import { ScheduleModal } from "../components/ScheduleModal";

interface ModalState {
  isOpen: boolean;
  title: string;
  content: string;
  photoUrl?: string;
}

const getSpeakerPhoto = (name: string) => {
  if (name.includes("Indra Sekhar Sen")) return "/images/photos/speaker_photos/ Indra Sekhar Sen.jpeg";
  if (name.includes("Aaditeshwar Seth")) return "/images/photos/speaker_photos/Dr. Aaditeshwar Seth.jpg";
  if (name.includes("Sambuddha Mishr")) return "/images/photos/speaker_photos/Sambuddha Mishra.jpg";
  if (name.includes("Ghazala Shahabuddin")) return "/images/photos/speaker_photos/Ghazala Shahabuddin.jpg";
  if (name.includes("Gautam Menon")) return "/images/photos/speaker_photos/Gautam Menon.webp";
  if (name.includes("Uday Shankar")) return "/images/photos/speaker_photos/Dr. Uday Shankar.jpg";
  if (name.includes("Sumedha Basu")) return "/images/photos/speaker_photos/Sumedha Basu.webp";
  if (name.includes("Amita B")) return "/images/photos/speaker_photos/Amita Baviskar.webp";
  return undefined;
};

// Classify row type for visual styling
const getRowType = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("break") || t.includes("tea") || t.includes("coffee")) return "break";
  if (t.includes("lunch")) return "lunch";
  if (t.includes("introductory") || t.includes("panel") || t.includes("workshop") || t.includes("art")) return "special";
  return "talk";
};

export function HealingEarthWorkshop() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: "",
    content: "",
  });

  const day1Schedule = healingEarthSchedule.filter(item => item.Day === "Day 1");
  const day2Schedule = healingEarthSchedule.filter(item => item.Day === "Day 2");

  const openModal = (title: string, content: string, photoUrl?: string) => {
    setModalState({ isOpen: true, title, content, photoUrl });
  };

  const renderScheduleTable = (schedule: typeof healingEarthSchedule) => (
    <div className="mt-6 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      {schedule.map((item, index) => {
        const hasAbstract = !!item.Abstract;
        const hasProfile = !!item["Profile of the Speaker"];
        const titleStr = item[" Title of the Talk"];
        const speakerStr = item["Speaker Name"];
        const rowType = getRowType(titleStr || "");

        const isBreak = rowType === "break" || rowType === "lunch";

        if (isBreak) {
          return (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-100"
            >
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest w-36 shrink-0">{item.Time}</span>
              <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                {rowType === "lunch" ? "🍽️" : "☕"} {titleStr}
              </span>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="group grid grid-cols-[8rem_1fr_1fr] gap-0 border-b border-gray-100 last:border-b-0 hover:bg-blue-50/40 transition-colors duration-150"
            style={{ gridTemplateColumns: "8.5rem 1fr 1fr" }}
          >
            {/* Time column */}
            <div className="px-5 py-5 flex items-start">
              <span className="text-xs font-semibold text-[#0d3862]/60 leading-snug pt-0.5">{item.Time}</span>
            </div>

            {/* Title column */}
            <div className="px-4 py-5 border-l border-gray-100 flex items-start">
              {hasAbstract ? (
                <button
                  onClick={() => openModal(titleStr || "", item.Abstract!)}
                  className="text-[#0d3862] font-semibold text-sm text-left leading-snug hover:text-[#1a6bb5] transition-colors group-hover:underline underline-offset-2 decoration-[#0d3862]/30"
                >
                  {titleStr}
                </button>
              ) : (
                <span className="text-gray-700 font-medium text-sm leading-snug">{titleStr}</span>
              )}
            </div>

            {/* Speaker column */}
            <div className="px-4 py-5 border-l border-gray-100 flex items-start">
              {hasProfile ? (
                <button
                  onClick={() => openModal(speakerStr || "", item["Profile of the Speaker"]!, getSpeakerPhoto(speakerStr || ""))}
                  className="text-[#0d3862] font-medium text-sm text-left leading-snug hover:underline underline-offset-2 decoration-[#0d3862]/40 transition-colors"
                >
                  {speakerStr}
                </button>
              ) : (
                <span className="text-gray-600 text-sm leading-snug">{speakerStr}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0a2e52 0%, #0d3862 40%, #10528a 70%, #0d3862 100%)",
        }}
      >
        {/* decorative rings */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-[350px] h-[350px] rounded-full border border-white/8 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          {/* Label chip */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Flagship Annual Workshop · 3CS, Ashoka University
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5 tracking-tight">
                The Healing Earth<br />
                <span className="text-emerald-300">Workshop Series</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-3">
                Ideas and Conversations on Climate Change and Sustainability
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mt-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  September 11–12, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ashoka University, Sonipat
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://calendar.google.com/calendar/r/eventedit?dates=20260911T000000Z/20260913T000000Z&text=The+Healing+Earth+Workshop+Series&location=Ashoka+University&details=Ideas+and+Conversations+on+Climate+Change+and+Sustainability"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#0d3862] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-all shadow-lg shadow-black/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Add to Google Calendar
              </a>
              <a
                href="https://drive.google.com/file/d/1MSljWEcg5aNcRgTFIQL7nIpirdXBboY_/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Conference Flyer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-1 h-full min-h-[4rem] rounded-full bg-gradient-to-b from-[#0d3862] to-emerald-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-[#0d3862] mb-4">About the Workshop</h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                The Healing Earth workshop is a flagship annual workshop organised by the Centre for Climate Change and Sustainability (3CS) to facilitate conversations around the effects of the climate crisis and its wider impact on our world today. Launched in 2021, the workshop aims to bring together researchers, practitioners, and faculty to explore the links, trade-offs, and tensions at the nexus of climate change, health, and ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workshop Cards ─────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Day 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center gap-0">
              <div className="w-1.5 self-stretch bg-gradient-to-b from-[#0d3862] to-[#1a6bb5]" />
              <div className="px-8 py-7 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">Day 1</span>
                    <h3 className="text-2xl font-bold text-[#0d3862] mt-2">Workshop 1: The Science of Climate Change</h3>
                    <p className="text-gray-400 text-sm font-medium mt-1">September 11, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-3">About</h4>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Climate change is one of the most urgent scientific and societal challenges of our time, and understanding it begins with the science. This workshop is designed to give participants an accessible, research-grounded introduction to Earth's climate system.
                    </p>
                    <p>
                      Spanning four thematic sessions, the programme takes participants on a journey from the fundamental physics of Earth's energy balance, through deep-time evidence of glacial and interglacial cycles to modern anthropogenic disruption.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-3">Who Can Attend</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The workshop is open to everyone — no prior background required. It will be especially valuable for undergraduate or postgraduate students from any discipline, science educators, policy professionals, and science communicators working on climate and environmental issues.
                  </p>
                </div>
              </div>

              <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-4 h-px bg-[#0d3862]/30" />
                Schedule
                <span className="w-4 h-px bg-[#0d3862]/30" />
              </h4>
              <p className="text-xs text-gray-400 mb-3">Click a talk title to read the abstract · Click a speaker name to view their profile</p>
              {renderScheduleTable(day1Schedule)}
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center gap-0">
              <div className="w-1.5 self-stretch bg-gradient-to-b from-emerald-500 to-teal-600" />
              <div className="px-8 py-7 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">Day 2</span>
                    <h3 className="text-2xl font-bold text-[#0d3862] mt-2">Workshop 2: Policy and Governance in the Age of Climate Change</h3>
                    <p className="text-gray-400 text-sm font-medium mt-1">September 12, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-3">About</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This workshop will center on policy and governance in the age of climate change with a special emphasis on fostering micro-adaptations and micro-solutions, led by leading policymakers in India.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-3">Objective</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Exchange of ideas; inspiring young minds; foster meaningful policy oriented research collaborations that 3CS can host.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-3">Who Can Attend</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Open to all — especially valuable for students from any discipline, journalists, environmental change communicators, and policy professionals.
                  </p>
                </div>
              </div>

              <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-4 h-px bg-[#0d3862]/30" />
                Schedule
                <span className="w-4 h-px bg-[#0d3862]/30" />
              </h4>
              <p className="text-xs text-gray-400 mb-3">Click a talk title to read the abstract · Click a speaker name to view their profile</p>
              {renderScheduleTable(day2Schedule)}
            </div>
          </div>

        </div>
      </section>

      <ScheduleModal
        isOpen={modalState.isOpen}
        onOpenChange={(isOpen) => setModalState(prev => ({ ...prev, isOpen }))}
        title={modalState.title}
        photoUrl={modalState.photoUrl}
      >
        {modalState.content}
      </ScheduleModal>
    </div>
  );
}
