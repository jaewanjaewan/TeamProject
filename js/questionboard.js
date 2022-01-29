const moreInfo = document.querySelector('#moreInfo');
const menu = document.querySelector('#menu');
const notice = document.querySelector('#notice');
const trArr = document.querySelectorAll('.dataLine');

/*--------------------------더보기 클릭했을시 공지사항페이지로 이동-----------------------------------*/
moreInfo.addEventListener('click', () => {
    $("section").load("/html/notice.html");
    Array.from(menu.children).forEach(
        v => v.classList.remove('selected')
    )
    notice.classList.add('selected');
})

/*--------------------------클릭했을시 상세페이지로 이동-----------------------------------*/
trArr.forEach(item => {
    item.addEventListener('click', () => {
        $("section").load("/html/detailquestion.html");
    })
})