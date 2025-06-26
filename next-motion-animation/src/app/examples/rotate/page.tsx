'use client';

import { useAnimationControls } from "motion/react";
import * as motion from "motion/react-client";
import { useRef, useState } from "react";

const Rotate = () => {
    const [rotation, setRotation] = useState<number>(0);
    const square = useRef(null);

    const animations = {
        init: {
            rotate: rotation
        },
        rotation: {
            rotate: rotation + 90,
            transition: {
                type: 'spring' as const, // type has to be a string literal ??
                visualDuration: 0.5,
                bounce: 0.5
            }
        }
    };

    const controls = useAnimationControls();

    const handleAnimation = () => {
        controls.start('rotation')
        setRotation(rotation + 90)

        setTimeout(() => {
            controls.start('init');
        }, 1500);
    };

    return (
        <main>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 items-center">
                <motion.div
                    ref={square}
                    className="h-44 w-44 rounded-lg bg-pink-500"
                    variants={animations}
                    initial='init'
                    animate={controls}
                    transition={{
                        type: 'spring',
                        visualDuration: 1.5,
                        bounce: 0.5
                    }}
                />

                <button
                    className="px-4 py-2 rounded-xs bg-blue-500 text-white shadow-blue-900"
                    onClick={handleAnimation}>
                    Rotate
                </button>
            </div>
        </main>
    );
};

export default Rotate;