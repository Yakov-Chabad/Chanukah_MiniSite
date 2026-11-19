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

  const CATEGORIES = [
    { key: "lighting", icon: "fa-fire", label: "Public Menorah Lighting" },
    { key: "family", icon: "fa-child", label: "Young Families" },
    { key: "adults", icon: "fa-user-tie", label: "Young Adults" },
    { key: "community", icon: "fa-users", label: "Community" },
    { key: "students", icon: "fa-user-graduate", label: "College Students" },
  ];

  // EDIT YOUR EVENTS HERE (or swap for a Google Sheet fetch later)
  const EVENTS = [
    {
      date: "Sunday, December 6",
      night: 3,
      eventName: "Grand Car Menorah Parade & Lighting",
      time: "4:30 PM",
      location: "1925 Kresson Rd, Cherry Hill, NJ",
      host: "Chabad of Cherry Hill",
      link: "https://example.com/rsvp-parade",
      flyer: "https://w2.chabad.org/media/images/1347/gpyW13474120.jpg",
      flyerFit: "cover", // use "contain" for tall flyers with text near top/bottom edges
      lighting: true,
      family: true,
      adults: false,
      community: true,
      students: false,
    },
    {
      date: "Sunday, December 6",
      night: 3,
      eventName: "Chanukah at Barclay Farms",
      time: "5:30 PM",
      location: "Barclay Farms Shopping Center, Cherry Hill, NJ",
      host: "Chabad of Cherry Hill",
      link: "https://example.com/rsvp-barclay",
      flyer: "https://w2.chabad.org/media/images/1347/gpyW13474120.jpg",
      flyerFit: "cover",
      lighting: true,
      family: true,
      adults: false,
      community: true,
      students: false,
    },
    {
      date: "Monday, December 7",
      night: 4,
      eventName: "Chanukah on Ice",
      time: "5:00 PM - 7:00 PM",
      location: "Flyers Skate Zone, Voorhees, NJ",
      host: "Chabad Lubavitch of Camden & Burlington Counties",
      link: "https://example.com/rsvp-ice",
      flyer: "", // Leave blank for a classic St. Louis text-only card
      lighting: true,
      family: true,
      adults: false,
      community: true,
      students: false,
    },
  ];

  function formatLocation(loc) {
    if (!loc) return "";
    return loc
      .replace(/,/g, "<br />")
      .replace(/<br \/>\s*(NJ|PA|NY|MO)\b/g, ", $1");
  }

  function renderLegend() {
    const legendEl = document.getElementById("ch-legend");
    if (!legendEl) return;
    legendEl.innerHTML = CATEGORIES.map(
      (c) =>
        `<div><span class="ch-legend-icon"><i class="fas ${c.icon}"></i></span> ${c.label}</div>`
    ).join("");
  }

  function buildCard(ev) {
    let link = (ev.link || "").trim();
    if (link && !link.startsWith("http") && !link.startsWith("/")) {
      link = "https://" + link;
    }

    const icons = CATEGORIES.filter((c) => ev[c.key])
      .map(
        (c) =>
          `<span class="ch-fa-type-icon" title="${c.label}"><i class="fas ${c.icon}"></i></span>`
      )
      .join("");

    const fitClass = ev.flyerFit === "contain" ? " ch-contain" : "";
    const flyerHtml = ev.flyer
      ? `<div class="ch-event-flyer${fitClass} js-ch-flyer" data-src="${ev.flyer}"><img src="${ev.flyer}" alt="${ev.eventName || "Event Flyer"}" loading="lazy" /></div>`
      : "";

    return `
      <div class="ch-event-card">
        ${flyerHtml}
        <div class="ch-event-body">
          <div class="ch-event-title">${ev.eventName || ""}</div>
          ${ev.host ? `<span class="ch-event-host">Hosted By: ${ev.host}</span>` : ""}
          ${icons ? `<div class="ch-event-icons">${icons}</div>` : ""}
          <div class="ch-event-details">
            ${ev.location ? `<div class="ch-detail-line"><i class="fas fa-map-marker-alt"></i><span>${formatLocation(ev.location)}</span></div>` : ""}
            ${ev.date ? `<div class="ch-detail-line"><i class="far fa-calendar-alt"></i><span>${ev.date}${ev.time ? ", " + ev.time : ""}</span></div>` : ""}
          </div>
          ${link ? `<div class="ch-btn-wrap"><a class="ch-reserve-btn" href="${link}" target="_blank" rel="noopener">More Info &rarr;</a></div>` : ""}
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

        return `
          <div class="ch-night-header">
            ${menorahUrl ? `<img class="ch-menorah-icon" src="${menorahUrl}" alt="" />` : ""}
            <div>
              <h3>${grp.date}</h3>
              ${nightLabel}
            </div>
          </div>
          <div class="ch-modules-wrapper">
            ${grp.items.map(buildCard).join("")}
          </div>
        `;
      })
      .join("");
  }

  function initLightbox() {
    let box = document.getElementById("ch-lightbox");
    if (!box) {
      box = document.createElement("div");
      box.id = "ch-lightbox";
      box.setAttribute("aria-hidden", "true");
      box.innerHTML =
        '<div id="ch-lightbox-inner"><button id="ch-lightbox-close" type="button" aria-label="Close">&times;</button><img id="ch-lightbox-img" alt="Event Flyer" src="" /></div>';
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
    renderLegend();
    renderDirectory();
    initLightbox();
  }

  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
