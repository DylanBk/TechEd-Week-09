'use client';

import { frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"

const Drag = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {x, y} = useFollowPointer(ref);

    return <motion.div ref={ref} style={{...ball, x, y}}></motion.div>
};

export default Drag;


const spring = {damping: 30, stiffnesss: 0, restDelta: 0.001};

export const useFollowPointer = (ref: RefObject<HTMLDivElement | null>) => {
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({clientX, clientY}: MouseEvent) => {
            const el = ref.current!;

            frame.read(() => {
                x.set(clientX - el.offsetLeft - el.offsetWidth / 2);
                y.set(clientY - el.offsetTop - el.offsetHeight / 2);
            });
        };

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    });

    return {x, y};
};


// STYLES

const ball: React.CSSProperties = {
    height: 100,
    width: 100,
    backgroundColor: 'var(--color-pink-500)',
    borderRadius: '100%'
};