var videoBtn = document.getElementById('btn');

function startVideo() {
    document.getElementById('video').classList.remove('d-none');
};

videoBtn.addEventListener('click', startVideo);