'use client';

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"

const Reorder = () => {
    const initOrder = [
        'var(--color-blue-500)',
        'var(--color-pink-500)',
        'var(--color-emerald-500)',
        'var(--color-yellow-500)',
    ];

    const [order, setOrder] = useState(initOrder);

    const shuffle = ([...arr]: string[]) => {
        return arr.sort(() => Math.random() - 0.5);
    };


    useEffect(() => {
        const timeout = setTimeout(() => {
            setOrder(shuffle(order)) 
        }, 1000);

        return () => clearTimeout(timeout); 
    }, [order]);

    return (
        <main>
            <ul style={container}>
                { order.map((backgroundColor: string) => (
                    <motion.li
                        key={backgroundColor}
                        layout
                        transition={spring}
                        style={{...item, backgroundColor}}
                    />
                ))}
            </ul>
        </main>
    );
};

export default Reorder;


// STYLES

const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 300
};

const container: React.CSSProperties = {
    listStyle: "none",
    position: "absolute",
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
};

const item: React.CSSProperties = {
    width: 100,
    height: 100,
    borderRadius: "10px",
};