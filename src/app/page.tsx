"use client";

import Image from "next/image";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";
import {
  personalInfo,
  socials,
  projects,
  techStack,
} from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  FileText,
  Mail,
  ExternalLink,
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Eye,
} from "lucide-react";

/* ========= ICONS ========= */
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const CodeforcesIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7.5c0-.828.672-1.5 1.5-1.5h3z"/>
  </svg>
);

const LeetCodeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const socialIcons: Record<string, (p: { className?: string }) => React.ReactNode> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  codeforces: CodeforcesIcon,
  leetcode: LeetCodeIcon,
};

/* ========= STAGGER ANIMATION ========= */
function FadeIn({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVis(true), 150);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 70}ms, transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 70}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ========= GLYPH PATTERN ========= */
function GlyphPattern({ pattern }: { pattern: number[] }) {
  return (
    <div className="glyph-pattern" aria-hidden>
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className={`glyph-dot ${pattern.includes(i) ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

/* ========= SECTION HEADER ========= */
function SectionHeader({
  code,
  title,
  pattern,
}: {
  code: string;
  title: string;
  pattern: number[];
}) {
  return (
    <div className="section-header flex items-center gap-4 mb-8">
      <GlyphPattern pattern={pattern} />
      <div className="min-w-0">
        <span className="coord-label block mb-1">{code}</span>
        <h2 className="n-heading text-xl sm:text-2xl">{title}</h2>
      </div>
    </div>
  );
}

/* ========= MAIN PAGE ========= */
export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projectKey, setProjectKey] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [githubStats, setGithubStats] = useState({
    totalContributions: 391,
    bestDay: 21,
    activeDays: 101,
  });
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Fetch view count
    fetch("https://api.counterapi.dev/v1/tabrez-nitr/portfolio/up")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setViewCount(data.count + 500);
        }
      })
      .catch((err) => console.error("Error fetching view count:", err));
      
    // Fetch GitHub stats
    fetch("https://github-contributions-api.deno.dev/tabrez-nitr.json")
      .then((res) => res.json())
      .then((data) => {
        let bestDay = 0;
        let activeDays = 0;
        if (data && data.contributions) {
          data.contributions.forEach((week: any) => {
            week.forEach((day: any) => {
              if (day.contributionCount > 0) activeDays++;
              if (day.contributionCount > bestDay) bestDay = day.contributionCount;
            });
          });
          setGithubStats({
            totalContributions: data.totalContributions || 391,
            bestDay,
            activeDays,
          });
        }
      })
      .catch((err) => console.error("Error fetching GitHub stats:", err));
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectProject = (idx: number) => {
    setActiveProjectIdx(idx);
    setProjectKey((k) => k + 1);
    setIsDropdownOpen(false);
  };

  const active = projects[activeProjectIdx];

  return (
    <div className="max-w-3xl mx-auto px-0 sm:px-6 py-8 sm:py-10">
      {/* ===== TOP BAR ===== */}
      <FadeIn index={0}>
        <nav className="flex items-center justify-between mb-8 sm:mb-10 px-5 sm:px-0">
          <div className="flex items-center gap-3">
            <div className="red-dot" />
            <span
              className="n-mono text-xs tabular-nums"
              style={{ color: "var(--fg-muted)" }}
            >
              {mounted ? time : "--:--:--"}
            </span>
            <span className="coord-label hidden sm:inline">{"// LOCAL"}</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <Eye className="w-3.5 h-3.5" style={{ color: "var(--fg-subtle)" }} />
              <span
                className="n-mono text-[11px] tracking-wider tabular-nums"
                style={{ color: "var(--fg-subtle)" }}
              >
                {viewCount !== null ? viewCount.toLocaleString() : "---"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="status-indicator" />
              <span
                className="n-mono text-[11px] tracking-wider"
                style={{ color: "var(--fg-subtle)" }}
              >
                ONLINE
              </span>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </FadeIn>

      {/* X-style feed column: side rails + hairline dividers between blocks */}
      <div className="x-feed">
        {/* ===== HERO ===== */}
        <FadeIn index={1}>
          <section className="x-row py-10 px-5 sm:py-16 sm:px-7 scan-line">
            <div className="flex items-start gap-5 sm:gap-6 mb-6">
              <div className="relative shrink-0">
                <div className="n-card p-[3px]" style={{ width: "fit-content" }}>
                  <Image
                    src={personalInfo.avatar}
                    alt={`${personalInfo.name} profile`}
                    width={92}
                    height={92}
                    className="block w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] object-cover"
                    style={{ 
                      WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 60%)",
                      maskImage: "radial-gradient(circle, black 60%, transparent 60%)",
                      WebkitMaskSize: "2px 2px",
                      maskSize: "2px 2px"
                    }}
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2"
                  style={{ borderColor: "var(--fg-subtle)" }}
                  aria-hidden
                />
              </div>
              <div className="pt-0.5 min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="red-line" />
                  <span className="coord-label">SEC_01 / ID</span>
                </div>
                <h1 className="n-heading text-lg sm:text-4xl mb-2 break-words">
                  {personalInfo.name}
                </h1>
                <p className="n-mono mb-2" style={{ color: "var(--fg-muted)" }}>
                  {personalInfo.tagline}
                </p>
                {personalInfo.location && (
                  <div
                    className="flex items-center gap-1.5 n-mono text-[11px]"
                    style={{ color: "var(--fg-subtle)" }}
                  >
                    <MapPin className="w-3 h-3" />
                    {personalInfo.location.toUpperCase()}
                  </div>
                )}
              </div>
            </div>

            <p
              className="text-sm leading-relaxed max-w-lg mb-6"
              style={{ color: "var(--fg-muted)" }}
            >
              {personalInfo.bio}
            </p>

            <div className="flex items-center gap-5 flex-wrap">
              <a
                href={`mailto:${personalInfo.email}`}
                className="n-btn hover:n-btn-primary"
              >
                <Mail className="w-3.5 h-3.5" />
                CONTACT
              </a>
              <a href={personalInfo.resumeUrl} className="n-btn">
                <FileText className="w-3.5 h-3.5" />
                RESUME
              </a>
            </div>

            {/* X-style hairline before socials */}
            <div className="x-line my-6" />

            <div className="flex flex-wrap items-center gap-5">
              <span className="coord-label mr-3 hidden sm:inline">SOCIAL</span>
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="n-icon-btn"
                    aria-label={s.name}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </section>
        </FadeIn>

        {/* ===== PROJECTS ===== */}
        <FadeIn index={2}>
          <section className="x-row py-10 px-5 sm:py-16 sm:px-7">
            <SectionHeader
              code="SEC_02 / WORK"
              title="PROJECTS"
              pattern={[2, 3, 4, 6, 10, 11, 12, 14, 20, 21, 22]}
            />

            <div className="flex flex-col sm:flex-row gap-3 mb-0 items-stretch sm:items-center relative z-50">
              <div className="relative flex-1" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between n-card-inner px-4 py-3 text-left focus:outline-none focus-visible:border-[var(--fg-muted)]"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="listbox"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="coord-label shrink-0">PROJECT</span>
                    <span className="n-heading text-sm truncate">
                      {active?.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="coord-label tabular-nums">
                      {String(activeProjectIdx + 1).padStart(2, "0")}/
                      {String(projects.length).padStart(2, "0")}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "var(--fg-subtle)" }}
                    />
                  </div>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute left-0 right-0 mt-1.5 z-50 overflow-hidden border"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--line)",
                    }}
                    role="listbox"
                  >
                    {projects.map((project, idx) => (
                      <button
                        key={project.title}
                        type="button"
                        role="option"
                        aria-selected={idx === activeProjectIdx}
                        onClick={() => selectProject(idx)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors
                          ${
                            idx === activeProjectIdx
                              ? "bg-[var(--bg-elevated)]"
                              : "hover:bg-[var(--line-hover)]"
                          }
                          ${idx < projects.length - 1 ? "border-b" : ""}
                        `}
                        style={{ borderColor: "var(--line)" }}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className="coord-label shrink-0 w-12"
                            style={{
                              color:
                                idx === activeProjectIdx
                                  ? "var(--fg)"
                                  : undefined,
                            }}
                          >
                            PRJ_{String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="n-heading text-sm truncate">
                            {project.title}
                          </span>
                        </div>
                        <div className="hidden sm:flex flex-wrap gap-1 justify-end">
                          {project.technologies.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] px-1.5 py-0.5 border"
                              style={{
                                color: "var(--fg-subtle)",
                                borderColor: "var(--line)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* X hairline between controls and detail */}
            <div className="x-line my-5" />

            <div
              key={projectKey}
              className="min-h-[140px] flex flex-col justify-between relative z-10 project-content-enter"
            >
              <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="coord-label">
                      PRJ_{String(activeProjectIdx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex gap-1">
                      {active.githubUrl && (
                        <a
                          href={active.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="n-icon-btn !w-8 !h-8"
                          aria-label="Source code"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {active.liveUrl && (
                        <a
                          href={active.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="n-icon-btn !w-8 !h-8"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="n-heading text-base sm:text-lg mb-2">
                      {active.title}
                    </h3>
                    <p
                      className="text-xs sm:text-[13px] leading-relaxed mb-5"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {active.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {active.technologies.map((tech) => (
                      <span key={tech} className="n-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="x-line mb-3" />
                  <div className="flex items-center justify-between">
                    <div className="red-line" />
                    <span className="coord-label">
                      {String(activeProjectIdx + 1).padStart(2, "0")} OF{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-5">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => selectProject(idx)}
                  aria-label={`View project ${idx + 1}`}
                  className="transition-all duration-150"
                  style={{
                    width: idx === activeProjectIdx ? 16 : 6,
                    height: 6,
                    background:
                      idx === activeProjectIdx
                        ? "var(--fg)"
                        : "var(--line)",
                  }}
                />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ===== TECH STACK ===== */}
        <FadeIn index={3}>
          <section className="x-row py-10 px-5 sm:py-16 sm:px-7">
            <SectionHeader
              code="SEC_03 / TOOLS"
              title="TECH STACK"
              pattern={[0, 4, 5, 9, 10, 12, 14, 15, 19, 20, 24]}
            />

            <div className="n-card-inner ticker-wrap mb-5">
              <div className="ticker-track py-3">
                {[...techStack, ...techStack].flatMap((cat, ci) =>
                  cat.items.map((item, ii) => (
                    <div
                      key={`${ci}-${ii}`}
                      className="flex items-center gap-2 px-4 shrink-0"
                    >
                      {mounted && (
                        <i
                          className={`${item.icon} text-[14px]`}
                          style={{ color: "var(--fg-subtle)" }}
                          aria-hidden
                        />
                      )}
                      <span className="n-mono whitespace-nowrap">
                        {item.name}
                      </span>
                      <span
                        className="w-1 h-1 ml-1 shrink-0"
                        style={{ background: "var(--fg-subtle)" }}
                        aria-hidden
                      />
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* X-style list of tech categories */}
            <div className="border-t" style={{ borderColor: "var(--line)" }}>
              {techStack.map((category) => (
                <div
                  key={category.name}
                  className="py-4 border-b last:border-b-0"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="coord-label block mb-3">{category.name}</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-2 group"
                      >
                        {mounted && (
                          <i
                            className={`${item.icon} text-[13px] transition-colors group-hover:text-[var(--fg)]`}
                            style={{ color: "var(--fg-subtle)" }}
                            aria-hidden
                          />
                        )}
                        <span className="n-mono text-[11px] group-hover:text-[var(--fg)] transition-colors">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ===== GITHUB ACTIVITY ===== */}
        <FadeIn index={4}>
          <section className="x-row py-10 px-5 sm:py-16 sm:px-7">
            <SectionHeader
              code="SEC_04 / ACTIVITY"
              title="GITHUB"
              pattern={[1, 5, 9, 13, 17, 21]}
            />
            
            <div className="flex flex-col mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 border border-[var(--border)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
                <div className="p-4 sm:p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs n-mono uppercase" style={{ color: "var(--fg-muted)" }}>
                    <span className="w-1.5 h-1.5 bg-red-700 shrink-0"></span>
                    Contributions
                  </div>
                  <div className="text-3xl font-bold tracking-tight">{githubStats.totalContributions}</div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs n-mono uppercase" style={{ color: "var(--fg-muted)" }}>
                    <span className="w-1.5 h-1.5 bg-red-700 shrink-0"></span>
                    Best Day
                  </div>
                  <div className="text-3xl font-bold tracking-tight">{githubStats.bestDay} <span className="text-sm font-normal text-[var(--fg-muted)]">commits</span></div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs n-mono uppercase" style={{ color: "var(--fg-muted)" }}>
                    <span className="w-1.5 h-1.5 bg-red-700 shrink-0"></span>
                    Active Days
                  </div>
                  <div className="text-3xl font-bold tracking-tight">{githubStats.activeDays} <span className="text-sm font-normal text-[var(--fg-muted)]">days</span></div>
                </div>
              </div>
            </div>

            <div className="relative pt-6 pb-6">
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--fg-muted)]"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--fg-muted)]"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[var(--fg-muted)]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--fg-muted)]"></div>

              <div className="overflow-x-auto hide-scrollbar">
                <div className="min-w-[750px] px-2">
                  {mounted && (
                    <GitHubCalendar
                      username="tabrez-nitr"
                      colorScheme={theme === "light" ? "light" : "dark"}
                      showTotalCount={false}
                      theme={{
                        dark: [
                          "rgba(255,255,255,0.1)",
                          "rgba(255,255,255,0.3)",
                          "rgba(255,255,255,0.5)",
                          "rgba(255,255,255,0.7)",
                          "rgba(255,255,255,1)",
                        ],
                        light: [
                          "#ebedf0",
                          "#d4d4d4",
                          "#a3a3a3",
                          "#525252",
                          "#171717",
                        ],
                      }}
                      style={{
                        color: "var(--fg-muted)",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 text-xs n-mono" style={{ color: "var(--fg-muted)" }}>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full border border-[var(--fg-muted)]"></span>
                @tabrez-nitr
              </div>
              <div className="uppercase">Last 12 Months</div>
            </div>
          </section>
        </FadeIn>

        {/* ===== CONNECT ===== */}
        <FadeIn index={5}>
          <section className="x-row py-10 px-5 sm:py-16 sm:px-7">
            <SectionHeader
              code="SEC_05 / LINK"
              title="CONNECT"
              pattern={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}
            />

            <p
              className="text-sm leading-relaxed mb-2 max-w-md"
              style={{ color: "var(--fg-muted)" }}
            >
              Open to interesting conversations and collaboration opportunities.
              Let&apos;s build something remarkable.
            </p>

            <div className="x-line my-4" />

            <div>
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect-row group"
                  >
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <Icon className="w-4 h-4 transition-colors group-hover:text-[var(--fg)]" />
                      )}
                      <span className="n-mono">{s.name.toUpperCase()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="coord-label hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                        OPEN
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all" />
                    </div>
                  </a>
                );
              })}
              <a
                href={`mailto:${personalInfo.email}`}
                className="connect-row group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 transition-colors group-hover:text-[var(--fg)]" />
                  <span className="n-mono">MAIL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="coord-label hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity truncate max-w-[160px]">
                    {personalInfo.email}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all" />
                </div>
              </a>
            </div>
          </section>
        </FadeIn>

        {/* ===== FOOTER ===== */}
        <FadeIn index={5}>
          <footer className="x-row py-8 px-5 sm:py-10 sm:px-7">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="red-dot opacity-70" />
                <span
                  className="n-mono text-[11px]"
                  style={{ color: "var(--fg-subtle)" }}
                >
                  © {new Date().getFullYear()} {personalInfo.name.toUpperCase()}
                </span>
              </div>
              <span
                className="n-mono text-[11px]"
                style={{ color: "var(--fg-subtle)" }}
              >
                BUILT WITH NEXT.JS · NOTHING OS INSPIRED
              </span>
            </div>
          </footer>
        </FadeIn>
      </div>
    </div>
  );
}
