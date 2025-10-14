// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect, useCallback,useMemo } from 'react';

// export default function ProjectDetailClient({ project }) {
//   const [currentIndex, setCurrentIndex] = useState(0);3
//   const [isPreviewing, setIsPreviewing] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Use gallery if available, otherwise fall back to images array or single image
//   const gallery = project.gallery || project.images || [project.image];
//   const imageGallery = gallery.filter(img => !img.endsWith('.mp4') && !img.endsWith('.webm'));

//   const minSwipeDistance = 50;

//   const handlePrev = useCallback(() => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev === 0 ? imageGallery.length - 1 : prev - 1));
//     setTimeout(() => setIsTransitioning(false), 700);
//   }, [imageGallery.length, isTransitioning]);

//   const handleNext = useCallback(() => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev === imageGallery.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsTransitioning(false), 700);
//   }, [imageGallery.length, isTransitioning]);

//   const handleSlideClick = useCallback((index) => {
//     if (index !== currentIndex && !isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentIndex(index);
//       setTimeout(() => setIsTransitioning(false), 700);
//     }
//   }, [currentIndex, isTransitioning]);

//   const openPreview = useCallback((imageSrc, index) => {
//     setPreviewImage(imageSrc);
//     setCurrentIndex(index);
//     setIsPreviewing(true);
//     document.body.style.overflow = 'hidden';
//   }, []);

//   const closePreview = useCallback(() => {
//     setIsPreviewing(false);
//     setPreviewImage(null);
//     document.body.style.overflow = 'auto';
//   }, []);

//   const onTouchStart = (e) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const onTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > minSwipeDistance;
//     const isRightSwipe = distance < -minSwipeDistance;
    
//     if (isLeftSwipe) {
//       handleNext();
//     } else if (isRightSwipe) {
//       handlePrev();
//     }
//   };

//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (isPreviewing) {
//         if (e.key === 'Escape') closePreview();
//         if (e.key === 'ArrowLeft') handlePrev();
//         if (e.key === 'ArrowRight') handleNext();
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [isPreviewing, closePreview, handlePrev, handleNext]);

//   const getVisibleSlides = () => {
//     if (typeof window === 'undefined') return 3;
//     if (window.innerWidth < 640) return 1;
//     if (window.innerWidth < 1024) return 2;
//     return 3;
//   };

//   const [visibleSlides, setVisibleSlides] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       setVisibleSlides(getVisibleSlides());
//     };
    
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">

//       <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16">
//             <Link 
//               href="/projects"
//               className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//               <span className="hidden sm:inline">Projects</span>
//             </Link>
            
//             <div className="flex items-center gap-2 sm:gap-3">
//               {project.githubUrl && (
//                 <a 
//                   href={project.githubUrl} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
//                 >
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                   </svg>
//                   <span className="hidden sm:inline">GitHub</span>
//                 </a>
//               )}
//               {project.liveUrl && (
//                 <a 
//                   href={project.liveUrl} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-500/30"
//                 >
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                   <span className="hidden sm:inline">View Live</span>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//         <div className="max-w-4xl mb-8 sm:mb-12 lg:mb-16">
//           <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
//             <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
//               {project.category}
//             </span>
//             {project.featured && (
//               <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full">
//                 <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 Featured
//               </span>
//             )}
//           </div>

//           <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
//             {project.title}
//           </h1>

//           <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
//             {project.shortDescription}
//           </p>
//         </div>

//         {imageGallery.length > 0 && (
//           <div className="mb-12 sm:mb-16 lg:mb-20">
//             <div className="flex items-center justify-between mb-4 sm:mb-6">
//               <h2 className="text-lg sm:text-xl font-bold text-gray-900">Project Gallery</h2>
//               <div className="flex items-center gap-3">
//                 <span className="text-sm text-gray-500 font-medium">
//                   {currentIndex + 1} / {imageGallery.length}
//                 </span>
//               </div>
//             </div>

//             <div className="relative group/carousel">
//               {imageGallery.length > 1 && (
//                 <>
//                   <button
//                     onClick={handlePrev}
//                     disabled={isTransitioning}
//                     className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 rounded-full shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 disabled:opacity-50 border border-gray-200"
//                     aria-label="Previous"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={handleNext}
//                     disabled={isTransitioning}
//                     className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 rounded-full shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 disabled:opacity-50 border border-gray-200"
//                     aria-label="Next"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </>
//               )}

//               <div 
//                 className="overflow-hidden rounded-xl"
//                 onTouchStart={onTouchStart}
//                 onTouchMove={onTouchMove}
//                 onTouchEnd={onTouchEnd}
//               >
//                 <div 
//                   className="flex transition-transform duration-700 ease-out gap-3 sm:gap-4"
//                   style={{
//                     transform: visibleSlides === 1 
//                       ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 12}px))` 
//                       : `translateX(calc(-${currentIndex * (100 / visibleSlides)}% - ${currentIndex * 16}px))`
//                   }}
//                 >
//                   {imageGallery.map((img, index) => {
//                     const isActive = index === currentIndex;
//                     const distance = Math.abs(index - currentIndex);
                    
//                     return (
//                       <div
//                         key={index}
//                         className="flex-shrink-0 transition-all duration-700 cursor-pointer"
//                         style={{
//                           width: visibleSlides === 1 ? '100%' : `calc(${100 / visibleSlides}% - ${(visibleSlides - 1) * 16 / visibleSlides}px)`,
//                           opacity: distance > 2 ? 0.3 : 1,
//                           transform: `scale(${isActive ? 1 : 0.95})`,
//                           zIndex: isActive ? 10 : 1
//                         }}
//                         onClick={() => handleSlideClick(index)}
//                         onMouseEnter={() => setHoveredIndex(index)}
//                         onMouseLeave={() => setHoveredIndex(null)}
//                       >
//                         <div className={`relative w-full aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ${
//                           isActive ? 'ring-4 ring-blue-500 shadow-2xl shadow-blue-500/30' : 'ring-1 ring-gray-200 shadow-lg hover:shadow-xl'
//                         }`}>
//                           <Image
//                             src={img}
//                             alt={`${project.title} - Image ${index + 1}`}
//                             fill
//                             className="object-cover transition-transform duration-500 hover:scale-105"
//                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                             loading={distance > 2 ? 'lazy' : 'eager'}
//                           />
                          
//                           <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-300 ${
//                             hoveredIndex === index || isActive ? 'opacity-100' : 'opacity-0'
//                           }`}>
//                             <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
//                               <div className="flex items-end justify-between gap-3">
//                                 <div className="flex-1 min-w-0">
//                                   <h3 className="text-white font-bold text-base sm:text-lg mb-1 truncate">
//                                     {project.title}
//                                   </h3>
//                                   <p className="text-white/80 text-sm">
//                                     Image {index + 1} of {imageGallery.length}
//                                   </p>
//                                 </div>
//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     openPreview(img, index);
//                                   }}
//                                   className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md hover:bg-white text-gray-900 text-sm font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
//                                 >
//                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
//                                   </svg>
//                                   <span className="hidden sm:inline">Expand</span>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>

//                           {isActive && (
//                             <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
//                               Active
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {imageGallery.length > 1 && (
//                 <div className="flex items-center justify-center gap-2 mt-6">
//                   {imageGallery.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleSlideClick(index)}
//                       disabled={isTransitioning}
//                       className={`transition-all duration-500 ${
//                         index === currentIndex 
//                           ? 'w-10 h-2 bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/50' 
//                           : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:w-4'
//                       } rounded-full disabled:opacity-50`}
//                       aria-label={`Go to slide ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//           <div className="lg:col-span-2 space-y-8 sm:space-y-12">
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Overview</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 {project.description}
//               </p>
//             </section>

//             {project.challenges && project.challenges.length > 0 && (
//               <section>
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Key Challenges</h2>
//                 <div className="space-y-3 sm:space-y-4">
//                   {project.challenges.map((challenge, index) => (
//                     <div 
//                       key={index} 
//                       className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-orange-50 border border-orange-100 rounded-lg sm:rounded-xl hover:shadow-md transition-shadow"
//                     >
//                       <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-sm font-bold text-orange-600 bg-white rounded-full">
//                         {index + 1}
//                       </span>
//                       <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
//                         {challenge}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {project.results && project.results.length > 0 && (
//               <section>
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Results & Impact</h2>
//                 <div className="space-y-3 sm:space-y-4">
//                   {project.results.map((result, index) => (
//                     <div 
//                       key={index} 
//                       className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-green-50 border border-green-100 rounded-lg sm:rounded-xl hover:shadow-md transition-shadow"
//                     >
//                       <svg className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
//                         {result}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}
//           </div>

//           <aside className="space-y-6 sm:space-y-8">
//             <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg lg:sticky lg:top-24 backdrop-blur-sm">
//               <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Project Details</h3>
//               <dl className="space-y-5">
//                 <div className="pb-5 border-b border-gray-200">
//                   <dt className="text-sm font-medium text-gray-500 mb-2">Completed</dt>
//                   <dd className="text-base font-bold text-gray-900">
//                     {new Date(project.completedDate).toLocaleDateString('en-US', { 
//                       month: 'long', 
//                       year: 'numeric' 
//                     })}
//                   </dd>
//                 </div>
//                 <div className="pb-5 border-b border-gray-200">
//                   <dt className="text-sm font-medium text-gray-500 mb-2">Category</dt>
//                   <dd className="text-base font-bold text-gray-900">{project.category}</dd>
//                 </div>
//                 <div>
//                   <dt className="text-sm font-medium text-gray-500 mb-3">Technologies</dt>
//                   <dd className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition-all hover:shadow-md hover:scale-105"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {isPreviewing && (
//         <div 
//           className="fixed inset-0 z-50 bg-black flex items-center justify-center"
//           onClick={closePreview}
//         >
//           <button
//             onClick={closePreview}
//             className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full"
//             aria-label="Close preview"
//           >
//             <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           <div className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-white bg-black/50 backdrop-blur-sm rounded-lg">
//             {currentIndex + 1} / {imageGallery.length}
//           </div>

//           <div className="relative w-full h-full p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
//             <Image
//               src={previewImage}
//               alt={`${project.title} - Full preview`}
//               fill
//               className="object-contain"
//               sizes="100vw"
//             />
//           </div>

//           {imageGallery.length > 1 && (
//             <>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePrev();
//                 }}
//                 className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
//                 aria-label="Previous image"
//               >
//                 <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleNext();
//                 }}
//                 className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
//                 aria-label="Next image"
//               >
//                 <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCallback, useEffect, useMemo, useState } from "react";

// /**
//  * ProjectDetailClient
//  * - Expects a `project` prop that may include:
//  *   id, slug, title, shortDescription, description, problem, role, features (array),
//  *   futureScope (array), images (array), gallery (array), image (string),
//  *   technologies (array), liveUrl, githubUrl, completedDate, challenges, results, videoUrl
//  *
//  * Notes:
//  * - Keeps header sticky and adds page padding to avoid overlap.
//  * - Responsive gallery + lightbox with arrows + keyboard + swipe.
//  * - Clean modern layout for case-study style page.
//  */

// export default function ProjectDetailClient({ project }) {
//   // Defensive default project if none passed
//   project = project || {};

//   // Gallery selection: prefer gallery -> images -> single image
//   const gallery = project.gallery && project.gallery.length
//     ? project.gallery
//     : (project.images && project.images.length ? project.images : (project.image ? [project.image] : []));

//   const imageGallery = useMemo(
//     () => gallery.filter((img) => typeof img === "string" && !img.toLowerCase().endsWith(".mp4") && !img.toLowerCase().endsWith(".webm")),
//     [gallery]
//   );

//   // state
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleSlides, setVisibleSlides] = useState(3);
//   const [isPreviewing, setIsPreviewing] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // swipe
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
//   const minSwipeDistance = 50;

//   useEffect(() => {
//     const getVisible = () => {
//       if (typeof window === "undefined") return 3;
//       if (window.innerWidth < 640) return 1;
//       if (window.innerWidth < 1024) return 2;
//       return 3;
//     };
//     const handleResize = () => setVisibleSlides(getVisible());
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // keyboard navigation when preview open
//   useEffect(() => {
//     const onKey = (e) => {
//       if (!isPreviewing) return;
//       if (e.key === "Escape") closePreview();
//       if (e.key === "ArrowLeft") prevImage();
//       if (e.key === "ArrowRight") nextImage();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [isPreviewing, currentIndex, imageGallery]);

//   // slider actions
//   const startTransitionLock = (cb) => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     cb();
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   const prev = useCallback(() => {
//     startTransitionLock(() =>
//       setCurrentIndex((p) => (p === 0 ? Math.max(imageGallery.length - 1, 0) : p - 1))
//     );
//   }, [imageGallery.length, isTransitioning]);

//   const next = useCallback(() => {
//     startTransitionLock(() =>
//       setCurrentIndex((p) => (p === imageGallery.length - 1 ? 0 : p + 1))
//     );
//   }, [imageGallery.length, isTransitioning]);

//   const prevImage = useCallback(() => {
//     if (imageGallery.length <= 1) return;
//     prev();
//     setPreviewImage(imageGallery[(currentIndex - 1 + imageGallery.length) % imageGallery.length]);
//     setCurrentIndex((p) => (p === 0 ? imageGallery.length - 1 : p - 1));
//   }, [imageGallery, currentIndex, prev]);

//   const nextImage = useCallback(() => {
//     if (imageGallery.length <= 1) return;
//     next();
//     setPreviewImage(imageGallery[(currentIndex + 1) % imageGallery.length]);
//     setCurrentIndex((p) => (p === imageGallery.length - 1 ? 0 : p + 1));
//   }, [imageGallery, currentIndex, next]);

//   const openPreview = (img, idx) => {
//     setPreviewImage(img);
//     setCurrentIndex(idx);
//     setIsPreviewing(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closePreview = () => {
//     setIsPreviewing(false);
//     setPreviewImage(null);
//     document.body.style.overflow = "auto";
//   };

//   // touch handlers for swipe in gallery
//   // const onTouchStart = (e) => {
//   //   setTouchStart(e.targetTouches[0].clientX);
//   //   setTouchEnd(null);
//   // };
//   // const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
//   // const onTouchEnd = () => {
//   //   if (!touchStart || !touchEnd) return;
//   //   const distance = touchStart - touchEnd;
//   //   if (distance > minSwipeDistance) {
//   //     next();
//   //   } else if (distance < -minSwipeDistance) {
//   //     prev();
//   //   }
//   // };

//   // touch handlers for swipe in gallery
//   const onTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//     setTouchEnd(null);
//   };
//   const onTouchMove = (e) => {
//     e.preventDefault();
//     setTouchEnd(e.targetTouches[0].clientX);
//   };
//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     if (distance > minSwipeDistance) {
//       next();
//     } else if (distance < -minSwipeDistance) {
//       prev();
//     }
//   };

//   // touch handlers for lightbox
//   const [lightboxTouchStart, setLightboxTouchStart] = useState(null);
//   const [lightboxTouchEnd, setLightboxTouchEnd] = useState(null);

//   const onLightboxTouchStart = (e) => {
//     setLightboxTouchStart(e.targetTouches[0].clientX);
//     setLightboxTouchEnd(null);
//   };
//   const onLightboxTouchMove = (e) => {
//     setLightboxTouchEnd(e.targetTouches[0].clientX);
//   };
//   const onLightboxTouchEnd = () => {
//     if (!lightboxTouchStart || !lightboxTouchEnd) return;
//     const distance = lightboxTouchStart - lightboxTouchEnd;
//     if (distance > minSwipeDistance) {
//       nextImage();
//     } else if (distance < -minSwipeDistance) {
//       prevImage();
//     }
//   };

//   // small helpers for display fields
//   const formattedDate = (d) => {
//     try {
//       if (!d) return "—";
//       if (d.toLowerCase && d.toLowerCase() === "in progress") return "In Progress";
//       const date = new Date(d);
//       return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
//     } catch {
//       return d;
//     }
//   };

//   // make safe arrays
//   const features = project.features || [];
//   const futureScope = project.futureScope || [];
//   const challenges = project.challenges || [];
//   const results = project.results || [];
//   const technologies = project.technologies || [];

//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900">
//       {/* Header */}
//       <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16">
//             <Link
//               href="/projects"
//               className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//               <span className="hidden sm:inline">Projects</span>
//             </Link>

//             <div className="flex items-center gap-2 sm:gap-3">
//               {project.githubUrl && (
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
//                 >
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path /* github icon */ d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//                   </svg>
//                   <span className="hidden sm:inline">GitHub</span>
//                 </a>
//               )}

//               {project.liveUrl && (
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-500/30"
//                 >
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                   <span className="hidden sm:inline">View Live</span>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main */}
//       <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//         {/* Title & meta */}
//         <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
//           <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
//             {project.category && (
//               <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
//                 {project.category}
//               </span>
//             )}
//             {project.featured && (
//               <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full">
//                 <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 Featured
//               </span>
//             )}
//           </div>

//           <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
//             {project.title}
//           </h1>

//           {project.shortDescription && (
//             <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
//               {project.shortDescription}
//             </p>
//           )}
//         </div>

//         {/* Gallery */}
//         {imageGallery.length > 0 && (
//           <section className="mb-12 sm:mb-16 lg:mb-20">
//             <div className="flex items-center justify-between mb-4 sm:mb-6">
//               <h2 className="text-lg sm:text-xl font-bold text-gray-900">Project Gallery</h2>
//               <div className="flex items-center gap-3">
//                 <span className="text-sm text-gray-500 font-medium">
//                   {currentIndex + 1} / {imageGallery.length}
//                 </span>
//               </div>
//             </div>

//             <div className="relative group/carousel">
//               {/* Prev / Next desktop */}
//               {imageGallery.length > 1 && (
//                 <>
//                   <button
//                     onClick={prev}
//                     disabled={isTransitioning}
//                     aria-label="Previous"
//                     className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 rounded-full shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 disabled:opacity-50 border border-gray-200"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>

//                   <button
//                     onClick={next}
//                     disabled={isTransitioning}
//                     aria-label="Next"
//                     className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 rounded-full shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 disabled:opacity-50 border border-gray-200"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </>
//               )}

//               <div
//                 className="overflow-hidden rounded-xl"
//                 onTouchStart={onTouchStart}
//                 onTouchMove={onTouchMove}
//                 onTouchEnd={onTouchEnd}
//               >
//                 <div
//                   className="flex transition-transform duration-500 ease-out gap-3 sm:gap-4"
//                   style={{
//                     transform:
//                       visibleSlides === 1
//                         ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 12}px))`
//                         : `translateX(calc(-${currentIndex * (100 / visibleSlides)}% - ${currentIndex * 16}px))`,
//                   }}
//                 >
//                   {imageGallery.map((img, index) => {
//                     const distance = Math.abs(index - currentIndex);
//                     const isActive = index === currentIndex;
//                     return (
//                       <div
//                         key={img + index}
//                         className="flex-shrink-0 transition-all duration-500 cursor-pointer"
//                         style={{
//                           width:
//                             visibleSlides === 1
//                               ? "100%"
//                               : `calc(${100 / visibleSlides}% - ${(visibleSlides - 1) * 16 / visibleSlides}px)`,
//                           opacity: distance > 2 ? 0.35 : 1,
//                           transform: `scale(${isActive ? 1 : 0.98})`,
//                           zIndex: isActive ? 10 : 1,
//                         }}
//                         onClick={() => openPreview(img, index)}
//                       >
//                         <div
//                           className={`relative w-full aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden transition-shadow ${
//                             isActive ? "ring-4 ring-blue-500 shadow-2xl shadow-blue-500/30" : "ring-1 ring-gray-200 shadow-lg hover:shadow-xl"
//                           }`}
//                         >
//                           <Image
//                             src={img}
//                             alt={`${project.title} - Image ${index + 1}`}
//                             fill
//                             sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
//                             className="object-cover transition-transform duration-500 hover:scale-105"
//                             loading={distance > 2 ? "lazy" : "eager"}
//                           />

//                           <div
//                             className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-300 ${
//                               isActive ? "opacity-100" : "opacity-0"
//                             }`}
//                           >
//                             <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
//                               <div className="flex items-end justify-between gap-3">
//                                 <div className="flex-1 min-w-0">
//                                   <h3 className="text-white font-bold text-base sm:text-lg mb-1 truncate">{project.title}</h3>
//                                   <p className="text-white/80 text-sm">Image {index + 1} of {imageGallery.length}</p>
//                                 </div>

//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     openPreview(img, index);
//                                   }}
//                                   className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-900 text-sm font-semibold rounded-lg transition-all hover:scale-105 shadow"
//                                 >
//                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5" />
//                                   </svg>
//                                   <span className="hidden sm:inline">Expand</span>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>

//                           {isActive && (
//                             <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
//                               Active
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* indicators */}
//               {imageGallery.length > 1 && (
//                 <div className="flex items-center justify-center gap-2 mt-6">
//                   {imageGallery.map((_, idx) => (
//                     <button
//                       key={"dot-" + idx}
//                       onClick={() => {
//                         if (isTransitioning) return;
//                         setCurrentIndex(idx);
//                       }}
//                       aria-label={`Go to slide ${idx + 1}`}
//                       className={`transition-all duration-300 ${idx === currentIndex ? "w-10 h-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg" : "w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:w-4 rounded-full"}`}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </section>
//         )}

//         {/* Main content + sidebar */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//           <div className="lg:col-span-2 space-y-8 sm:space-y-12">
//             {/* Overview */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Overview</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{project.description}</p>
//             </section>

//             {/* Problem & Role */}
//             {(project.problem || project.role) && (
//               <section className="grid md:grid-cols-2 gap-6">
//                 {project.problem && (
//                   <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
//                     <h3 className="font-semibold mb-2 text-gray-900">Problem</h3>
//                     <p className="text-gray-700 text-sm leading-relaxed">{project.problem}</p>
//                   </div>
//                 )}

//                 {project.role && (
//                   <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
//                     <h3 className="font-semibold mb-2 text-gray-900">My Role</h3>
//                     <p className="text-gray-700 text-sm leading-relaxed">{project.role}</p>
//                   </div>
//                 )}
//               </section>
//             )}

//             {/* Features */}
//             {features.length > 0 && (
//               <section>
//                 <h3 className="text-xl font-bold mb-4">Key Features</h3>
//                 <ul className="grid sm:grid-cols-2 gap-3">
//                   {features.map((f, i) => (
//                     <li key={i} className="flex gap-3 items-start bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
//                       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 grid place-items-center font-semibold">
//                         {i + 1}
//                       </div>
//                       <p className="text-gray-700 text-sm">{f}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </section>
//             )}

//             {/* Challenges */}
//             {challenges.length > 0 && (
//               <section>
//                 <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
//                 <div className="space-y-3">
//                   {challenges.map((c, i) => (
//                     <div key={i} className="flex gap-3 p-4 bg-orange-50 border border-orange-100 rounded-lg">
//                       <div className="w-6 h-6 rounded-full bg-white text-orange-600 font-bold grid place-items-center">{i + 1}</div>
//                       <p className="text-gray-800 text-sm">{c}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Results */}
//             {results.length > 0 && (
//               <section>
//                 <h3 className="text-xl font-bold mb-4">Results & Impact</h3>
//                 <div className="space-y-3">
//                   {results.map((r, i) => (
//                     <div key={i} className="flex gap-3 p-4 bg-green-50 border border-green-100 rounded-lg">
//                       <svg className="flex-shrink-0 w-5 h-5 text-green-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <p className="text-gray-800 text-sm">{r}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Future Scope */}
//             {futureScope.length > 0 && (
//               <section>
//                 <h3 className="text-xl font-bold mb-4">Future Improvements</h3>
//                 <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                   {futureScope.map((f, i) => (
//                     <li key={i} className="text-sm">{f}</li>
//                   ))}
//                 </ul>
//               </section>
//             )}
//           </div>

//           {/* Sidebar */}
//           <aside className="space-y-6 sm:space-y-8">
//             <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg lg:sticky lg:top-24">
//               <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Project Details</h3>
//               <dl className="space-y-5 text-sm">
//                 <div className="pb-4 border-b border-gray-100">
//                   <dt className="text-xs font-medium text-gray-500 mb-1">Completed</dt>
//                   <dd className="text-base font-semibold text-gray-900">{formattedDate(project.completedDate)}</dd>
//                 </div>

//                 {project.client && (
//                   <div className="pt-4 pb-4 border-b border-gray-100">
//                     <dt className="text-xs font-medium text-gray-500 mb-1">Client</dt>
//                     <dd className="text-sm text-gray-800">{project.client}</dd>
//                   </div>
//                 )}

//                 <div className="pt-4 pb-4 border-b border-gray-100">
//                   <dt className="text-xs font-medium text-gray-500 mb-1">Category</dt>
//                   <dd className="text-sm font-semibold text-gray-900">{project.category}</dd>
//                 </div>

//                 <div className="pt-4">
//                   <dt className="text-xs font-medium text-gray-500 mb-2">Technologies</dt>
//                   <dd className="flex flex-wrap gap-2">
//                     {technologies.map((tech) => (
//                       <span key={tech} className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-100 rounded-lg">
//                         {tech}
//                       </span>
//                     ))}
//                   </dd>
//                 </div>
//               </dl>

//               <div className="mt-6 flex gap-3">
//                 {project.liveUrl && (
//                   <a target="_blank" rel="noreferrer" href={project.liveUrl} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow">
//                     View Live
//                   </a>
//                 )}
//                 {project.githubUrl && (
//                   <a target="_blank" rel="noreferrer" href={project.githubUrl} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:shadow">
//                     GitHub
//                   </a>
//                 )}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* Lightbox / Preview */}
//       {isPreviewing && (
//         <div
//           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//           onClick={closePreview}
//           role="dialog"
//           aria-modal="true"
//         >
//           {/* close */}
//           <button
//             onClick={closePreview}
//             className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/30"
//             aria-label="Close preview"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* counter */}
//           <div className="absolute left-4 top-4 px-2.5 py-1.5 text-xs font-medium text-white bg-black/40 rounded-lg">
//             {currentIndex + 1} / {imageGallery.length}
//           </div>

//           {/* prev / next */}
//           {imageGallery.length > 1 && (
//             <>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   prevImage();
//                 }}
//                 className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/30"
//                 aria-label="Previous image"
//               >
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   nextImage();
//                 }}
//                 className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/30"
//                 aria-label="Next image"
//               >
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </>
//           )}

//           {/* image */}
//           <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
//             <Image src={previewImage || imageGallery[currentIndex]} alt={project.title || "Preview"} fill className="object-contain" sizes="100vw" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * ProjectDetailClient
 * - Expects a `project` prop that may include:
 *   id, slug, title, shortDescription, description, problem, role, features (array),
 *   futureScope (array), images (array), gallery (array), image (string),
 *   technologies (array), liveUrl, githubUrl, completedDate, challenges, results, videoUrl
 *
 * Notes:
 * - Keeps header sticky and adds page padding to avoid overlap.
 * - Responsive gallery + lightbox with arrows + keyboard + swipe.
 * - Clean modern layout for case-study style page.
 * - FIXED: Mobile swipe functionality in both gallery and lightbox
 */

export default function ProjectDetailClient({ project }) {
  // Defensive default project if none passed
  project = project || {};

  // Gallery selection: prefer gallery -> images -> single image
  const gallery = project.gallery && project.gallery.length
    ? project.gallery
    : (project.images && project.images.length ? project.images : (project.image ? [project.image] : []));

  const imageGallery = useMemo(
    () => gallery.filter((img) => typeof img === "string" && !img.toLowerCase().endsWith(".mp4") && !img.toLowerCase().endsWith(".webm")),
    [gallery]
  );

  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // swipe for gallery
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // swipe for lightbox
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

  // keyboard navigation when preview open
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

  // slider actions
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

  // touch handlers for swipe in gallery
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

  // touch handlers for lightbox
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

  // small helpers for display fields
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

  // make safe arrays
  const features = project.features || [];
  const futureScope = project.futureScope || [];
  const challenges = project.challenges || [];
  const results = project.results || [];
  const technologies = project.technologies || [];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Projects</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
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
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-500/30"
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
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                {project.category}
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {project.title}
          </h1>

          {project.shortDescription && (
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              {project.shortDescription}
            </p>
          )}
        </div>

        {/* Gallery */}
        {imageGallery.length > 0 && (
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Project Gallery</h2>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 font-medium">
                  {currentIndex + 1} / {imageGallery.length}
                </span>
              </div>
            </div>

            <div className="relative group/carousel">
              {/* Prev / Next desktop */}
              {imageGallery.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    disabled={isTransitioning}
                    aria-label="Previous"
                    className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 rounded-full shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 disabled:opacity-50 border border-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    disabled={isTransitioning}
                    aria-label="Next"
                    className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 rounded-full shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 disabled:opacity-50 border border-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div
                className="overflow-hidden rounded-xl touch-pan-y"
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
                          transform: `scale(${isActive ? 1 : 0.98})`,
                          zIndex: isActive ? 10 : 1,
                        }}
                        onClick={() => openPreview(img, index)}
                      >
                        <div
                          className={`relative w-full aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden transition-shadow ${
                            isActive ? "ring-4 ring-blue-500 shadow-2xl shadow-blue-500/30" : "ring-1 ring-gray-200 shadow-lg hover:shadow-xl"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            loading={distance > 2 ? "lazy" : "eager"}
                          />

                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-300 ${
                              isActive ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                              <div className="flex items-end justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-white font-bold text-base sm:text-lg mb-1 truncate">{project.title}</h3>
                                  <p className="text-white/80 text-sm">Image {index + 1} of {imageGallery.length}</p>
                                </div>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openPreview(img, index);
                                  }}
                                  className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-900 text-sm font-semibold rounded-lg transition-all hover:scale-105 shadow"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5" />
                                  </svg>
                                  <span className="hidden sm:inline">Expand</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          {isActive && (
                            <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                              Active
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* indicators */}
              {imageGallery.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
                  {imageGallery.map((_, idx) => (
                    <button
                      key={"dot-" + idx}
                      onClick={() => {
                        if (isTransitioning) return;
                        setCurrentIndex(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`transition-all duration-300 ${idx === currentIndex ? "w-8 sm:w-10 h-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg" : "w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:w-3 sm:hover:w-4 rounded-full"}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Main content + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{project.description}</p>
            </section>

            {/* Problem & Role */}
            {(project.problem || project.role) && (
              <section className="grid md:grid-cols-2 gap-6">
                {project.problem && (
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-semibold mb-2 text-gray-900">Problem</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                )}

                {project.role && (
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-semibold mb-2 text-gray-900">My Role</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.role}</p>
                  </div>
                )}
              </section>
            )}

            {/* Features */}
            {features.length > 0 && (
              <section>
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex gap-3 items-start bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 grid place-items-center font-semibold">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 text-sm">{f}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges */}
            {challenges.length > 0 && (
              <section>
                <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
                <div className="space-y-3">
                  {challenges.map((c, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-orange-50 border border-orange-100 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-white text-orange-600 font-bold grid place-items-center">{i + 1}</div>
                      <p className="text-gray-800 text-sm">{c}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results */}
            {results.length > 0 && (
              <section>
                <h3 className="text-xl font-bold mb-4">Results & Impact</h3>
                <div className="space-y-3">
                  {results.map((r, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-green-50 border border-green-100 rounded-lg">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-800 text-sm">{r}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Future Scope */}
            {futureScope.length > 0 && (
              <section>
                <h3 className="text-xl font-bold mb-4">Future Improvements</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {futureScope.map((f, i) => (
                    <li key={i} className="text-sm">{f}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg lg:sticky lg:top-24">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Project Details</h3>
              <dl className="space-y-5 text-sm">
                <div className="pb-4 border-b border-gray-100">
                  <dt className="text-xs font-medium text-gray-500 mb-1">Completed</dt>
                  <dd className="text-base font-semibold text-gray-900">{formattedDate(project.completedDate)}</dd>
                </div>

                {project.client && (
                  <div className="pt-4 pb-4 border-b border-gray-100">
                    <dt className="text-xs font-medium text-gray-500 mb-1">Client</dt>
                    <dd className="text-sm text-gray-800">{project.client}</dd>
                  </div>
                )}

                <div className="pt-4 pb-4 border-b border-gray-100">
                  <dt className="text-xs font-medium text-gray-500 mb-1">Category</dt>
                  <dd className="text-sm font-semibold text-gray-900">{project.category}</dd>
                </div>

                <div className="pt-4">
                  <dt className="text-xs font-medium text-gray-500 mb-2">Technologies</dt>
                  <dd className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-100 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex gap-3">
                {project.liveUrl && (
                  <a target="_blank" rel="noreferrer" href={project.liveUrl} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow">
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a target="_blank" rel="noreferrer" href={project.githubUrl} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:shadow">
                    GitHub
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
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
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
            className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 sm:p-3 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/50 z-10 shadow-lg"
            aria-label="Close preview"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* counter */}
          <div className="absolute left-2 sm:left-4 top-2 sm:top-4 px-2.5 py-1.5 text-xs font-medium text-white bg-black/60 backdrop-blur-sm rounded-lg z-10 shadow-lg">
            {currentIndex + 1} / {imageGallery.length}
          </div>

          {/* prev / next - visible on mobile */}
          {imageGallery.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/50 z-10 shadow-lg active:scale-95 transition-transform"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/50 z-10 shadow-lg active:scale-95 transition-transform"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* image */}
          <div 
            className="relative w-full h-full flex items-center justify-center px-12 sm:px-16 py-16 sm:py-20" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl">
              <Image 
                src={previewImage || imageGallery[currentIndex]} 
                alt={project.title || "Preview"} 
                fill 
                className="object-contain" 
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