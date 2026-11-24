(function () {
  const NIGHT_MAP = {
    1: "First",
    2: "Second",
    3: "Third",
    4: "Fourth",
    5: "Fifth",
    6: "Sixth",
    7: "Seventh",
    8: "Eighth",
  };

  const EVENTS = [
    {
      date: "Tuesday, Dec. 1",
      pre: true,
      compact: true,
      isoStart: "2026-12-01T19:30:00-05:00",
      eventName: "Mats & Miracles",
      time: "7:30 PM",
      location: "Chabad in Cherry Hill",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org/templates/articlecco_cdo/aid/7623784/jewish/Ladies-Night-Out-RSVP.htm",
      flyer: "https://w2.chabad.org/media/images/1396/cuWh13961752.png",
    },
    {
      date: "Saturday, Dec. 5",
      night: 2,
      isoStart: "2026-12-05T19:30:00-05:00",
      eventName: "Chanukah on Ice",
      time: "7:30 PM – 9:00 PM",
      location: "Igloo Ice Rink, 3033 Fostertown Rd, Mt. Laurel, NJ 08054",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org/tools/events/register_cdo/eventid/24399",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Chanukah_on_Ice_2026.webp",
    },
    {
      date: "Sunday, Dec. 6",
      night: 3,
      isoStart: "2026-12-06T15:00:00-05:00",
      eventName: "Car Menorah Parade",
      time: "Lineup 3:00 PM, Parade 4:00 PM",
      location: "Starts at Chabad, 1925 Kresson Rd, Cherry Hill, NJ 08003",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org/7632249",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Menorah_Motorcade.webp",
    },
    {
      date: "Sunday, Dec. 6",
      night: 3,
      isoStart: "2026-12-06T15:30:00-05:00",
      eventName: "CTeen Limo Parade & Grand Menorah Lighting",
      time: "3:30 PM",
      location: "Starts at Chabad, 1925 Kresson Rd, Cherry Hill, NJ 08003",
      note: "",
      host: "CTeen",
      link: "https://www.thechabadcenter.org/7633057",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/CTeen_Limo_Parade_2026.webp",
    },
    {
      date: "Sunday, Dec. 6",
      night: 3,
      flagship: true,
      isoStart: "2026-12-06T17:00:00-05:00",
      eventName: "Grand Chanukah Fest & Menorah Lighting",
      time: "5:00 PM",
      location: "Barclay Farm Shopping Center, 80 Barclay Farms Shopping Center, Cherry Hill, NJ 08034",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org/7632233",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Chanukah-Fest.webp",
    },
    {
      date: "Monday, Dec. 7",
      night: 4,
      isoStart: "2026-12-07T17:30:00-05:00",
      eventName: "Chanukah Village Walk",
      time: "5:30 PM – 7:30 PM",
      location: "Main Street, Medford, 16 N Main St, Medford, NJ 08055",
      note: "",
      host: "Chabad of Medford",
      link: "https://www.chabadmedford.org/Walk",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Medford_Chanukah_2026.webp",
    },
    {
      date: "Tuesday, Dec. 8",
      night: 5,
      isoStart: "2026-12-08T17:30:00-05:00",
      eventName: "Grand Chanukah Prize & Gelt Drop",
      time: "5:30 PM",
      location: "Chabad / Cherry Hill Commerce Center, 1820 Chapel Ave, Cherry Hill, NJ 08002",
      note: "",
      host: "Chabad of Cherry Hill West",
      link: "https://ChabadCherryHillWest.org",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/westside.jpg",
    },
    {
      date: "Tuesday, Dec. 8",
      night: 5,
      isoStart: "2026-12-08T18:00:00-05:00",
      eventName: "Haddonfield Menorah Lighting",
      time: "6:00 PM",
      location: "Library Point, 60 N Haddon Ave, Haddonfield, NJ 08033",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org/7632285",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Haddonfield_Chanukah_2026.webp",
    },
    {
      date: "Wednesday, Dec. 9",
      night: 6,
      isoStart: "2026-12-09T18:00:00-05:00",
      eventName: "Collingswood Menorah Lighting",
      time: "6:00 PM",
      location: "Lumberyard Garden, corner of Collings Ave & N. Atlantic Ave, Collingswood, NJ",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org/7632328",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Collingswood_Chanukah_2026.webp",
    },
    {
      date: "Wednesday, Dec. 9",
      night: 6,
      isoStart: "2026-12-09T18:00:00-05:00",
      eventName: "Hainesport Menorah Lighting",
      time: "6:00 PM",
      location: "Hainesport Municipal Building, 1401 Marne Hwy, Hainesport, NJ 08036",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org/7632329",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Hainesport_Chanukah_2026.webp",
    },
    {
      date: "Thursday, Dec. 10",
      night: 7,
      isoStart: "2026-12-10T17:30:00-05:00",
      eventName: "Outdoor Menorah Lighting",
      time: "5:30 PM",
      location: "Silver Dental, 1816 Mt. Holly Road #101, Burlington, NJ",
      note: "",
      host: "Chabad of Florence",
      link: "https://www.florencechabad.org/templates/articlecco_cdo/aid/4658710/jewish/Chanukah.htm",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Florence_Chanukah_2026.png",
    },
    {
      date: "Thursday, Dec. 10",
      night: 7,
      isoStart: "2026-12-10T18:00:00-05:00",
      eventName: "Moorestown Menorah Lighting",
      time: "6:00 PM",
      location: "Community House of Moorestown, 16 E Main St, Moorestown, NJ 08057",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org/7632330",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Moorestown_Chanukah_2026.webp",
    },
    {
      date: "Thursday, Dec. 10",
      night: 7,
      isoStart: "2026-12-10T18:00:00-05:00",
      eventName: "Donuts & Dazzle",
      time: "6:00 PM",
      location: "Chabad in Cherry Hill",
      note: "",
      host: "CTeen Jr.",
      link: "https://www.thechabadcenter.org/chanukah",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/Cteen%20jr%20chanukah.jpeg",
    },
  ];

  // Extra events for Add-to-Calendar only (test pages, NOT in the public listing)
  const CAL_EXTRA_EVENTS = [
    {
      date: "Sunday, Dec. 14",
      isoStart: "2026-12-14T17:00:00-05:00",
      eventName: "Mega Event and 18' Menorah Lighting",
      aliases: ["18ft Menorah Grand Event"],
      time: "5:00 PM",
      location: "Barclay Farm Shopping Center, 80 Barclay Farms Shopping Center, Cherry Hill, NJ 08034",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
    },
  ];

  function ensureViewport() {
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(meta);
    }
  }

  function removeChabadOneTopBar() {
    document.querySelectorAll(".cco_templateless_template").forEach((el) => {
      el.remove();
    });
  }

  function initNav() {
    const btn = document.getElementById("ch-nav-toggle");
    const menu = document.getElementById("ch-nav-links");
    if (!btn || !menu) return;
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("ch-nav-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("ch-nav-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function formatLocation(loc) {
    if (!loc) return "";
    return loc
      .replace(/,/g, "<br />")
      .replace(/<br \/>\s*(NJ|PA|NY)\b/g, ", $1");
  }

  function buildFlyerHtml(ev) {
    if (!ev.flyer) return "";
    if (ev.flyer === "coming-soon") {
      return `
        <div class="ch-flyer-placeholder" aria-label="Flyer coming soon">
          <i class="fas fa-menorah"></i>
          <span>Flyer<br />Coming Soon</span>
        </div>
      `;
    }
    return `
      <div class="ch-event-flyer js-ch-flyer" data-src="${ev.flyer}" title="Click to enlarge flyer">
        <img src="${ev.flyer}" alt="${ev.eventName || "Chanukah Event"} Flyer" loading="lazy" />
      </div>
    `;
  }

  function buildCard(ev) {
    let link = (ev.link || "").trim();
    if (link && !link.startsWith("http") && !link.startsWith("/") && !link.startsWith("#")) {
      link = "https://" + link;
    }

    return `
      <div class="ch-event-card${ev.compact ? " ch-event-card--compact" : ""}${ev.flagship ? " ch-card-flagship" : ""}">
        ${buildFlyerHtml(ev)}
        <div class="ch-event-main">
          ${ev.flagship ? `<div class="ch-event-banner">★ Featured event ★</div>` : ""}
          <div class="ch-event-title">${ev.eventName || ""}</div>
          <div class="ch-event-details">
            ${ev.location ? `<div class="ch-detail-line"><i class="fas fa-map-marker-alt"></i><span>${formatLocation(ev.location)}</span></div>` : ""}
            ${ev.date ? `<div class="ch-detail-line"><i class="far fa-clock"></i><span>${ev.date}${ev.time ? " &middot; " + ev.time : ""}</span></div>` : ""}
          </div>
        </div>
        <div class="ch-event-footer">
          ${ev.note ? `<div class="ch-event-note">${ev.note}</div>` : ""}
          <div class="ch-footer-row">
            ${ev.host ? `<span class="ch-event-host">Hosted by: ${ev.host}</span>` : ""}
            ${link ? `<a class="ch-reserve-btn" href="${link}">Info and RSVP &rarr;</a>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  function renderDirectory() {
    const container = document.getElementById("ch-directory");
    if (!container) return;

    const groups = [];
    let currentDate = "";
    let currentGroup = null;

    EVENTS.forEach((ev) => {
      if (ev.date !== currentDate) {
        currentDate = ev.date;
        currentGroup = { date: ev.date, night: ev.night, pre: ev.pre, items: [] };
        groups.push(currentGroup);
      }
      currentGroup.items.push(ev);
    });

    container.innerHTML = groups
      .map((grp) => {
        const menorahUrl = grp.night
          ? `https://chabad.org/images/1/calendar/menorah_colored_small_${grp.night}.png`
          : "";
        /* Pre-Hanukkah group only: "Pre - Chanukkah" is the heading and the date
           is the small sub-line. Every other group keeps the date as the
           heading with the night label below. */
        const headerTitle = grp.pre ? "Pre - Chanukkah" : grp.date;
        const headerSub =
          grp.pre
            ? `<span>${grp.date}</span>`
            : grp.night && NIGHT_MAP[grp.night]
              ? `<span>${NIGHT_MAP[grp.night]} Night of Chanukah</span>`
              : "";
        const singleClass = grp.items.length === 1 ? " ch-single-night" : "";
        const preClass = grp.pre ? " ch-night-header--pre" : "";

        return `
          <div class="ch-night-header${preClass}">
            ${menorahUrl ? `<img class="ch-menorah-icon" src="${menorahUrl}" alt="" />` : ""}
            <div>
              <h2>${headerTitle}</h2>
              ${headerSub}
            </div>
          </div>
          <div class="ch-modules-wrapper${singleClass}">
            ${grp.items.map(buildCard).join("")}
          </div>
        `;
      })
      .join("");
  }

  function injectEventSchema() {
    const schemaItems = EVENTS.filter((ev) => ev.isoStart).map((ev) => ({
      "@context": "https://schema.org",
      "@type": "Event",
      name: ev.eventName,
      startDate: ev.isoStart,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: ev.location || "Cherry Hill, NJ",
        address: ev.location || "Cherry Hill, NJ",
      },
      organizer: {
        "@type": "Organization",
        name: ev.host || "Chabad of Camden & Burlington Counties",
        url: "https://www.thechabadcenter.org",
      },
    }));

    if (!schemaItems.length) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaItems);
    document.head.appendChild(script);
  }

  function initLightbox() {
    let box = document.getElementById("ch-lightbox");
    if (!box) {
      box = document.createElement("div");
      box.id = "ch-lightbox";
      box.setAttribute("aria-hidden", "true");
      box.innerHTML =
        '<div id="ch-lightbox-inner"><button id="ch-lightbox-close" type="button" aria-label="Close flyer">&times;</button><img id="ch-lightbox-img" alt="Event Flyer" src="" /></div>';
      document.body.appendChild(box);
    }

    const img = document.getElementById("ch-lightbox-img");
    const closeBtn = document.getElementById("ch-lightbox-close");

    function close() {
      box.className = "";
      box.setAttribute("aria-hidden", "true");
      img.src = "";
    }

    document.querySelectorAll(".js-ch-flyer").forEach((el) => {
      el.addEventListener("click", () => {
        img.src = el.getAttribute("data-src");
        box.className = "ch-open";
        box.setAttribute("aria-hidden", "false");
      });
    });

    closeBtn.addEventListener("click", close);
    box.addEventListener("click", (e) => {
      if (e.target === box) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

// --- Add to Calendar: Google link + Apple .ics download ---
function chNormalizeTitle(s) {
  return (s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function chFindEventForPage(title) {
  const t = chNormalizeTitle(title);
  if (!t) return null;
  let best = null;
  let bestLen = 0;
  const checkName = (name, ev) => {
    const n = chNormalizeTitle(name);
    if (!n) return;
    if (t.includes(n) || n.includes(t)) {
      if (n.length > bestLen) { best = ev; bestLen = n.length; }
    }
  };
  const check = (ev) => {
    checkName(ev.eventName, ev);
    (ev.aliases || []).forEach((a) => checkName(a, ev));
  };
  EVENTS.forEach(check);
  CAL_EXTRA_EVENTS.forEach(check);
  return best;
}

function chParseTimeOnDate(timeStr, isoStart) {
  const m = (timeStr || "").match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const min = m[2] ? parseInt(m[2], 10) : 0;
  const ap = m[3].toLowerCase();
  if (ap === "pm" && h !== 12) h += 12;
  if (ap === "am" && h === 12) h = 0;
  const off = (isoStart.match(/([+-]\d{2}:\d{2}|Z)$/) || [""])[0];
  const iso = isoStart.slice(0, 10) + "T" + String(h).padStart(2, "0") + ":" + String(min).padStart(2, "0") + ":00" + off;
  const d = new Date(iso);
  return isNaN(d) ? null : d;
}

function chUTCStamp(d) {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function chBuildCalLinks(ev) {
  const start = new Date(ev.isoStart);
  if (isNaN(start)) return "";
  let end = null;
  const parts = (ev.time || "").split(/\s*[\u2013\u2014-]\s*/);
  if (parts.length >= 2) end = chParseTimeOnDate(parts[parts.length - 1], ev.isoStart);
  if (end && !isNaN(end)) {
    if (end <= start) end = new Date(end.getTime() + 24 * 60 * 60000);
  } else {
    end = new Date(start.getTime() + 90 * 60000);
  }
  const desc = ev.note || "Chanukah 2026";
  const gUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE"
    + "&text=" + encodeURIComponent(ev.eventName)
    + "&dates=" + chUTCStamp(start) + "/" + chUTCStamp(end)
    + "&details=" + encodeURIComponent(desc)
    + "&location=" + encodeURIComponent(ev.location || "");
  const esc = (s) => (s || "").replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
  const slug = chNormalizeTitle(ev.eventName).replace(/ /g, "-");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Chabad of Camden & Burlington Counties//Chanukah 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:chanukah2026-" + slug + "@thechabadcenter.org",
    "DTSTAMP:" + chUTCStamp(new Date()),
    "DTSTART:" + chUTCStamp(start),
    "DTEND:" + chUTCStamp(end),
    "SUMMARY:" + esc(ev.eventName),
    "DESCRIPTION:" + esc(desc),
    "LOCATION:" + esc(ev.location || ""),
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const icsUrl = URL.createObjectURL(blob);
  const calIcon = '<svg class="ch-cal-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
  return '<div class="ch-add-cal"><span class="ch-add-cal-label">' + calIcon + 'Add to calendar:</span><a href="' + gUrl + '" target="_blank" rel="noopener">Google Calendar</a><span class="ch-add-cal-sep">\u2022</span><a href="' + icsUrl + '" download="' + slug + '.ics">Apple Calendar</a></div>';
}

// Google Calendar URL for a page title (used by the Events Module wizard, which cannot see EVENTS).
// Same start/end logic as chBuildCalLinks: end parsed from the time range, else start + 90 min.
window.chGoogleCalUrlForTitle = function (title) {
  const ev = chFindEventForPage(title);
  if (!ev) return "";
  const start = new Date(ev.isoStart);
  if (isNaN(start)) return "";
  let end = null;
  const parts = (ev.time || "").split(/\s*[\u2013\u2014-]\s*/);
  if (parts.length >= 2) end = chParseTimeOnDate(parts[parts.length - 1], ev.isoStart);
  if (end && !isNaN(end)) {
    if (end <= start) end = new Date(end.getTime() + 24 * 60 * 60000);
  } else {
    end = new Date(start.getTime() + 90 * 60000);
  }
  return "https://calendar.google.com/calendar/render?action=TEMPLATE"
    + "&text=" + encodeURIComponent(ev.eventName)
    + "&dates=" + chUTCStamp(start) + "/" + chUTCStamp(end)
    + "&details=" + encodeURIComponent(ev.note || "Chanukah 2026")
    + "&location=" + encodeURIComponent(ev.location || "");
};

function initEventModalWizard() {
  if (document.getElementById("RegisterSinglePage")) return;
    const formContainer = document.getElementById("formContainer");
    const form = formContainer ? formContainer.querySelector("form.userform-form") : null;
    const ul = form ? form.querySelector("ul.form-section") : null;
    if (!formContainer || !form || !ul) return;

    // Fix browser Back-button "Please Wait..." stuck submit button
    window.addEventListener("pageshow", () => {
      form.querySelectorAll(".form-submit-button").forEach((btn) => {
        btn.disabled = false;
        if (/please wait/i.test(btn.textContent || btn.value || "")) {
          btn.textContent = "Register";
          if (btn.value) btn.value = "Register";
        }
      });
    });

    const items = Array.from(ul.children).filter((el) => el.tagName === "LI");
    const landingParts = { flyerSrc: "", htmlBlocks: [] };
    let submitLi = null;
    let paymentLi = null;
    let emailLi = null;
    let phoneLi = null;
    let optInLi = null;
    let donateLi = null;
    let totalLi = null;
    let volunteerLi = null;
    let commentLi = null;
    const steps = { 1: [], 2: [], 3: [], 4: [] };

    items.forEach((li) => {
      if (li.style.display === "none" && li.textContent.includes("Should be Empty")) return;

      const img = li.querySelector("img.form-image");
      const htmlBlock = li.querySelector(".form-html");
      const isHead = li.querySelector(".form-header-group");
      const isSubmit = li.querySelector(".form-submit-button");
      const isPay = li.querySelector(".form-creditcard, .cc-icons, .billing_address");

      if (img && !landingParts.flyerSrc) {
        landingParts.flyerSrc = img.getAttribute("src");
        li.classList.add("ch-step-hidden");
        return;
      }
      if (htmlBlock && steps[1].length === 0 && steps[2].length === 0) {
        landingParts.htmlBlocks.push(htmlBlock.innerHTML);
        li.classList.add("ch-step-hidden");
        return;
      }
      if (isHead) {
        li.classList.add("ch-step-hidden");
        return;
      }
      if (isSubmit) {
        submitLi = li;
        li.classList.add("ch-step-hidden");
        return;
      }
      if (isPay) {
        paymentLi = li;
        li.classList.add("ch-pay-step");
        steps[4].push(li);
        return;
      }

      const fullText = li.textContent.toLowerCase();
      const labelText = (li.querySelector("label") ? li.querySelector("label").textContent : "").toLowerCase();
      const isSpinner = !!li.querySelector(".form-spinner-input, [data-type='input-spinner']");
      const isVolunteer = /volunteer/.test(fullText) && !/donat|contribut|sponsor/.test(fullText);
      const isComment = !!li.querySelector("textarea") || /comment|note|question|message/.test(labelText);
      const isOptIn = /receive news|updates by email|opt.?in/.test(fullText);
      const isTotal = !!li.querySelector("#total_amount, [id*='total_amount']") || /^total\b/.test(labelText.trim());
      const isDonate =
        !isOptIn &&
        (isTotal ||
          !!li.querySelector(".form-radio-other") ||
          /donat|contribut|sponsor|support|gift/.test(labelText));

      if (isSpinner || /adult|child|guest|attend|ticket/.test(labelText)) {
        li.classList.add("ch-ticket-card");
        steps[1].push(li);
      } else if (isDonate || isVolunteer || isComment) {
        if (isTotal) {
          li.classList.add("ch-total-line");
          totalLi = li;
        } else if (isVolunteer) {
          li.classList.add("ch-volunteer-section");
          volunteerLi = li;
        } else if (isComment) {
          li.classList.add("ch-comment-box");
          commentLi = li;
        } else if (li.querySelector("input[type='radio']")) {
          li.classList.add("ch-donate-tiles");
          donateLi = li;
        }
        steps[3].push(li);
      } else {
        if (/email|e-mail/.test(labelText) && !isOptIn) {
          li.classList.add("ch-half-field");
          emailLi = li;
        } else if (/phone|mobile|cell/.test(labelText)) {
          li.classList.add("ch-half-field");
          phoneLi = li;
        } else if (isOptIn) {
          li.classList.add("ch-optin-compact");
          optInLi = li;
        }
        steps[2].push(li);
      }
    });

    // Step 2 order: Email + Phone side-by-side, Opt-In directly underneath
    if (emailLi && phoneLi && emailLi.parentNode === ul) {
      emailLi.insertAdjacentElement("afterend", phoneLi);
    }
    const optAnchor = phoneLi || emailLi;
    if (optInLi && optAnchor && optAnchor.parentNode === ul) {
      optAnchor.insertAdjacentElement("afterend", optInLi);
    }

    // Step 3 order: Donation Options -> Total -> Volunteer -> Comment
    if (donateLi && totalLi && donateLi.parentNode === ul) {
      donateLi.insertAdjacentElement("afterend", totalLi);
    }
    const volAnchor = totalLi || donateLi;
    if (volunteerLi && volAnchor && volAnchor.parentNode === ul) {
      volAnchor.insertAdjacentElement("afterend", volunteerLi);
    }
    const commentAnchor = volunteerLi || totalLi || donateLi;
    if (commentLi && commentAnchor && commentAnchor.parentNode === ul) {
      commentAnchor.insertAdjacentElement("afterend", commentLi);
    }

    // Keep "Other" donation input clickable, non-negative (>= 0), and error-free on empty blur
    ul.querySelectorAll(".form-radio-other-input").forEach((otherInput) => {
      const radioItem = otherInput.closest(".form-radio-item");
      const radio = radioItem ? radioItem.querySelector("input[type='radio']") : null;
      if (!radio) return;

      function unlockOther() {
        if (otherInput.disabled || otherInput.hasAttribute("disabled")) {
          otherInput.disabled = false;
          otherInput.removeAttribute("disabled");
        }
        otherInput.readOnly = false;
        otherInput.setAttribute("min", "0");
      }

      function clearDonateError() {
        if (!donateLi) return;
        donateLi.classList.remove("form-line-error");
        donateLi.querySelectorAll(".form-error-message").forEach((el) => el.remove());
      }

      unlockOther();
      if (/^other$/i.test((otherInput.value || "").trim())) {
        otherInput.value = "";
      }
      otherInput.placeholder = "Other ($)";

      new MutationObserver(() => {
        if (otherInput.disabled || otherInput.hasAttribute("disabled")) {
          unlockOther();
          if (!radio.checked) otherInput.value = "";
        }
      }).observe(otherInput, { attributes: true, attributeFilter: ["disabled"] });

      if (donateLi) {
        donateLi.querySelectorAll("input[type='radio']").forEach((r) => {
          if (r !== radio) {
            r.addEventListener("change", () => {
              if (r.checked) {
                otherInput.value = "";
                clearDonateError();
              }
            });
          }
        });
      }

      otherInput.addEventListener("keydown", (e) => {
        if (["-", "e", "E", "+"].includes(e.key)) {
          e.preventDefault();
        }
      });

      otherInput.addEventListener("focus", () => {
        unlockOther();
        if (/^other$/i.test((otherInput.value || "").trim())) {
          otherInput.value = "";
        }
        clearDonateError();
      });

      otherInput.addEventListener("input", () => {
        unlockOther();
        if (otherInput.value.includes("-")) {
          otherInput.value = otherInput.value.replace(/-/g, "");
        }
        const num = parseFloat(otherInput.value) || 0;
        if (num < 0) {
          otherInput.value = "0";
        }
        if (num > 0) {
          if (!radio.checked) {
            radio.checked = true;
            radio.dispatchEvent(new Event("click", { bubbles: true }));
            radio.dispatchEvent(new Event("change", { bubbles: true }));
          }
          clearDonateError();
        }
        otherInput.dispatchEvent(new Event("keyup", { bubbles: true }));
        otherInput.dispatchEvent(new Event("change", { bubbles: true }));
        setTimeout(renderStep, 40);
      });

      otherInput.addEventListener("blur", () => {
        const num = parseFloat(otherInput.value) || 0;
        if (num <= 0) {
          otherInput.value = "";
          if (radio.checked) {
            const noThanks = donateLi
              ? Array.from(donateLi.querySelectorAll("input[type='radio']")).find((r) =>
                  /no thanks|none|^0$/i.test((r.value || "").trim())
                )
              : null;
            if (noThanks) {
              noThanks.checked = true;
              noThanks.dispatchEvent(new Event("click", { bubbles: true }));
              noThanks.dispatchEvent(new Event("change", { bubbles: true }));
            } else {
              radio.checked = false;
              radio.dispatchEvent(new Event("change", { bubbles: true }));
            }
          }
          setTimeout(() => {
            clearDonateError();
            renderStep();
          }, 50);
        }
      });
    });

    // Tight Stepper: keep real <input> outside .ch-stepper so zero extra gap can appear
    ul.querySelectorAll(".form-spinner-input, [data-type='input-spinner']").forEach((input) => {
      if (input.dataset.chStepperReady) return;
      input.dataset.chStepperReady = "1";
      const card = input.closest(".ch-ticket-card");
      const formInput = input.closest(".form-input");
      if (!formInput) return;

      const wrap = document.createElement("div");
      wrap.className = "ch-stepper";

      const minus = document.createElement("button");
      minus.type = "button";
      minus.className = "ch-step-btn";
      minus.textContent = "−";

      const valDisplay = document.createElement("span");
      valDisplay.className = "ch-stepper-val";

      const plus = document.createElement("button");
      plus.type = "button";
      plus.className = "ch-step-btn";
      plus.textContent = "+";

      wrap.appendChild(minus);
      wrap.appendChild(valDisplay);
      wrap.appendChild(plus);

      input.style.setProperty("display", "none", "important");
      formInput.appendChild(wrap);

      if (!input.value) input.value = "0";

      function syncCard() {
        const val = parseInt(input.value, 10) || 0;
        valDisplay.textContent = String(val);
        minus.classList.toggle("ch-muted-btn", val <= 0);
        if (card) card.classList.toggle("ch-ticket-active", val > 0);
      }
      syncCard();

      minus.addEventListener("click", () => {
        input.value = Math.max(0, (parseInt(input.value, 10) || 0) - 1);
        syncCard();
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
      plus.addEventListener("click", () => {
        input.value = (parseInt(input.value, 10) || 0) + 1;
        syncCard();
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });

    // Quantity stepper: plain number fields (e.g. "How many cars") get - / + arrows.
    // Mobile browsers show no native spinner on a plain number input, so build the
    // same stepper the guest counts use. Scoped to the cars quantity field only.
    ul.querySelectorAll("input[type='number']").forEach((input) => {
      if (input.dataset.chQtyStepperReady) return;
      if (input.classList.contains("form-spinner-input") || input.classList.contains("form-radio-other-input")) return;
      if (input.closest(".ch-donate-tiles, .ch-pay-step")) return;
      const li = input.closest("li");
      const labelText = li && li.querySelector("label") ? li.querySelector("label").textContent : "";
      if (!/car/i.test(labelText)) return;
      input.dataset.chQtyStepperReady = "1";
      const formInput = input.closest(".form-input");
      if (!formInput) return;

      const min = parseInt(input.getAttribute("min") || "1", 10) || 1;
      const maxAttr = input.getAttribute("max");
      const max = maxAttr ? parseInt(maxAttr, 10) : null;

      const wrap = document.createElement("div");
      wrap.className = "ch-stepper";

      const minus = document.createElement("button");
      minus.type = "button";
      minus.className = "ch-step-btn";
      minus.textContent = "−";

      const valDisplay = document.createElement("span");
      valDisplay.className = "ch-stepper-val";

      const plus = document.createElement("button");
      plus.type = "button";
      plus.className = "ch-step-btn";
      plus.textContent = "+";

      wrap.appendChild(minus);
      wrap.appendChild(valDisplay);
      wrap.appendChild(plus);

      input.style.setProperty("display", "none", "important");
      formInput.appendChild(wrap);

      if (!input.value) input.value = String(min);

      function syncQty() {
        const val = parseInt(input.value, 10) || min;
        valDisplay.textContent = String(val);
        minus.classList.toggle("ch-muted-btn", val <= min);
      }
      syncQty();

      minus.addEventListener("click", () => {
        input.value = String(Math.max(min, (parseInt(input.value, 10) || min) - 1));
        syncQty();
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
      plus.addEventListener("click", () => {
        let v = (parseInt(input.value, 10) || min) + 1;
        if (max !== null) v = Math.min(max, v);
        input.value = String(v);
        syncQty();
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });

    // Event Landing Card + Full-Width Clickable Sponsor Band + Bottom Back Link
    const pageTitle = document.querySelector(".article-header__title")
      ? document.querySelector(".article-header__title").textContent.trim()
      : "Event Registration";
    const sectionId = (window.Co && window.Co.SectionId) ? window.Co.SectionId : "7629102";
    const SPONSOR_URL = "/7632168";
    const isSponsorPage = /sponsor/i.test(pageTitle);
    const calEvent = chFindEventForPage(pageTitle);
    const calLinks = calEvent ? chBuildCalLinks(calEvent) : "";

    const landing = document.createElement("div");
    landing.className = "ch-event-landing" + (landingParts.flyerSrc ? "" : " ch-no-flyer");
    landing.innerHTML = `
      ${landingParts.flyerSrc ? `<div class="ch-landing-flyer"><img src="${landingParts.flyerSrc}" alt="${pageTitle}" /></div>` : ""}
      <div class="ch-landing-info">
        <div class="ch-landing-copy">
          ${landingParts.htmlBlocks.length ? landingParts.htmlBlocks.join("") : ""}
        </div>
        <div class="ch-rsvp-wrap">
          <button type="button" class="ch-open-rsvp-btn" id="ch-open-rsvp">RSVP Here</button>
          ${calLinks}
        </div>
      </div>
    `;
    formContainer.parentNode.insertBefore(landing, formContainer);

    if (!isSponsorPage) {
      const sponsorBand = document.createElement("a");
      sponsorBand.className = "ch-sponsor-band";
      sponsorBand.href = SPONSOR_URL;
      sponsorBand.innerHTML = `
        <div class="ch-sponsor-band-left">
          <div class="ch-sponsor-band-kicker">Become a Sponsor</div>
          <div class="ch-sponsor-band-title">Get Your Company&rsquo;s Logo on Our Flyers &amp; Event Promos</div>
          <div class="ch-sponsor-band-sub">Reach thousands across Camden &amp; Burlington Counties &bull; 8 events &bull; 15+ giant menorahs</div>
        </div>
        <span class="ch-sponsor-band-cta">Sponsorship Opportunities &rarr;</span>
      `;
      formContainer.parentNode.insertBefore(sponsorBand, formContainer);
    }

    const backWrap = document.createElement("div");
    backWrap.className = "ch-landing-back-wrap";
    backWrap.innerHTML = `<a class="ch-landing-back" href="/${sectionId}#events">&larr; Back to All Chanukah Events</a>`;
    formContainer.parentNode.insertBefore(backWrap, formContainer);

    // Modal Header with Dynamic Step Name
    const activeSteps = [1, 2, 3, 4].filter((n) => steps[n].length > 0);
    const stepTitles = {
      1: "Select Guests",
      2: "Your Information",
      3: "Support & Volunteer",
      4: "Payment Details",
    };

    const header = document.createElement("div");
    header.className = "ch-modal-header";
    header.innerHTML = `
      <div class="ch-modal-title-wrap">
        <div class="ch-modal-title">${pageTitle}</div>
        <div class="ch-modal-step-label" id="ch-step-label"></div>
      </div>
      <button type="button" class="ch-modal-close" aria-label="Close">&times;</button>
    `;
    form.insertBefore(header, form.firstChild);

    // Pinned Footer (Back + Next on Same Line, Big Centered Register)
    const footer = document.createElement("div");
    footer.className = "ch-modal-footer";
    footer.innerHTML = `
      <button type="button" class="ch-btn-back">&larr; Back</button>
      <button type="button" class="ch-btn-next">Next</button>
    `;
    const realSubmit = submitLi ? submitLi.querySelector(".form-submit-button") : null;
    if (realSubmit) {
      realSubmit.textContent = "Register";
      footer.appendChild(realSubmit);
    }
    form.appendChild(footer);

    formContainer.classList.add("ch-wizard-ready");

    let currentIdx = 0;
    const backBtn = footer.querySelector(".ch-btn-back");
    const nextBtn = footer.querySelector(".ch-btn-next");
    const stepLabel = header.querySelector("#ch-step-label");
    const scrollBody = form.querySelector(".form-all");

    function needsPayment() {
      if (!paymentLi) return false;

      if (donateLi) {
        const checked = donateLi.querySelector("input[type='radio']:checked");
        if (!checked) return false;
        const val = (checked.value || "").trim().toLowerCase();
        if (/no thanks|none|^0$/.test(val)) return false;
        if (checked.classList.contains("form-radio-other") || val === "other") {
          const otherInp = donateLi.querySelector(".form-radio-other-input");
          const num = otherInp ? parseFloat(String(otherInp.value).replace(/[^0-9.]/g, "")) : 0;
          return num > 0;
        }
        return parseFloat(val.replace(/[^0-9.]/g, "")) > 0;
      }

      if (totalLi) {
        const totalEl = totalLi.querySelector("#total_amount, input[name*='total'], .total_amount, .form-input");
        if (totalEl) {
          const raw = totalEl.tagName === "INPUT" ? totalEl.value : totalEl.textContent;
          const m = String(raw || "").match(/\$?\s*([0-9]+(?:\.[0-9]+)?)/);
          if (m && parseFloat(m[1]) > 0) return true;
        }
      }

      return false;
    }

    function clearInlineErrors() {
      form.querySelectorAll(".ch-inline-err").forEach((el) => el.remove());
      form.querySelectorAll(".ch-field-error").forEach((el) => el.classList.remove("ch-field-error"));
    }

    function renderStep() {
      clearInlineErrors();
      const stepNum = activeSteps[currentIdx];

      [1, 2, 3, 4].forEach((n) => {
        steps[n].forEach((li) => {
          li.classList.toggle("ch-step-hidden", n !== stepNum);
        });
      });

      if (stepLabel) stepLabel.textContent = stepTitles[stepNum] || "";
      backBtn.style.visibility = currentIdx === 0 ? "hidden" : "visible";

      const isLast =
        currentIdx === activeSteps.length - 1 ||
        (stepNum === 3 && !needsPayment());

      footer.classList.toggle("ch-final-step", isLast);

      if (isLast) {
        nextBtn.style.display = "none";
        if (realSubmit) realSubmit.style.display = "inline-block";
      } else {
        nextBtn.style.display = "inline-block";
        nextBtn.textContent = "Next";
        if (realSubmit) realSubmit.style.display = "none";
      }

      if (scrollBody) scrollBody.scrollTop = 0;
    }

    function validateCurrentStep() {
      clearInlineErrors();
      const stepNum = activeSteps[currentIdx];
      let valid = true;

      steps[stepNum].forEach((li) => {
        if (li.style.display === "none") return;
        li.querySelectorAll("input[class*='validate[required'], select[class*='validate[required']").forEach((inp) => {
          if (inp.disabled || inp.offsetParent === null) return;
          if (!inp.value.trim()) {
            inp.classList.add("ch-field-error");
            const msg = document.createElement("span");
            msg.className = "ch-inline-err";
            msg.textContent = "This field is required";
            inp.parentNode.appendChild(msg);
            valid = false;
          }
        });
      });
      return valid;
    }

    form.addEventListener("input", (e) => {
      if (e.target.classList.contains("ch-field-error") && e.target.value.trim()) {
        e.target.classList.remove("ch-field-error");
        const err = e.target.parentNode.querySelector(".ch-inline-err");
        if (err) err.remove();
      }
    });

    form.addEventListener("change", () => {
      if (activeSteps[currentIdx] === 3) setTimeout(renderStep, 60);
    });

    nextBtn.addEventListener("click", () => {
      if (!validateCurrentStep()) return;
      if (currentIdx < activeSteps.length - 1) {
        currentIdx++;
        renderStep();
      }
    });

    backBtn.addEventListener("click", () => {
      if (currentIdx > 0) {
        currentIdx--;
        renderStep();
      }
    });

    document.getElementById("ch-open-rsvp").addEventListener("click", () => {
      currentIdx = 0;
      renderStep();
      formContainer.classList.add("ch-modal-open");
      document.body.style.overflow = "hidden";
    });

    function closeModal() {
      formContainer.classList.remove("ch-modal-open");
      document.body.style.overflow = "";
    }

    header.querySelector(".ch-modal-close").addEventListener("click", closeModal);
    formContainer.addEventListener("click", (e) => {
      if (e.target === formContainer) closeModal();
    });

    // Parade sign-up form page only: open the form right away on page load, no RSVP-button click.
    // Do NOT auto-open by page title: the parade info page ("Car Menorah Parade") also
    // contains "parade" in its title, and it must show its own content first.
    // The RSVP Here button stays as the way back in if someone closes the form.
    const isParadeSignup =
      /7632246/.test(window.location.pathname + window.location.search);
    if (isParadeSignup) {
      currentIdx = 0;
      renderStep();
      formContainer.classList.add("ch-modal-open");
      document.body.style.overflow = "hidden";
    }
  }

  function initReceiptPage() {
    if (document.getElementById("formContainer")) return;
    const bodyEl = document.getElementById("ContentBody");
    if (!bodyEl) return;

    const card =
      bodyEl.querySelector(".ch-receipt-card") ||
      Array.from(bodyEl.querySelectorAll("div")).find(
        (d) =>
          /registration confirmed/i.test(d.textContent) &&
          /your rsvp summary/i.test(d.textContent) &&
          d.querySelector("table")
      );
    if (!card) return;

    card.classList.add("ch-receipt-card");
    document.body.classList.add("ch-is-receipt");

    // Hide ChabadOne's "Print" link/icon above the receipt
    bodyEl.querySelectorAll("a, div, span").forEach((el) => {
      if (!card.contains(el) && /^print$/i.test((el.textContent || "").trim())) {
        el.style.setProperty("display", "none", "important");
      }
    });

    // Remove stray empty <br> tags ChabadOne injects around receipt HTML
    bodyEl.querySelectorAll("br").forEach((br) => {
      if (!card.contains(br)) br.remove();
    });
  }

  function initMobileNavHome() {
    const navWrap = document.querySelector(".ch-nav-inner") || document.querySelector(".ch-nav");
    if (!navWrap || navWrap.querySelector(".ch-nav-mobile-home")) return;

    const sectionId = (window.Co && window.Co.SectionId) ? window.Co.SectionId : "7629102";
    const link = document.createElement("a");
    link.className = "ch-nav-mobile-home";
    link.href = "/" + sectionId;
    link.textContent = "Chanukah 2026";
    navWrap.appendChild(link);
  }

  function setupChildPage() {
    if (!document.body.classList.contains("section_branch") && !document.getElementById("RegisterSinglePage")) return false;

    const sectionId = (window.Co && window.Co.SectionId) ? window.Co.SectionId : "7629102";
    const homeBase = "/" + sectionId;

    document.querySelectorAll("#ch-nav-links a[href^='#']").forEach((a) => {
      const hash = a.getAttribute("href");
      a.setAttribute("href", hash === "#top" ? homeBase : homeBase + hash);
    });

    initEventModalWizard();
    initReceiptPage();
    return true;
  }

  function init() {
    ensureViewport();
    removeChabadOneTopBar();
    const isChild = setupChildPage();
    initNav();
    initMobileNavHome();
    if (!isChild) {
      renderDirectory();
      initLightbox();
      injectEventSchema();
    }
  }

  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();

/* ==========================================================================
   CHABADONE EVENTS MODULE WIZARD (#RegisterSinglePage)
   ========================================================================== */
(function initEventsModuleWizard() {
  const form = document.getElementById("RegisterSinglePage");
  if (!form) return;

  // Map specific ChabadOne Event IDs to full vertical flyers hosted on GitHub Pages
  const EVENT_FLYERS = {
    "24399": "https://yakov-chabad.github.io/Chanukah_MiniSite/Chanukah_on_Ice_2026.png"
  };
  const eventIdMatch = location.pathname.match(/eventid\/(\d+)/i);
  const customFlyerUrl = eventIdMatch ? (EVENT_FLYERS[eventIdMatch[1]] || "") : "";

  const contentBody = document.getElementById("ContentBody");
  const ccoBody = document.getElementById("cco_body");
  const regHeader = document.getElementById("RegisterHeader");
  const regBody = document.getElementById("RegisterBody");
  if (!contentBody || !ccoBody || !regHeader || !regBody) return;

  // 1. Pull Event Details from ChabadOne's RegisterHeader
  const titleText = (regHeader.querySelector(".event_name")?.textContent || "Event Registration").trim();
  const descText = (regHeader.querySelector(".event_description")?.textContent || "").trim();
  const flyerSrc = customFlyerUrl || regHeader.querySelector(".banner_image img")?.src || "";
  const locLink = regHeader.querySelector("#EventMapLocation");
  const dateLink = regHeader.querySelector("#ICalDownload");
  const dateText = (dateLink?.textContent || "").trim();
  const locHtml = locLink ? locLink.innerHTML : "";
  const locHref = locLink ? locLink.href : "";
  const icalHref = dateLink ? dateLink.href : "";

  // 2. Insert Option B Slim Menorah Hero Strip
  const hero = document.createElement("div");
  hero.className = "ch-ev-hero";
  hero.innerHTML = `
    <p class="ch-ev-hero-eyebrow">CHANUKAH 2026 &bull; CHABAD OF CAMDEN &amp; BURLINGTON COUNTIES</p>
    <h1>${titleText}</h1>${dateText ? `<p class="ch-ev-hero-sub">${dateText}</p>` : ""}
  `;
  contentBody.parentNode.insertBefore(hero, contentBody);

  // 3. Build 2-Column Event Landing Card
  // Calendar line matches the Form Builder pages: Google Calendar link + native ChabadOne iCal as Apple Calendar.
  const googleCalUrl = (typeof window.chGoogleCalUrlForTitle === "function") ? (window.chGoogleCalUrlForTitle(titleText) || "") : "";
  const calIconSvg = '<svg class="ch-cal-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
  const calLineHtml = !icalHref ? "" : googleCalUrl
    ? `<div class="ch-add-cal"><span class="ch-add-cal-label">${calIconSvg}Add to calendar:</span><a href="${googleCalUrl}" target="_blank" rel="noopener">Google Calendar</a><span class="ch-add-cal-sep">•</span><a href="${icalHref}">Apple Calendar</a></div>`
    : `<div class="ch-add-cal"><span class="ch-add-cal-label">Add to Calendar:</span> <a href="${icalHref}">Download iCal</a></div>`;

  const landing = document.createElement("div");
  landing.className = "ch-event-landing" + (flyerSrc ? "" : " ch-no-flyer");
  landing.innerHTML = `
    ${flyerSrc ? `<div class="ch-landing-flyer"><img src="${flyerSrc}" alt="${titleText}" /></div>` : ""}
    <div class="ch-landing-info">
      <div class="ch-landing-copy">
        <p>${descText}</p>
        <ul>
          ${dateText ? `<li><strong>When:</strong> ${dateText}</li>` : ""}
          ${locHtml ? `<li><strong>Where:</strong> <a href="${locHref}" target="_blank" rel="noopener">${locHtml.replace(/<br\s*\/?>/gi, ", ")}</a></li>` : ""}
        </ul>
      </div>
      <div class="ch-rsvp-wrap">
        <button type="button" class="ch-open-rsvp-btn" id="chEvOpenBtn">Get Tickets</button>
        ${calLineHtml}
      </div>
    </div>
  `;

  const backWrap = document.createElement("div");
  backWrap.className = "ch-landing-back-wrap";
  backWrap.innerHTML = `<a class="ch-landing-back" href="/7629102">&larr; Back to all Chanukah events</a>`;

  contentBody.insertBefore(landing, contentBody.firstChild);
  contentBody.appendChild(backWrap);

  // 4. Turn #cco_body into the 4-Step Eventbrite Modal
  ccoBody.classList.add("ch-ev-modal-ready");

  const header = document.createElement("div");
  header.className = "ch-modal-header";
  header.innerHTML = `
    <div class="ch-modal-title-wrap">
      <h3 class="ch-modal-title">${titleText}</h3>
      <div class="ch-modal-step-label" id="chEvStepLabel">Step 1 of 4 &mdash; Select Tickets</div>
    </div>
    <button type="button" class="ch-modal-close" id="chEvCloseBtn" aria-label="Close">&times;</button>
  `;
  form.insertBefore(header, regBody);

  const footer = document.createElement("div");
  footer.className = "ch-modal-footer";
  footer.innerHTML = `
    <button type="button" class="ch-btn-back" id="chEvBackBtn">&larr; Back</button>
    <button type="button" class="ch-btn-next" id="chEvNextBtn">Next &rarr;</button>
  `;
  form.appendChild(footer);

  // Move ChabadOne's native SubmitButton_wrapper into the modal footer (shown only on Step 4 via data-ch-step)
  const submitWrap = document.getElementById("SubmitButton_wrapper");
  if (submitWrap) {
    footer.appendChild(submitWrap);
  }

  // 5. Move Billing Address fields from Step 3 (Your Info) -> Step 4 (Payment)
  const resInfo = document.getElementById("ReserversInformation");
  const paymentEl = document.getElementById("Payment");
  const creditCardEl = document.getElementById("CreditCard");
  if (resInfo && paymentEl && creditCardEl) {
    const billingIds = [
      "ReserversBillingAddress1",
      "ReserversBillingCity",
      "ReserversBillingState",
      "ReserversBillingPostCode",
      "ReserversCountry"
    ];
    const billingWrap = document.createElement("div");
    billingWrap.className = "ch-ev-billing-wrap";
    billingWrap.innerHTML = `<div class="ch-ev-billing-heading">Billing Address</div>`;

    billingIds.forEach((id) => {
      const row = document.getElementById(id)?.closest(".clearfix");
      if (row) billingWrap.appendChild(row);
    });
    creditCardEl.parentNode.insertBefore(billingWrap, creditCardEl.nextSibling);
  }

  // 6. Upgrade Adults / Children Numeric Fields to Eventbrite (- 0 +) Steppers
  const addInfo = document.getElementById("AdditionalInformation");
  if (addInfo) {
    addInfo.querySelectorAll(".form-line").forEach((line) => {
      const inp = line.querySelector('input[type="text"]');
      const lbl = (line.querySelector("label")?.textContent || "").toLowerCase();
      if (!inp || !/(adult|child|guest|attend)/i.test(lbl)) return;

      line.classList.add("ch-ticket-card");
      const stepper = document.createElement("div");
      stepper.className = "ch-stepper";

      const minusBtn = document.createElement("button");
      minusBtn.type = "button";
      minusBtn.className = "ch-step-btn";
      minusBtn.textContent = "−";

      const valSpan = document.createElement("span");
      valSpan.className = "ch-stepper-val";

      const plusBtn = document.createElement("button");
      plusBtn.type = "button";
      plusBtn.className = "ch-step-btn";
      plusBtn.textContent = "+";

      stepper.append(minusBtn, valSpan, plusBtn);
      inp.parentNode.appendChild(stepper);

      const syncStepper = (val) => {
        const num = Math.max(0, parseInt(val, 10) || 0);
        inp.value = String(num);
        valSpan.textContent = String(num);
        minusBtn.classList.toggle("ch-muted-btn", num === 0);
        line.classList.toggle("ch-ticket-active", num > 0);
        inp.dispatchEvent(new Event("input", { bubbles: true }));
        inp.dispatchEvent(new Event("change", { bubbles: true }));
      };

      syncStepper(inp.value || 0);
      minusBtn.addEventListener("click", () => syncStepper((parseInt(inp.value, 10) || 0) - 1));
      plusBtn.addEventListener("click", () => syncStepper((parseInt(inp.value, 10) || 0) + 1));
    });
  }

  // 7. Donation Tiles: "No Thanks" opt-out + working "Other" input (triggers ChabadOne recalc)
  const donateGrid = document.querySelector("#AdditionalInformation .form-multiple-column");
  const donateRadios = Array.from(document.querySelectorAll('#AdditionalInformation input[type="radio"]'));
  const otherInput = document.querySelector("#AdditionalInformation .form-radio-other-input");
  const otherRadio = document.querySelector("#AdditionalInformation .form-radio-other");

  if (donateGrid && donateRadios.length) {
    const triggerChabadUpdate = (el) => {
      if (!el) return;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
      if (window.$j) {
        window.$j(el).trigger("keyup").trigger("change");
      }
    };

    // Inject "No Thanks" tile at the start of the 3x2 grid
    const noThanksWrap = document.createElement("span");
    noThanksWrap.className = "form-radio-item";
    const noThanksBtn = document.createElement("button");
    noThanksBtn.type = "button";
    noThanksBtn.className = "ch-ev-no-thanks";
    noThanksBtn.textContent = "No Thanks";
    noThanksWrap.appendChild(noThanksBtn);
    donateGrid.insertBefore(noThanksWrap, donateGrid.firstChild);

    const syncNoThanksState = () => {
      const anyChecked = donateRadios.some((r) => r.checked);
      noThanksBtn.classList.toggle("is-active", !anyChecked);
    };

    const resetDonation = () => {
      donateRadios.forEach((r) => {
        r.checked = false;
      });
      if (otherInput) {
        otherInput.value = "";
        triggerChabadUpdate(otherInput);
      }
      // Trigger change on first radio so ChabadOne clears additional total to $0
      if (donateRadios[0]) {
        triggerChabadUpdate(donateRadios[0]);
      }
      syncNoThanksState();
      setTimeout(syncOrderSummaries, 80);
    };

    noThanksBtn.addEventListener("click", resetDonation);

    donateRadios.forEach((r) => {
      r.addEventListener("change", () => {
        if (r !== otherRadio && otherInput) otherInput.value = "";
        syncNoThanksState();
        setTimeout(syncOrderSummaries, 80);
      });
    });

    if (otherInput && otherRadio) {
      otherInput.placeholder = "Other";
      const unlock = () => {
        if (otherInput.hasAttribute("disabled")) otherInput.removeAttribute("disabled");
      };
      unlock();
      new MutationObserver(unlock).observe(otherInput, { attributes: true, attributeFilter: ["disabled"] });

      const activateOther = () => {
        unlock();
        if (!otherRadio.checked) {
          otherRadio.checked = true;
          if (window.$j) window.$j(otherRadio).trigger("click").trigger("change");
          else otherRadio.dispatchEvent(new Event("change", { bubbles: true }));
        }
        syncNoThanksState();
      };

      otherInput.addEventListener("focus", activateOther);
      otherInput.addEventListener("click", activateOther);
      otherInput.addEventListener("input", () => {
        const val = parseFloat(otherInput.value);
        if (val > 0) {
          activateOther();
          otherRadio.value = String(val);
          triggerChabadUpdate(otherInput);
          setTimeout(syncOrderSummaries, 80);
        }
      });
      otherInput.addEventListener("blur", () => {
        const val = parseFloat(otherInput.value);
        if (!val || val <= 0) {
          resetDonation();
        } else {
          otherRadio.value = String(val);
          triggerChabadUpdate(otherInput);
          setTimeout(syncOrderSummaries, 80);
        }
      });
    }

    syncNoThanksState();
  }

  // 8. Rich Order Summary Box (Ticket Breakdown + Fee + Total) on Step 2 & Step 4
  const summaryEl = document.getElementById("Summary");
  const summaryOrderBox = document.createElement("div");
  summaryOrderBox.className = "ch-ev-order-box";
  if (summaryEl) {
    const totalsParent = summaryEl.querySelector("#Totals")?.parentNode;
    if (totalsParent) totalsParent.insertBefore(summaryOrderBox, totalsParent.firstChild);
  }

  const paymentOrderBox = document.createElement("div");
  paymentOrderBox.className = "ch-ev-order-box";
  if (paymentEl) paymentEl.insertBefore(paymentOrderBox, paymentEl.firstChild);

  // Move Discount Code onto Step 4 (right below the Order Summary box) in a minimalist toggle
  const discountRow = document.getElementById("DiscountCode")?.closest(".clearfix");
  if (discountRow && paymentEl && paymentOrderBox) {
    const discInput = document.getElementById("DiscountCode");
    if (discInput && !discInput.placeholder) discInput.placeholder = "Enter discount code";

    const discWrap = document.createElement("div");
    discWrap.className = "ch-ev-discount-wrap";
    discWrap.innerHTML = `<button type="button" class="ch-ev-discount-toggle" id="chEvDiscToggle">Have a discount code?</button>`;

    const discBody = document.createElement("div");
    discBody.className = "ch-ev-discount-body ch-ev-hidden";
    discBody.appendChild(discountRow);
    discWrap.appendChild(discBody);

    paymentOrderBox.insertAdjacentElement("afterend", discWrap);

    discWrap.querySelector("#chEvDiscToggle").addEventListener("click", () => {
      discBody.classList.toggle("ch-ev-hidden");
      if (!discBody.classList.contains("ch-ev-hidden")) discInput?.focus();
    });
  }

  const buildOrderSummaryHtml = () => {
    const counts = {};
    const order = [];
    document.querySelectorAll("#Performances .reservation").forEach((row) => {
      // Category name: prefer the visible .g100 (on mobile the desktop one is .hidden).
      // Fall back to the first non-empty text div that is not the index, price, or remove button.
      let rawCat = (row.querySelector(".g100:not(.hidden)")?.textContent || "").trim();
      if (!rawCat) {
        for (const d of row.querySelectorAll("div")) {
          const t = (d.textContent || "").trim();
          if (!t || /^\d+$/.test(t)) continue; // empty or index number
          if (d.classList.contains("price-display") || d.querySelector(".price-display")) continue;
          if (d.querySelector("button, a")) continue; // remove button
          rawCat = t;
          break;
        }
      }
      rawCat = rawCat || "Ticket";
      const priceText = (row.querySelector(".price-display")?.textContent || "$0.00").replace(/\s+/g, "");
      const priceNum = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;
      const isIncluded = /includ/i.test(priceText) || priceNum === 0;
      // Clean label: strip "(Includes X Tickets)" and any price tag (e.g. "Gold Sponsor")
      const cleanCat = rawCat
        .replace(/\s*\(includes?\s+\d+\s+tickets?\)/i, "")
        .replace(/\s*\$[\d,]+(?:\.\d{1,2})?/g, "")
        .replace(/\s+/g, " ")
        .trim() || "Ticket";
      const includesMatch = rawCat.match(/includes?\s+(\d+)\s+ticket/i);
      const includesX = includesMatch ? parseInt(includesMatch[1], 10) : 0;
      if (!counts[cleanCat]) {
        counts[cleanCat] = { rows: 0, paidCount: 0, includedCount: 0, total: 0, includesX: 0 };
        order.push(cleanCat);
      }
      const c = counts[cleanCat];
      c.rows += 1;
      if (priceNum > 0) c.paidCount += 1;
      if (isIncluded) c.includedCount += 1;
      c.total += priceNum;
      if (includesX > 0) c.includesX = includesX;
    });

    let rowsHtml = "";
    order.forEach((cat) => {
      const item = counts[cat];
      // Package tier: paid rows + included rows, or "(Includes X Tickets)" in the name.
      // A category with no paid rows is a free regular ticket, not a package.
      const isPackage = (item.includedCount > 0 && item.paidCount > 0) || item.includesX > 0;
      if (isPackage) {
        const pkgCount = Math.max(1, item.paidCount);
        const totalIncluded = item.includesX > 0 ? pkgCount * item.includesX : 0;
        const meta = totalIncluded > 0
          ? `(${item.rows} of ${totalIncluded} tickets)`
          : `(${item.rows} tickets)`;
        const left = `<strong>${pkgCount} &times;</strong> ${cat}<span class="ch-ev-order-meta">${meta}</span>`;
        rowsHtml += `<div class="ch-ev-order-row"><span>${left}</span><span>$${item.total.toFixed(2)}</span></div>`;
      } else {
        const right = item.total === 0 ? "Included" : `$${item.total.toFixed(2)}`;
        rowsHtml += `<div class="ch-ev-order-row"><span><strong>${item.rows} &times;</strong> ${cat}</span><span>${right}</span></div>`;
      }
    });

    // Contribution / Donation: read directly from the donation inputs (with fallbacks).
    // ChabadOne does not always reflect the chosen amount in #Totals, so derive it here.
    let donationVal = 0;
    const checkedRadio = document.querySelector('#AdditionalInformation input[type="radio"]:checked');
    if (checkedRadio) {
      if (checkedRadio.classList.contains("form-radio-other")) {
        const otherInput = document.querySelector('#AdditionalInformation .form-radio-other-input');
        donationVal = parseFloat(otherInput?.value) || 0;
      } else {
        donationVal = parseFloat(checkedRadio.value) || 0;
      }
    }
    if (!donationVal) {
      const addTotalEl = document.querySelector('#AdditionalInformation [id^="additional_"][id$="_total"]');
      if (addTotalEl) donationVal = parseFloat((addTotalEl.textContent || "").replace(/[^0-9.]/g, "")) || 0;
    }
    if (!donationVal) {
      donationVal = parseFloat(document.getElementById("TotalDonation")?.value) || 0;
    }
    let contribRow = "";
    if (donationVal > 0) {
      contribRow = `<div class="ch-ev-order-row"><span>Contribution / Sponsorship</span><span>$${donationVal.toFixed(2)}</span></div>`;
    }

    let extraRows = "";
    let grandTotal = "";
    document.querySelectorAll("#Totals > .clearfix").forEach((r) => {
      const left = (r.querySelector(".float_left")?.textContent || "").trim();
      const right = (r.querySelector(".float_right")?.textContent || "").replace(/\s+/g, " ").replace(/\$\s+/g, "$").trim();
      if (/^total/i.test(left)) {
        grandTotal = `<div class="ch-ev-order-total"><span>Total</span><span>${right}</span></div>`;
      } else if (!/^subtotal|additional|donat|contribut/i.test(left) && left) {
        extraRows += `<div class="ch-ev-order-row"><span>${left.replace(/:$/, "")}</span><span>${right}</span></div>`;
      }
    });

    return `
      <div class="ch-ev-order-title">Order Summary</div>
      ${rowsHtml || `<div class="ch-ev-order-row"><span>No tickets selected</span><span>$0.00</span></div>`}
      ${contribRow}
      ${extraRows}
      <div class="ch-ev-order-divider"></div>
      ${grandTotal || `<div class="ch-ev-order-total"><span>Total</span><span>$0.00</span></div>`}
    `;
  };

  const syncOrderSummaries = () => {
    const html = buildOrderSummaryHtml();
    summaryOrderBox.innerHTML = html;
    paymentOrderBox.innerHTML = html;
  };

  const totalsEl = document.getElementById("Totals");
  if (totalsEl) {
    new MutationObserver(syncOrderSummaries).observe(totalsEl, { childList: true, subtree: true, characterData: true });
  }

  // Re-sync the Order Summary the moment a donation tile / Other amount changes
  if (addInfo) {
    addInfo.addEventListener("change", syncOrderSummaries);
    addInfo.addEventListener("input", syncOrderSummaries);
    new MutationObserver(syncOrderSummaries).observe(addInfo, { childList: true, subtree: true, characterData: true });
  }

  // 9. Fix Sticky Quantity Dropdown & Smooth Add-Ticket Toggle
  const perfEl = document.getElementById("Performances");
  if (perfEl) {
    perfEl.addEventListener("click", (e) => {
      if (e.target.closest(".toggle_message, .toggle_options .cancel, .add_attendee")) {
        const toggleWrap = e.target.closest(".additionals_toggle");
        const snapToggle = () => {
          if (!toggleWrap) return;
          if (window.$j) {
            window.$j(toggleWrap).find(".toggle_options, .toggle_message").stop(true, true);
          }
          toggleWrap.querySelectorAll(".toggle_options, .toggle_message").forEach((el) => {
            el.style.height = "";
            el.style.overflow = "";
            el.style.paddingTop = "";
            el.style.paddingBottom = "";
            el.style.marginTop = "";
            el.style.marginBottom = "";
          });
        };
        snapToggle();
        requestAnimationFrame(snapToggle);
      }
      if (e.target.closest(".remove_reservation")) {
        setTimeout(() => {
          const qtySel = perfEl.querySelector('select[id*="quantityOfAttendees"]');
          if (qtySel && !perfEl.querySelector(".reservation")) qtySel.value = "1";
          syncOrderSummaries();
        }, 120);
      }
      if (e.target.closest(".toggle_message")) {
        const opts = perfEl.querySelector(".toggle_options");
        if (opts) {
          setTimeout(() => {
            opts.style.height = "";
            opts.style.overflow = "";
          }, 30);
        }
      }
    });
  }

  // 9b. Auto-sort & re-number Step 1 reservation rows (priced first per category, then included)
  const reservationsEl = perfEl ? perfEl.querySelector(".reservations") : null;
  let resObserver = null;
  const normalizeReservationRows = () => {
    if (!reservationsEl) return;
    if (resObserver) resObserver.disconnect();
    const rows = Array.from(reservationsEl.children).filter((el) => el.classList.contains("reservation"));
    // Header row (no _index element) stays first and is excluded from sorting
    const ticketRows = rows.filter((r) => r.querySelector('[id$="_index"]'));
    if (ticketRows.length) {
      const cleanLabel = (row) => {
        const t = (row.querySelector(".g100")?.textContent || "").trim();
        return t.replace(/\s*\(includes?\s+\d+\s+tickets?\)/i, "").replace(/\s*\$[\d,]+(?:\.\d{1,2})?/g, "").replace(/\s+/g, " ").trim().toLowerCase();
      };
      const rowPrice = (row) => {
        const pt = (row.querySelector(".price-display")?.textContent || "").replace(/\s+/g, "");
        return parseFloat(pt.replace(/[^0-9.]/g, "")) || 0;
      };
      // Group by category in first-appearance order; priced rows first within each group
      const groups = [];
      ticketRows.forEach((row) => {
        const key = cleanLabel(row);
        let g = groups.find((x) => x.key === key);
        if (!g) { g = { key, rows: [] }; groups.push(g); }
        g.rows.push(row);
      });
      const sorted = [];
      groups.forEach((g) => {
        const priced = g.rows.filter((r) => rowPrice(r) > 0);
        const included = g.rows.filter((r) => rowPrice(r) === 0);
        sorted.push(...priced, ...included);
      });
      // Re-number sequentially from top
      let n = 1;
      sorted.forEach((row) => {
        const idxEl = row.querySelector('[id$="_index"]');
        if (idxEl) idxEl.textContent = String(n);
        n += 1;
      });
      // Re-append in sorted order only if the order changed (headers stay put at the top)
      const orderChanged = sorted.some((r, i) => r !== ticketRows[i]);
      if (orderChanged) {
        sorted.forEach((r) => reservationsEl.appendChild(r));
      }
    }
    if (resObserver) resObserver.observe(reservationsEl, { childList: true });
  };
  if (reservationsEl) {
    resObserver = new MutationObserver(normalizeReservationRows);
    resObserver.observe(reservationsEl, { childList: true });
    normalizeReservationRows();
  }

  // 10. Step Controller
  const secItems = document.getElementById("SecondaryFormItems");
  const buttonsEl = document.getElementById("Buttons");
  const stepLabel = document.getElementById("chEvStepLabel");
  const backBtn = document.getElementById("chEvBackBtn");
  const nextBtn = document.getElementById("chEvNextBtn");

  const stepNames = [
    "Step 1 of 4 — Select Tickets",
    "Step 2 of 4 — Attendees & Support",
    "Step 3 of 4 — Your Information",
    "Step 4 of 4 — Payment Details"
  ];
  let currentStep = 0;

  const clearErrors = (container) => {
    container?.querySelectorAll(".ch-field-error").forEach((el) => el.classList.remove("ch-field-error"));
    container?.querySelectorAll(".ch-inline-err").forEach((el) => el.remove());
  };
  const showError = (target, msg) => {
    target.classList.add("ch-field-error");
    const err = document.createElement("span");
    err.className = "ch-inline-err";
    err.textContent = msg;
    target.parentNode.appendChild(err);
  };

  const renderStep = (step) => {
    currentStep = step;
    stepLabel.textContent = stepNames[step];
    form.setAttribute("data-ch-step", String(step));

    // Clear any stale .ch-ev-hidden left on the step sections so data-ch-step is the single source of truth
    [perfEl, secItems, addInfo, summaryEl, resInfo, paymentEl, buttonsEl].forEach((el) => el?.classList.remove("ch-ev-hidden"));
    if (step === 3) {
      paymentEl?.classList.remove("ch-ev-hidden");
      secItems?.classList.remove("ch-ev-hidden");
    }

    if (step === 1 || step === 3) {
      syncOrderSummaries();
    }

    backBtn.style.visibility = step === 0 ? "hidden" : "visible";
    regBody.scrollTop = 0;
  };

  const validateCurrentStep = () => {
    if (currentStep === 0) {
      clearErrors(perfEl);
      if (perfEl.querySelector(".reservation")) return true;
      const catSel = perfEl.querySelector('select[id*="priceCategory"]');
      const addBtn = perfEl.querySelector('button[id*="addAttendeeButton"]');
      if (catSel && catSel.value && addBtn && !addBtn.disabled) {
        addBtn.click();
        return "wait";
      }
      if (catSel) showError(catSel, "Please select a ticket category and click Add / Continue.");
      return false;
    }

    if (currentStep === 1) {
      clearErrors(addInfo);
      return true;
    }

    if (currentStep === 2) {
      clearErrors(resInfo);
      let ok = true;
      resInfo.querySelectorAll(".required input, .required select").forEach((inp) => {
        if (!inp.value.trim()) {
          showError(inp, "This field is required.");
          ok = false;
        }
      });
      return ok;
    }
    return true;
  };

  nextBtn.addEventListener("click", () => {
    const res = validateCurrentStep();
    if (res === true) renderStep(currentStep + 1);
    else if (res === "wait") setTimeout(() => renderStep(currentStep + 1), 250);
  });

  backBtn.addEventListener("click", () => {
    if (currentStep > 0) renderStep(currentStep - 1);
  });

  // Open / Close Modal
  const openModal = () => {
    renderStep(0);
    ccoBody.classList.add("ch-modal-open");
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    ccoBody.classList.remove("ch-modal-open");
    document.body.style.overflow = "";
  };

  document.getElementById("chEvOpenBtn").addEventListener("click", openModal);
  document.getElementById("chEvCloseBtn").addEventListener("click", closeModal);
  ccoBody.addEventListener("click", (e) => {
    if (e.target === ccoBody) closeModal();
  });
})();
