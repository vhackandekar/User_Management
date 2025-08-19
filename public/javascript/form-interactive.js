document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.querySelector('input[name="url"]');
    const previewWrapper = document.querySelector('.preview-img-wrapper');
    const preview = document.createElement('img');
    preview.style.display = 'none';
    preview.style.width = '90px';
    preview.style.height = '90px';
    preview.style.objectFit = 'cover';
    preview.style.borderRadius = '50%';
    preview.style.boxShadow = '0 1.5px 6px rgba(0,0,0,0.10)';
    preview.style.border = '2px solid #444';
    preview.style.background = '#23233a';
    previewWrapper.appendChild(preview);

    urlInput.addEventListener('input', function() {
        if (urlInput.value.trim()) {
            preview.src = urlInput.value;
            preview.style.display = 'block';
        } else {
            preview.style.display = 'none';
        }
    });

    // Simple validation feedback
    const form = document.querySelector('.form form');
    form.addEventListener('submit', function(e) {
        let valid = true;
        form.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                valid = false;
            } else {
                input.style.borderColor = '#444';
            }
        });
        if (!valid) {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
});
