// Google Reviews Widget Configuration
window.initGoogleReviews = function() {
  if (typeof $GrwJS !== 'undefined') {
    $GrwJS.init({
      target: '#google-reviews-widget',
      placeid: 'ChIJdVqUGlH-nkcRFz1Frt2tllM',
      theme: 'light',
      numOfWords: 50,
      horizontal: true,
      autoScroll: true,
      scrollInterval: 6,
      maxReviews: 10
    });
  }
};
