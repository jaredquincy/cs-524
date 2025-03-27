document.addEventListener('DOMContentLoaded', () => {
    // Render all course content
    renderCourseDescription(courseData.description);
    renderCourseInfo(courseData.courseInfo);
    renderTimeline(courseData.modules, courseData.finals);
    renderAssignments(courseData.assignments);
    renderGrading(courseData.grading);
    renderResources(courseData.resources);
    
    // Setup interactions
    setupEventListeners();
    setupObservers();
    initializeFirstAssignment();
    updateFooterYear();
});