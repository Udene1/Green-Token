"use client";

import Link from "next/link";

const flow = [
  { n: "01", title: "Cloud connection", body: "Organization-scoped connection and credentials are resolved before a scan runs." },
  { n: "02", title: "Background execution", body: "A worker processes the scan, updates job progress, and records audit events." },
  { n: "03", title: "Persisted state", body: "Execution graphs, scan status, findings, and evidence records form the traceable state of the run." },
  { n: "04", title: "Live observation", body: "Server-Sent Events expose execution updates and sequenced audit events to the client." },
  { n: "05", title: "Evidence review", body: "The auditor workflow packages evidence and provides a verification path for exported artifacts." }
];

const decisions = [
  {
    title: "Stream state, not just messages",
    body: "The execution-graph stream reads the current graph and execution record, emits a snapshot when its hash changes, and sends sequenced audit events. A reconnect can provide a last-event cursor to continue from."
  },
  {
    title: "Treat disconnects as normal",
    body: "The stream closes on request disconnect, clears its interval, and releases its active-stream slot. A configurable stream cap prevents unlimited concurrent graph streams."
  },
  {
    title: "Keep outcomes explicit",
    body: "The scan worker updates status and timestamps, persists findings and evidence counts, and records a failure state with an error code when a scan fails."
  },
  {
    title: "Make evidence inspectable",
    body: "The auditor portal code includes evidence manifests, SHA-256 fingerprints, signed exports, and a verification endpoint. Those mechanisms still need to be exercised end-to-end in the target deployment before making production-readiness claims."
  }
];

export default function CompflowCaseStudy() {
  return (
    <main className="case-page">
      <style jsx global>{`
        .case-page { --case-ink:#20231f; --case-muted:#62665d; --case-paper:#f5f4ee; color:var(--case-ink); background:var(--case-paper); min-height:100vh; }
        .case-wrap { width:min(1080px,calc(100% - 48px)); margin:0 auto; }
        .case-nav { display:flex; justify-content:space-between; align-items:center; gap:18px; padding:25px 0; border-bottom:1px solid #d7d8cf; font-size:12px; }
        .case-nav a { text-decoration:none; font-weight:700; }
        .case-back { color:#62665d; }
        .case-hero { padding:78px 0 64px; display:grid; grid-template-columns:1.2fr .8fr; gap:42px; align-items:center; }
        .case-eyebrow,.case-label,.case-step { font:10px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace; letter-spacing:.1em; text-transform:uppercase; color:#6b7560; }
        .case-hero h1 { font-size:clamp(42px,6vw,76px); line-height:1; letter-spacing:-.07em; margin:20px 0 22px; }
        .case-hero h1 em,.case-section h2 em { font-family:Georgia,serif; font-weight:400; }
        .case-lede { max-width:620px; color:var(--case-muted); font-size:16px; line-height:1.8; }
        .case-actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:27px; }
        .case-button { display:inline-flex; align-items:center; gap:14px; padding:14px 17px; background:#20231f; color:#fff; font-size:12px; font-weight:700; text-decoration:none; }
        .case-button.secondary { color:#20231f; background:transparent; border:1px solid #c8cbc0; }
        .case-visual { padding:20px; border:1px solid #d2d6c9; background:#e9ebdf; }
        .case-visual-top { display:flex; justify-content:space-between; gap:12px; font:9px ui-monospace,monospace; color:#69705f; text-transform:uppercase; letter-spacing:.08em; padding-bottom:16px; border-bottom:1px solid #d0d5c6; }
        .case-node { display:flex; justify-content:space-between; gap:12px; align-items:center; margin-top:12px; padding:13px 12px; background:#f8f8f1; border:1px solid #d5d9ce; font-size:12px; }
        .case-node span { color:#758d3d; font:9px ui-monospace,monospace; text-transform:uppercase; }
        .case-down { color:#87966e; padding:0 0 0 18px; font-size:15px; line-height:1.2; }
        .case-callout { background:#243a2a; color:#f5f4ee; padding:35px 0; }
        .case-callout-inner { display:grid; grid-template-columns:200px 1fr; gap:28px; align-items:start; }
        .case-callout .case-label { color:#b6c49f; }
        .case-callout p { font-size:clamp(20px,3vw,31px); line-height:1.45; letter-spacing:-.04em; margin:0; }
        .case-callout strong { color:#c9f36a; font-weight:500; }
        .case-section { padding:75px 0; border-bottom:1px solid #d7d8cf; }
        .case-section h2 { font-size:clamp(32px,4vw,48px); letter-spacing:-.065em; line-height:1.1; margin:14px 0 18px; }
        .case-section-intro { max-width:690px; color:var(--case-muted); line-height:1.8; font-size:13px; }
        .case-flow { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:10px; margin-top:32px; }
        .case-flow-card { min-height:190px; padding:18px 15px; border:1px solid #d5d8ce; background:rgba(255,255,255,.28); }
        .case-flow-card h3 { font-size:14px; line-height:1.35; margin:19px 0 10px; }
        .case-flow-card p { font-size:11px; line-height:1.7; color:var(--case-muted); margin:0; }
        .case-decisions { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:30px; }
        .case-decision { padding:24px; background:#eeede5; border:1px solid #dedfd6; }
        .case-decision h3 { font-size:16px; letter-spacing:-.03em; margin:0 0 12px; }
        .case-decision p { color:var(--case-muted); font-size:12px; line-height:1.85; margin:0; }
        .case-proof { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:30px; }
        .case-proof-row { display:flex; gap:13px; padding:17px; border:1px solid #d5d8ce; align-items:flex-start; }
        .case-proof-mark { color:#779a35; font-size:18px; line-height:1; }
        .case-proof-row strong { display:block; font-size:12px; margin-bottom:6px; }
        .case-proof-row span { color:var(--case-muted); font-size:11px; line-height:1.7; display:block; }
        .case-caution { border-left:3px solid #8ea956; padding:18px 20px; margin-top:26px; background:#eeede5; color:var(--case-muted); font-size:12px; line-height:1.8; }
        .case-footer { padding:52px 0 64px; display:flex; justify-content:space-between; align-items:center; gap:20px; }
        .case-footer h2 { font-size:clamp(27px,4vw,40px); letter-spacing:-.06em; margin:10px 0; }
        .case-footer p { color:var(--case-muted); font-size:12px; line-height:1.7; max-width:500px; }
        @media(max-width:850px) { .case-hero { grid-template-columns:1fr; padding-top:52px; } .case-visual { max-width:560px; } .case-flow { grid-template-columns:1fr 1fr; } .case-flow-card { min-height:150px; } .case-callout-inner { grid-template-columns:1fr; gap:12px; } }
        @media(max-width:560px) { .case-wrap { width:calc(100% - 32px); } .case-nav { align-items:flex-start; } .case-hero { padding:44px 0; } .case-flow,.case-decisions,.case-proof { grid-template-columns:1fr; } .case-flow-card { min-height:0; } .case-section { padding:54px 0; } .case-footer { align-items:flex-start; flex-direction:column; } }
      `}</style>
      <div className="case-wrap">
        <nav className="case-nav" aria-label="Case study navigation">
          <Link href="/" className="case-back">← Kenneth Elioku / Portfolio</Link>
          <a href="https://github.com/Udene1/Compflow" target="_blank" rel="noreferrer">Source repository ↗</a>
        </nav>

        <header className="case-hero">
          <div>
            <p className="case-eyebrow">ENGINEERING CASE STUDY · CLOUD GOVERNANCE</p>
            <h1>Compflow:<br /><em>making execution</em><br />verifiable.</h1>
            <p className="case-lede">A cloud compliance system built around background execution, live operational state, multi-cloud scanning, and evidence that can be inspected after a run—not just a dashboard that says “done.”</p>
            <div className="case-actions">
              <a className="case-button" href="https://github.com/Udene1/Compflow" target="_blank" rel="noreferrer">Inspect the code ↗</a>
              <a className="case-button secondary" href="mailto:kennethikechukwu159@gmail.com?subject=Compflow%20engineering%20discussion">Discuss the engineering ↗</a>
            </div>
          </div>
          <div className="case-visual" aria-label="Compflow execution path">
            <div className="case-visual-top"><span>Execution lifecycle</span><span>01 / 05</span></div>
            <div className="case-node">Cloud scan requested <span>accepted</span></div>
            <div className="case-down">↓</div>
            <div className="case-node">Background worker <span>running</span></div>
            <div className="case-down">↓</div>
            <div className="case-node">Persisted graph + audit events <span>recorded</span></div>
            <div className="case-down">↓</div>
            <div className="case-node">SSE status stream <span>observable</span></div>
            <div className="case-down">↓</div>
            <div className="case-node">Evidence bundle + verification <span>reviewable</span></div>
          </div>
        </header>
      </div>

      <section className="case-callout">
        <div className="case-wrap case-callout-inner">
          <div className="case-label">THE ENGINEERING QUESTION</div>
          <p>How do you make a long-running cloud workflow <strong>observable, recoverable, and accountable</strong> when work is asynchronous and failures can happen between steps?</p>
        </div>
      </section>

      <section className="case-section">
        <div className="case-wrap">
          <p className="case-label">01 / SYSTEM FLOW</p>
          <h2>From cloud scan to <em>evidence trail.</em></h2>
          <p className="case-section-intro">The repository separates the worker, execution state, stream endpoints, and auditor evidence workflow. The important engineering theme is the chain between what the worker did and what the user or auditor can later inspect.</p>
          <div className="case-flow">
            {flow.map((item) => <article className="case-flow-card" key={item.n}><span className="case-step">{item.n} / STEP</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-wrap">
          <p className="case-label">02 / ENGINEERING UNDER CONSTRAINT</p>
          <h2>Designing for <em>the cost of staying alive.</em></h2>
          <p className="case-section-intro">Compflow began as a small scanner on Vercel. As the product grew, its hosting path moved through AWS Lambda, EC2, and Azure. These moves were not a checklist of cloud platforms; they were attempts to keep a real product usable while balancing available credits, operating cost, security, and reliability.</p>
          <div className="case-decisions">
            <article className="case-decision"><h3>Keep the product operable</h3><p>Every infrastructure change brings deployment work, configuration changes, and new failure modes. The goal is not to adopt the largest stack, but to keep the required workflow running.</p></article>
            <article className="case-decision"><h3>Make cost a design constraint</h3><p>A product that works only while promotional credits last is not economically sustainable. The architecture has to be judged by the minimum dependable setup that preserves its important behaviour—not just by whether it can be deployed.</p></article>
          </div>
          <div className="case-caution">This history describes the builder's actual account of the product's evolution. It does not claim that the current deployment is live or that one hosting option has already been proven cheapest. Those require a measured deployment test.</div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-wrap">
          <p className="case-label">03 / ENGINEERING DECISIONS</p>
          <h2>Reliability is in the <em>edges.</em></h2>
          <p className="case-section-intro">These are specific implementation patterns visible in the source—not claims that every production scenario has already been validated.</p>
          <div className="case-decisions">
            {decisions.map((item) => <article className="case-decision" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-wrap">
          <p className="case-label">03 / SOURCE-LEVEL EVIDENCE</p>
          <h2>What a reviewer can <em>inspect.</em></h2>
          <div className="case-proof">
            <div className="case-proof-row"><span className="case-proof-mark">↗</span><div><strong>Execution graph and resume logic</strong><span><a href="https://github.com/Udene1/Compflow/blob/main/api/execution-graph.js" target="_blank" rel="noreferrer"><code>api/execution-graph.js</code> ↗</a> reads persisted execution state, emits sequenced audit events, and builds a resume plan.</span></div></div>
            <div className="case-proof-row"><span className="case-proof-mark">↗</span><div><strong>Live job stream</strong><span><a href="https://github.com/Udene1/Compflow/blob/main/api/job-stream.js" target="_blank" rel="noreferrer"><code>api/job-stream.js</code> ↗</a> establishes organization context before opening SSE and cleans up listeners on disconnect.</span></div></div>
            <div className="case-proof-row"><span className="case-proof-mark">↗</span><div><strong>Worker outcome persistence</strong><span><a href="https://github.com/Udene1/Compflow/blob/main/core/cloud_scan_worker.js" target="_blank" rel="noreferrer"><code>core/cloud_scan_worker.js</code> ↗</a> records progress, findings, evidence counts, completion state, and scan failure details.</span></div></div>
            <div className="case-proof-row"><span className="case-proof-mark">↗</span><div><strong>Auditor evidence path</strong><span><a href="https://github.com/Udene1/Compflow/blob/main/core/auditor_portal.js" target="_blank" rel="noreferrer"><code>core/auditor_portal.js</code> ↗</a> and related APIs implement export and verification components for evidence artifacts.</span></div></div>
          </div>
          <div className="case-caution"><strong>Verification boundary:</strong> source code shows the intended mechanisms, but it does not by itself prove a live deployment is healthy. The next engineering check is to run the relevant test suites and verify the full lifecycle against a configured environment—including reconnect/resume, failed scans, evidence export, and tamper detection. No performance numbers or production-readiness claims are made on this page.</div>
        </div>
      </section>

      <footer className="case-wrap case-footer">
        <div>
          <p className="case-label">NEXT CONVERSATION</p>
          <h2>Have a hard backend problem?</h2>
          <p>I’m interested in backend and systems engineering work involving distributed workflows, cloud integrations, operational reliability, and traceable state.</p>
        </div>
        <div className="case-actions">
          <a className="case-button" href="mailto:kennethikechukwu159@gmail.com?subject=Backend%20or%20systems%20engineering">Contact me ↗</a>
          <Link className="case-button secondary" href="/">Back to portfolio ↗</Link>
        </div>
      </footer>
    </main>
  );
}
