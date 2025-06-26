import * as motion from "motion/react-client"
import { type Variants } from "motion/react"

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {items.map(([item, hueA, hueB], i) => (
                <Card i={i} item={item} hueA={hueA} hueB={hueB} key={item} />
            ))}
        </div>
    )
}

interface CardProps {
    item: string
    hueA: number
    hueB: number
    i: number
}

function Card({ item, hueA, hueB, i }: CardProps) {
    const background = 'rgba(256, 256, 256, 0.1)';
    const border = `solid 2px ${hue(hueA)}`;

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}>
            <div style={{ ...splash, background, border }} />
            <motion.div
                style={card}
                variants={cardVariants}
                className="card">
                {item}
            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -5,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`


// STYLES

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
};

const splash: React.CSSProperties = {
    height: 200,
    width: 500,
    position: "absolute",
    bottom: 0,
    borderRadius: 6,
};

const card: React.CSSProperties = {
    fontSize: 64,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#333",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
};


// DATA

const items: [string, number, number][] = [
    ["Motion", 340, 10],
    ["Is", 20, 40],
    ["A", 60, 90],
    ["Powerful", 80, 120],
    ["Animation", 100, 140],
    ["Library", 205, 245],
    ["For", 260, 290],
    ["React", 290, 320],
];