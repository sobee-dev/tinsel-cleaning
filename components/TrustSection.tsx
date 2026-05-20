const clips = [
  {
    num: "01",
    label: "In the field",
    pre: "Precision ",
    em: "in every corner.",
    post: "",
    body: "Watch our team work room by room — methodical, thorough, never leaving a detail behind.",
    src: "https://videos.pexels.com/video-files/6195924/6195924-hd_1280_720_25fps.mp4",
  },
  {
    num: "02",
    label: "Deep clean",
    pre: "The ",
    em: "full",
    post: " reset.",
    body: "Kitchens, bathrooms, baseboards. Where most stop, we begin — restoring your space to a true finish.",
    src: "https://videos.pexels.com/video-files/6197071/6197071-hd_1280_720_25fps.mp4",
  },
  {
    num: "03",
    label: "Restoration",
    pre: "Surfaces, ",
    em: "renewed.",
    post: "",
    body: "From grout haze to set-in stains, we don't just clean — we restore the surface beneath.",
    src: "https://videos.pexels.com/video-files/6195942/6195942-hd_1280_720_25fps.mp4",
  },
  {
    num: "04",
    label: "Teamwork",
    pre: "A team that ",
    em: "moves as one.",
    post: "",
    body: "Trained, uniformed, and choreographed — every job handled with the same standard of care.",
    src: "https://videos.pexels.com/video-files/6197060/6197060-hd_1280_720_25fps.mp4",
  },
  {
    num: "05",
    label: "The reveal",
    pre: "The moment ",
    em: "it's done.",
    post: "",
    body: "That moment we hand the space back — gleaming, fresh, ready to live in again.",
    src: "https://videos.pexels.com/video-files/6195191/6195191-hd_1280_720_25fps.mp4",
  },
];

export default function TrustSection() {
  return (
    <section id="work" className="bg-gray-950 py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* Header */}
        <div className="mb-12 max-w-xl">
          <div className="flex justify-start">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-brand-300 text-sm font-medium mb-4">
              See Us in Action
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            See us{" "}
            <span className="font-script font-normal text-brand-400">in action.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            Real footage from real jobs. No edits, no filters — just the work.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clips.map((clip) => (
            <div key={clip.num} className="col-span-1">

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-gray-800 group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={clip.src} type="video/mp4" />
                </video>

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/30 to-transparent" />

                {/* Top row: number + LIVE badge */}
                <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-white/40 tracking-widest tabular-nums">
                    {clip.num}
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/15 text-white/80 text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Bottom overlay: label + title */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-[9px] font-semibold text-brand-400 uppercase tracking-widest mb-1">
                    {clip.label}
                  </p>
                  <h3 className="text-white font-bold text-xs sm:text-sm leading-snug">
                    {clip.pre}
                    <span className="italic text-brand-300">{clip.em}</span>
                    {clip.post}
                  </h3>
                </div>
              </div>

              {/* Body copy */}
              <p className="mt-2 text-gray-500 text-xs leading-relaxed line-clamp-2">
                {clip.body}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
