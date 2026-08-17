import { motion } from "framer-motion";
import { fadeUpVariant } from "../lib/animations";

function SectionHeading({ kicker, title, align = "center", className = "" }) {
  const alignClasses =
    align === "left"
      ? "items-center text-center md:items-start md:text-left"
      : "items-center text-center";

  return (
    <motion.div
      variants={fadeUpVariant}
      className={`flex flex-col gap-3 mb-8 md:mb-12 ${alignClasses} ${className}`}
    >
      {kicker && (
        <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-purple-400 uppercase">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        <span className="text-purple-500">&lt;</span> {title}{" "}
        <span className="text-purple-500">/&gt;</span>
      </h2>
    </motion.div>
  );
}

export default SectionHeading;
