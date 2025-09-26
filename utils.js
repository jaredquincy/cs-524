// ---------- Rendering helpers ----------
function renderCourseDescription(html) {
    document.getElementById('course-description-text').innerHTML = html;
}

function renderCourseInfo(courseInfo) {
    const el = document.getElementById('course-info');
    el.innerHTML = '';
    courseInfo.forEach(info => {
        const div = document.createElement('div');
        div.className = 'info-item';
        div.innerHTML = `
      <span class="material-icons" aria-hidden="true">${info.icon}</span>
      <div>${info.label ? `<strong>${info.label}</strong> ` : ''}${info.value}</div>
    `;
        el.appendChild(div);
    });
}

function renderTimeline(modules, finals) {
    const track = document.getElementById('timeline-track');
    track.innerHTML = '';

    modules.forEach(module => {
        const header = document.createElement('div');
        header.className = 'module-header';
        header.setAttribute('data-module', module.id);
        header.innerHTML = `
      <div class="module-label">Module ${module.id}</div>
      <div class="module-name">${module.name}</div>
    `;
        track.appendChild(header);

        module.weeks.forEach(week => track.appendChild(createWeekItem(week, module.id)));
    });

    const finalsItem = document.createElement('div');
    finalsItem.className = 'timeline-item';
    finalsItem.innerHTML = `
    <div class="timeline-dot" aria-hidden="true"></div>
    <div class="timeline-content">
      <div class="week-box">
        <div class="week-header">
          <div class="date-pill">${finals.dates}</div>
          <div class="week-pill">Finals Week</div>
        </div>
      </div>
      <div class="project-milestone">${finals.milestone}</div>
    </div>
  `;
    track.appendChild(finalsItem);
}

function createWeekItem(week, moduleId) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('data-module', moduleId);

    const weekLabel = Number.isNaN(parseInt(week.number, 10)) ? week.number : `Week ${week.number}`;

    const hasReadings = (week.readings?.required?.length || 0) + (week.readings?.additional?.length || 0) > 0;
    const readingsId = `readings-${moduleId}-${String(week.number).replace(/\s/g, '')}`;
    const readingsLabelId = `${readingsId}-label`;
    const hasRequired = Boolean(week.readings?.required?.length);
    const hasAdditional = Boolean(week.readings?.additional?.length);

    item.innerHTML = `
    <div class="timeline-dot" aria-hidden="true"></div>
    <div class="timeline-content">
      <div class="week-box">
        <div class="week-header">
          <div class="date-pill">${week.dates}</div>
          <div class="week-pill">${weekLabel}</div>
        </div>
        <div class="week-topic">${week.topic}</div>

        ${hasReadings ? `
          <div class="readings-toggle">
            <button type="button" class="readings-btn" aria-expanded="false" aria-controls="${readingsId}">
              View readings
            </button>
          </div>
          <div id="${readingsId}" class="readings-content" role="region" aria-labelledby="${readingsLabelId}">
            ${hasRequired ? `
              <div class="reading-section">
                <h5 id="${readingsLabelId}">Required</h5>
                <ul>${week.readings.required.map(r => `<li>${r}</li>`).join('')}</ul>
              </div>` : ''}
            ${hasAdditional ? `
              <div class="reading-section">
                <h5 ${!hasRequired ? `id="${readingsLabelId}"` : ''}>Additional</h5>
                <ul>${week.readings.additional.map(r => `<li>${r}</li>`).join('')}</ul>
              </div>` : ''}
          </div>
        ` : ''}
      </div>
      ${week.milestone ? `<div class="project-milestone">${week.milestone}</div>` : ''}
    </div>
  `;
    return item;
}

function renderAssignments(assignments) {
    const container = document.getElementById('assignments-container');
    container.innerHTML = '';

    assignments.forEach((assignment, idx) => {
        const contentId = `assignment-content-${idx + 1}`;
        const item = document.createElement('div');
        item.className = 'assignment-item';

        item.innerHTML = `
      <div class="assignment-header">
        <button class="assignment-toggle" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="${contentId}" id="assignment-toggle-${idx + 1}">
          <div class="assignment-number">${assignment.number}</div>
          <h3>${assignment.title}</h3>
          <span class="toggle-icon material-icons" aria-hidden="true">expand_more</span>
        </button>
      </div>
      <div id="${contentId}" class="assignment-content" role="region" aria-labelledby="assignment-toggle-${idx + 1}">
        ${assignment.content}
      </div>
    `;

        if (idx === 0) item.classList.add('active');
        container.appendChild(item);
    });
}

function renderGrading(grading) {
    const container = document.getElementById('grading-breakdown');
    container.innerHTML = '';
    grading.forEach(g => {
        const item = document.createElement('div');
        item.className = 'grade-item';
        item.innerHTML = `
      <div class="grade-percentage">${g.percentage}</div>
      <div class="grade-description">${g.description}</div>
    `;
        container.appendChild(item);
    });
}

function renderResources(resources) {
    const list = document.getElementById('resources-list');
    list.innerHTML = '';
    resources.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = `
      <span class="material-icons" aria-hidden="true">${r.icon}</span>
      <div>${r.description}</div>
    `;
        list.appendChild(li);
    });
}

function renderGuestSpeakers(guestSpeakers) {
    const noteEl = document.getElementById('guest-speakers-note');
    const gridEl = document.getElementById('guest-speakers-grid');
    if (!gridEl) return;

    gridEl.innerHTML = '';

    if (noteEl) {
        if (guestSpeakers?.note) {
            noteEl.textContent = guestSpeakers.note;
            noteEl.hidden = false;
        } else {
            noteEl.hidden = true;
        }
    }

    if (!guestSpeakers?.speakers?.length) return;

    guestSpeakers.speakers.forEach(speaker => {
        const card = document.createElement('article');
        card.className = 'speaker-card';
        card.setAttribute('role', 'listitem');
        card.innerHTML = `
      <h3>${speaker.name}</h3>
      <p class="speaker-affiliation">${speaker.affiliation}</p>
      <p class="speaker-focus">${speaker.focus}</p>
    `;
        gridEl.appendChild(card);
    });
}

// ---------- Interactions & a11y ----------
function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.readings-btn');
        if (!btn) return;
        const content = document.getElementById(btn.getAttribute('aria-controls'));
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (content) content.classList.toggle('active', !expanded);
        btn.textContent = expanded ? 'View readings' : 'Hide readings';
    });

    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.assignment-toggle');
        if (!toggle) return;
        const item = toggle.closest('.assignment-item');
        const expanded = toggle.getAttribute('aria-expanded') === 'true';

        document.querySelectorAll('.assignment-item').forEach(it => {
            if (it !== item) {
                it.classList.remove('active');
                const t = it.querySelector('.assignment-toggle');
                const c = it.querySelector('.assignment-content');
                if (t && c) {
                    t.setAttribute('aria-expanded', 'false');
                    c.style.maxHeight = null;
                }
            }
        });

        toggle.setAttribute('aria-expanded', String(!expanded));
        item.classList.toggle('active', !expanded);
    });

}

function setupObservers() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.course-nav a');

    const setActive = (id) => {
        navLinks.forEach(a => a.removeAttribute('aria-current'));
        const active = document.querySelector(`.course-nav a[href="#${id}"]`);
        if (active) active.setAttribute('aria-current', 'true');
    };

    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        }, { threshold: 0.4 });
        sections.forEach(s => obs.observe(s));
    }

    const tlItems = document.querySelectorAll('.timeline-item');
    if ('IntersectionObserver' in window) {
        const obs2 = new IntersectionObserver((entries, o) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    o.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        tlItems.forEach(i => obs2.observe(i));
    } else {
        setTimeout(animateTimelineItems, 500);
    }

    const assignmentItems = document.querySelectorAll('.assignment-item');
    if ('IntersectionObserver' in window) {
        const obs3 = new IntersectionObserver((entries, o) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    o.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -12% 0px' });
        assignmentItems.forEach(i => obs3.observe(i));
    } else {
        setTimeout(animateAssignmentItems, 300);
    }

    const speakerCards = document.querySelectorAll('.speaker-card');
    if ('IntersectionObserver' in window) {
        const obs4 = new IntersectionObserver((entries, o) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    o.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
        speakerCards.forEach(card => obs4.observe(card));
    } else {
        setTimeout(animateSpeakerCards, 400);
    }
}

function animateTimelineItems() {
    document.querySelectorAll('.timeline-item').forEach((it, idx) => {
        setTimeout(() => it.classList.add('animate-in'), idx * 100);
    });
}

function animateAssignmentItems() {
    document.querySelectorAll('.assignment-item').forEach((it, idx) => {
        setTimeout(() => it.classList.add('animate-in'), idx * 120);
    });
}

function animateSpeakerCards() {
    document.querySelectorAll('.speaker-card').forEach((card, idx) => {
        setTimeout(() => card.classList.add('animate-in'), idx * 100);
    });
}

function initializeFirstAssignment() {
    const first = document.querySelector('.assignment-item');
    if (first) {
        first.classList.add('active', 'animate-in');
        const btn = first.querySelector('.assignment-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'true');
    }
}

function updateFooterYear() {
    const y = new Date().getFullYear();
    const p = document.querySelector('footer p');
    if (p) p.textContent = p.textContent.replace(/\b\d{4}\b/, String(y));
}

function setupSmoothScroll() {
    document.querySelectorAll('.course-nav a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const hadTabIndex = target.hasAttribute('tabindex');
            if (!hadTabIndex) target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            if (!hadTabIndex) {
                setTimeout(() => target.removeAttribute('tabindex'), 500);
            }
        });
    });
}
