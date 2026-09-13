import {
  AnimatedPacManPillIcon,
  BlueStarIcon,
  SparkleIcon,
  WhiteTriangleIcon,
} from "@/components/brand/AudienceIcons";
import { Button } from "@/components/ui/Button";
import { ScallopDivider } from "@/components/ui/ScallopDivider";

export function SectionOne() {
  return (
    <>
      {/* Original Hero Section — NEW HOOK: Architect Your Limelight. */}
      <section
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pb-28 bg-grid-lines-light"
        style={{
          backgroundImage: "url('/images/Bg_paper.jpg')",
          backgroundSize: "550px auto",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 sm:gap-10 items-start lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Hero Text - Left */}
            <div className="flex flex-col justify-center order-2 lg:order-1 lg:col-span-7 xl:col-span-7">
              <h1 className="hero-stagger-title font-brutal text-4xl font-black uppercase leading-[1.08] tracking-normal text-ev-black sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">ARCHITECT</span>
                <span className="block">YOUR</span>
                <span className="inline-block text-ev-neon-red mt-1 sm:mt-2">
                  LIMELIGHT.
                </span>
              </h1>
              <p className="hero-stagger-subtitle mt-6 max-w-xl text-lg font-bold leading-relaxed text-ev-black/85 sm:text-xl md:text-2xl">
                For visions that refuse to stay small.
              </p>
              <div className="hero-stagger-children mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4 md:gap-6">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="whitespace-nowrap"
                >
                  Start The Vey
                </Button>
                <Button
                  href="/subscription"
                  variant="secondary"
                  size="lg"
                  className="whitespace-nowrap"
                >
                  See Subscription
                </Button>
              </div>
            </div>

            {/* Hero Video/Image - Right */}
            <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="hero-stagger-children w-full max-w-md lg:max-w-none overflow-hidden border-[3px] border-black shadow-brutal-xl rounded-2xl sm:rounded-3xl">
                <video
                  className="block h-auto w-full object-cover animate-[spin_30s_linear_infinite] scale-[1.45]"
                  src="/videos/Website_homepage.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  poster="/images/sections/Section1.jpeg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK SECTION: Who is Elan Vey For? + One Vey between You & Being Seen. */}
      <ScallopDivider position="top" />
      <section className="ev-spot" aria-labelledby="ev-title">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800&family=Rubik+Mono+One&display=swap');
          
          .ev-spot{
            --ev-bg:#0d0f0a; --ev-line:rgba(255,255,255,.3);
            --ev-yellow:#f7f928; --ev-cream:#fcf8e0; --ev-cyan:#10f8f7; --ev-pink:#f4256f;
            --ev-red:#f82145; --ev-blue:#5366f0; --ev-shadow:#d9336f; --ev-ink:#0d0f0a;
            --ev-head:"Inter","Helvetica Neue",Arial,sans-serif;
            --ev-display:"Rubik Mono One","Arial Black","Helvetica Neue",sans-serif;
            --u:1px;                                   /* fallback for very old browsers */
            position:relative; width:100%; overflow:hidden;
            background:var(--ev-bg); color:#fff;
            container:ev / inline-size;
          }
          @supports (width:1cqw){ .ev-spot{ --u:min(calc(100cqw / 1080), 1.2px); } }
          .ev-spot *{box-sizing:border-box;margin:0;padding:0}
          .ev-spot svg{overflow:visible}

          /* 1080 x 468 stage, centred */
          .ev-inner{position:relative; width:calc(1080 * var(--u)); height:calc(468 * var(--u)); margin:0 auto; z-index:1}

          /* full-bleed grid band (y 153 -> 318 on the mockup) */
          .ev-grid{
            position:absolute; left:0; right:0; top:calc(153 * var(--u)); height:calc(165 * var(--u));
            background-image:
              linear-gradient(90deg,  var(--ev-line) 0 1px, transparent 1px),
              linear-gradient(180deg, var(--ev-line) 0 1px, transparent 1px);
            background-size: calc(52.85 * var(--u)) 100%, 100% calc(53 * var(--u));
            background-repeat: repeat-x, repeat-y;
            background-position: calc(50cqw - 520 * var(--u)) 0, 0 calc(5 * var(--u));
            pointer-events:none;
          }

          /* headings */
          .ev-title,.ev-sub{position:absolute; left:0; right:0; text-align:center; font-family:var(--ev-head); line-height:1; white-space:nowrap}
          .ev-title{top:calc(23 * var(--u)); font-size:calc(51 * var(--u)); font-weight:800; letter-spacing:-.014em}
          .ev-sub{top:calc(78 * var(--u)); font-size:calc(28 * var(--u)); font-weight:700; letter-spacing:-.01em}

          /* tags */
          .ev-tags{position:absolute; inset:0}
          .ev-item{position:absolute; display:flex; align-items:center}
          .ev-item svg{display:block; flex:0 0 auto}
          .ev-pill{
            display:inline-flex; align-items:center; justify-content:center;
            height:calc(var(--h) * var(--u)); padding:0 .28em; border-radius:999px;
            font-family:var(--ev-display); font-size:calc(var(--f) * var(--u)); line-height:1;
            letter-spacing:var(--ls); color:var(--ev-ink); white-space:nowrap;
          }
          .ev-creators {left:calc(512 * var(--u)); top:calc(156 * var(--u)); gap:calc(27 * var(--u))}
          .ev-dreamers {left:calc(82  * var(--u)); top:calc(215 * var(--u)); gap:calc(26 * var(--u))}
          .ev-artists  {left:calc(345 * var(--u)); top:calc(267 * var(--u)); gap:calc(17 * var(--u))}
          .ev-business {left:calc(628 * var(--u)); top:calc(265 * var(--u)); gap:calc(7  * var(--u))}
          /* --h pill height, --f font size, --ls tracking (tuned so each pill matches the mockup width) */
          .ev-creators .ev-pill{--h:56; --f:35; --ls:-.075em; background:var(--ev-cream)}
          .ev-dreamers .ev-pill{--h:48; --f:31; --ls:-.088em; background:var(--ev-yellow)}
          .ev-artists  .ev-pill{--h:49; --f:31; --ls:-.068em; background:var(--ev-cyan)}
          .ev-business .ev-pill{--h:53; --f:34; --ls:-.03em;  background:var(--ev-pink)}
          .ev-tri  {width:calc(46 * var(--u)); height:calc(46 * var(--u)); transform:translateY(calc(4 * var(--u)))}
          .ev-spark{width:calc(44 * var(--u)); height:calc(43 * var(--u))}
          .ev-star {width:calc(46 * var(--u)); height:calc(45 * var(--u))}
          .ev-pac  {display:flex; align-items:center; gap:calc(5 * var(--u)); transform:translateY(calc(3 * var(--u)))}
          .ev-pac svg{width:calc(45 * var(--u)); height:calc(45 * var(--u))}
          .ev-dot{width:calc(13 * var(--u)); height:calc(13 * var(--u)); border-radius:50%; background:var(--ev-yellow); flex:0 0 auto}

          /* pacman animation */
          @keyframes ev-chompTop {
            0% { transform: rotate(-30deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes ev-chompBot {
            0% { transform: rotate(30deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes ev-pacMove {
            0% { transform: translateX(0); opacity: 1; }
            80% { transform: translateX(calc(54 * var(--u))); opacity: 1; }
            85% { transform: translateX(calc(54 * var(--u))); opacity: 0; }
            95% { transform: translateX(0); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes ev-dot1 {
            0%, 17% { opacity: 1; }
            18%, 95% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes ev-dot2 {
            0%, 44% { opacity: 1; }
            45%, 95% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes ev-dot3 {
            0%, 70% { opacity: 1; }
            71%, 95% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* "and everyone in between." (box = mockup x 318->763, y 325->468) */
          .ev-everyone{position:absolute; left:calc(318 * var(--u)); top:calc(325 * var(--u)); width:calc(445 * var(--u)); height:calc(143 * var(--u))}
          .ev-everyone svg{position:absolute; inset:0; width:100%; height:100%}
          .ev-line{position:absolute; left:0; right:0; text-align:center; font-family:var(--ev-display); line-height:1; color:var(--ev-cream); white-space:nowrap}
          .ev-l1{top:calc(25.7 * var(--u)); font-size:calc(37 * var(--u)); letter-spacing:-.07em; word-spacing:-.32em; text-shadow:calc(1.5 * var(--u)) calc(1.5 * var(--u)) 0 var(--ev-shadow)}
          .ev-l2{top:calc(57.7 * var(--u)); font-size:calc(51 * var(--u)); letter-spacing:-.065em; word-spacing:-.3em; transform:translateX(calc(6.5 * var(--u))); text-shadow:calc(2.2 * var(--u)) calc(2.2 * var(--u)) 0 var(--ev-shadow)}
          .ev-l2 span{margin-left:-.22em}

          /* ---------- phones: stack it ---------- */
          @container ev (max-width: 640px){
            .ev-inner{--u:min(calc((100cqw - 32px) / 445), .8px); width:100%; height:auto; padding:32px 0 40px; display:flex; flex-direction:column; align-items:center; overflow:hidden;}
            .ev-grid{display:none}
            .ev-title,.ev-sub{position:static; white-space:normal}
            .ev-sub{margin-top:12px}
            .ev-tags{
              position:relative; inset:auto; margin:32px 0 16px; padding:0; width:100%; height:calc(360 * var(--u));
              display:block;
              background-image:
                linear-gradient(90deg,var(--ev-line) 0 1px,transparent 1px),
                linear-gradient(180deg,var(--ev-line) 0 1px,transparent 1px);
              background-size:16.666vw calc(90 * var(--u));
              background-position:0 0;
              border-top: 1px solid var(--ev-line);
              border-bottom: 1px solid var(--ev-line);
            }
            .ev-item{ position:static; display:contents; }
            .ev-item > svg, .ev-item > .ev-pill, .ev-item > .ev-pac {
              position: absolute !important;
              margin: 0 !important;
            }
            
            /* ROW 1 */
            .ev-creators .ev-pill { top: calc(15 * var(--u)); left: 8%; }
            .ev-business .ev-pac  { top: calc(15 * var(--u)); right: 15%; }

            /* ROW 2 */
            .ev-artists .ev-star  { top: calc(105 * var(--u)); left: 15%; width: calc(55 * var(--u)); height: calc(55 * var(--u)); }
            .ev-business .ev-pill { top: calc(105 * var(--u)); right: 8%; }

            /* ROW 3 */
            .ev-dreamers .ev-pill { top: calc(195 * var(--u)); left: 8%; }
            .ev-creators .ev-tri  { top: calc(195 * var(--u)); right: 20%; width: calc(50 * var(--u)); height: calc(50 * var(--u)); }

            /* ROW 4 */
            .ev-dreamers .ev-spark{ top: calc(285 * var(--u)); left: 20%; width: calc(50 * var(--u)); height: calc(50 * var(--u)); }
            .ev-artists .ev-pill  { top: calc(285 * var(--u)); right: 8%; }

            .ev-everyone{position:relative; left:auto; top:auto; margin-top: 16px;}
          }
        `,
          }}
        />

        <div className="ev-grid" aria-hidden="true"></div>
        <div className="ev-inner">
          <h2 className="ev-title" id="ev-title">
            YOUR SPOTLIGHT WON&rsquo;T WAIT.
          </h2>
          <p className="ev-sub">Who is Elan Vey for?</p>

          <ul className="ev-tags" role="list" style={{ listStyle: "none" }}>
            <li className="ev-item ev-creators">
              <svg className="ev-tri" viewBox="0 0 46 46" aria-hidden="true">
                <polygon
                  points="23,1 45.2,45.2 0.8,45.2"
                  style={{ fill: "var(--ev-cream)", stroke: "var(--ev-cream)" }}
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ev-pill">CREATORS</span>
            </li>
            <li className="ev-item ev-dreamers">
              <svg className="ev-spark" viewBox="0 0 44 43" aria-hidden="true">
                <path
                  d="M22 0.0Q26.84 16.77 44 21.5Q26.84 26.23 22 43.0Q17.16 26.23 0 21.5Q17.16 16.77 22 0.0Z"
                  style={{ fill: "var(--ev-yellow)" }}
                />
              </svg>
              <span className="ev-pill">DREAMERS</span>
            </li>
            <li className="ev-item ev-artists">
              <svg className="ev-star" viewBox="0 0 46 45" aria-hidden="true">
                <polygon
                  points="23.00,0.50 29.82,15.52 46.21,17.36 34.03,28.48 37.34,44.64 23.00,36.50 8.66,44.64 11.97,28.48 -0.21,17.36 16.18,15.52"
                  style={{ fill: "var(--ev-blue)", stroke: "var(--ev-blue)" }}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ev-pill">ARTISTS</span>
            </li>
            <li className="ev-item ev-business">
              <span className="ev-pac" aria-hidden="true">
                <svg
                  viewBox="0 0 45 45"
                  style={{
                    overflow: "visible",
                    animation: "ev-pacMove 2.5s linear infinite",
                  }}
                >
                  <path
                    d="M22.5 22.5 L45 22.5 A22.5 22.5 0 0 0 0 22.5 Z"
                    style={{
                      fill: "var(--ev-red)",
                      transformOrigin: "22.5px 22.5px",
                      animation:
                        "ev-chompTop 0.25s infinite alternate ease-in-out",
                    }}
                  />
                  <path
                    d="M22.5 22.5 L0 22.5 A22.5 22.5 0 0 0 45 22.5 Z"
                    style={{
                      fill: "var(--ev-red)",
                      transformOrigin: "22.5px 22.5px",
                      animation:
                        "ev-chompBot 0.25s infinite alternate ease-in-out",
                    }}
                  />
                </svg>
                <i
                  className="ev-dot"
                  style={{ animation: "ev-dot1 2.5s linear infinite" }}
                ></i>
                <i
                  className="ev-dot"
                  style={{ animation: "ev-dot2 2.5s linear infinite" }}
                ></i>
                <i
                  className="ev-dot"
                  style={{ animation: "ev-dot3 2.5s linear infinite" }}
                ></i>
              </span>
              <span className="ev-pill">BUSINESSES</span>
            </li>
          </ul>

          <div className="ev-everyone">
            <svg viewBox="0 0 445 143" aria-hidden="true">
              <path
                d="M39.3 120.7 L35.5 120.6 L31.9 120.5 L28.5 120.3 L25.3 120.1 L22.3 119.9 L19.6 119.6 L17.0 119.2 L14.7 118.8 L12.6 118.6 L10.7 118.3 L9.0 117.9 L7.6 117.6 L6.5 117.2 L5.6 116.8 L5.0 116.5 L4.7 116.3 L4.7 116.2 L4.7 116.3 L4.7 116.5 L4.7 116.4 L4.8 116.0 L5.2 115.4 L5.8 114.7 L6.7 113.8 L7.8 112.9 L9.2 111.9 L10.8 110.8 L12.6 109.7 L14.7 108.5 L17.0 107.3 L19.5 106.1 L22.2 104.8 L25.1 103.5 L28.2 102.2 L31.5 100.8 L35.0 99.4 L38.7 98.0 L42.6 96.6 L46.6 95.2 L50.9 93.7 L55.3 92.2 L59.9 90.7 L64.7 89.2 L69.6 87.7 L74.6 86.1 L79.8 84.6 L85.2 83.0 L90.7 81.4 L96.3 79.9 L102.1 78.3 L107.9 76.7 L113.9 75.1 L120.0 73.5 L126.2 71.9 L132.5 70.3 L138.8 68.7 L145.3 67.1 L151.8 65.6 L158.4 64.0 L165.0 62.4 L171.7 60.9 L178.5 59.3 L185.3 57.8 L192.1 56.3 L199.0 54.8 L205.8 53.3 L212.7 51.8 L219.6 50.4 L226.5 49.0 L233.4 47.6 L240.2 46.3 L247.1 44.9 L253.9 43.6 L260.6 42.4 L267.4 41.1 L274.0 39.9 L280.7 38.8 L287.2 37.6 L293.7 36.6 L300.1 35.5 L306.4 34.5 L312.7 33.6 L318.8 32.6 L324.9 31.8 L330.8 31.0 L336.6 30.2 L342.3 29.5 L347.8 28.8 L353.2 28.1 L358.5 27.6 L363.7 27.0 L368.7 26.5 L373.5 26.1 L378.2 25.7 L382.7 25.3 L387.0 25.0 L391.1 24.8 L395.1 24.6 L398.9 24.4 L402.5 24.3 L405.9 24.2 L409.1 24.1 L412.1 24.1 L414.9 24.2 L417.5 24.3 L419.9 24.4 L422.1 24.5 L424.0 24.7 L425.7 24.9 L427.2 25.2 L428.4 25.5 L429.4 25.8 L430.1 26.1 L430.6 26.3 L430.8 26.5 L430.9 26.5 L431.0 26.6 L431.0 26.8 L430.9 27.3 L430.5 28.0 L429.9 28.7 L429.0 29.6 L427.8 30.5 L426.5 31.5 L424.8 32.6 L423.0 33.7 L421.0 34.8 L418.7 36.0 L416.2 37.1 L413.5 38.4 L410.6 39.6 L407.5 40.9 L404.2 42.2 L400.8 43.6 L397.1 44.9 L393.2 46.3 L389.2 47.8 L384.9 49.2 L380.5 50.6 L376.0 52.1 L371.2 53.6 L366.4 55.1 L361.3 56.6 L356.1 58.2 L350.8 59.8 L345.4 61.4 L339.8 63.1 L334.1 64.8 L328.3 66.5 L322.4 68.3 L322.4 68.3 L328.4 67.0 L334.3 65.5 L340.1 64.1 L345.7 62.6 L351.2 61.2 L356.6 59.7 L361.8 58.1 L366.8 56.6 L371.7 55.1 L376.5 53.6 L381.0 52.2 L385.4 50.7 L389.7 49.3 L393.8 47.9 L397.7 46.6 L401.4 45.2 L404.9 43.9 L408.2 42.6 L411.4 41.4 L414.3 40.2 L417.1 39.0 L419.6 37.9 L422.0 36.8 L424.1 35.7 L426.1 34.7 L427.8 33.7 L429.4 32.8 L430.7 31.8 L431.9 30.9 L432.9 30.0 L433.7 29.0 L434.3 28.0 L434.6 26.8 L434.6 25.5 L434.1 24.3 L433.3 23.3 L432.3 22.5 L431.1 21.8 L429.8 21.2 L428.3 20.8 L426.5 20.3 L424.6 20.0 L422.5 19.7 L420.2 19.5 L417.7 19.4 L415.0 19.3 L412.1 19.3 L409.1 19.3 L405.8 19.4 L402.3 19.5 L398.7 19.8 L394.8 20.0 L390.8 20.4 L386.6 20.8 L382.3 21.2 L377.8 21.7 L373.1 22.2 L368.3 22.8 L363.3 23.5 L358.1 24.2 L352.8 24.9 L347.4 25.7 L341.9 26.5 L336.2 27.4 L330.4 28.3 L324.5 29.3 L318.4 30.3 L312.3 31.3 L306.1 32.3 L299.8 33.4 L293.4 34.5 L286.9 35.7 L280.3 36.9 L273.7 38.1 L267.0 39.4 L260.3 40.6 L253.5 42.0 L246.7 43.3 L239.9 44.6 L233.0 46.0 L226.2 47.4 L219.3 48.9 L212.4 50.3 L205.5 51.8 L198.6 53.3 L191.8 54.8 L184.9 56.3 L178.1 57.8 L171.4 59.4 L164.7 60.9 L158.0 62.5 L151.4 64.1 L144.9 65.7 L138.5 67.3 L132.1 68.9 L125.8 70.4 L119.6 72.0 L113.5 73.6 L107.5 75.2 L101.7 76.8 L95.9 78.4 L90.3 79.9 L84.8 81.5 L79.4 83.0 L74.2 84.5 L69.1 86.1 L64.1 87.5 L59.4 89.0 L54.8 90.5 L50.3 91.9 L46.0 93.3 L41.9 94.6 L38.0 96.0 L34.2 97.3 L30.6 98.6 L27.2 99.8 L24.0 101.0 L21.0 102.2 L18.2 103.3 L15.6 104.4 L13.2 105.5 L11.0 106.5 L8.9 107.5 L7.1 108.5 L5.5 109.5 L4.0 110.4 L2.8 111.4 L1.7 112.3 L0.8 113.4 L0.1 114.5 L-0.3 115.9 L-0.2 117.4 L0.3 118.8 L1.2 119.9 L2.3 120.8 L3.5 121.4 L4.9 121.9 L6.4 122.3 L8.1 122.7 L10.0 122.9 L12.1 123.1 L14.4 123.2 L16.8 123.1 L19.5 123.0 L22.3 122.7 L25.4 122.4 L28.6 122.1 L32.0 121.8 L35.6 121.3 L39.3 120.7Z"
                style={{ fill: "var(--ev-cream)" }}
              />
              <path
                d="M425 1.5Q426.70 7.90 433.5 9.5Q426.70 11.10 425 17.5Q423.30 11.10 416.5 9.5Q423.30 7.90 425 1.5Z M438 10.5Q438.90 14.10 442.5 15Q438.90 15.90 438 19.5Q437.10 15.90 433.5 15Q437.10 14.10 438 10.5Z M27.5 126.5Q29.10 132.90 35.5 134.5Q29.10 136.10 27.5 142.5Q25.90 136.10 19.5 134.5Q25.90 132.90 27.5 126.5Z M40.5 125Q41.30 128.20 44.5 129Q41.30 129.80 40.5 133Q39.70 129.80 36.5 129Q39.70 128.20 40.5 125Z"
                style={{ fill: "var(--ev-cream)" }}
              />
            </svg>
            <p className="ev-line ev-l1">AND EVERYONE</p>
            <p className="ev-line ev-l2">
              IN BETWEEN<span>.</span>
            </p>
          </div>
        </div>
      </section>

      <ScallopDivider position="bottom" />

      {/* White Paper Section — Team Behind Your Content */}
      <section
        className="relative overflow-x-clip pb-20 pt-16 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28"
        style={{
          backgroundImage: "url('/images/Bg_paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-30" />

        <div className="container-content relative px-5 md:px-8 lg:px-12">
          {/* Heading with Pink Sticker */}
          <div className="relative mb-8 text-center md:mb-12 lg:mb-16">
            <h2 className="font-halenoir font-black text-4xl uppercase tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="relative inline-block">
                THE TEAM
                <div className="absolute -right-8 -top-6 rotate-[12deg] md:-right-16 md:-top-10 lg:-right-24 lg:-top-14 z-10">
                  <span className="inline-block rounded-full bg-ev-neon-pink px-4 py-2 text-xs font-bold uppercase tracking-wider text-ev-neon-yellow md:px-6 md:py-3 md:text-sm lg:px-8 lg:py-4 lg:text-base border-[2px] border-black shadow-brutal-sm">
                    GET YOUR TEAM
                  </span>
                </div>
              </span>
              <br />
              BEHIND
              <br />
              YOUR CONTENT.
            </h2>
          </div>

          {/* Body Copy */}
          <div className="mx-auto max-w-3xl text-center md:max-w-4xl lg:max-w-5xl">
            <p className="font-halenoir font-medium uppercase text-base leading-relaxed text-black md:text-lg lg:text-xl xl:text-2xl">
              We empower creators, entrepreneurs, and individuals of every age
              from ambitious teenagers to vibrant seniors. We research what
              works, build your strategy, find ideas, refine your scripts, edit
              &amp; design your content, help you publish, analyse the results,
              and use what we learn to grow the next one.
            </p>
          </div>
        </div>

        {/* Diagonal Crossing Tape Strips — full width edge-to-edge touching left & right screen borders */}
        <div
          className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 w-full overflow-visible"
          aria-hidden
        >
          <div className="relative mx-auto h-56 sm:h-72 md:h-80 lg:h-96 w-full flex items-center justify-center overflow-visible">
            {/* BLACK TAPE — anchored to true center, positive angle, layered BEHIND */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[280vw] rotate-[8deg] sm:rotate-[10deg] md:rotate-[12deg] border-[3px] sm:border-[4px] border-ev-neon-yellow bg-ev-black shadow-[4px_4px_0_#000] sm:shadow-[8px_8px_0_#000]">
              <div className="flex overflow-hidden py-2.5 sm:py-4 md:py-5 lg:py-6">
                <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap gap-6 sm:gap-10 md:gap-14 lg:gap-20">
                  <span
                    className="font-brutal px-4 sm:px-6 text-sm sm:text-lg md:text-2xl lg:text-4xl font-black uppercase tracking-widest text-ev-neon-yellow"
                    style={{ WebkitTextStroke: "1px #000" }}
                  >
                    •&nbsp;HOOKS&nbsp;•&nbsp;STRATEGY&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;VIRAL
                    IDEAS&nbsp;•&nbsp;PRODUCTION&nbsp;•&nbsp;POSTING&nbsp;•&nbsp;COLLABS&nbsp;•&nbsp;TRENDS&nbsp;•&nbsp;TARGETING&nbsp;•&nbsp;CONVERSIONS&nbsp;•&nbsp;&nbsp;
                  </span>
                  <span
                    className="font-brutal px-4 sm:px-6 text-sm sm:text-lg md:text-2xl lg:text-4xl font-black uppercase tracking-widest text-ev-neon-yellow"
                    style={{ WebkitTextStroke: "1px #000" }}
                  >
                    •&nbsp;HOOKS&nbsp;•&nbsp;STRATEGY&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;VIRAL
                    IDEAS&nbsp;•&nbsp;PRODUCTION&nbsp;•&nbsp;POSTING&nbsp;•&nbsp;COLLABS&nbsp;•&nbsp;TRENDS&nbsp;•&nbsp;TARGETING&nbsp;•&nbsp;CONVERSIONS&nbsp;•&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>

            {/* YELLOW TAPE — anchored to true center, negative angle, layered ON TOP so they cross perfectly */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[280vw] -rotate-[8deg] sm:-rotate-[10deg] md:-rotate-[12deg] border-[3px] sm:border-[4px] border-black bg-ev-neon-yellow shadow-[4px_4px_0_#000] sm:shadow-[8px_8px_0_#000]">
              <div className="flex overflow-hidden py-3 sm:py-4 md:py-6 lg:py-7">
                <div className="flex shrink-0 animate-marquee-reverse items-center whitespace-nowrap gap-6 sm:gap-10 md:gap-14 lg:gap-20">
                  <span
                    className="font-brutal px-4 sm:px-6 text-base sm:text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-widest text-[#FF1744]"
                    style={{ WebkitTextStroke: "1px #FFE600" }}
                  >
                    •&nbsp;RESEARCH&nbsp;•&nbsp;IDEAS&nbsp;•&nbsp;SCRIPTING&nbsp;•&nbsp;EDITING&nbsp;•&nbsp;DESIGN&nbsp;•&nbsp;PUBLISH&nbsp;•&nbsp;ANALYSE&nbsp;•&nbsp;GROW&nbsp;•&nbsp;AUDIENCES&nbsp;•&nbsp;&nbsp;
                  </span>
                  <span
                    className="font-brutal px-4 sm:px-6 text-base sm:text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-widest text-[#FF1744]"
                    style={{ WebkitTextStroke: "1px #FFE600" }}
                  >
                    •&nbsp;RESEARCH&nbsp;•&nbsp;IDEAS&nbsp;•&nbsp;SCRIPTING&nbsp;•&nbsp;EDITING&nbsp;•&nbsp;DESIGN&nbsp;•&nbsp;PUBLISH&nbsp;•&nbsp;ANALYSE&nbsp;•&nbsp;GROW&nbsp;•&nbsp;AUDIENCES&nbsp;•&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
