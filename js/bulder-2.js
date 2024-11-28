function innerBlock(data) {
    document.title = data.title + ' | DAO Maker';
    var backgorund = document.getElementById('tBackgorund');
    backgorund.setAttribute('src', data.backgorund)

    document.getElementById('projTitle').innerHTML = data.title;
    document.getElementById('projIcon').setAttribute('src', data.icon)
    document.getElementById('projTitle').innerHTML = data.title;

    let statusBlocks = '';
    if (data.live === 'on') {
        statusBlocks += `<div class="badge badge-neutral badge-lg py-4 font-bold bg-blue">Live</div>`;
    } else { statusBlocks += `<div></div>` }
    if (data.refundable === 'on') {
        statusBlocks += `<div class="flex flex-col items-end justify-end gap-3 sm:flex-row">
            <div class="badge badge-neutral badge-lg py-4 font-bold">Refundable</div>
        </div>`;
    } document.getElementById('statusBlocks').innerHTML = statusBlocks;

    let socialMedia, socialMedia_2, isDisabled;
    isDisabled = data.website === 'off';
    socialMedia = `<a class="cursor-pointer" href="${isDisabled ? window.location.href : data.website}" target="_blank" rel="noopener" ${isDisabled ? 'disabled' : ''}> <img src="../../img/www.svg" alt="i"></a>`;
    isDisabled = data.coingecko === 'off';
    socialMedia += `<a target="_blank" href="${isDisabled ? '#' : data.coingecko}" ${isDisabled ? 'disabled' : ''} class="cursor-pointer"><img alt="i" src="../../img/coingecko.svg"></a>`;
    isDisabled = data.twitter === 'off';
    socialMedia += `<a target="_blank" href="${isDisabled ? '#' : data.twitter}" ${isDisabled ? 'disabled' : ''} class="cursor-pointer"><img alt="i" src="../../img/x.svg"></a>`;
    isDisabled = data.telegram === 'off';
    socialMedia += `<a target="_blank" href="${isDisabled ? '#' : data.telegram}" ${isDisabled ? 'disabled' : ''} class="cursor-pointer"><img alt="I" src="../../img/tg-3.svg"></a>`;
    isDisabled = data.discord === 'off';
    socialMedia += `<a target="_blank" href="${isDisabled ? '#' : data.discord}" ${isDisabled ? 'disabled' : ''} class="cursor-pointer"><img alt="i" src="../../img/dis.svg"></a>`;
    isDisabled = data.medium === 'off';
    socialMedia += `<a target="_blank" href="${isDisabled ? '#' : data.medium}" ${isDisabled ? 'disabled' : ''} class="cursor-pointer"><img alt="i" src="../../img/m.svg"></a>`;

    document.getElementById('socialMedia').innerHTML = socialMedia;
    isDisabled = data.github === 'off';
    socialMedia_2 = `<a class="cursor-pointer" href="${isDisabled ? '#' : data.github}" target="_blank" rel="noopener" ${isDisabled ? 'disabled' : ''}> <img src="../../img/git.svg" alt="i"></a>`;
    isDisabled = data.linkin === 'off';
    socialMedia_2 += `<a class="cursor-pointer" href="${isDisabled ? '#' : data.linkin}" target="_blank" rel="noopener" ${isDisabled ? 'disabled' : ''}> <img src="../../img/in.svg" alt="i"></a>`;
    isDisabled = data.youtube === 'off';
    socialMedia_2 += `<a class="cursor-pointer" href="${isDisabled ? '#' : data.youtube}" target="_blank" rel="noopener" ${isDisabled ? 'disabled' : ''}> <img src="../../img/yt.svg" alt="i"></a>`;
    isDisabled = data.instagram === 'off';
    socialMedia_2 += `<a class="cursor-pointer" href="${isDisabled ? '#' : data.instagram}" target="_blank" rel="noopener" ${isDisabled ? 'disabled' : ''}> <img src="../../img/inst.svg" alt="i"></a>`;
    isDisabled = data.redit === 'off';
    socialMedia_2 += `<a class="cursor-pointer" href="${isDisabled ? '#' : data.redit}" target="_blank" rel="noopener" ${isDisabled ? 'disabled' : ''}> <img src="../../img/redit.svg" alt="i"></a>`;
    document.getElementById('socialMedia_2').innerHTML = socialMedia_2;


    if (data.offering_status === 'on') {
        document.getElementById('cur_1').innerHTML = data.cur_1;
        document.getElementById('cur_2').innerHTML = data.cur_1;
        document.getElementById('cur_price').innerHTML = data.cur_price;
        document.getElementById('total').innerHTML = data.total;
        document.getElementById('statusOffering').innerHTML = `${data.allocation}`;
        document.getElementById('offering_on').classList.remove('hidden');
    } else {
        document.querySelector('[data-tab="2"]').innerHTML = `
            <div class="mx-auto flex w-44 items-start justify-center py-12 text-lg font-bold text-base-content/50">
                <span class="block py-6 mt-8">Details coming soon</span>
            </div>`;
    }


}

document.addEventListener('DOMContentLoaded', () => {
    let url = window.location.href;
    const dataLink = url.replace(/\/[^\/]*\.html$/, '/').split('/').filter(Boolean).pop();
    const indX = data.findIndex(item => item.link === dataLink);
    innerBlock(data[indX]);
});