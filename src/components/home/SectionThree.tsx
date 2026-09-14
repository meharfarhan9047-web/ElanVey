import styles from "./SectionThree.module.css";

const rows = [
  ["Content Ideation", "Paid Growth", "Audience Building"],
  ["Competitor Analysis", "Content Strategy"],
  ["Growth Optimisation", "Editing/Designing"],
];

function FeatureIcon({ title }: { title: string }) {
  return (
    <svg viewBox="0 0 48 48" className={styles.icon} aria-hidden="true">
      {title === "Content Ideation" && <path fill="#ffce00" d="M24 1Q29 18 47 24Q29 30 24 47Q19 30 1 24Q19 18 24 1Z" />}
      {title === "Paid Growth" && <path fill="#ff4269" d="M21 2h6v7h4v7h4v7h4v7h4v7h4v9H1v-9h4v-7h4v-7h4v-7h4V9h4Z" />}
      {title === "Audience Building" && <g fill="#ff873c"><circle cx="24" cy="24" r="9" />{Array.from({ length: 8 }, (_, i) => <path key={i} d="M22 12L24 0L26 12Z" transform={`rotate(${i * 45} 24 24)`} />)}</g>}
      {title === "Competitor Analysis" && <path fill="#6574ed" d="m24 0 5 11 10-2-1 11 10 5-10 5 1 12-11-3-4 9-5-10-11 3 2-12-10-5 11-5-2-10 11 2Z" />}
      {title === "Content Strategy" && <g stroke="#235777" strokeWidth="2.5" fill="none">{Array.from({ length: 6 }, (_, i) => <path key={i} d="M24 24V1M16 6l8 6 8-6M16 14l8 6 8-6" transform={`rotate(${i * 60} 24 24)`} />)}</g>}
      {title === "Growth Optimisation" && <g fill="#ec3913"><path d="M24 0C14 13 15 27 15 37h18c0-10 1-24-9-37ZM15 25 7 43l2 5 9-12M33 25l8 18-2 5-9-12M20 38h8l-4 10Z" /><ellipse cx="24" cy="18" rx="3" ry="5" fill="#fff" /></g>}
      {title === "Editing/Designing" && <path fill="#ff7933" d="M23 2C6 2 0 17 3 28c3-9 7-11 11-12-5 8-4 16 2 21-1-8 3-12 6-13-4 12 8 15 2 24 17-9 4-20 9-27 4 3 6 8 5 13C52 15 35 4 28 4c6 5 7 10 6 14C30 10 27 6 23 2Z" />}
    </svg>
  );
}

export function SectionThree() {
  return (
    <section className={styles.section} aria-labelledby="vey-forward-title">
      <div className={styles.intro}>
        <h2
          id="vey-forward-title"
          className="font-brutal text-4xl uppercase leading-[0.9] text-ev-neon-yellow sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ textShadow: "3px 3px 0 #000, 5px 5px 0 #000" }}
        >
          The Vey<br />Forward
        </h2>
        <p className={styles.subtitle}>Whether you create, build, perform, sell,<br className={styles.desktopBreak} /> or simply have a talent waiting to be discovered.</p>
      </div>
      <div className={styles.checkerboard} aria-hidden="true" />
      <div className={styles.features}>
        {rows.map((row, index) => (
          <div className={styles.row} key={index}>
            {row.map(title => <div className={styles.feature} key={title}><FeatureIcon title={title} /><h3>{title}</h3></div>)}
          </div>
        ))}
      </div>
    </section>
  );
}
