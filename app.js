(function () {
  "use strict";
  var KEY = "pw-course-2027-v1";
  var TITLE = "Photo Workflow: Photographer Guide";
  var MODULES = ["Get Your Assignment", "Before the Event", "At the Event", "After the Event", "Editor Review & Deadlines"];

  // Page types: lesson, mcq, order, sort, number
  var PAGES = [
    // ---------- Module 1
    { id: "l-big", m: 0, type: "lesson", title: "The big picture",
      body: "<p>You cover an event from start to finish. You use <strong>one form</strong> the whole time. It has <strong>3 deadlines</strong>. Fill it out as you go, not at the end.</p><p>Open each stage to see what it covers.</p>",
      details: [
        ["1 · Get your assignment", "Email + form link."],
        ["2 · Before the event", "Deadline #1."],
        ["3 · At the event", "Deadline #2."],
        ["4 · After the event", "Deadline #3."],
        ["5 · Editor review", "Approved or Hold."]
      ] },
    { id: "q-asyougo", m: 0, type: "mcq",
      tip: "One form, 3 deadlines. Fill it out as you go.",
      q: "Rosa plans to fill out her whole workflow form in one sitting the weekend after her event. What's the problem with her plan?",
      choices: [
        ["Nothing. As long as it's all done by the end, it counts.", "The form has 3 separate deadlines. Waiting until the end means missing Deadlines #1 and #2."],
        ["The form has 3 deadlines, so she has to fill it out as she goes.", "Right. Deadline #1 is before the event, #2 is at the event and #3 is after it."],
        ["She has to fill it out on paper first, then copy it into the form.", "The guide doesn't ask for a paper copy. The issue is timing: the form has 3 deadlines."],
        ["She needs a new form for each deadline.", "It's one form the whole time. You come back to the same link."]
      ], answer: 1 },
    { id: "l-assign", m: 0, type: "lesson", title: "1 · Get your assignment",
      body: "<ol class=\"steps\"><li><strong>Open</strong> the assignment email the day you get it. It has the date, time, place and your form link.</li><li><strong>Click</strong> the link. Log in with your staff Google account.</li><li><strong>Check</strong> the event name, date, time and place.</li><li><strong>Click Start Workflow.</strong> Save the link — you will come back 3 times.</li></ol>" },
    { id: "o-assign", m: 0, type: "order",
      tip: "Use Move up and Move down to arrange the steps, then check your order.",
      q: "You just got an assignment email. Put these steps in order.",
      items: ["Open the assignment email the day you get it", "Click the link and log in with your staff Google account", "Check the event name, date, time and place", "Click Start Workflow and save the link"],
      start: [2, 0, 3, 1] },
    { id: "q-link", m: 0, type: "mcq",
      tip: "You'll return to the same form at each deadline.",
      q: "You click Start Workflow. What do you do with the form link?",
      choices: [
        ["Delete the email. You'll get a new link for each deadline.", "There's no new link. It's one form, and you come back to it."],
        ["Save it. You'll come back 3 times.", "Right. Once for each deadline."],
        ["Forward it to the editor who assigned the event.", "The editor already has your assignment. Your job is to save the link for yourself."],
        ["Nothing. The form submits itself after the event.", "You sign and submit the form yourself as the very last step."]
      ], answer: 1 },

    // ---------- Module 2
    { id: "l-before", m: 1, type: "lesson", title: "2 · Before the event",
      body: "<p class=\"tip\"><strong>Deadline #1 = 2 school days before the event.</strong></p><p><strong>Event report</strong></p><ul class=\"steps\"><li>Copy the right report: Game (athletics), Academics, Meeting or Event</li><li>Fill out the pre-event info</li><li>Write 7 open-ended questions</li><li>An editor approves your questions</li><li>Pick that editor's name in the form</li></ul>",
      details: [["What counts as open-ended?", "<p>Open-ended = not a yes/no answer.</p><p>✗ “Did you like the game?”<br>✓ “What was going through your mind on the last play?”</p>"]] },
    { id: "q-d1", m: 1, type: "mcq",
      tip: "Deadline #1 = 2 school days before the event.",
      q: "Your event is a Friday-night game. It's a normal school week with no days off. When is Deadline #1?",
      choices: [
        ["Thursday", "That's only 1 school day before. Count back 2."],
        ["Wednesday", "Right. 2 school days before Friday is Wednesday."],
        ["Friday, before the game starts", "Deadline #1 is 2 school days before the event, not the day of it."],
        ["Monday", "That's earlier than required. Deadline #1 is 2 school days before: Wednesday."]
      ], answer: 1 },
    { id: "q-report", m: 1, type: "mcq",
      tip: "Report types: Game (athletics), Academics, Meeting or Event.",
      q: "You're assigned a varsity volleyball match. Which event report do you copy?",
      choices: [
        ["Event", "Volleyball is athletics, and there's a report made for that."],
        ["Meeting", "Meeting is for a meeting, not a match."],
        ["Game (athletics)", "Right. Athletic contests use the Game report."],
        ["Academics", "Academics isn't the report for a sports match."]
      ], answer: 2 },
    { id: "s-open", m: 1, type: "sort",
      tip: "Open-ended = not a yes/no answer.",
      q: "Sort these interview questions. Which ones belong in your 7 open-ended questions?",
      options: ["Open-ended", "Yes/no"],
      items: [
        ["What was going through your mind on the last play?", 0],
        ["Did you like the game?", 1],
        ["How did your team prepare this week?", 0],
        ["Were you nervous?", 1],
        ["What will you remember most about tonight?", 0],
        ["Is this your last season?", 1]
      ] },
    { id: "q-approve", m: 1, type: "mcq",
      tip: "An editor approves your questions. Then you pick that editor's name in the form.",
      q: "You wrote 7 open-ended questions and an editor, Jordan, approved them. What else does Deadline #1 need for your questions?",
      choices: [
        ["Pick Jordan's name in the form.", "Right. The form needs to show which editor approved your questions."],
        ["Nothing. Jordan's approval is enough.", "There's one more step: pick the approving editor's name in the form."],
        ["Send them to Fitz for a second approval.", "One editor approves your questions. Then you pick that editor's name."],
        ["Cut the list to 3, since you only do 3 interviews.", "You need all 7 approved questions for Deadline #1."]
      ], answer: 0 },
    { id: "l-equip", m: 1, type: "lesson", title: "Equipment and extra forms",
      body: "<p><strong>Equipment · Deadline #2</strong></p><ul class=\"steps\"><li>Check out equipment in <strong>5th period</strong> (the day of the event or the school day before).</li><li>Return by <strong>1st period the next school day</strong>.</li><li>Battery charged. Card empty.</li><li>Pick up equipment only through a Photo Editor (Field or Tech).</li><li>Return it by putting it in the check-in box.</li></ul>",
      details: [
        ["School-day event only", "<ul class=\"steps\"><li>Grade Check Form (sorter by the printer)</li><li>School Day Reporting Form → turn in to Fitz</li></ul>"],
        ["Away game only", "<p>Ask Sama about media credentials by the forms-due date.</p>"]
      ] },
    { id: "q-equip", m: 1, type: "mcq",
      tip: "5th period, day of or day before. Back by 1st period next school day.",
      q: "Your event is Thursday evening. Friday is a normal school day. Which equipment plan follows the guide?",
      choices: [
        ["Grab a camera from the closet Thursday morning and return it Monday.", "Equipment comes only through a Photo Editor, and it's due back by 1st period the next school day (Friday)."],
        ["Get it from a Photo Editor in 5th period Wednesday or Thursday. Charge the battery, empty the card, and put it in the check-in box by 1st period Friday.", "Right. Every part of that plan matches the guide."],
        ["Get it from a Photo Editor Thursday in 5th period, then hand it to any staff member after the game.", "Returns go in the check-in box, by 1st period the next school day."],
        ["Check it out Monday so you have time to practice.", "Checkout is in 5th period, the day of the event or the school day before."]
      ], answer: 1 },
    { id: "q-schoolday", m: 1, type: "mcq",
      tip: "Some forms apply only to certain events.",
      q: "You're covering an assembly during 3rd period. What extra forms apply?",
      choices: [
        ["Ask Sama about media credentials.", "Media credentials are for away games."],
        ["None. Extra forms are only for away games.", "School-day events have their own extra forms."],
        ["Grade Check Form (sorter by the printer) and School Day Reporting Form, turned in to Fitz.", "Right. Both apply to a school-day event."],
        ["A second event report.", "You only copy one event report."]
      ], answer: 2 },
    { id: "q-away", m: 1, type: "mcq",
      tip: "Away game only: one extra step.",
      q: "You're assigned an away football game. What extra step applies?",
      choices: [
        ["Ask Sama about media credentials by the forms-due date.", "Right. That's the away-game step."],
        ["Turn in a School Day Reporting Form to Fitz.", "That's for school-day events."],
        ["Ask the other school's coach for a press pass at the gate.", "The guide says to ask Sama about media credentials, by the forms-due date."],
        ["Nothing. Away games work the same as home games.", "Away games have one extra step: media credentials."]
      ], answer: 0 },

    // ---------- Module 3
    { id: "l-at", m: 2, type: "lesson", title: "3 · At the event",
      body: "<p class=\"tip\"><strong>Deadline #2</strong></p><ul class=\"steps\"><li>Get there early. Stay for the big moments.</li><li>Shoot variety: action, faces, crowd, details, wide and close.</li><li>Do at least 3 interviews with your approved questions.</li><li>Get first and last names. Check the spelling.</li></ul>",
      details: [["What goes in the form", "<ul class=\"steps\"><li>How many interviews? How many photos?</li><li><strong>Photos:</strong> at least 50 for an event under an hour (aim for 100). Over an hour: at least 100 per hour.</li><li><strong>Interviews:</strong> 3 interviews, every time.</li><li>Notes for editors or Fitz (optional).</li></ul>"]] },
    { id: "n-photos", m: 2, type: "number",
      tip: "Under an hour: at least 50 (aim for 100). Over an hour: at least 100 per hour.",
      q: "A tournament runs 2 hours. What's the minimum number of photos you need?",
      answer: 200, label: "Minimum photos",
      wrong: { 50: "50 is the minimum for an event under an hour. This one is 2 hours.", 100: "100 per hour is the rule. How many hours is this event?" },
      ok: "Right. 2 hours × 100 per hour = at least 200 photos." },
    { id: "q-names", m: 2, type: "mcq",
      tip: "Get first and last names. Check the spelling.",
      q: "After an interview, your notes just say “Jay, #12.” What should you have done?",
      choices: [
        ["That's fine. The roster will have the rest.", "The guide asks you to get first and last names and check the spelling yourself."],
        ["Asked for a first and last name and checked the spelling.", "Right. Get the full name and confirm it with the person."],
        ["Written down a description of the photo.", "Descriptions help, but the guide asks for first and last names, spelled right."],
        ["Asked a teammate to text you the name later.", "Get the name from the person you interview, and check the spelling."]
      ], answer: 1 },
    { id: "l-who", m: 2, type: "lesson", title: "Who to ask and what to wear",
      body: "<p><strong>Field Editor · taking the picture:</strong> camera settings, lighting, angles, action shots, interview questions, how your photos look.</p><p><strong>Tech Editor · after the camera:</strong> OneDrive, the generator, batch renaming, rating in Bridge, editing, Yearbook Avenue upload and tagging.</p><p>Equipment: Field and Tech editors.</p>",
      details: [["Dress code", "<ul class=\"steps\"><li><strong>Press pass:</strong> on you the whole event, not on the camera bag.</li><li><strong>Top:</strong> Staff T-shirt, or plain black or maroon. Never a team shirt, home or visiting, including KHS teams. Theme shirts (pink out, camo) OK.</li><li><strong>Bottoms:</strong> jeans, slacks, leggings or athletic pants. No sagging. No pajama pants.</li><li><strong>Shoes:</strong> running shoes or flats. No slides, flip-flops or heels (even at formal events).</li><li><strong>Hot weather:</strong> running shorts OK. Sleeveless OK with straps three fingers wide.</li><li><strong>Formal events:</strong> all black, unless the sponsor asks for something else.</li><li><strong>During school:</strong> before, during or right after school? Wear what you wore to school.</li></ul>"]] },
    { id: "s-who", m: 2, type: "sort",
      tip: "Field Editor = taking the picture. Tech Editor = after the camera.",
      q: "Who do you ask? Pick the right editor for each problem.",
      options: ["Field Editor", "Tech Editor"],
      items: [
        ["Your gym photos keep coming out dark.", 0],
        ["The batch rename isn't working.", 1],
        ["You're not sure how to rate photos in Bridge.", 1],
        ["You want better angles for action shots.", 0],
        ["Your Yearbook Avenue upload failed.", 1],
        ["You want feedback on an interview question.", 0]
      ] },
    { id: "q-dress", m: 2, type: "mcq",
      tip: "Never a team shirt. Press pass on you, not on the bag.",
      q: "You're shooting a home basketball game after school hours. Which outfit follows the dress code?",
      choices: [
        ["KHS team jersey, jeans, running shoes, press pass clipped to your camera bag.", "Two problems: never a team shirt (even KHS), and the press pass goes on you."],
        ["Staff T-shirt, jeans, running shoes, press pass on you.", "Right. Every piece follows the dress code."],
        ["Plain maroon top, leggings, slides, press pass on you.", "Close, but slides aren't allowed. Running shoes or flats."],
        ["Pink-out theme shirt, pajama pants, running shoes, press pass on you.", "Theme shirts are OK, but pajama pants are not."]
      ], answer: 1 },
    { id: "q-formal", m: 2, type: "mcq",
      tip: "Formal events: all black unless the sponsor asks for something else. No heels, even at formal events.",
      q: "You're covering a formal dance. The sponsor hasn't asked for anything special. What do you wear?",
      choices: [
        ["A formal outfit in any color, with heels.", "Formal events are all black, and heels aren't allowed even at formal events."],
        ["All black with flats, press pass on you.", "Right. All black, flats or running shoes, press pass on you."],
        ["Staff T-shirt and jeans, like any other event.", "Formal events are all black unless the sponsor asks for something else."],
        ["All black with heels, press pass in your bag.", "No heels, and the press pass stays on you the whole event."]
      ], answer: 1 },

    // ---------- Module 4
    { id: "l-after", m: 3, type: "lesson", title: "4 · Finish your workflow",
      body: "<p class=\"tip\"><strong>Deadline #3 · Do the steps in order.</strong></p><p>There are 12 steps in two parts: <strong>Report + OneDrive</strong> (steps 1–6) and <strong>Edit + Yearbook Avenue</strong> (steps 7–12). You'll practice putting each part in order next.</p><p>The Renaming &amp; Folder Generator gives you your photo name and folders. The form includes videos on batch renaming and rating in Bridge.</p>",
      details: [["Be honest", "<p>Checking a box for work you did not do is academic dishonesty. It will be graded and disciplined.</p>"]] },
    { id: "o-after1", m: 3, type: "order",
      tip: "Report + OneDrive: steps 1–6.",
      q: "Put the first 6 after-event steps in order.",
      items: ["Finish the event report, save as PDF and upload it to the form", "Open the Renaming & Folder Generator", "Find or make the folders in OneDrive", "Upload ALL your photos to OneDrive", "Batch rename every photo", "Rate in Bridge (best photos = 5 stars)"],
      start: [3, 5, 1, 4, 0, 2] },
    { id: "o-after2", m: 3, type: "order",
      tip: "Edit + Yearbook Avenue: steps 7–12.",
      q: "Now put steps 7–12 in order.",
      items: ["Edit your 5-star photos if they need it", "Upload interview audio + transcripts to OneDrive and paste the folder link in the form", "Find or make the folders in the YBA Image Library", "Upload your 5-star photos to YBA", "Tag everyone visible; captions name up to 5", "Sign the form and submit"],
      start: [4, 2, 5, 0, 3, 1] },
    { id: "q-tag", m: 3, type: "mcq",
      tip: "Tag everyone visible in the photo. Captions name up to 5.",
      q: "One of your 5-star photos shows 8 students. How do you handle tags and the caption in YBA?",
      choices: [
        ["Tag the 5 most visible students and name the same 5 in the caption.", "Tag everyone visible, all 8. Only the caption is limited to 5 names."],
        ["Tag all 8 students. Name up to 5 in the caption.", "Right. Tag everyone visible; captions name up to 5."],
        ["Tag all 8 and name all 8 in the caption.", "Tagging all 8 is right, but captions name up to 5."],
        ["Skip tagging. The caption is enough.", "Tagging is one of the 12 steps. Tag everyone visible."]
      ], answer: 1 },
    { id: "q-honest", m: 3, type: "mcq",
      tip: "Be honest.",
      q: "Deadline #3 is in 10 minutes. You haven't tagged your photos yet, but the form has a box for it. What do you do?",
      choices: [
        ["Check the box now and tag the photos tonight.", "Checking a box for work you did not do is academic dishonesty. It will be graded and disciplined."],
        ["Don't check it. Finish the work for real, even if it means missing the deadline.", "Right. A missed deadline lowers your professionalism grade, but a false checkmark is academic dishonesty."],
        ["Check it. Editors don't look at tags.", "Don't count on that. Checking a box for work you did not do is academic dishonesty."],
        ["Ask a friend to tag them under your name.", "It's your assignment. Do the work yourself, and be honest in the form."]
      ], answer: 1 },

    // ---------- Module 5
    { id: "l-review", m: 4, type: "lesson", title: "5 · Approved or Hold",
      body: "<p><strong>Approved:</strong> Every step is done and done right. You get an “APPROVED” email. Your event is finished.</p><p><strong>Hold:</strong> Something is missing or not done right. You get an “ACTION REQUIRED” email. See the editor who assigned your event right away. You finish the work — held events are not reassigned.</p>",
      details: [
        ["Deadlines", "<ul class=\"steps\"><li><strong>Forms due:</strong> Grade Check, School Day Reporting Form, media credentials — only if they apply</li><li><strong>Deadline #1:</strong> Report copied, pre-event info, 7 approved questions</li><li><strong>Deadline #2:</strong> Event attended, interviews done, photo and interview counts</li><li><strong>Deadline #3:</strong> All 12 after-event steps, through YBA tagging and sign-off</li></ul>"],
        ["Missed deadlines", "<p>Every missed deadline lowers your professionalism grade. No exceptions. Can't go to your event? Tell the editor who assigned it as soon as you know — events can only be reassigned before they happen.</p>"]
      ] },
    { id: "q-hold", m: 4, type: "mcq",
      tip: "Held events are not reassigned.",
      q: "You get an “ACTION REQUIRED” email about your event. What now?",
      choices: [
        ["Wait. An editor will reassign it to someone else.", "Held events are not reassigned. You finish the work."],
        ["See the editor who assigned your event right away and finish the work.", "Right. Go to that editor right away."],
        ["Ignore it. You already submitted the form.", "An ACTION REQUIRED email means something is missing or not done right."],
        ["Start a new form from scratch.", "Talk to the editor who assigned your event and fix what's missing."]
      ], answer: 1 },
    { id: "q-cant", m: 4, type: "mcq",
      tip: "Events can only be reassigned before they happen.",
      q: "On Tuesday you find out you'll be out of town for your Saturday event. What do you do?",
      choices: [
        ["Tell the editor who assigned it right now.", "Right. Tell them as soon as you know, while it can still be reassigned."],
        ["Tell the editor on Monday after the event.", "Too late. Events can only be reassigned before they happen."],
        ["Ask a friend to cover it and submit under your name.", "Go through the editor who assigned it, as soon as you know."],
        ["Skip it. One missed event doesn't matter.", "Every missed deadline lowers your professionalism grade. Tell the editor as soon as you know."]
      ], answer: 0 },
    { id: "s-deadlines", m: 4, type: "sort",
      tip: "Each deadline has its own checklist.",
      q: "Final check: match each task to its deadline.",
      options: ["Forms due", "Deadline #1", "Deadline #2", "Deadline #3"],
      items: [
        ["7 approved questions", 1],
        ["Photo and interview counts", 2],
        ["YBA tagging and sign-off", 3],
        ["Media credentials (away game)", 0],
        ["Report copied and pre-event info", 1],
        ["Event attended and interviews done", 2]
      ] }
  ];
  var CERT = PAGES.length; // index of certificate screen

  // ---------- State
  function fresh() { return { started: false, page: 0, done: {}, name: "", completed: false }; }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === "object" && s.done) return s; } catch (e) {}
    return fresh();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  var state = load();
  var certUrl = null;

  var app = document.getElementById("app");
  var resetBtn = document.getElementById("resetBtn");
  var confirmBox = document.getElementById("confirm");

  function isCheck(p) { return p.type !== "lesson"; }
  function pageDone(i) { var p = PAGES[i]; return !isCheck(p) || state.done[p.id] !== undefined; }
  function allDone() { return PAGES.every(function (p, i) { return pageDone(i); }); }
  function firstUndone() { for (var i = 0; i < PAGES.length; i++) if (!pageDone(i)) return i; return CERT; }

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k]; else if (k === "class") e.className = attrs[k]; else e.setAttribute(k, attrs[k]);
    });
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function go(i) { state.page = i; save(); render(); }

  function render() {
    resetBtn.hidden = !state.started;
    app.innerHTML = "";
    if (!state.started) return renderIntro();
    // never allow jumping past unfinished work
    var limit = firstUndone();
    if (state.page > limit) state.page = limit;
    if (state.page >= CERT) return renderCert();
    renderPage(PAGES[state.page], state.page);
  }

  function focusHeading() { var h = app.querySelector("h1,h2"); if (h) { h.setAttribute("tabindex", "-1"); h.focus(); } }

  function renderIntro() {
    app.appendChild(el("p", { class: "kicker", text: "2027 Yearbook · In the Spotlight" }));
    app.appendChild(el("h1", { text: "Photo Workflow" }));
    app.appendChild(el("p", null, "Learn how to cover an event from assignment to editor review. You'll work through <strong>5 short modules</strong>, each with quick lessons and hands-on practice: putting steps in order, sorting tasks, and real newsroom scenarios."));
    app.appendChild(el("ul", { class: "steps" }, MODULES.map(function (m, i) { return "<li>Module " + (i + 1) + ": " + m + "</li>"; }).join("")));
    app.appendChild(el("p", { class: "hint" }, "Get each practice item right to move on — you can retry as many times as you need. Your progress saves in this browser. Finish everything to unlock your certificate."));
    var b = el("button", { type: "button", class: "btn", text: "Start" });
    b.onclick = function () { state.started = true; state.page = 0; save(); render(); };
    app.appendChild(el("div", { class: "row" })).appendChild(b);
    focusHeading();
  }

  function progress(i) {
    var p = PAGES[i];
    var wrap = el("div", { class: "progress" });
    wrap.appendChild(el("div", { class: "progress-label", text: "Module " + (p.m + 1) + " of " + MODULES.length + ": " + MODULES[p.m] + " · Page " + (i + 1) + " of " + PAGES.length }));
    var bar = el("div", { class: "bar", role: "progressbar", "aria-label": "Course progress", "aria-valuemin": "0", "aria-valuemax": String(PAGES.length), "aria-valuenow": String(i + 1) });
    bar.appendChild(el("span", { style: "width:" + Math.round((i + 1) / PAGES.length * 100) + "%" }));
    wrap.appendChild(bar);
    return wrap;
  }

  function nav(i, enabled) {
    var row = el("div", { class: "row nav" });
    var back = el("button", { type: "button", class: "btn ghost", text: "Back" });
    back.onclick = function () { go(i - 1); };
    if (i === 0) back.disabled = true;
    var next = el("button", { type: "button", class: "btn", id: "nextBtn", text: i === PAGES.length - 1 ? "Finish" : "Continue" });
    next.disabled = !enabled;
    next.onclick = function () {
      if (!pageDone(i)) return;
      if (i === PAGES.length - 1 && allDone()) { state.completed = true; }
      go(i + 1);
    };
    row.appendChild(back); row.appendChild(next);
    return row;
  }
  function unlock(msg) {
    var n = document.getElementById("nextBtn"); n.disabled = false;
    var f = document.getElementById("fb"); f.className = "feedback ok"; f.textContent = msg;
  }
  function fail(msg) { var f = document.getElementById("fb"); f.className = "feedback bad"; f.textContent = msg; }

  function renderPage(p, i) {
    app.appendChild(progress(i));
    if (p.type === "lesson") {
      app.appendChild(el("p", { class: "kicker", text: "Lesson" }));
      app.appendChild(el("h2", { text: p.title }));
      app.appendChild(el("div", null, p.body));
      (p.details || []).forEach(function (d) {
        var det = el("details", { class: "more" });
        det.appendChild(el("summary", { text: d[0] }));
        det.appendChild(el("div", { class: "more-body" }, d[1].charAt(0) === "<" ? d[1] : "<p>" + d[1] + "</p>"));
        app.appendChild(det);
      });
      app.appendChild(nav(i, true));
      return focusHeading();
    }
    app.appendChild(el("p", { class: "kicker", text: { mcq: "Scenario", order: "Put it in order", sort: "Sort it", number: "Do the math" }[p.type] }));
    app.appendChild(el("h2", { text: p.q }));
    if (p.tip) app.appendChild(el("p", { class: "tip" }, "<strong>Tip:</strong> " + p.tip));
    var body = el("div");
    app.appendChild(body);
    var fb = el("div", { id: "fb", class: "feedback", role: "status", "aria-live": "polite" });
    ({ mcq: mcq, order: order, sort: sort, number: number })[p.type](p, body, fb);
    app.appendChild(fb);
    app.appendChild(nav(i, pageDone(i)));
    if (pageDone(i)) { fb.className = "feedback ok"; fb.textContent = "Completed. You can continue."; }
    focusHeading();
  }

  function checkBtn(handler, disabled) {
    var b = el("button", { type: "button", class: "btn ghost check", text: "Check answer" });
    b.onclick = handler; b.disabled = !!disabled;
    return b;
  }

  function mcq(p, body) {
    var done = state.done[p.id] !== undefined;
    var fs = el("fieldset");
    fs.appendChild(el("legend", { class: "sr-only", text: "Choose one answer" }));
    p.choices.forEach(function (c, k) {
      var lab = el("label", { class: "choice" + (done && k === p.answer ? " correct" : "") });
      var r = el("input", { type: "radio", name: "c", value: String(k) });
      if (done) { r.disabled = true; if (k === p.answer) r.checked = true; }
      lab.appendChild(r); lab.appendChild(el("span", { text: c[0] }));
      fs.appendChild(lab);
    });
    body.appendChild(fs);
    var b = checkBtn(function () {
      var sel = fs.querySelector("input:checked");
      if (!sel) return fail("Choose an answer first.");
      var k = +sel.value;
      if (k === p.answer) {
        state.done[p.id] = k; save();
        fs.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
        sel.parentNode.classList.add("correct"); b.disabled = true;
        unlock("Correct! " + p.choices[k][1]);
      } else fail("Not quite. " + p.choices[k][1] + " Try again.");
    }, done);
    body.appendChild(el("div", { class: "row" })).appendChild(b);
  }

  function order(p, body) {
    var done = state.done[p.id] !== undefined;
    var cur = done ? p.items.map(function (_, k) { return k; }) : p.start.slice();
    var list = el("ol", { class: "order", "aria-label": "Steps in your current order" });
    var live = el("p", { class: "sr-only", "aria-live": "polite" });
    function draw(focusIdx, focusDir) {
      list.innerHTML = "";
      cur.forEach(function (item, pos) {
        var li = el("li", { class: "order-item" + (done ? " correct" : "") });
        li.appendChild(el("span", { class: "order-num", text: String(pos + 1), "aria-hidden": "true" }));
        li.appendChild(el("span", { class: "order-text", text: p.items[item] }));
        if (!done) {
          var ctr = el("span", { class: "order-btns" });
          var up = el("button", { type: "button", class: "btn ghost small", "aria-label": "Move up: " + p.items[item], text: "↑" });
          var dn = el("button", { type: "button", class: "btn ghost small", "aria-label": "Move down: " + p.items[item], text: "↓" });
          up.disabled = pos === 0; dn.disabled = pos === cur.length - 1;
          up.onclick = function () { move(pos, -1); };
          dn.onclick = function () { move(pos, 1); };
          ctr.appendChild(up); ctr.appendChild(dn); li.appendChild(ctr);
        }
        list.appendChild(li);
      });
      if (focusIdx !== undefined) {
        var btns = list.children[focusIdx].querySelectorAll("button");
        var t = focusDir < 0 ? btns[0] : btns[1];
        if (t.disabled) t = focusDir < 0 ? btns[1] : btns[0];
        t.focus();
      }
    }
    function move(pos, d) {
      var np = pos + d, t = cur[pos]; cur[pos] = cur[np]; cur[np] = t;
      live.textContent = p.items[t] + " moved to position " + (np + 1) + ".";
      document.getElementById("fb").className = "feedback"; document.getElementById("fb").textContent = "";
      draw(np, d);
    }
    draw();
    body.appendChild(list); body.appendChild(live);
    var b = checkBtn(function () {
      var right = cur.filter(function (v, k) { return v === k; }).length;
      if (right === cur.length) {
        done = true; state.done[p.id] = 1; save(); draw(); b.disabled = true;
        unlock("Correct! That's the right order.");
      } else fail(right + " of " + cur.length + " steps are in the right spot. Keep adjusting and check again.");
    }, done);
    body.appendChild(el("div", { class: "row" })).appendChild(b);
  }

  function sort(p, body) {
    var done = state.done[p.id] !== undefined;
    var selects = [];
    var wrap = el("div", { class: "sort" });
    p.items.forEach(function (it, k) {
      var row = el("div", { class: "sort-row" + (done ? " correct" : "") });
      var id = p.id + "-" + k;
      row.appendChild(el("label", { for: id, class: "sort-text", text: it[0] }));
      var s = el("select", { id: id });
      s.appendChild(el("option", { value: "", text: "Choose…" }));
      p.options.forEach(function (o, j) { s.appendChild(el("option", { value: String(j), text: o })); });
      if (done) { s.value = String(it[1]); s.disabled = true; }
      s.onchange = function () { row.classList.remove("wrong"); };
      row.appendChild(s); wrap.appendChild(row); selects.push([s, row]);
    });
    body.appendChild(wrap);
    var b = checkBtn(function () {
      var blank = 0, wrong = 0;
      selects.forEach(function (sr, k) {
        sr[1].classList.remove("wrong", "correct");
        if (sr[0].value === "") blank++;
        else if (+sr[0].value !== p.items[k][1]) { wrong++; sr[1].classList.add("wrong"); }
        else sr[1].classList.add("correct");
      });
      if (blank) return fail("Choose an answer for every item first.");
      if (wrong) return fail(wrong + (wrong === 1 ? " item is" : " items are") + " in the wrong place (marked in red). Re-read the tip and try again.");
      state.done[p.id] = 1; save();
      selects.forEach(function (sr) { sr[0].disabled = true; });
      b.disabled = true; unlock("Correct! Everything is sorted.");
    }, done);
    body.appendChild(el("div", { class: "row" })).appendChild(b);
  }

  function number(p, body) {
    var done = state.done[p.id] !== undefined;
    var id = p.id + "-in";
    body.appendChild(el("label", { for: id, class: "field", text: p.label }));
    var inp = el("input", { type: "text", id: id, inputmode: "numeric", autocomplete: "off" });
    inp.style.maxWidth = "160px";
    if (done) { inp.value = String(p.answer); inp.disabled = true; }
    body.appendChild(inp);
    var b = checkBtn(function () {
      var v = parseInt(inp.value.replace(/[^0-9]/g, ""), 10);
      if (isNaN(v)) return fail("Enter a number first.");
      if (v === p.answer) { state.done[p.id] = v; save(); inp.disabled = true; b.disabled = true; unlock(p.ok); }
      else fail((p.wrong[v] || "Not quite. Re-read the tip and try again.") + (p.wrong[v] ? " Try again." : ""));
    }, done);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") b.click(); });
    var row = el("div", { class: "row", style: "margin-top:12px" }); row.appendChild(b); body.appendChild(row);
  }

  // ---------- Certificate
  function clearCert() {
    if (certUrl) { URL.revokeObjectURL(certUrl); certUrl = null; }
    var area = document.getElementById("certArea"); if (area) { area.hidden = true; }
  }

  function renderCert() {
    if (!allDone()) { state.page = firstUndone(); save(); return render(); }
    state.completed = true; save();
    app.appendChild(el("p", { class: "kicker", text: "Course complete" }));
    app.appendChild(el("h2", { text: "Nice work — you finished Photo Workflow." }));
    app.appendChild(el("p", null, "You completed all " + MODULES.length + " modules and got every practice item right. Enter your name to create your certificate."));
    app.appendChild(el("label", { for: "nameIn", class: "field", text: "Your name (as it should appear)" }));
    var inp = el("input", { type: "text", id: "nameIn", maxlength: "80", autocomplete: "name" });
    inp.value = state.name || "";
    app.appendChild(inp);
    var make = el("button", { type: "button", class: "btn", text: "Create certificate" });
    var row = el("div", { class: "row", style: "margin-top:12px" }); row.appendChild(make); app.appendChild(row);
    var fb = el("div", { id: "fb", class: "feedback", role: "status", "aria-live": "polite" }); app.appendChild(fb);

    var area = el("div", { id: "certArea" }); area.hidden = true;
    var img = el("img", { class: "preview", alt: "Certificate preview" });
    var dl = el("a", { class: "btn", id: "dlBtn", text: "Download certificate (PNG)" });
    var link = el("a", { id: "saveLink", text: "Save link" });
    var r2 = el("div", { class: "row" }); r2.appendChild(dl); r2.appendChild(link);
    area.appendChild(img); area.appendChild(r2);
    app.appendChild(area);

    var back = el("button", { type: "button", class: "btn ghost", text: "Back" });
    back.onclick = function () { clearCert(); go(PAGES.length - 1); };
    var r3 = el("div", { class: "row nav", style: "margin-top:20px" }); r3.appendChild(back); app.appendChild(r3);

    inp.addEventListener("input", function () {
      clearCert(); fb.className = "feedback"; fb.textContent = "";
      state.name = inp.value.trim(); save();
    });
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") make.click(); });
    make.onclick = function () {
      var name = inp.value.trim().replace(/\s+/g, " ");
      if (!name) { fb.className = "feedback bad"; fb.textContent = "Enter your name first."; inp.focus(); return; }
      state.name = name; save();
      buildCert(name, function (blob) {
        clearCert();
        certUrl = URL.createObjectURL(blob);
        var file = "Photo-Workflow-Certificate-" + name.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "") + ".png";
        [dl, link].forEach(function (a) { a.href = certUrl; a.setAttribute("download", file); });
        img.src = certUrl; area.hidden = false;
        fb.className = "feedback ok"; fb.textContent = "Your certificate is ready.";
        dl.focus();
      });
    };
    focusHeading();
    if (state.name) make.click();
  }

  function buildCert(name, cb) {
    var W = 1600, H = 1130, c = document.createElement("canvas");
    c.width = W; c.height = H;
    var x = c.getContext("2d");
    x.fillStyle = "#fbf8f5"; x.fillRect(0, 0, W, H);
    x.strokeStyle = "#7a1f2b"; x.lineWidth = 24; x.strokeRect(30, 30, W - 60, H - 60);
    x.strokeStyle = "#1b1b1f"; x.lineWidth = 3; x.strokeRect(70, 70, W - 140, H - 140);
    x.fillStyle = "#1b1b1f"; x.fillRect(70, 70, W - 140, 120);
    x.textAlign = "center"; x.textBaseline = "middle";
    var F = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
    x.fillStyle = "#fff"; x.font = "700 36px " + F;
    x.fillText("2027 YEARBOOK · IN THE SPOTLIGHT", W / 2, 130);
    x.fillStyle = "#7a1f2b"; x.font = "800 76px " + F;
    x.fillText("Certificate of Completion", W / 2, 300);
    x.fillStyle = "#55565c"; x.font = "32px " + F;
    x.fillText("This certifies that", W / 2, 400);
    // fit long names
    var size = 96, max = W - 300;
    x.fillStyle = "#1b1b1f";
    do { x.font = "700 " + size + "px " + F; size -= 2; } while (x.measureText(name).width > max && size > 34);
    var shown = name;
    if (x.measureText(shown).width > max) {
      while (shown.length > 1 && x.measureText(shown + "…").width > max) shown = shown.slice(0, -1);
      shown += "…";
    }
    x.fillText(shown, W / 2, 510);
    x.fillStyle = "#7a1f2b"; x.fillRect(W / 2 - 400, 580, 800, 4);
    x.fillStyle = "#55565c"; x.font = "32px " + F;
    x.fillText("has completed", W / 2, 650);
    x.fillStyle = "#1b1b1f"; x.font = "700 52px " + F;
    x.fillText(TITLE, W / 2, 725);
    x.fillStyle = "#55565c"; x.font = "28px " + F;
    x.fillText("Completed all " + MODULES.length + " modules and answered all " + PAGES.filter(isCheck).length + " practice items correctly.", W / 2, 810);
    var d = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    x.fillStyle = "#1b1b1f"; x.font = "600 34px " + F;
    x.fillText("Completed " + d, W / 2, 920);
    c.toBlob(cb, "image/png");
  }

  // ---------- Reset
  resetBtn.onclick = function () { confirmBox.hidden = false; document.getElementById("confirmNo").focus(); };
  document.getElementById("confirmNo").onclick = function () { confirmBox.hidden = true; resetBtn.focus(); };
  document.getElementById("confirmYes").onclick = function () {
    clearCert();
    try { localStorage.removeItem(KEY); } catch (e) {}
    state = fresh(); confirmBox.hidden = true; render();
  };
  confirmBox.addEventListener("keydown", function (e) { if (e.key === "Escape") document.getElementById("confirmNo").click(); });

  render();
})();
