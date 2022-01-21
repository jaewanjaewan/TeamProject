const board = document.querySelector('#board');
const service = document.querySelector('#service');
const introduction = document.querySelector('#introduction');
const notice = document.querySelector('#notice');
const menu = document.querySelector('#menu');


/*-------------------------- Jquery를 이용하여 section에 각html include -----------------------------*/
/*$(document).ready()는 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라는 의미이다.
   jQuery 이벤트 메서드 중 하나이다. 이 메서드는 비슷한 기능을 수행한다.*/
$(document).ready(function () {
    $("section").load("/html/questionboard.html");

    board.addEventListener('click', () => {
        $("section").load("/html/questionboard.html");
    })

    service.addEventListener('click', () => {
        $("section").load("/html/service.html");
    })

    introduction.addEventListener('click', () => {
        $("section").load("/html/introduction.html");
    })

    notice.addEventListener('click', () => {
        $("section").load("/html/notice.html");
    })
});

/*----------------------------------- 클릭했을시 li태그에 색상적용 ----------------------------------*/
/*array.from() 메서드는 유사 배열객체나 반복 가능한 객체를 복사해서 새로운 array객체를 만든다.
  ex) console.log(Array.from('foo') => expected output : Array['F', 'O', 'O'])*/
menu.addEventListener('click', e => {
    const selected = e.target;
    Array.from(menu.children).forEach(
        v => v.classList.remove('selected')
    )
    if (selected) {
        selected.classList.add('selected');
    }
})
