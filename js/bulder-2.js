function compareDate(targetDateStr) {
    const targetDate = new Date(`${targetDateStr} ${new Date().getFullYear()} GMT`);
    const diffInMillis = targetDate - new Date();
    if (isNaN(targetDate.getTime())) return { status: "Invalid date format" };

    const future = diffInMillis > 0;
    const diffInSeconds = Math.abs(diffInMillis) / 1000;
    const diffInHours = Math.floor(diffInSeconds / 3600);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);

    const status = future ? "Open" : "Closed";

    let message;
    if (diffInDays < 1) message = future ? `Ends in ${diffInHours} hours` : `Ended ${diffInHours} hours ago`;
    else if (diffInDays < 7) message = future ? `Ends in ${diffInDays} days` : `Ended ${diffInDays} days ago`;
    else if (diffInMonths < 1) message = future ? `Ends in ${diffInWeeks} weeks` : `Ended ${diffInWeeks} weeks ago`;
    else message = future ? `Ends in ${diffInMonths} months` : `Ended ${diffInMonths} months ago`;

    return { status, message };
}

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
        document.getElementById('cur_price').innerHTML = data.cur_price;
        document.getElementById('total').innerHTML = data.total;
        document.getElementById('statusOffering').innerHTML = `
            <div class="flex flex-col border-l border-base-content/10 px-4 py-1 md:border-l-0 md:border-r md:pl-0">
                <div class="flex h-8 items-center justify-start text-lg font-medium tracking-wide md:justify-end">${compareDate(data.status).status}</div>
                <div class="flex h-8 items-center justify-start text-lg text-base-content/50 md:justify-end">
                    <div class="flex tooltip tooltip-top" data-tip="${data.status}">
                        <time>${compareDate("25 Sep, 13:00").message}</time>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="ml-1 h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex flex-col border-l border-base-content/10 px-4 py-1 md:border-l-0 md:border-r md:pl-0">
                <div class="flex h-8 items-center justify-start text-lg font-medium tracking-wide md:justify-end">Total allocation</div>
                <div class="flex h-8 items-center justify-start text-lg text-base-content/50 md:justify-end">${data.allocation}</div>
            </div>
        `;
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