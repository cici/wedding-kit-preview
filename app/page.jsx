import SignupForm from './SignupForm';

const Check = () => (
  <span className="check-disc" aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbf0dc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  </span>
);

const Icon = ({ children, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2b150b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const calendar = (
  <>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </>
);

const personas = [
  { tone: 'mustard', tag: '20+ years', title: 'Together forever (finally on paper)', text: 'A domestic partnership or a drawer full of workaround documents, and now the real thing.' },
  { tone: 'teal', tag: 'Round two', title: 'Second time’s the charm', text: 'A previous marriage, adult kids, an ex’s paperwork, and a family that may need a minute.' },
  { tone: 'tangerine', tag: 'Two incomes', title: 'Two careers, one plan', text: 'A home or two, maybe little ones. Yours, mine and ours, finally sorted.' },
  { tone: 'ink', tag: '65 and up', title: 'Retired and ready to party', text: 'Social Security, Medicare, and a fair question: what does a marriage license change?' },
];

const tiles = [
  ['Old paperwork.', 'Domestic partnerships, civil unions and cohabitation agreements: keep, update or unwind.'],
  ['Your documents.', 'Wills, beneficiary forms, powers of attorney and health care proxies.'],
  ['Benefits.', 'Social Security, SSI, Medicare, Medicaid and pensions can all change when you marry.'],
  ['Money.', 'Yours, mine and ours; debts; filing status; prenups and postnups.'],
  ['Home and property.', 'Titles, deeds, and deciding which home to keep.'],
  ['Names and IDs.', 'Name changes and ID updates, step by step.'],
];

export default function Home() {
  return (
    <div id="top">
      <header className="hero">
        <div className="container">
          <nav className="nav" aria-label="Main">
            <a href="#top" className="wordmark">
              <img src="/seal-on-dark.svg" alt="" width="96" height="96" />
              <span>
                Something Old,
                <br />
                Something Queer
              </span>
            </a>
            <a href="#signup" className="btn">Get the free checklist</a>
          </nav>

          <div className="hero-body">
            <p className="pill">A wedding kit for LGBTQ+ couples marrying after 40</p>
            <h1 className="display">
              <span className="line">Something Old,</span> <span className="line">Something Queer,</span>{' '}
              <span className="line">Something Finally Official.</span>
            </h1>
            <p className="hero-sub">
              The party <em>and</em> the paperwork, planned together.
            </p>
            <p className="hero-lead">
              Start with <em>Before You Say I Do</em>, our free three-page checklist of the legal and money questions to settle before the big day.
            </p>
            <div id="signup" className="signup-wrap">
              <SignupForm id="email-hero" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="who" aria-labelledby="who-heading">
          <div className="container">
            <div className="section-head">
              <h2 id="who-heading" className="display">Made for couples who’ve lived a little.</h2>
              <p>Many of you were together long before the law caught up. Now there’s a wedding to plan and two whole lives to merge, often at the same time.</p>
            </div>
            <div className="grid">
              {personas.map((p) => (
                <article key={p.tag} className={`persona ${p.tone}`}>
                  <p className="tag">{p.tag}</p>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
            <p className="assume">Trans or nonbinary, first wedding or third, chosen family or none: we assume nothing.</p>
          </div>
        </section>

        <section className="checklist" aria-labelledby="checklist-heading">
          <div className="container">
            <div className="panel">
              <span className="panel-arc" aria-hidden="true" />
              <div className="panel-cols">
                <div className="panel-intro">
                  <p className="eyebrow">The free checklist</p>
                  <h2 id="checklist-heading" className="display">What’s inside Before You Say I Do</h2>
                  <p className="strong">Three printable pages covering the legal and money questions most couples over 40 should settle before the wedding, plus what to update after.</p>
                  <p>Every rule links to an official source, and it ends with questions to bring to a professional. Large print, plain language, no law degree required.</p>
                  <a href="#signup" className="btn">Get the checklist</a>
                </div>
                <ul className="tiles">
                  {tiles.map(([title, text]) => (
                    <li key={title} className="tile">
                      <Check />
                      <span>
                        <strong>{title}</strong> {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="panel-note">Current as of October 2026 · Not legal advice</p>
            </div>
          </div>
        </section>

        <section className="kit" aria-labelledby="kit-heading">
          <div className="container">
            <div className="section-head">
              <p className="pill">Coming soon</p>
              <h2 id="kit-heading" className="display">The Full Kit: first toast to final paperwork.</h2>
              <p>The checklist is the start. The kit goes all the way, and people on the list hear first, including a founding price for the first 50 couples.</p>
            </div>
            <div className="grid">
              <article className="arch">
                <span className="disc" style={{ background: 'var(--tangerine)' }}><Icon size={32}>{calendar}</Icon></span>
                <p className="eyebrow">The Planner</p>
                <h3>Budget, guests, vendors and the whole timeline</h3>
                <p>Google Sheets and Excel, plus printable pages for seating, gifts and thank-yous.</p>
              </article>
              <article className="arch">
                <span className="disc" style={{ background: 'var(--mustard)' }}>
                  <Icon size={32}>
                    <path d="M4 5.5c2.5-1 5.5-1 8 .8 2.5-1.8 5.5-1.8 8-.8v13c-2.5-1-5.5-1-8 .8-2.5-1.8-5.5-1.8-8-.8z" />
                    <path d="M12 6.3v13" />
                  </Icon>
                </span>
                <p className="eyebrow">The Guide</p>
                <h3>A planning guide that speaks your language</h3>
                <p>Vows after decades together, guest lists with exes and adult kids, vendors on your side, and accessibility for older guests.</p>
              </article>
              <article className="arch">
                <span className="disc" style={{ background: 'var(--pink)' }}>
                  <Icon size={32}>
                    <path d="M6 3.5h9l3 3v14H6z" />
                    <path d="M9 11h6M9 14.5h6M9 18h3" />
                  </Icon>
                </span>
                <p className="eyebrow">We Do. Now What?</p>
                <h3>The legal and money workbook</h3>
                <p>Fill-in pages for benefits, merging money, legacy documents and the belt-and-suspenders paperwork worth keeping.</p>
              </article>
            </div>
            <p className="kit-foot">Plus 12 months of free updates when the rules change.</p>
          </div>
        </section>

        <section className="trust-wrap" aria-labelledby="trust-heading">
          <div className="trust">
            <div className="container">
              <h2 id="trust-heading" className="display">Big on joy. Serious about paperwork.</h2>
              <div className="grid">
                <div className="feature">
                  <span className="ring" aria-hidden="true">
                    <Icon><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></Icon>
                  </span>
                  <h3>Reviewed by pros</h3>
                  <p>An estate attorney and a financial planner review every legal and money page before it reaches you.</p>
                </div>
                <div className="feature">
                  <span className="ring" aria-hidden="true"><Icon>{calendar}</Icon></span>
                  <h3>Dated and current</h3>
                  <p>Every legal page shows when it was last reviewed. When the rules change, we update it.</p>
                </div>
                <div className="feature">
                  <span className="ring" aria-hidden="true">
                    <Icon><path d="M4 5h16v11H9l-5 4z" /><path d="M10 9a2 2 0 1 1 3 1.7c-.6.4-1 .8-1 1.5" /><path d="M12 14.2v.1" /></Icon>
                  </span>
                  <h3>Questions, not advice</h3>
                  <p>We explain what matters and hand you the right questions for a professional. We never tell you what to do.</p>
                </div>
                <div className="feature">
                  <span className="ring" aria-hidden="true">
                    <Icon><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" /></Icon>
                  </span>
                  <h3>Private by default</h3>
                  <p>We ask for your email and nothing else. No ad trackers, ever.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="final" aria-labelledby="final-heading">
          <div className="container final-inner">
            <span className="final-arc" aria-hidden="true" />
            <h2 id="final-heading" className="display">Get the checklist. It’s free.</h2>
            <p className="final-lead">Three pages, plain language, sent straight to your inbox.</p>
            <div className="signup-wrap">
              <SignupForm id="email-final" tone="dark" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-brand">
                <img src="/seal-on-dark.svg" alt="" width="120" height="120" />
                <p>
                  Something Old,
                  <br />
                  Something Queer
                </p>
              </div>
              <nav aria-label="Footer">
                <a href="#top">Privacy policy</a>
                <a href="#top">Contact</a>
              </nav>
            </div>
            <p className="footer-legal">Something Old, Something Queer shares general information for couples in the United States. It is not legal, tax or financial advice. Talk with a qualified professional about your own situation.</p>
            <p>© 2026 Something Old, Something Queer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
