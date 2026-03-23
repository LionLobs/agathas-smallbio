import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import agathaCutout from "@/assets/agatha-cutout.png";
import goldLeaves from "@/assets/gold-leaves-1.png";
import goldLeafSingle from "@/assets/gold-leaf-single.png";
import wolfBgLeft from "@/assets/wolf-bg-left.png";
import wolfBgRight from "@/assets/wolf-bg-right.png";
import lionSilhouette from "@/assets/lion-silhouette.png";
import lionlobsLogo from "@/assets/lionlobs-logo.png";
import lionlobsLogoFull from "@/assets/lionlobs-logo-full.png";
import { MessageCircle, Globe, Instagram, Link2, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: MessageCircle,
    title: "Whatsapp",
    subtitle: "Fale conosco",
    href: "https://wa.me/5548984380321?text=Ol%C3%A1%20Agatha%2C%20vim%20atrav%C3%A9s%20do%20seu%20Cart%C3%A3o%20de%20visita%20online%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20SOBRE%3A",
  },
  {
    icon: Globe,
    title: "Nosso Site",
    subtitle: "Acesse e saiba mais",
    href: "https://lionlobs.com.br/",
  },
  {
    icon: Instagram,
    title: "Instagram",
    subtitle: "Acesse e saiba mais",
    href: "https://www.instagram.com/lionlobs/",
  },
  {
    icon: Link2,
    title: "Link para Bio",
    subtitle: "Solicite sua página personalizada de links",
    href: "https://wa.me/5548984380321?text=Ol%C3%A1%20Agatha%2C%20vim%20atrav%C3%A9s%20do%20seu%20Cart%C3%A3o%20de%20visita%20online%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20SOBRE%3A",
  },
];

const values = [
  { bold: "Estratégia", rest: " antes de estética" },
  { bold: "Marca", rest: " com autoridade" },
  { bold: "Posicionamento", rest: " inteligente" },
  { bold: "Crescimento", rest: " com gestão" },
  { bold: "Decisões baseadas", rest: " em visão e dados" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// --- Sparkle particle ---
const GoldSparkle = ({
  className,
  size = 2,
  delay = 0,
}: {
  className?: string;
  size?: number;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, hsl(45 98% 78%), hsl(42 85% 55% / 0.7), transparent)`,
      boxShadow: `0 0 ${size * 5}px hsl(42 85% 52% / 0.8), 0 0 ${size * 10}px hsl(42 72% 45% / 0.4)`,
    }}
    animate={{ opacity: [0, 1, 0.5, 1, 0], scale: [0, 2, 1, 2, 0] }}
    transition={{ duration: 3.5 + delay, repeat: Infinity, repeatDelay: 1 + delay, delay }}
  />
);

// --- Ornamental divider ---
const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="flex-1 h-px bg-gold-gradient animate-shimmer" style={{ backgroundSize: "300% auto" }} />
    <div className="flex items-center gap-1.5">
      <span className="text-primary text-xs opacity-60">◆</span>
      <span className="text-primary text-base opacity-90">◈</span>
      <span className="text-primary text-xs opacity-60">◆</span>
    </div>
    <div className="flex-1 h-px bg-gold-gradient animate-shimmer" style={{ backgroundSize: "300% auto" }} />
  </div>
);

// --- Rotating ring ornament ---
const OrnamentialRing = ({
  size,
  opacity,
  className,
  reverse = false,
}: {
  size: number;
  opacity: number;
  className?: string;
  reverse?: boolean;
}) => (
  <div
    className={`absolute rounded-full pointer-events-none border ${reverse ? "animate-rotate-reverse" : "animate-rotate-slow"} ${className}`}
    style={{
      width: size,
      height: size,
      opacity,
      borderColor: `hsl(42 72% 52% / 0.25)`,
      boxShadow: `0 0 ${size * 0.08}px hsl(42 72% 52% / 0.12)`,
    }}
  />
);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const wolfParallaxLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const wolfParallaxRight = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const profileParallax = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">

      {/* === TOP LOGO HEADER === */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4"
        style={{
          background: "linear-gradient(to bottom, hsl(0 0% 3% / 0.95), transparent)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={lionlobsLogoFull}
          alt="Agência LionLobs"
          className="h-10 md:h-12 w-auto object-contain"
          style={{
            filter: "drop-shadow(0 0 12px hsl(42 72% 52% / 0.55)) brightness(1.05)",
          }}
        />
      </motion.header>

      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pb-20"
      >
        {/* === Wolf LEFT — atrás da foto === */}
        <motion.div
          className="absolute top-0 left-0 w-[60%] h-full pointer-events-none z-10"
          style={{ x: wolfParallaxLeft }}
        >
          <img
            src={wolfBgLeft}
            alt=""
            className="w-full h-full object-cover object-right"
            style={{
              opacity: 0.6,
              filter: "brightness(0.88) contrast(1.1) sepia(0.1)",
              maskImage: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 55%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 12%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 72%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 55%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 12%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 72%, transparent 100%)",
              WebkitMaskComposite: "source-in",
            }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 50%, transparent 30%, hsl(0 0% 3% / 0.45) 65%, hsl(0 0% 3% / 0.9) 100%)" }} />
        </motion.div>

        {/* === Wolf RIGHT — atrás da foto === */}
        <motion.div
          className="absolute top-0 right-0 w-[60%] h-full pointer-events-none z-10"
          style={{ x: wolfParallaxRight }}
        >
          <img
            src={wolfBgRight}
            alt=""
            className="w-full h-full object-cover object-left"
            style={{
              opacity: 0.6,
              filter: "brightness(0.88) contrast(1.1) sepia(0.1)",
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 55%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 12%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 72%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 55%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 12%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 72%, transparent 100%)",
              WebkitMaskComposite: "source-in",
            }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 85% 50%, transparent 30%, hsl(0 0% 3% / 0.45) 65%, hsl(0 0% 3% / 0.9) 100%)" }} />
        </motion.div>

        {/* Lion silhouette — centered atmospheric bg */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ top: "5%", opacity: 0.07 }}
        >
          <motion.img
            src={lionSilhouette}
            alt=""
            className="w-[70%] max-w-[500px] object-contain animate-breathe"
            style={{
              filter: "sepia(1) saturate(2) hue-rotate(10deg) brightness(0.7)",
            }}
          />
        </div>

        {/* === DECORATIVE RINGS === */}
        <OrnamentialRing size={520} opacity={0.12} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]" />
        <OrnamentialRing size={380} opacity={0.18} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]" reverse />
        <OrnamentialRing size={260} opacity={0.1} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]" />

        {/* Ambient radial glow — center */}
        <div
          className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse-gold"
          style={{
            background: "radial-gradient(circle, hsl(42 85% 52% / 0.1), hsl(38 80% 38% / 0.05) 50%, transparent 70%)",
          }}
        />

        {/* === GOLD LEAVES — floating === */}
        <motion.img
          src={goldLeaves}
          alt=""
          className="absolute -top-6 -left-8 w-52 md:w-64 pointer-events-none z-10 animate-float"
          style={{ filter: "drop-shadow(0 0 25px hsl(42 85% 52% / 0.55))", opacity: 0.95 }}
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 0.95, rotate: -18 }}
          transition={{ duration: 1.5 }}
        />
        <motion.img
          src={goldLeafSingle}
          alt=""
          className="absolute top-12 -right-3 w-32 md:w-40 pointer-events-none z-10 animate-float float-delay-1"
          style={{ filter: "drop-shadow(0 0 18px hsl(42 85% 52% / 0.5))", opacity: 0.88 }}
          initial={{ opacity: 0, rotate: 40 }}
          animate={{ opacity: 0.88, rotate: 28 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.img
          src={goldLeafSingle}
          alt=""
          className="absolute top-[35%] -left-2 w-24 pointer-events-none z-10 animate-float float-delay-2"
          style={{ filter: "drop-shadow(0 0 14px hsl(42 85% 52% / 0.4))", opacity: 0.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
        <motion.img
          src={goldLeaves}
          alt=""
          className="absolute bottom-10 -right-8 w-44 pointer-events-none z-10 animate-float float-delay-3"
          style={{
            filter: "drop-shadow(0 0 20px hsl(42 85% 52% / 0.4))",
            opacity: 0.5,
            transform: "scaleX(-1) rotate(160deg)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        {/* === SPARKLES — more and larger === */}
        <GoldSparkle className="top-[10%] left-[15%]" size={5} delay={0} />
        <GoldSparkle className="top-[20%] right-[10%]" size={4} delay={0.5} />
        <GoldSparkle className="top-[35%] left-[28%]" size={3} delay={1} />
        <GoldSparkle className="top-[6%] right-[25%]" size={6} delay={0.3} />
        <GoldSparkle className="top-[48%] left-[10%]" size={4} delay={1.5} />
        <GoldSparkle className="top-[28%] right-[35%]" size={3} delay={0.8} />
        <GoldSparkle className="top-[16%] left-[55%]" size={5} delay={1.2} />
        <GoldSparkle className="top-[45%] right-[18%]" size={4} delay={0.2} />
        <GoldSparkle className="top-[62%] left-[22%]" size={3} delay={1.8} />
        <GoldSparkle className="top-[40%] left-[45%]" size={4} delay={0.6} />
        <GoldSparkle className="top-[13%] left-[38%]" size={3} delay={1.4} />
        <GoldSparkle className="top-[55%] right-[30%]" size={5} delay={0.9} />
        <GoldSparkle className="top-[72%] right-[12%]" size={3} delay={2} />
        <GoldSparkle className="top-[8%] left-[48%]" size={4} delay={0.4} />

        {/* === PROFILE PHOTO — sem corte seco === */}
        <motion.div
          className="relative z-20"
          style={{ y: profileParallax }}
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Outer golden halo */}
          <div
            className="absolute -inset-16 rounded-full pointer-events-none animate-pulse-gold"
            style={{
              background: "radial-gradient(circle, hsl(42 85% 52% / 0.15), hsl(42 72% 45% / 0.08) 50%, transparent 70%)",
            }}
          />
          {/* Inner aura */}
          <div
            className="absolute -inset-6 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsl(42 85% 52% / 0.1), transparent 65%)",
            }}
          />
          <div className="relative">
            {/* Glow aura behind the photo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 55%, hsl(42 72% 45% / 0.22) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <img
              src={agathaCutout}
              alt="Agatha Scudero"
              className="w-[22rem] md:w-[30rem] lg:w-[36rem] h-auto object-contain relative z-10"
              style={{
                filter: "drop-shadow(0 0 60px hsl(42 72% 45% / 0.5))",
                maskImage: `linear-gradient(to bottom,
                  black 0%,
                  black 45%,
                  rgba(0,0,0,0.96) 55%,
                  rgba(0,0,0,0.82) 63%,
                  rgba(0,0,0,0.55) 72%,
                  rgba(0,0,0,0.25) 82%,
                  rgba(0,0,0,0.05) 90%,
                  transparent 100%
                )`,
                WebkitMaskImage: `linear-gradient(to bottom,
                  black 0%,
                  black 45%,
                  rgba(0,0,0,0.96) 55%,
                  rgba(0,0,0,0.82) 63%,
                  rgba(0,0,0,0.55) 72%,
                  rgba(0,0,0,0.25) 82%,
                  rgba(0,0,0,0.05) 90%,
                  transparent 100%
                )`,
              }}
            />
          </div>
        </motion.div>

        {/* === NAME === */}
        <motion.div
          className="relative z-20 text-center mt-6 px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-elegant text-muted-foreground text-sm md:text-base tracking-[0.6em] uppercase mb-3 font-light italic">
            Prazer, &nbsp; me chamo
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
            <span className="text-gold-shimmer text-glow-gold">Agatha Scudero</span>
          </h1>
          <p className="font-elegant text-muted-foreground text-xs tracking-[0.5em] uppercase mt-3 font-light">
            CEO · Agência LionLobs
          </p>
        </motion.div>

        {/* Decorative bottom row */}
        <motion.div
          className="flex items-center gap-3 mt-7 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
        >
          {["◇", "◆", "♡", "◈", "⬟", "⬡", "▣", "◈", "♡", "◆", "◇"].map((s, i) => (
            <span key={i} className="text-[10px] text-primary" style={{ opacity: 0.4 + (i % 3) * 0.2 }}>
              {s}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ===== BIO TEXT ===== */}
      <section className="px-8 py-14 relative">
        <GoldDivider className="max-w-md mx-auto mb-12" />
        <motion.div
          className="max-w-md mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-elegant text-lg md:text-xl italic text-foreground leading-relaxed"
          >
            <span className="font-bold text-gold-shimmer not-italic text-xl md:text-2xl">
              CEO da Agência LIONLOBS
            </span>{" "}
            especializada em marketing digital estratégico, onde acreditamos que o poder do design e do marketing pode impulsionar marcas e negócios a novos patamares.
          </motion.p>
          <motion.div variants={fadeUp} custom={1} className="mt-10">
            <GoldDivider />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== MISSION CARD ===== */}
      <section className="px-6 pb-16">
        <motion.div
          className="max-w-md mx-auto rounded-2xl p-8 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, hsl(0 0% 5%), hsl(0 0% 8%))",
            border: "1px solid hsl(42 40% 20%)",
            boxShadow:
              "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 hsl(42 50% 30% / 0.2), inset 0 -1px 0 hsl(35 65% 20% / 0.15)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
            style={{ borderTop: "1px solid hsl(42 72% 52% / 0.5)", borderLeft: "1px solid hsl(42 72% 52% / 0.5)", borderRadius: "12px 0 0 0" }} />
          <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none"
            style={{ borderTop: "1px solid hsl(42 72% 52% / 0.5)", borderRight: "1px solid hsl(42 72% 52% / 0.5)", borderRadius: "0 12px 0 0" }} />
          <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none"
            style={{ borderBottom: "1px solid hsl(42 72% 52% / 0.5)", borderLeft: "1px solid hsl(42 72% 52% / 0.5)", borderRadius: "0 0 0 12px" }} />
          <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
            style={{ borderBottom: "1px solid hsl(42 72% 52% / 0.5)", borderRight: "1px solid hsl(42 72% 52% / 0.5)", borderRadius: "0 0 12px 0" }} />

          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 25% 50%, hsl(42 80% 52%), transparent 60%)" }}
          />
          <motion.p
            variants={fadeUp}
            custom={0}
            className="relative font-elegant text-lg md:text-xl text-muted-foreground leading-relaxed italic"
          >
            Nossa missão é criar{" "}
            <span className="font-bold text-foreground not-italic">soluções criativas</span>{" "}
            que inspirem, engajem e gerem{" "}
            <span className="text-gold-shimmer not-italic font-semibold">resultados significativos</span>{" "}
            para nossos clientes.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== LINKS SECTION ===== */}
      <section className="px-6 pb-20 relative">
        <motion.div
          className="max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GoldDivider className="mb-6" />
          <div className="text-center py-3">
            <p className="font-elegant text-base md:text-lg tracking-[0.45em] uppercase text-primary font-light italic">
              Clique nos Links
            </p>
          </div>
          <GoldDivider className="mt-6" />
        </motion.div>

        <motion.div
          className="max-w-md mx-auto space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={i}
              className="group relative flex items-center gap-5 p-5 rounded-2xl overflow-hidden transition-all duration-400 hover:scale-[1.025] active:scale-[0.98]"
              style={{
                background: "linear-gradient(145deg, hsl(0 0% 7%), hsl(0 0% 11%))",
                border: "1px solid hsl(42 40% 18%)",
                boxShadow:
                  "0 6px 30px rgba(0,0,0,0.4), inset 0 1px 0 hsl(42 50% 28% / 0.2)",
              }}
            >
              {/* Gold scan line on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 15% 50%, hsl(42 72% 52% / 0.14), transparent 60%)",
                }}
              />
              <div
                className="absolute top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  left: 0,
                  background: "var(--gold-gradient)",
                }}
              />

              {/* Icon ring */}
              <div
                className="relative z-10 w-13 h-13 min-w-[52px] min-h-[52px] rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  border: "1px solid hsl(42 55% 30% / 0.6)",
                  background: "hsl(0 0% 6%)",
                  boxShadow: "0 0 0 0 hsl(42 72% 52% / 0)",
                }}
              >
                <link.icon
                  className="w-5 h-5 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(42_72%_52%_/_0.8)]"
                />
              </div>

              <div className="relative z-10 flex-1 min-w-0">
                <p className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {link.title}
                </p>
                <p className="text-muted-foreground font-sans text-xs mt-0.5 truncate">
                  {link.subtitle}
                </p>
              </div>
              <ArrowUpRight className="relative z-10 w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA QUOTE ===== */}
      <section className="px-6 py-16 text-center relative overflow-hidden">
        {/* BG accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, hsl(42 72% 52% / 0.05), transparent 65%)",
          }}
        />
        <GoldDivider className="max-w-xs mx-auto mb-10" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-md mx-auto relative z-10"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-elegant text-2xl md:text-3xl italic text-muted-foreground leading-snug"
          >
            Para quem quer parar de tentar
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="font-display text-2xl md:text-3xl italic text-gold-shimmer font-bold mt-1"
          >
            e começar a construir.
          </motion.p>
        </motion.div>
        <GoldDivider className="max-w-xs mx-auto mt-10" />
      </section>

      {/* ===== VALUES ===== */}
      <section className="px-8 py-16 relative">
        {/* Lion watermark */}
        <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.04] pointer-events-none">
          <img src={lionSilhouette} alt="" className="w-full h-full object-contain" style={{ filter: "sepia(1) saturate(2) hue-rotate(10deg)" }} />
        </div>
        <motion.div
          className="max-w-md mx-auto space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((v, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              custom={i}
              className="font-elegant text-xl md:text-2xl italic text-foreground border-l-2 pl-4"
              style={{ borderColor: `hsl(42 ${50 + i * 5}% ${28 + i * 4}%)` }}
            >
              <span className="text-gold-shimmer font-bold not-italic text-2xl md:text-3xl">{v.bold}</span>
              {v.rest}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* ===== LEÃO + LOBO MANIFESTO ===== */}
      <section className="px-6 py-24 relative overflow-hidden">
        {/* Atmospheric bg glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse-gold"
          style={{ background: "radial-gradient(circle, hsl(42 72% 52% / 0.06), transparent 65%)" }}
        />

        <motion.img
          src={goldLeaves}
          alt=""
          className="absolute -right-8 bottom-6 w-48 pointer-events-none"
          style={{ filter: "drop-shadow(0 0 18px hsl(42 85% 52% / 0.35))", opacity: 0.25 }}
          initial={{ opacity: 0, rotate: 165 }}
          whileInView={{ opacity: 0.25, rotate: 155 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={goldLeafSingle}
          alt=""
          className="absolute -left-4 top-10 w-28 pointer-events-none"
          style={{ filter: "drop-shadow(0 0 12px hsl(42 85% 52% / 0.3))", opacity: 0.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Logo badge */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 0 30px hsl(42 72% 52% / 0.4))",
            }}
          >
            <img src={lionlobsLogo} alt="LionLobs" className="w-24 h-24 object-contain" />
          </div>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto text-right relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-elegant text-lg md:text-xl italic text-foreground leading-[2]"
          >
            A União do{" "}
            <span className="text-gold-shimmer font-bold not-italic text-xl md:text-2xl">Leão + Lobo</span>{" "}
            não é apenas um conceito.{" "}
            É uma filosofia de construção de marcas fortes, estruturadas e preparadas{" "}
            <span
              className="not-italic font-semibold px-2 py-0.5 rounded"
              style={{ background: "hsl(42 72% 52% / 0.12)", color: "hsl(45 85% 65%)" }}
            >
              para trazer posicionamento
            </span>{" "}
            para seu negócio de forma estratégica.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-12 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-px animate-shimmer"
          style={{ background: "var(--gold-gradient-horizontal)", backgroundSize: "300% auto" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <img
            src={lionlobsLogo}
            alt="LionLobs"
            className="w-12 h-12 object-contain opacity-60"
            style={{ filter: "drop-shadow(0 0 10px hsl(42 72% 52% / 0.4))" }}
          />
          <GoldDivider className="w-40" />
          <p className="text-xs text-muted-foreground font-sans tracking-widest uppercase">
            Criado por{" "}
            <span className="text-gold-shimmer font-semibold">Agência LionLobs</span> — 2026
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
