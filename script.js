document.addEventListener('DOMContentLoaded', () => {
  renderCourseDescription(courseData.description);
  renderCourseInfo(courseData.courseInfo);
  renderTimeline(courseData.modules, courseData.finals);
  renderGuestSpeakers(courseData.guestSpeakers);
  renderAssignments(courseData.assignments);
  renderGrading(courseData.grading);
  renderResources(courseData.resources);

  setupEventListeners();
  setupObservers();
  setupSmoothScroll();
  initializeFirstAssignment();
  updateFooterYear();
});
