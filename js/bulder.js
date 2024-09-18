function createBlock(data) {
    return `
        <tr>
            <td>
                <a class="fx-ac" href="project/${data.folder}">
                    <img src="${data.icon}" alt="i" loading="lazy">
                    <span>${data.title}</span>
                </a>
            </td>
            <td>
                <a href="project/${data.folder}">
                    <span>${data.ath}</span>
                    <span class="md-show">${data.raise}</span>
                </a>
            </td>
            <td class="md-hide"><a href="project/${data.folder}">${data.public_sale_tvl}</a></td>
            <td class="md-hide"><a href="project/${data.folder}">${data.raise}</a></td>
            <td><a href="project/${data.folder}"><img src="${data.incubated}" alt="i"></a></td>
        </tr>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    data.forEach(e => {
        const blockHtml = createBlock(e);
        container.insertAdjacentHTML('beforeend', blockHtml);
    });
});
