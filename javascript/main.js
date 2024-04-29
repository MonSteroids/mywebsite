function downloadImage(imageUrl) {
    var a = document.createElement('a');
    a.href = imageUrl;
    a.download = imageUrl.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to remove .html extension from URLs
function removeHtmlExtension() {
    var links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(function(link) {
        link.setAttribute('href', link.getAttribute('href').replace('.html', ''));
    });
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    removeHtmlExtension();
});