const trArr = document.querySelectorAll('.dataLine');

/*--------------------------클릭했을시 상세페이지로 이동-----------------------------------*/
trArr.forEach(item => {
    item.addEventListener('click', () => {
        $("section").load("/html/detailnotice.html");
    })
})