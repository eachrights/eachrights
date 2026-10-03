import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const Economix = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-forest px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Clock size={32} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              UPR Advocacy Tools
            </p>

            <h1 className="text-4xl font-bold md:text-5xl">
              Economic Rights
            </h1>

            <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
              Coming Soon
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Economic rights advocacy tools and resources are currently being
              developed. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Economix;