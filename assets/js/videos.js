/**
 * Video embed on click - reveals YouTube iframe when thumbnail is clicked
 */
(function () {
  document.querySelectorAll('.video-item').forEach(function (item) {
    var thumbnailWrap = item.querySelector('.video-thumbnail-wrap');
    var embedWrap = item.querySelector('.video-embed-wrap');
    var videoId = item.getAttribute('data-video-id');
    var videoTitle = item.getAttribute('data-video-title') || 'Video';

    if (!thumbnailWrap || !embedWrap || !videoId) return;

    thumbnailWrap.setAttribute('role', 'button');
    thumbnailWrap.setAttribute('tabindex', '0');
    thumbnailWrap.setAttribute('aria-label', 'Play ' + videoTitle);

    var playBtn = item.querySelector('.video-play-button');
    if (playBtn) playBtn.setAttribute('aria-hidden', 'true');

    function playVideo() {
      thumbnailWrap.setAttribute('aria-hidden', 'true');
      thumbnailWrap.classList.add('is-hidden');
      embedWrap.setAttribute('aria-hidden', 'false');
      embedWrap.classList.add('is-visible');

      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
      iframe.setAttribute('title', videoTitle);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', '');
      iframe.className = 'video-iframe';
      embedWrap.appendChild(iframe);
    }

    thumbnailWrap.addEventListener('click', playVideo);
    thumbnailWrap.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playVideo();
      }
    });
  });
})();
