document.addEventListener('DOMContentLoaded', function() {
  const downloadCvButton = document.querySelector('.about-button');

  if (downloadCvButton) {
    downloadCvButton.addEventListener('click', function() {
      // Replace 'YOUR_CV_DOWNLOAD_LINK_HERE' with the actual URL of your CV file
      window.location.href = 'https://drive.google.com/uc?export=download&id=1BNgTcXNtDtoZsvOnG_YkI8AZpM32Z1dH';
    });
  }
});