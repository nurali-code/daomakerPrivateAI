function createBlock(data) {
    return `
        <tr>
            <td>
                <a class="fx-ac" href="project/${data.link}">
                    <img src="${data.icon}" alt="i" loading="lazy">
                    <p>
                        ${data.title}
                        ${data.persent === 'off' ? "" : '<sup class="persent">' + data.persent + '</sup>'}
                        ${data.badge === 'off' ? "" : '<span class="badge">' + data.badge + '</span>'}
                    </p>
                </a>
            </td>
            <td>
                <a href="project/${data.link}">
                    <span>${data.ath}</span>
                    <span class="md-show">${data.raise}</span>
                </a>
            </td>
            <td class="md-hide"><a href="project/${data.link}">${data.public_sale_tvl}</a></td>
            <td class="md-hide"><a href="project/${data.link}">${data.raise}</a></td>
            ${data.incubated === 'off' ? "<td></td>" : '<td><a href="project/' + data.link + '"><img src="' + data.incubated + '" alt="i"></a></td>'}
            
        </tr>
    `;
}

function createBanner(data) {
    return `<a href = "./project/${data.link}" class="bnr fx-col fx-jb" >
            <div class="bnr-row fx-ac fx-jb">
                ${data.live === 'off' ? "" : '<span class="badge bnr__badge anim">Live</span>'}
                ${data.coming_soon === 'off' ? "" : '<span class="bnr__badge">Coming soon</span>'}
                ${data.refundable === 'off' ? "" : '<span class="bnr__badge">Refundable</span>'}
            </div>

            <div class="bnr-row fx-ac">
                <img class="bnr__logo" src="${data.icon}" alt="i" loading="lazy">
                <h3 class="bnr__heading"> ${data.title}</h3>
            </div>

            <img src="${data.banner_bg}" alt="i" class="bnr__bg">
        </a>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const b_conain = document.getElementById('b_conain');
    container.innerHTML = '';
    data.forEach(e => {
        if (e.listing === 'on') {
            const blockHtml = createBlock(e);
            container.insertAdjacentHTML('beforeend', blockHtml);
        }
    });

    b_conain.innerHTML = '';
    data.forEach(e => {
        if (e.banner === 'on') {
            const blockHtml = createBanner(e);
            b_conain.insertAdjacentHTML('beforeend', blockHtml);
        }
    });
});
