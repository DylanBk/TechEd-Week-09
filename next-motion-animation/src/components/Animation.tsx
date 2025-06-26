"use client";

import { motion, useScroll } from "motion/react";

const AnimateIn = ({ children }) => {
    const {scrollYProgress} = useScroll();

    return (
        <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{scale: 0}}
            // whileInView={}
            // viewport={}
            // transition={}
            animate={{scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}>
            {children}
        </motion.div>
    );
};

export default AnimateIn;