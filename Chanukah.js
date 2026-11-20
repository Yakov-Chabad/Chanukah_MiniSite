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

  function initEventModalWizard() {
    const formContainer = document.getElementById("formContainer");
    const form = formContainer ? formContainer.querySelector("form.userform-form") : null;
    const ul = form ? form.querySelector("ul.form-section") : null;
    if (!formContainer || !form || !ul) return;

    const items = Array.from(ul.children).filter((el) => el.tagName === "LI");
    const landingParts = { flyerSrc: "", htmlBlocks: [] };
    let submitLi = null;
    let paymentLi = null;
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
        steps[4].push(li);
        return;
      }

      const labelText = (li.querySelector("label") ? li.querySelector("label").textContent : "").toLowerCase();
      const isSpinner = !!li.querySelector(".form-spinner-input, [data-type='input-spinner']");
      const isVolunteerOnly = /volunteer/.test(labelText) && !/donat|contribut|sponsor/.test(labelText);
      const isDonate =
        !isVolunteerOnly &&
        (!!li.querySelector("#total_amount, .form-radio-other") ||
          /donat|contribut|sponsor|support|total|gift/.test(labelText));

      if (isSpinner || /adult|child|guest|attend|ticket/.test(labelText)) {
        li.classList.add("ch-ticket-card");
        steps[1].push(li);
      } else if (isDonate) {
        if (li.querySelector("input[type='radio']")) li.classList.add("ch-donate-tiles");
        steps[3].push(li);
      } else {
        // Put Email & Phone side-by-side on Step 2
        if (/email|e-mail|phone|mobile|cell/.test(labelText)) {
          li.classList.add("ch-half-field");
        }
        steps[2].push(li);
      }
    });

    // Upgrade spinners to Eventbrite-style ticket steppers
    ul.querySelectorAll(".form-spinner-input, [data-type='input-spinner']").forEach((input) => {
      if (input.closest(".ch-stepper")) return;
      const card = input.closest(".ch-ticket-card");
      const wrap = document.createElement("div");
      wrap.className = "ch-stepper";
      const minus = document.createElement("button");
      minus.type = "button";
      minus.className = "ch-step-btn";
      minus.textContent = "−";
      const plus = document.createElement("button");
      plus.type = "button";
      plus.className = "ch-step-btn";
      plus.textContent = "+";

      input.parentNode.insertBefore(wrap, input);
      wrap.appendChild(minus);
      wrap.appendChild(input);
      wrap.appendChild(plus);
      if (!input.value) input.value = "0";

      function syncCard() {
        const val = parseInt(input.value, 10) || 0;
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

    // Event Landing Card
    const pageTitle = document.querySelector(".article-header__title")
      ? document.querySelector(".article-header__title").textContent.trim()
      : "Event Registration";
    const pageSub = document.querySelector(".article-header__subtitle")
      ? document.querySelector(".article-header__subtitle").textContent.trim()
      : "";
    const sectionId = (window.Co && window.Co.SectionId) ? window.Co.SectionId : "7629102";

    const landing = document.createElement("div");
    landing.className = "ch-event-landing" + (landingParts.flyerSrc ? "" : " ch-no-flyer");
    landing.innerHTML = `
      ${landingParts.flyerSrc ? `<div class="ch-landing-flyer"><img src="${landingParts.flyerSrc}" alt="${pageTitle}" /></div>` : ""}
      <div class="ch-landing-info">
        <h3>Join Us for ${pageTitle}</h3>
        <div class="ch-landing-copy">
          ${landingParts.htmlBlocks.length ? landingParts.htmlBlocks.join("") : "<p>Reserve your spot below — registration takes less than a minute.</p>"}
        </div>
        <button type="button" class="ch-open-rsvp-btn" id="ch-open-rsvp">RSVP Here</button>
        <div><a class="ch-landing-back" href="/${sectionId}#events">&larr; Back to All Chanukah Events</a></div>
      </div>
    `;
    formContainer.parentNode.insertBefore(landing, formContainer);

    // Eventbrite-Style White Modal Header (Back Arrow Top-Left, Title Center, X Top-Right)
    const activeSteps = [1, 2, 3, 4].filter((n) => steps[n].length > 0);
    const header = document.createElement("div");
    header.className = "ch-modal-header";
    header.innerHTML = `
      <button type="button" class="ch-modal-back-top" aria-label="Back">&larr;</button>
      <div>
        <div class="ch-modal-title">${pageTitle}</div>
        ${pageSub ? `<div class="ch-modal-sub">${pageSub}</div>` : ""}
      </div>
      <button type="button" class="ch-modal-close" aria-label="Close">&times;</button>
    `;
    form.insertBefore(header, form.firstChild);

    // Clean Bottom Footer (Single Primary Action Button)
    const footer = document.createElement("div");
    footer.className = "ch-modal-footer";
    footer.innerHTML = `<button type="button" class="ch-btn-next">Continue</button>`;
    const realSubmit = submitLi ? submitLi.querySelector(".form-submit-button") : null;
    if (realSubmit) {
      realSubmit.textContent = "Register";
      footer.appendChild(realSubmit);
    }
    form.appendChild(footer);

    formContainer.classList.add("ch-wizard-ready");

    let currentIdx = 0;
    const backBtn = header.querySelector(".ch-modal-back-top");
    const nextBtn = footer.querySelector(".ch-btn-next");

    // Accurate Payment Check: only true if a real dollar amount > 0 or donate box is checked
    function needsPayment() {
      if (!paymentLi) return false;
      const totalInp = form.querySelector("#total_amount, input[name*='total']");
      if (totalInp && parseFloat(String(totalInp.value).replace(/[^0-9.]/g, "")) > 0) {
        return true;
      }
      return steps[3].some((li) =>
        Array.from(li.querySelectorAll("input:checked")).some((inp) => {
          const val = (inp.value || "").toLowerCase();
          if (/no thanks|volunteer|none|^0$/.test(val)) return false;
          return /donat|sponsor|\$|[1-9]/.test(val);
        })
      );
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

      backBtn.style.visibility = currentIdx === 0 ? "hidden" : "visible";

      const isLast =
        currentIdx === activeSteps.length - 1 ||
        (stepNum === 3 && !needsPayment());

      if (isLast) {
        nextBtn.style.display = "none";
        if (realSubmit) realSubmit.style.display = "inline-block";
      } else {
        nextBtn.style.display = "inline-block";
        nextBtn.textContent = stepNum === 3 ? "Continue to Payment" : "Continue";
        if (realSubmit) realSubmit.style.display = "none";
      }
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
      if (activeSteps[currentIdx] === 3) setTimeout(renderStep, 50);
    });

    nextBtn.addEventListener("click", () => {
      if (!validateCurrentStep()) return;
      if (currentIdx < activeSteps.length - 1) {
        currentIdx++;
        renderStep();
        formContainer.scrollTop = 0;
      }
    });

    backBtn.addEventListener("click", () => {
      if (currentIdx > 0) {
        currentIdx--;
        renderStep();
        formContainer.scrollTop = 0;
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
  }

  function setupChildPage() {
    if (!document.body.classList.contains("section_branch")) return false;

    const sectionId = (window.Co && window.Co.SectionId) ? window.Co.SectionId : "7629102";
    const homeBase = "/" + sectionId;

    document.querySelectorAll("#ch-nav-links a[href^='#']").forEach((a) => {
      const hash = a.getAttribute("href");
      a.setAttribute("href", hash === "#top" ? homeBase : homeBase + hash);
    });

    initEventModalWizard();
    return true;
  }

  function init() {
    ensureViewport();
    removeChabadOneTopBar();
    const isChild = setupChildPage();
    initNav();
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
