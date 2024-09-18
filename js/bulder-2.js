function innerBlock(data) {
    document.title = data.title + ' | DAO Maker';
    var backgorund = document.getElementById('tBackgorund');
    backgorund.setAttribute('src', data.backgorund)

    document.getElementById('projTitle').innerHTML = data.title;
    document.getElementById('projIcon').setAttribute('src', data.icon)
    document.getElementById('projTitle').innerHTML = data.title;
    // document.getElementById('cur_price').innerHTML = data.cur_price;
    // document.getElementById('total').innerHTML = data.total;

    let socialMedia = '';
    let statusBlocks = '';

    if (data.live === 'on') {
        statusBlocks += `
        <div class="badge badge-neutral badge-lg py-4 font-bold bg-blue">Live</div>`;
    }

    if (data.refundable === 'on') {
        statusBlocks += `
        <div class="flex flex-col items-end justify-end gap-3 sm:flex-row">
            <div class="badge badge-neutral badge-lg py-4 font-bold">Refundable</div>
        </div>`;
    }
    document.getElementById('statusBlocks').innerHTML = statusBlocks;




    // if (data.upcoming === 'on') {
    //     statusBlocks += `
    //     <div class="style_container__5HuBA">
    //         <div class="style_upcoming__eLJiw">upcoming</div>
    //     </div>`;
    // }

    return `
    
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const parts = window.location.href.split('/');
    const dataLink = parts.filter(Boolean).pop();
    const indX = data.findIndex(item => item.folder === dataLink);
    console.log(indX);
    console.log(
        data[indX].title
    );


    // const container = document.getElementById('innerBlock');
    // container.innerHTML = '';
    const blockHtml = innerBlock(data[indX]);
    // container.insertAdjacentHTML('beforeend', blockHtml);

    // const tokenBlcok = document.getElementById('tokenInformation');
    // tokenBlcok.innerHTML = '';
    // const blockHtml2 = tokenInformation(data[indX]);
    // tokenBlcok.insertAdjacentHTML('beforeend', blockHtml2);
});