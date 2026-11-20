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
      date: "Saturday, Dec. 5",
      night: 2,
      isoStart: "2026-12-05T19:30:00-05:00",
      eventName: "Chanukah on Ice",
      time: "7:30 PM – 9:00 PM",
      location: "Igloo Ice Rink, 3033 Fostertown Rd, Mt. Laurel, NJ 08054",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org",
      flyer: "coming-soon",
    },
    {
      date: "Sunday, Dec. 6",
      night: 3,
      isoStart: "2026-12-06T15:15:00-05:00",
      eventName: "Car Menorah Parade",
      time: "Lineup 3:15 PM, Parade 4:00 PM",
      location: "Starts at Chabad, 1925 Kresson Rd, Cherry Hill, NJ 08003",
      note: "Route: Chabad to Barclay Farms.",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org",
      flyer: "coming-soon",
    },
    {
      date: "Sunday, Dec. 6",
      night: 3,
      isoStart: "2026-12-06T17:00:00-05:00",
      eventName: "Giant Menorah Lighting",
      time: "5:00 PM",
      location: "Barclay Farm Shopping Center, 80 Barclay Farms Shopping Center, Cherry Hill, NJ 08034",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org",
      flyer: "coming-soon",
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
      link: "https://www.thechabadcenter.org",
      flyer: "coming-soon",
    },
    {
      date: "Tuesday, Dec. 8",
      night: 5,
      isoStart: "2026-12-08T16:00:00-05:00",
      eventName: "Haddonfield Menorah Lighting",
      time: "4:00 PM",
      location: "Library Point, 60 N Haddon Ave, Haddonfield, NJ 08033",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org",
      flyer: "coming-soon",
    },
    {
      date: "Tuesday, Dec. 8",
      night: 5,
      isoStart: "2026-12-08T17:30:00-05:00",
      eventName: "Grand Chanukah Prize & Gelt Drop",
      time: "5:30 PM",
      location: "Chabad / Cherry Hill Commerce Center, 1820 Chapel Ave, Cherry Hill, NJ 08002",
      note: "Grand Menorah Lighting, treats, activities, music & entertainment. Free of charge.",
      host: "Chabad of Cherry Hill West",
      link: "https://ChabadCherryHillWest.org",
      flyer: "https://yakov-chabad.github.io/Chanukah_MiniSite/westside.jpg",
    },
    {
      date: "Wednesday, Dec. 9",
      night: 6,
      isoStart: "2026-12-09T18:00:00-05:00",
      eventName: "Collingswood Menorah Lighting",
      time: "6:00 PM",
      location: "Collingswood Community Center, 30 Collings Ave, Collingswood, NJ 08108",
      note: "",
      host: "Chabad of Camden & Burlington Counties",
      link: "https://www.thechabadcenter.org",
      flyer: "coming-soon",
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
      link: "https://www.thechabadcenter.org",
      flyer: "coming-soon",
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
      link: "https://www.thechabadcenter.org",
      flyer: "coming-soon",
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
      <div class="ch-event-card">
        ${buildFlyerHtml(ev)}
        <div class="ch-event-main">
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
            ${link ? `<a class="ch-reserve-btn" href="${link}" target="_blank" rel="noopener">More Information &rarr;</a>` : ""}
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
        currentGroup = { date: ev.date, night: ev.night, items: [] };
        groups.push(currentGroup);
      }
      currentGroup.items.push(ev);
    });

    container.innerHTML = groups
      .map((grp) => {
        const menorahUrl = grp.night
          ? `https://chabad.org/images/1/calendar/menorah_colored_small_${grp.night}.png`
          : "";
        const nightLabel =
          grp.night && NIGHT_MAP[grp.night]
            ? `<span>${NIGHT_MAP[grp.night]} Night of Chanukah</span>`
            : "";
        const singleClass = grp.items.length === 1 ? " ch-single-night" : "";

        return `
          <div class="ch-night-header">
            ${menorahUrl ? `<img class="ch-menorah-icon" src="${menorahUrl}" alt="" />` : ""}
            <div>
              <h2>${grp.date}</h2>
              ${nightLabel}
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

  function init() {
    ensureViewport();
    removeChabadOneTopBar();
    initNav();
    renderDirectory();
    initLightbox();
    injectEventSchema();
  }

  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
