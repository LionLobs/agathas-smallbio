import { motion } from "framer-motion";
import agathaCutout from "@/assets/agatha-cutout.png";
import goldLeaves from "@/assets/gold-leaves-1.png";
import goldLeafSingle from "@/assets/gold-leaf-single.png";
import wolfBgLeft from "@/assets/wolf-bg-left.png";
import wolfBgRight from "@/assets/wolf-bg-right.png";
import lionSilhouette from "@/assets/lion-silhouette.png";
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
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const GoldSparkle = ({ className, size = 2 }: { className?: string; size?: number }) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      background: "radial-gradient(circle, hsl(45 95% 70%), hsl(42 85% 52% / 0.5), transparent)",
      boxShadow: `0 0 ${size * 4}px hsl(42 85% 52% / 0.6)`,
    }}
    animate={{
      opacity: [0, 1, 0.4, 1, 0],
      scale: [0, 1.8, 1, 1.8, 0],
    }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
    }}
  />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-end overflow-hidden pb-16">

        {/* Wolf background - LEFT */}
        <div className="absolute top-0 left-0 w-[55%] h-full pointer-events-none">
          <img
            src={wolfBgLeft}
            alt=""
            className="w-full h-full object-cover object-right opacity-25"
            style={{ filter: "drop-shadow(0 0 60px hsl(42 60% 30% / 0.2))" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />
        </div>

        {/* Wolf background - RIGHT */}
        <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none">
          <img
            src={wolfBgRight}
            alt=""
            className="w-full h-full object-cover object-left opacity-25"
            style={{ filter: "drop-shadow(0 0 60px hsl(42 60% 30% / 0.2))" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />
        </div>

        {/* Ambient gold glow behind profile */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none animate-pulse-gold"
          style={{
            background: "radial-gradient(circle, hsl(42 85% 52% / 0.08), transparent 70%)",
          }}
        />

        {/* Gold leaves decoration */}
        <motion.img
          src={goldLeaves}
          alt=""
          className="absolute -top-4 -left-6 w-44 md:w-56 pointer-events-none z-10 animate-float"
          style={{ filter: "drop-shadow(0 0 20px hsl(42 85% 52% / 0.4))", opacity: 0.9 }}
          initial={{ opacity: 0, rotate: -25 }}
          animate={{ opacity: 0.9, rotate: -15 }}
          transition={{ duration: 1.2 }}
        />
        <motion.img
          src={goldLeafSingle}
          alt=""
          className="absolute top-16 -right-2 w-28 md:w-36 pointer-events-none z-10"
          style={{ filter: "drop-shadow(0 0 15px hsl(42 85% 52% / 0.35))", opacity: 0.8 }}
          initial={{ opacity: 0, rotate: 35 }}
          animate={{ opacity: 0.8, rotate: 25 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.img
          src={goldLeafSingle}
          alt=""
          className="absolute top-[38%] -left-1 w-20 pointer-events-none z-10"
          style={{ filter: "drop-shadow(0 0 12px hsl(42 85% 52% / 0.3))", opacity: 0.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Gold sparkles */}
        <GoldSparkle className="top-[12%] left-[18%]" size={4} />
        <GoldSparkle className="top-[22%] right-[12%]" size={3} />
        <GoldSparkle className="top-[38%] left-[32%]" size={2} />
        <GoldSparkle className="top-[8%] right-[28%]" size={5} />
        <GoldSparkle className="top-[52%] left-[12%]" size={3} />
        <GoldSparkle className="top-[30%] right-[38%]" size={2} />
        <GoldSparkle className="top-[18%] left-[58%]" size={4} />
        <GoldSparkle className="top-[48%] right-[22%]" size={3} />
        <GoldSparkle className="top-[65%] left-[25%]" size={2} />
        <GoldSparkle className="top-[42%] left-[48%]" size={3} />
        <GoldSparkle className="top-[15%] left-[42%]" size={2} />
        <GoldSparkle className="top-[58%] right-[35%]" size={4} />

        {/* Profile Photo */}
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="absolute -inset-8 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsl(42 85% 52% / 0.12), transparent 70%)",
            }}
          />
          <div className="relative">
            <img
              src={agathaCutout}
              alt="Agatha Scudero"
              className="w-80 md:w-[26rem] h-auto object-contain"
              style={{
                filter: "drop-shadow(0 0 50px hsl(42 72% 45% / 0.35)) drop-shadow(0 20px 40px rgba(0,0,0,0.6))",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none"
              style={{
                background: "linear-gradient(to top, hsl(0 0% 3%) 0%, hsl(0 0% 3% / 0.95) 20%, hsl(0 0% 3% / 0.7) 45%, hsl(0 0% 3% / 0.3) 70%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          className="relative z-20 text-center mt-10"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.5em] uppercase mb-4 font-sans font-light">
            Prazer, &nbsp; me chamo
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            <span className="text-gold-gradient">Agatha Scudero</span>
          </h1>
        </motion.div>

        {/* Decorative icons row */}
        <motion.div
          className="flex items-center gap-4 mt-8 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.9 }}
        >
          {["△", "◆", "♡", "◈", "⬟", "⬡", "▣", "◆", "♡", "△"].map((s, i) => (
            <span key={i} className="text-xs text-primary">{s}</span>
          ))}
        </motion.div>
      </section>

      {/* ===== BIO TEXT ===== */}
      <section className="px-8 py-16">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-display text-base md:text-lg italic text-foreground leading-relaxed"
          >
            <span className="font-bold text-gold-gradient not-italic text-lg md:text-xl">CEO da Agência LIONLOBS</span>{" "}
            especializada em marketing digital estratégico, onde acreditamos que o poder do design e do marketing pode impulsionar marcas e negócios a novos patamares.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex items-center justify-center gap-4 mt-8"
          >
            {["△", "◆", "♡", "◈", "⬟", "⬡", "▣", "◆", "♡", "△"].map((s, i) => (
              <span key={i} className="text-xs text-primary opacity-50">{s}</span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== MISSION CARD ===== */}
      <section className="px-6 pb-16">
        <motion.div
          className="max-w-md mx-auto rounded-2xl p-8 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, hsl(0 0% 6%), hsl(0 0% 10%))",
            border: "1px solid hsl(42 35% 22%)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 hsl(42 40% 25% / 0.2)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-15" style={{
            background: "radial-gradient(ellipse at 30% 50%, hsl(42 72% 52%), transparent 65%)"
          }} />
          <motion.p
            variants={fadeUp}
            custom={0}
            className="relative font-sans text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Nossa missão é criar <span className="font-bold text-foreground">soluções criativas</span>{" "}
            que inspirem, engajem e gerem resultados significativos para nossos clientes.
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
          <div className="text-center py-4 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient animate-shimmer" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gold-gradient animate-shimmer" />
            <p className="text-sm md:text-base tracking-[0.5em] uppercase text-primary font-sans font-semibold">
              Clique nos Links
            </p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto space-y-5"
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
              className="group relative flex items-center gap-5 p-5 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(145deg, hsl(0 0% 8%), hsl(0 0% 12%))",
                border: "1px solid hsl(42 45% 20%)",
                boxShadow: "0 6px 24px rgba(0,0,0,0.35), inset 0 1px 0 hsl(42 45% 25% / 0.25)",
              }}
            >
              {/* Hover gold glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 15% 50%, hsl(42 72% 52% / 0.12), transparent 65%)",
                  boxShadow: "0 0 40px hsl(42 72% 52% / 0.2)",
                }}
              />

              <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center border border-primary/40 group-hover:border-primary/80 transition-all duration-300 group-hover:gold-glow">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="relative z-10 flex-1">
                <p className="font-display text-xl md:text-2xl font-bold text-foreground">{link.title}</p>
                <p className="text-muted-foreground font-sans text-xs mt-0.5">{link.subtitle}</p>
              </div>
              <ArrowUpRight className="relative z-10 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA QUOTE ===== */}
      <section className="px-6 py-16 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-display text-xl md:text-2xl italic text-muted-foreground"
          >
            Para quem quer parar de tentar
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="font-display text-xl md:text-2xl italic text-gold-gradient font-bold mt-1"
          >
            e começar a construir.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="px-8 py-16">
        <motion.div
          className="max-w-md mx-auto space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((v, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              custom={i}
              className="font-display text-lg md:text-xl italic text-foreground"
            >
              <span className="text-gold-gradient font-bold not-italic text-xl md:text-2xl">{v.bold}</span>
              {v.rest}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* ===== LEÃO + LOBO ===== */}
      <section className="px-6 py-20 relative overflow-hidden">
        {/* Decorative leaves */}
        <motion.img
          src={goldLeaves}
          alt=""
          className="absolute -right-6 bottom-4 w-44 pointer-events-none"
          style={{ filter: "drop-shadow(0 0 15px hsl(42 85% 52% / 0.3))", opacity: 0.2 }}
          initial={{ opacity: 0, rotate: 160 }}
          whileInView={{ opacity: 0.2, rotate: 150 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={goldLeafSingle}
          alt=""
          className="absolute -left-3 top-8 w-24 pointer-events-none"
          style={{ filter: "drop-shadow(0 0 10px hsl(42 85% 52% / 0.25))", opacity: 0.15 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
        />

        {/* Lion silhouette subtle bg */}
        <div className="absolute right-0 bottom-0 w-52 h-52 opacity-[0.07] pointer-events-none">
          <img src={lionSilhouette} alt="" className="w-full h-full object-contain" />
        </div>

        <motion.div
          className="max-w-md mx-auto text-right relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-display text-base md:text-lg italic text-foreground leading-[1.9]"
          >
            A União do <span className="text-gold-gradient font-bold not-italic text-lg md:text-xl">Leão + Lobo</span> não
            é apenas um conceito.{" "}
            É uma filosofia de construção de marcas fortes, estruturadas e preparadas{" "}
            <span
              className="not-italic font-semibold px-2 py-1 rounded-md"
              style={{ background: "hsl(42 72% 52% / 0.15)", color: "hsl(42 72% 62%)" }}
            >
              para trazer posicionamento
            </span>{" "}
            para seu negócio de forma estratégica.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 px-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground font-sans tracking-wide italic">
          Criado por{" "}
          <span className="text-gold-gradient font-semibold not-italic">Agência LionLobs</span> — 2026
        </p>
      </footer>
    </div>
  );
};

export default Index;
