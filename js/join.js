/*----------------------------------- 달력 생성 ----------------------------------------*/
window.onload = function () { //처음페이지가 열릴때 동적으로 날짜를 select박스에 넣는다.
    let sYear = 1980;
    let eYear = 2022;
    let sMonth = 1;
    let eMonth = 12;
    let sDay = 1;
    let eDay = 31;

    let strYear = '';
    let strMonth = '';
    let strDay = '';

    for (let i = eYear; i >= sYear; i--) { //select랑 option같이쓴다.
        strYear += "<option value=" + i + ">" + i + "</option>";
    }

    for (let i = sMonth; i <= eMonth; i++) {
        strMonth += "<option value=" + i + ">" + i + "</option>";
    }

    for (let i = sDay; i <= eDay; i++) {
        strDay += "<option value=" + i + ">" + i + "</option>";
    }

    document.getElementById("year").innerHTML = strYear;
    document.getElementById("month").innerHTML = strMonth;
    document.getElementById("day").innerHTML = strDay;
}

/*---------------------------- 조건 체크 -----------------------------------*/
const btnprimary = document.querySelector('.btn-primary');
if (btnprimary) {
    const joinFrm = document.querySelector('#joinFrm');
    const agree = document.querySelector('#agree');
    const blank_pattern = /[\s]/g; //공백금지
    btnprimary.addEventListener('click', () => {
        if(joinFrm.checkId.value === '' || blank_pattern.test(joinFrm.checkId.value) == true){ //공백이있다면 true리턴
            alert('체크된 항목은 필수사항입니다.')
        } else if(joinFrm.passCheck.value === '' || blank_pattern.test(joinFrm.passCheck.value) == true){
            alert('체크된 항목은 필수사항입니다.')
        } else if(joinFrm.rePassCheck.value === '' || blank_pattern.test(joinFrm.rePassCheck.value) == true){
            alert('체크된 항목은 필수사항입니다.')
        } else if(joinFrm.nmCheck.value === '' || blank_pattern.test(joinFrm.nmCheck.value) == true){
            alert('체크된 항목은 필수사항입니다.')
        } else if(joinFrm.pNumberCheck.value === '' || blank_pattern.test(joinFrm.pNumberCheck.value) == true){
            alert('체크된 항목은 필수사항입니다.')
        } else if(joinFrm.passCheck.value !== joinFrm.rePassCheck.value){
            alert('비밀번호가 서로 다릅니다.')
        } else if(joinFrm.passCheck.value.length < 4 || joinFrm.passCheck.value.length > 15){
            alert('비밀번호를 4~15글자로 입력해주세요.')
        } else if(!agree.checked){
            alert('약관에 동의해주세요.')
        }
    })
} //회원가입 버튼눌렀을땐 ajax통신