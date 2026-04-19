import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 500], [0, -10]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 md:px-12">
      {/* Background Kinetic Logo */}
      <motion.div
        style={{ y: y1, rotate }}
        className="pointer-events-none absolute -right-[15%] -top-[10%] -z-10 select-none origin-bottom-right"
      >
        <Logo className="h-[400px] w-[400px] md:h-[800px] md:w-[800px] opacity-[0.03]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl font-display text-[15vw] sm:text-8xl font-black leading-[0.85] tracking-[-0.05em] md:text-[160px] uppercase lg:text-[200px]"
        >
          Beyond<br />
          The Digital<br />
          <span className="text-brand-accent">Frontier.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 flex flex-col items-start gap-12 md:flex-row md:items-center"
        >
          <p className="max-w-sm font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/50 leading-relaxed">
            Located in Malappuram, Kerala. <br />
            Crafting enduring visual languages <br />
            for the next generation of brands.
          </p>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center gap-4 overflow-hidden border-b-2 border-brand-accent pb-2 font-display text-base md:text-lg font-bold uppercase tracking-tighter transition-all hover:gap-6"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5 text-brand-accent transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-12 right-12 hidden md:block"
      >
        <div className="text-right">
          <p className="font-display text-4xl font-bold">110+</p>
          <p className="font-sans text-xs uppercase tracking-widest text-white/40">Projects Delivered</p>
        </div>
      </motion.div>
    </section>
  );
}
