document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('fileList');
    const repo = 'gjpanhtv/gjpanhtv.github.io'; // Tên tài khoản và tên repo

    fetch(`https://api.github.com/repos/${repo}/contents/app_tvbox`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(files => {
            files.forEach(file => {
                if (file.type === 'file') {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<a href="${file.download_url}" download>${file.name}</a>`;
                    fileList.appendChild(listItem);
                }
            });
        })
        .catch(err => {
            console.error('Error:', err);
        });
});