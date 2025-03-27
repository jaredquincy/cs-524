// Utility functions for rendering course content

// Render course description
function renderCourseDescription(description) {
    document.getElementById('course-description-text').innerHTML = description;
}

// Render course info
function renderCourseInfo(courseInfo) {
    const courseInfoContainer = document.getElementById('course-info');
    courseInfoContainer.innerHTML = '';
    
    courseInfo.forEach(info => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';
        
        infoItem.innerHTML = `
            <span class="material-icons">${info.icon}</span>
            <div>
                ${info.label ? `<strong>${info.label}</strong> ` : ''}${info.value}
            </div>
        `;
        
        courseInfoContainer.appendChild(infoItem);
    });
}

// Render timeline with modules and weeks
function renderTimeline(modules, finals) {
    const timelineTrack = document.getElementById('timeline-track');
    timelineTrack.innerHTML = '';
    
    // Add all modules and weeks
    modules.forEach(module => {
        // Add module header
        const moduleHeader = document.createElement('div');
        moduleHeader.className = 'module-header';
        moduleHeader.setAttribute('data-module', module.id);
        moduleHeader.innerHTML = `
            <div class="module-label">Module ${module.id}</div>
            <div class="module-name">${module.name}</div>
        `;
        timelineTrack.appendChild(moduleHeader);
        
        // Add weeks for this module
        module.weeks.forEach(week => {
            const timelineItem = createWeekItem(week, module.id);
            timelineTrack.appendChild(timelineItem);
        });
    });
    
    // Add finals week
    const finalsItem = document.createElement('div');
    finalsItem.className = 'timeline-item';
    finalsItem.innerHTML = `
        <div class="timeline-dot"></div>
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
    timelineTrack.appendChild(finalsItem);
}

// Create a week item for the timeline
function createWeekItem(week, moduleId) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('data-module', moduleId);
    
    timelineItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <div class="week-box">
                <div class="week-header">
                    <div class="date-pill">${week.dates}</div>
                    <div class="week-pill">Week ${week.number}</div>
                </div>
                <div class="week-topic">${week.topic}</div>
                ${week.readings.required.length > 0 || week.readings.additional.length > 0 ? '<div class="readings-toggle">View readings</div>' : ''}
                ${week.readings.required.length > 0 || week.readings.additional.length > 0 ? `
                    <div class="readings-content">
                        ${week.readings.required.length > 0 ? `
                            <div class="reading-section">
                                <h5>Required</h5>
                                <ul>
                                    ${week.readings.required.map(reading => `<li>${reading}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${week.readings.additional.length > 0 ? `
                            <div class="reading-section">
                                <h5>Additional</h5>
                                <ul>
                                    ${week.readings.additional.map(reading => `<li>${reading}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
            ${week.milestone ? `<div class="project-milestone">${week.milestone}</div>` : ''}
        </div>
    `;
    
    return timelineItem;
}

// Render assignments
function renderAssignments(assignments) {
    const assignmentsContainer = document.getElementById('assignments-container');
    assignmentsContainer.innerHTML = '';
    
    assignments.forEach(assignment => {
        const assignmentItem = document.createElement('div');
        assignmentItem.className = 'assignment-item';
        
        assignmentItem.innerHTML = `
            <div class="assignment-header">
                <div class="assignment-number">${assignment.number}</div>
                <h3>${assignment.title}</h3>
                <span class="toggle-icon material-icons">expand_more</span>
            </div>
            <div class="assignment-content">
                ${assignment.content}
            </div>
        `;
        
        assignmentsContainer.appendChild(assignmentItem);
    });
}

// Render grading breakdown
function renderGrading(grading) {
    const gradingContainer = document.getElementById('grading-breakdown');
    gradingContainer.innerHTML = '';
    
    grading.forEach(grade => {
        const gradeItem = document.createElement('div');
        gradeItem.className = 'grade-item';
        
        gradeItem.innerHTML = `
            <div class="grade-percentage">${grade.percentage}</div>
            <div class="grade-description">${grade.description}</div>
        `;
        
        gradingContainer.appendChild(gradeItem);
    });
}

// Render resources
function renderResources(resources) {
    const resourcesList = document.getElementById('resources-list');
    resourcesList.innerHTML = '';
    
    resources.forEach(resource => {
        const resourceItem = document.createElement('li');
        
        resourceItem.innerHTML = `
            <span class="material-icons">${resource.icon}</span>
            <div>${resource.description}</div>
        `;
        
        resourcesList.appendChild(resourceItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Toggle readings content
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('readings-toggle')) {
            const content = e.target.closest('.week-box').querySelector('.readings-content');
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                e.target.textContent = 'View readings';
            } else {
                content.classList.add('active');
                e.target.textContent = 'Hide readings';
            }
        }
    });
    
    // Toggle assignment content
    document.addEventListener('click', function(e) {
        if (e.target.closest('.assignment-header')) {
            const assignmentItem = e.target.closest('.assignment-item');
            const allAssignmentItems = document.querySelectorAll('.assignment-item');
            
            // Close all other assignment items
            allAssignmentItems.forEach(item => {
                if (item !== assignmentItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle the clicked assignment item
            assignmentItem.classList.toggle('active');
        }
    });
}

// Setup intersection observers for animations
function setupObservers() {
    // Highlight module labels when scrolling
    const moduleHeaders = document.querySelectorAll('.module-header');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (moduleHeaders.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const module = entry.target.getAttribute('data-module');
                    if (module) {
                        moduleHeaders.forEach(header => {
                            header.classList.remove('active');
                        });
                        document.querySelector(`.module-header[data-module="${module}"]`)?.classList.add('active');
                    }
                }
            });
        }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });
        
        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    // Animate timeline items when they come into view
    if ('IntersectionObserver' in window) {
        const timelineTrack = document.querySelector('.timeline-track');
        if (timelineTrack) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateTimelineItems();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(timelineTrack);
        }
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        setTimeout(animateTimelineItems, 500);
    }
}

// Animate timeline items
function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate-in');
        }, index * 100);
    });
}

// Initialize first assignment as active
function initializeFirstAssignment() {
    const firstAssignment = document.querySelector('.assignment-item');
    if (firstAssignment) {
        firstAssignment.classList.add('active');
    }
}

// Update footer year
function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear && footerYear.textContent.includes('2025')) {
        footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
    }
}