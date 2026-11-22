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

    // Event Landing Card + Full-Width Clickable Sponsor Band + Bottom Back Link
    const pageTitle = document.querySelector(".article-header__title")
      ? document.querySelector(".article-header__title").textContent.trim()
      : "Event Registration";
    const sectionId = (window.Co && window.Co.SectionId) ? window.Co.SectionId : "7629102";
    const SPONSOR_URL = "/7632168";
    const isSponsorPage = /sponsor/i.test(pageTitle);

    const landing = document.createElement("div");
    landing.className = "ch-event-landing" + (landingParts.flyerSrc ? "" : " ch-no-flyer");
    landing.innerHTML = `
      ${landingParts.flyerSrc ? `<div class="ch-landing-flyer"><img src="${landingParts.flyerSrc}" alt="${pageTitle}" /></div>` : ""}
      <div class="ch-landing-info">
        <div class="ch-landing-copy">
          ${landingParts.htmlBlocks.length ? landingParts.htmlBlocks.join("") : "<p>Reserve your spot below — registration takes less than a minute.</p>"}
        </div>
        <div class="ch-rsvp-wrap">
          <button type="button" class="ch-open-rsvp-btn" id="ch-open-rsvp">RSVP Here</button>
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
