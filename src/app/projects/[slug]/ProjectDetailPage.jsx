
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * ProjectDetailClient - Enhanced UI Version
 * - All functionality remains the same
 * - Enhanced visual design with modern aesthetics
 * - Improved animations and interactions
 * - Better visual hierarchy and spacing
 */

export default function ProjectDetailClient({ project }) {
  project = project || {};

  const gallery = project.gallery && project.gallery.length
    ? project.gallery
    : (project.images && project.images.length ? project.images : (project.image ? [project.image] : []));

  const imageGallery = useMemo(
    () => gallery.filter((img) => typeof img === "string" && !img.toLowerCase().endsWith(".mp4") && !img.toLowerCase().endsWith(".webm")),
    [gallery]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const [lightboxTouchStart, setLightboxTouchStart] = useState(null);
  const [lightboxTouchEnd, setLightboxTouchEnd] = useState(null);
  
  const minSwipeDistance = 50;

  useEffect(() => {
    const getVisible = () => {
      if (typeof window === "undefined") return 3;
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };
    const handleResize = () => setVisibleSlides(getVisible());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (!isPreviewing) return;
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPreviewing, currentIndex, imageGallery]);

  const startTransitionLock = (cb) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    cb();
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prev = useCallback(() => {
    startTransitionLock(() =>
      setCurrentIndex((p) => (p === 0 ? Math.max(imageGallery.length - 1, 0) : p - 1))
    );
  }, [imageGallery.length, isTransitioning]);

  const next = useCallback(() => {
    startTransitionLock(() =>
      setCurrentIndex((p) => (p === imageGallery.length - 1 ? 0 : p + 1))
    );
  }, [imageGallery.length, isTransitioning]);

  const prevImage = useCallback(() => {
    if (imageGallery.length <= 1) return;
    const newIndex = (currentIndex - 1 + imageGallery.length) % imageGallery.length;
    setCurrentIndex(newIndex);
    setPreviewImage(imageGallery[newIndex]);
  }, [imageGallery, currentIndex]);

  const nextImage = useCallback(() => {
    if (imageGallery.length <= 1) return;
    const newIndex = (currentIndex + 1) % imageGallery.length;
    setCurrentIndex(newIndex);
    setPreviewImage(imageGallery[newIndex]);
  }, [imageGallery, currentIndex]);

  const openPreview = (img, idx) => {
    setPreviewImage(img);
    setCurrentIndex(idx);
    setIsPreviewing(true);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setIsPreviewing(false);
    setPreviewImage(null);
    document.body.style.overflow = "auto";
  };

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };
  const onTouchMove = (e) => {
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
  };

  const onLightboxTouchStart = (e) => {
    setLightboxTouchStart(e.targetTouches[0].clientX);
    setLightboxTouchEnd(null);
  };
  const onLightboxTouchMove = (e) => {
    setLightboxTouchEnd(e.targetTouches[0].clientX);
  };
  const onLightboxTouchEnd = () => {
    if (!lightboxTouchStart || !lightboxTouchEnd) return;
    const distance = lightboxTouchStart - lightboxTouchEnd;
    if (distance > minSwipeDistance) {
      nextImage();
    } else if (distance < -minSwipeDistance) {
      prevImage();
    }
  };

  const formattedDate = (d) => {
    try {
      if (!d) return "—";
      if (d.toLowerCase && d.toLowerCase() === "in progress") return "In Progress";
      const date = new Date(d);
      return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    } catch {
      return d;
    }
  };

  const features = project.features || [];
  const futureScope = project.futureScope || [];
  const challenges = project.challenges || [];
  const results = project.results || [];
  const technologies = project.technologies || [];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-2xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all hover:gap-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200/80 rounded-lg transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg transition-all shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="hidden sm:inline">View Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Title & meta */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
            {project.category && (
              <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full border border-blue-200/50 shadow-sm">
                {project.category}
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-amber-700 bg-gradient-to-r from-amber-50 to-amber-100 rounded-full border border-amber-200/50 shadow-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            {project.title}
          </h1>

          {project.shortDescription && (
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              {project.shortDescription}
            </p>
          )}
        </div>

        {/* Gallery */}
        {imageGallery.length > 0 && (
          <section className="mb-12 sm:mb-16 lg:mb-24">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></span>
                Project Gallery
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 font-semibold px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {currentIndex + 1} / {imageGallery.length}
                </span>
              </div>
            </div>

            <div className="relative group/carousel">
              {imageGallery.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    disabled={isTransitioning}
                    aria-label="Previous"
                    className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center bg-white hover:bg-white text-gray-900 rounded-full shadow-2xl transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 disabled:opacity-50 border-2 border-gray-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    disabled={isTransitioning}
                    aria-label="Next"
                    className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center bg-white hover:bg-white text-gray-900 rounded-full shadow-2xl transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 disabled:opacity-50 border-2 border-gray-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div
                className="overflow-hidden rounded-2xl touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-out gap-3 sm:gap-4"
                  style={{
                    transform:
                      visibleSlides === 1
                        ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 12}px))`
                        : `translateX(calc(-${currentIndex * (100 / visibleSlides)}% - ${currentIndex * 16}px))`,
                  }}
                >
                  {imageGallery.map((img, index) => {
                    const distance = Math.abs(index - currentIndex);
                    const isActive = index === currentIndex;
                    return (
                      <div
                        key={img + index}
                        className="flex-shrink-0 transition-all duration-500 cursor-pointer"
                        style={{
                          width:
                            visibleSlides === 1
                              ? "100%"
                              : `calc(${100 / visibleSlides}% - ${(visibleSlides - 1) * 16 / visibleSlides}px)`,
                          opacity: distance > 2 ? 0.35 : 1,
                          transform: `scale(${isActive ? 1 : 0.96})`,
                          zIndex: isActive ? 10 : 1,
                        }}
                        onClick={() => openPreview(img, index)}
                      >
                        <div
                          className={`relative w-full aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                            isActive ? "ring-4 ring-blue-500 shadow-2xl shadow-blue-500/50" : "ring-2 ring-gray-200/80 shadow-xl hover:shadow-2xl hover:ring-blue-300"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 hover:scale-110"
                            loading={distance > 2 ? "lazy" : "eager"}
                          />

                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                              <div className="flex items-end justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-white font-bold text-base sm:text-lg mb-1 truncate drop-shadow-lg">{project.title}</h3>
                                  <p className="text-white/90 text-sm font-medium">Image {index + 1} of {imageGallery.length}</p>
                                </div>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openPreview(img, index);
                                  }}
                                  className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-blue-50 text-gray-900 text-sm font-bold rounded-xl transition-all hover:scale-110 shadow-xl"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5" />
                                  </svg>
                                  <span className="hidden sm:inline">Expand</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          {isActive && (
                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white text-xs font-extrabold rounded-full shadow-2xl backdrop-blur-sm animate-pulse">
                              Active
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {imageGallery.length > 1 && (
                <div className="flex items-center justify-center gap-2.5 mt-6 sm:mt-8">
                  {imageGallery.map((_, idx) => (
                    <button
                      key={"dot-" + idx}
                      onClick={() => {
                        if (isTransitioning) return;
                        setCurrentIndex(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`transition-all duration-300 ${idx === currentIndex ? "w-10 sm:w-12 h-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50" : "w-2.5 h-2.5 bg-gray-300 hover:bg-blue-400 hover:w-5 sm:hover:w-6 rounded-full shadow-sm"}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Main content + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-10 sm:space-y-14">
            {/* Overview */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{project.description}</p>
            </section>

            {/* Problem & Role */}
            {(project.problem || project.role) && (
              <section className="grid md:grid-cols-2 gap-6">
                {project.problem && (
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl shadow-lg border-2 border-red-100/50 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <h3 className="font-bold text-lg text-gray-900">Problem Statement</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                )}

                {project.role && (
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl shadow-lg border-2 border-purple-100/50 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <h3 className="font-bold text-lg text-gray-900">My Role</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.role}</p>
                  </div>
                )}
              </section>
            )}

            {/* Features */}
            {features.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-green-400 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {features.map((f, i) => (
                    <li key={i} className="flex gap-3 items-start bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-100/50 shadow-sm hover:shadow-md transition-all hover:scale-105">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white grid place-items-center font-bold text-sm shadow-lg">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 text-sm font-medium pt-0.5">{f}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges */}
            {challenges.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Challenges</h3>
                </div>
                <div className="space-y-4">
                  {challenges.map((c, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-100/50 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 text-white font-bold grid place-items-center text-sm shadow-lg">{i + 1}</div>
                      <p className="text-gray-800 text-sm font-medium pt-1">{c}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results */}
            {results.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Results & Impact</h3>
                </div>
                <div className="space-y-4">
                  {results.map((r, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100/50 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <svg className="flex-shrink-0 w-6 h-6 text-green-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-800 text-sm font-medium pt-0.5">{r}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Future Scope */}
            {futureScope.length > 0 && (
              <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-blue-100/50">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">Future Improvements</h3>
                </div>
                <ul className="space-y-3">
                  {futureScope.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white text-xs font-bold grid place-items-center mt-0.5 shadow-md">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium pt-0.5">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-gray-200/80 shadow-2xl lg:sticky lg:top-24">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Project Details
              </h3>
              <dl className="space-y-6 text-sm">
                <div className="pb-5 border-b-2 border-gray-200/50">
                  <dt className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Completed</dt>
                  <dd className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {formattedDate(project.completedDate)}
                  </dd>
                </div>

                {project.client && (
                  <div className="pt-1 pb-5 border-b-2 border-gray-200/50">
                    <dt className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Client</dt>
                    <dd className="text-base font-semibold text-gray-800">{project.client}</dd>
                  </div>
                )}

                <div className="pt-1 pb-5 border-b-2 border-gray-200/50">
                  <dt className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</dt>
                  <dd className="inline-flex items-center px-3 py-1.5 text-sm font-bold text-blue-700 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border border-blue-200 shadow-sm">
                    {project.category}
                  </dd>
                </div>

                <div className="pt-1">
                  <dt className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Technologies</dt>
                  <dd className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span key={tech} className="px-3 py-2 text-sm font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                {project.liveUrl && (
                  <a target="_blank" rel="noreferrer" href={project.liveUrl} className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-xl shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Project
                  </a>
                )}
                {project.githubUrl && (
                  <a target="_blank" rel="noreferrer" href={project.githubUrl} className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 shadow-md hover:shadow-lg hover:scale-105 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Lightbox / Preview */}
      {isPreviewing && (
        <div
          className="fixed inset-0 z-50 bg-black/97 backdrop-blur-sm flex items-center justify-center"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          onTouchStart={onLightboxTouchStart}
          onTouchMove={onLightboxTouchMove}
          onTouchEnd={onLightboxTouchEnd}
        >
          {/* close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closePreview();
            }}
            className="absolute top-3 sm:top-5 right-3 sm:right-5 p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 z-10 shadow-2xl border border-white/20 hover:scale-110 transition-all"
            aria-label="Close preview"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* counter */}
          <div className="absolute left-3 sm:left-5 top-3 sm:top-5 px-4 py-2 text-sm font-bold text-white bg-white/10 backdrop-blur-md rounded-xl z-10 shadow-2xl border border-white/20">
            {currentIndex + 1} / {imageGallery.length}
          </div>

          {/* prev / next */}
          {imageGallery.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 z-10 shadow-2xl border border-white/20 active:scale-95 hover:scale-110 transition-all"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 z-10 shadow-2xl border border-white/20 active:scale-95 hover:scale-110 transition-all"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* image */}
          <div 
            className="relative w-full h-full flex items-center justify-center px-12 sm:px-20 py-16 sm:py-20" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-7xl">
              <Image 
                src={previewImage || imageGallery[currentIndex]} 
                alt={project.title || "Preview"} 
                fill 
                className="object-contain drop-shadow-2xl" 
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}