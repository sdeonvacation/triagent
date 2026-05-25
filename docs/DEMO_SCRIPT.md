# Triagent — Loom Demo Script

**Target audience:** Potential clients (non-technical)  
**Recommended length:** 3–5 minutes  
**Recording setup:** Browser at 1280×720+, demo page open in a separate tab, real inbox synced if possible

---

## Before You Record

**Preparation checklist:**
- [ ] Two browser tabs open: homepage (triagent.app) and demo page (/demo)
- [ ] Demo page tab synced and fully loaded
- [ ] Zoom/font size at 100% (not browser zoom)
- [ ] Microphone tested, quiet background
- [ ] Optional: Gmail account connected for live sync demo in third tab
- [ ] Recording software ready (Loom, OBS, or native screen record)
- [ ] Script nearby for reference (don't read word-for-word; use as guide)

---

## Script

### Segment 1: Hook (0:00–0:20)

**Screen:** Landing page  
**Say:**  
"Every day, your support team is buried in email. Tickets mixed with spam, urgent issues lost in the noise, escalations missed. Triagent fixes that — automatically."

**Action:**  
- Open landing page (slow scroll up to show hero)
- Point to headline: "AI-Powered Inbox Triage"

---

### Segment 2: The Problem & Solution (0:20–0:45)

**Screen:** Landing page, scroll to "How It Works" section  
**Say:**  
"Here's how it works. Triagent runs a three-step pipeline: Fetch raw emails from Gmail, Classify them into categories like Billing, Bug Reports, Feature Requests — and crucially, detect escalation risks. Then triage: prioritize by urgency and revenue impact. All in seconds. Everything is read-only — we never store your emails."

**Action:**  
- Scroll past hero
- Point to the architecture diagram (Gmail Inbox → AI Classification → Prioritized Dashboard)
- Highlight the three feature cards below: Auto-Classify, Smart Priority, Escalation Detection

---

### Segment 3: Demo Page Intro (0:45–1:15)

**Screen:** Switch to demo tab. Show executive summary stats  
**Say:**  
"Let's look at a real example. Here's the demo dashboard. Triagent just classified 12 emails. Here's what you see at a glance: 12 processed, 5 escalations flagged, 93% average confidence, and the top category is Bug Reports. That's all the intel you need to know what happened, instantly."

**Action:**  
- Click "Try Demo" button or navigate to /demo
- Point to the four stat cards: Total Processed (12), Escalations (5), Top Category, Avg Confidence (93%)
- Let them load/animate briefly

---

### Segment 4: Email Card Walkthrough (1:15–2:00)

**Screen:** Scroll down to email grid. Click on a High priority card with escalation.  
**Say:**  
"Now let's drill down. Each email is a card. You see the priority badge — this one is High, flagged in red. Below that, this red banner says 'Escalation Risk Detected' — the AI flagged it as urgent. The confidence score shows how sure the AI is: 87%. And here's the AI summary — saves you reading the whole email. There's also a sentiment tag."

**Action:**  
- Point to a High priority email card (preferably one with escalation_risk = true)
- Highlight: priority badge (red), escalation banner, confidence bar (87%)
- Point to summary text
- Point to sentiment tag (if visible: Angry, Positive, Neutral, etc.)
- Click the card to expand it

---

### Segment 5: Expanded Card + Details (1:45–2:20)

**Screen:** Expanded email card (after click)  
**Say:**  
"When you click, you see the full email body, the rationale — why the AI classified it this way — and processing time. This one took 0.3 seconds. You can also see who it's from, when it arrived, and all the metadata."

**Action:**  
- Point to email body section
- Point to rationale section (if present: shows the AI's reasoning)
- Point to processing time badge (e.g., "⚡ Processed in 0.3s")
- Collapse it by clicking again (or let it stay open)

---

### Segment 6: Filtering & Grouping (2:20–2:45)

**Screen:** Scroll to filter bar  
**Say:**  
"You can filter by priority, category, or both. Let me filter by High priority only — now you see just the 5 escalations. You can also group by category if you want to see all Bug Reports together. This makes triage fast: focus on what matters, ignore the noise."

**Action:**  
- Point to the filter bar at top
- Click Priority dropdown, select "High"
- Show filtered results (only High priority emails remain)
- Click the Group By toggle to show category grouping (if available)
- Reset filter back to "All"

---

### Segment 7: Activity Feed (2:45–3:10)

**Screen:** Point to activity feed sidebar (right side on desktop, or below on mobile)  
**Say:**  
"On the right, the Activity Feed shows real-time logs. Each email as it's classified, whether it was flagged as an escalation, and the timestamps. This is live — if you run a sync right now, you'd see it fill in real-time."

**Action:**  
- Scroll to show the activity feed (or point to it)
- Show the "activity.log" header and live indicator
- Highlight a few log entries (success ✓, warning ⚠, timestamps)

---

### Segment 8: Real Inbox Sync (Optional; 3:10–3:45)

**Screen:** If you have a synced Gmail account, show the sync dashboard or process  
**Say:**  
"To use this with your real inbox, you just click Connect Gmail, authorize read-only access, and hit Sync. Triagent fetches your emails, runs them through the pipeline, and shows you the results. No data is stored — we only read your emails, classify them, and show you the dashboard."

**Action:**  
- If account is connected: show the dashboard (real inbox version)
- Show recent sync stats
- OR: point to the "Try with your own inbox →" CTA button
- Optional: show the Gmail OAuth flow (click Connect Gmail) — explain the unverified app warning is normal; dismiss it

---

### Segment 9: Close & CTA (3:45–4:00)

**Screen:** Back to homepage hero  
**Say:**  
"Triagent is read-only, privacy-first, and built for teams drowning in support email. Your data is never stored. Click the link below to try it with your own inbox. Let Triagent handle the triage."

**Action:**  
- Navigate back to homepage
- Highlight the two CTAs: "Try Demo" and "Connect Gmail"
- End on the logo/headline

---

## Key Talking Points

Weave these naturally into the narration:

1. **Three-step pipeline:** Fetch → Classify → Triage (simplify the AI process for non-technical audience)
2. **Speed:** ~0.3s per email; 12 emails processed in seconds (real stat from demo)
3. **Escalation detection:** Flags threats, outages, legal risks automatically
4. **Revenue-aware:** Smart Priority considers urgency AND business impact
5. **Read-only access:** Connect Gmail (readonly scope), no data stored, full privacy
6. **Confidence scores:** Every decision is transparent (93% avg confidence in demo)
7. **Live activity log:** Real-time visibility into what the AI is doing
8. **Categories:** Auto-classifies into Billing, Bug Reports, Feature Requests, etc.

---

## Common Client Questions

**Q: "Is my email data safe?"**  
A: Absolutely. We request read-only access to Gmail, never store your emails, and don't train models on your data. All processing is done in-session and then discarded.

**Q: "Does Triagent read every email in my inbox?"**  
A: Yes, but only what you sync. You control which emails are processed. Each one is classified and triaged, but never stored.

**Q: "How accurate is it?"**  
A: In this demo, we're at 93% average confidence across all classifications. Real-world accuracy depends on your email volume and patterns, but escalation detection is the most critical — we prioritize catching real issues over false positives.

**Q: "Can it handle high volume (100+ emails/day)?"**  
A: Yes. Triagent processes in batches and scales with your team's needs. The demo shows 12 emails in ~8 seconds; larger batches are proportionally faster.

**Q: "How do I get started?"**  
A: Click "Connect Gmail" on the homepage, authorize read-only access, and click Sync. Results appear immediately on the dashboard. No credit card required for the demo.

**Q: "Does it work with Outlook?"**  
A: Currently, Triagent works with Gmail. We're exploring other email providers — check back for updates.

---

## Notes for Recording

**Tone & Pacing:**
- Confident, calm, not robotic. This is a real product, not a sales pitch.
- Pause after each segment so viewers can absorb the info.
- Use hand gestures (point, click) — don't just talk.

**Technical Details to Highlight:**
- Mention the processing time (0.3s per email, 8.2s for 20 emails)
- Show real numbers from the demo: 12 processed, 5 escalations, 93% confidence
- Say "Powered by GPT-4o-mini" if the conversation goes technical

**What NOT to Say:**
- Don't say "magic" or "it just works" — explain the three steps
- Don't claim it catches 100% of escalations (say "zero missed" is aspirational; real accuracy is 93%+)
- Don't mention infrastructure/AI training — keep it client-focused

**Common Interruptions (Handle Gracefully):**
- **Google unverified app warning:** "This is normal for new apps. Just click 'Advanced' → 'Go to Triagent' to authorize."
- **Demo page takes time to load:** "While that loads, let me explain the three-step pipeline..."
- **Filter/toggle doesn't respond:** "Let me click that again — the UI is responsive" (click once more, move on if stuck)

**Optional B-Roll:**
- Show emails appearing in the activity feed in real-time
- Show a filter toggle and watch cards disappear/reappear
- Show an expanded email card with full body + rationale

---

## Estimated Segment Lengths

- Hook: 20s
- Problem & Solution: 25s
- Demo Intro (Stats): 30s
- Email Card: 45s
- Expanded Details: 35s
- Filtering: 25s
- Activity Feed: 25s
- Real Sync (optional): 35s
- Close: 15s

**Total: ~3m50s without sync demo, ~4m25s with it.**

---

**Good luck with your recording! Keep it natural, let the product speak for itself, and have fun. 🎬**
