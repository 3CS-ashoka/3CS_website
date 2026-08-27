import { useState, type ReactNode } from "react";
import { healingEarthSchedule } from "../data/healingEarthSchedule";
import { ScheduleModal } from "../components/ScheduleModal";

interface ModalState {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  photoUrl?: string;
}

const getSpeakerPhoto = (name: string) => {
  if (name.includes("Indra Sekhar Sen")) return "/images/photos/speaker_photos/ Indra Sekhar Sen.jpeg";
  if (name.includes("Aaditeshwar Seth")) return "/images/photos/speaker_photos/Dr. Aaditeshwar Seth.jpg";
  if (name.includes("Sambuddha Mishr")) return "/images/photos/speaker_photos/sambuddha.avif";
  if (name.includes("Ghazala Shahabuddin")) return "/images/photos/speaker_photos/Ghazala Shahabuddin.jpg";
  if (name.includes("Gautam Menon")) return "/images/photos/speaker_photos/Gautam Menon.webp";
  if (name.includes("Uday Shankar")) return "/images/photos/speaker_photos/Dr. Uday Shankar.jpg";
  if (name.includes("Sumedha Basu")) return "/images/photos/speaker_photos/Sumedha Basu.webp";
  if (name.includes("Amita B")) return "/images/photos/speaker_photos/Amita.JPEG";
  if (name.includes("Meghna Agarwala")) return "/images/photos/speaker_photos/Meghna.webp";
  if (name.includes("Anshu Bhardwaj") || name.includes("Anshu Bharadwaj")) return "/images/photos/speaker_photos/anshu-bharadwa (1).jpg";
  if (name.includes("Argha Manna")) return "/images/photos/speaker_photos/argha.png";
  if (name.includes("Shreekant Gupta")) return "/images/photos/speaker_photos/shreekant gupta (for Ashoka).jpg";
  if (name.includes("Sparsh Agarwal")) return "/images/photos/speaker_photos/Headshot_Sparsh.jpeg";
  if (name.includes("Shivani Krishna")) return "/images/photos/speaker_photos/Shivani Krishna.png";
  if (name.includes("Imroze Khan")) return "/images/photos/speaker_photos/Imroze Khan.png";
  if (name.includes("Gaurav Garg") || name.includes("Gaurav C. Garg")) return "/images/photos/speaker_photos/Gaurav Garg.png";
  if (name.includes("Krishna Gupta")) return "/images/photos/speaker_photos/Krishna Gupta.jpg";
  if (name.includes("Sahana Ghosh") || name.includes("Sahaana Ghosh")) return "/images/photos/speaker_photos/Sahana Ghosh.jpg";
  if (name.includes("R R Rashmi") || name.includes("Rajani Ranjan Rashmi")) return "https://www.teriin.org/sites/default/files/styles/medium/public/pictures/2018-12/rr-rashmi.jpg?itok=eCZ_Gd4R";
  return undefined;
};

// Classify row type for visual styling
const getRowType = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("break") || t.includes("tea") || t.includes("coffee")) return "break";
  if (t.includes("lunch")) return "lunch";
  if (t.includes("introductory") || t.includes("panel") || t.includes("workshop") || t.includes("art") || t.includes("communicate")) return "special";
  return "talk";
};

const heroImages = [
  "/images/photos/schedule/IMG_1074.jpg",
];

export function HealingEarthWorkshop() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: "",
    content: "",
  });

  const day1Schedule = healingEarthSchedule.filter(item => item.Day === "Day 1");
  const day2Schedule = healingEarthSchedule.filter(item => item.Day === "Day 2");

  const openModal = (title: string, content: ReactNode, photoUrl?: string) => {
    setModalState({ isOpen: true, title, content, photoUrl });
  };

  const openSpeakerProfile = (name: string, profile: string, profileUrl?: string, photoUrl?: string) => {
    openModal(
      name,
      profileUrl ? (
        <>
          {profile}
          {"\n\n"}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0d3862] font-medium underline underline-offset-2 hover:text-[#1a6bb5] break-all"
          >
            {profileUrl}
          </a>
        </>
      ) : (
        profile
      ),
      photoUrl
    );
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
              className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3 md:px-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-100"
            >
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest md:w-36 md:shrink-0">{item.Time}</span>
              <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                {rowType === "lunch" ? "🍽️" : "☕"} {titleStr}
              </span>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="group flex flex-col gap-1.5 px-4 py-4 border-b border-gray-100 last:border-b-0 hover:bg-blue-50/40 transition-colors duration-150 md:grid md:grid-cols-[8.5rem_1fr_1fr] md:gap-0 md:p-0"
          >
            {/* Time column */}
            <div className="md:px-5 md:py-5 md:flex md:items-start">
              <span className="text-xs font-semibold text-[#0d3862]/60 uppercase tracking-wide leading-snug md:normal-case md:tracking-normal md:pt-0.5">
                {item.Time}
              </span>
            </div>

            {/* Title column */}
            <div className="md:px-4 md:py-5 md:border-l md:border-gray-100 md:flex md:items-start">
              {hasAbstract ? (
                <button
                  onClick={() => openModal(titleStr || "", item.Abstract!)}
                  className="w-full text-[#0d3862] font-semibold text-sm text-left leading-snug py-1.5 md:py-0 underline decoration-dotted decoration-[#0d3862]/40 underline-offset-4 hover:decoration-solid hover:text-[#1a6bb5] transition-colors"
                >
                  {titleStr}
                </button>
              ) : (
                <span className="text-gray-700 font-medium text-sm leading-snug">{titleStr}</span>
              )}
            </div>

            {/* Speaker column */}
            <div className="md:px-4 md:py-5 md:border-l md:border-gray-100 md:flex md:items-start">
              {"Speakers" in item && Array.isArray(item.Speakers) && item.Speakers.length > 0 ? (
                <div className="flex flex-col gap-2 md:gap-3 w-full">
                  {item.Speakers.map((speaker, speakerIndex) =>
                    speaker.profile ? (
                      <button
                        key={speakerIndex}
                        onClick={() => openModal(speaker.name, speaker.profile, getSpeakerPhoto(speaker.name))}
                        className="w-full text-[#0d3862] font-medium text-sm text-left leading-snug py-1.5 md:py-0 underline decoration-dotted decoration-[#0d3862]/40 underline-offset-4 hover:decoration-solid transition-colors"
                      >
                        {speaker.name}
                      </button>
                    ) : (
                      <span key={speakerIndex} className="text-gray-600 text-sm leading-snug">
                        {speaker.name}
                      </span>
                    )
                  )}
                </div>
              ) : hasProfile && speakerStr?.startsWith("Moderated by ") ? (
                <p className="text-gray-600 text-sm leading-snug py-1.5 md:py-0">
                  Moderated by{" "}
                  <button
                    onClick={() => {
                      const linkedName = speakerStr.replace(/^Moderated by /, "");
                      openSpeakerProfile(
                        linkedName,
                        item["Profile of the Speaker"]!,
                        "Profile URL" in item ? item["Profile URL"] : undefined,
                        getSpeakerPhoto(linkedName)
                      );
                    }}
                    className="inline text-sm font-normal text-[#0d3862] underline decoration-dotted decoration-[#0d3862]/40 underline-offset-4 hover:decoration-solid transition-colors"
                  >
                    {speakerStr.replace(/^Moderated by /, "")}
                  </button>
                </p>
              ) : hasProfile ? (
                <button
                  onClick={() =>
                    openSpeakerProfile(
                      speakerStr || "",
                      item["Profile of the Speaker"]!,
                      "Profile URL" in item ? item["Profile URL"] : undefined,
                      getSpeakerPhoto(speakerStr || "")
                    )
                  }
                  className="w-full text-[#0d3862] font-medium text-sm text-left leading-snug py-1.5 md:py-0 underline decoration-dotted decoration-[#0d3862]/40 underline-offset-4 hover:decoration-solid transition-colors whitespace-pre-line"
                >
                  {speakerStr}
                </button>
              ) : (
                <span className="text-gray-600 text-sm leading-snug whitespace-pre-line">{speakerStr}</span>
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
        {/* Background image strip */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: `url(${heroImages[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

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

              {/* Registration deadline banner */}
              <div className="mt-6 inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-lg px-4 py-2 text-sm text-emerald-200">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Last Date to Register: <strong className="text-emerald-300">20 August 2026</strong></span>
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
                href="https://drive.google.com/file/d/11A8wNH08Y51xUqTgsoMMNRA-r2ODvLTj/view?usp=sharing"
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
              <a
                href="https://drive.google.com/file/d/1d-jSZF8hvCzXC82QTj2qI8gysYsivQL5/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Conference Brochure
              </a>
            </div>
          </div>
        </div>

        <p className="absolute bottom-1 right-1 text-[11px] text-white/50 tracking-wide pointer-events-none">
          Photo credit: Dipendra Nath Basu
        </p>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-1 h-full min-h-[4rem] rounded-full bg-gradient-to-b from-[#0d3862] to-emerald-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-[#0d3862] mb-4">About the Workshop</h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                The Healing Earth workshop series is designed to catalyse action on issues pertaining to climate change and sustainability by advancing policy engagement; building strategic partnerships among policymakers, practitioners, academics, and students; and promoting the adoption of scalable climate solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed text-justify mt-4">
                This inaugural workshop will focus on the Science, and Policy &amp; Governance aspects of climate change.
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
              <div className="px-5 sm:px-8 py-6 sm:py-7 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">Day 1</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0d3862] mt-2">Workshop 1: The Science of Climate Change</h3>
                    <p className="text-gray-400 text-sm font-medium mt-1">September 11, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-8 pb-8">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 mb-8">
                <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-3">About</h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  This workshop will centre on Earth’s climate systems with special emphasis on climate science, biodiversity, adaptation, and communication. It will give participants an accessible, research-grounded introduction from leading scholars and practitioners to how the climate has evolved, how human activities are reshaping it, and how different approaches can address the resulting impacts on ecosystems and communities.
                </p>
              </div>

              <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-4 h-px bg-[#0d3862]/30" />
                Schedule
                <span className="w-4 h-px bg-[#0d3862]/30" />
              </h4>
              <p className="text-xs text-gray-400 mb-3">Tap a talk title to read the abstract · Tap a speaker name to view their profile</p>
              {renderScheduleTable(day1Schedule)}
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center gap-0">
              <div className="w-1.5 self-stretch bg-gradient-to-b from-emerald-500 to-teal-600" />
              <div className="px-5 sm:px-8 py-6 sm:py-7 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">Day 2</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0d3862] mt-2">Workshop 2: Policy and Governance in the Age of Climate Change</h3>
                    <p className="text-gray-400 text-sm font-medium mt-1">September 12, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-8 pb-8">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 mb-8">
                <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-3">About</h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  This workshop will give participants an accessible introduction by some of the leading policymakers, innovators, and scholars of India on how policy can help us adapt to and mitigate the harmful effects of climate change, and how it can help foster meaningful synergies between government, industry, society, and science.
                </p>
              </div>

              <h4 className="text-sm font-bold text-[#0d3862] uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-4 h-px bg-[#0d3862]/30" />
                Schedule
                <span className="w-4 h-px bg-[#0d3862]/30" />
              </h4>
              <p className="text-xs text-gray-400 mb-3">Tap a talk title to read the abstract · Tap a speaker name to view their profile</p>
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
