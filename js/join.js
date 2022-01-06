window.onload = function(){ //처음페이지가 열릴때 동적으로 날짜를 select박스에 넣는다.
    let sYear = 1980;
    let eYear = 2022;
    let sMonth = 1;
    let eMonth = 12;
    let sDay = 1;
    let eDay = 31;

    let strYear='';
    let strMonth='';
    let strDay='';

    for(let i=eYear; i>=sYear; i--){ //select랑 option같이쓴다.
        strYear += "<option value="+i+">"+i+"</option>";
    }

    for(let i=sMonth; i<=eMonth; i++){
        strMonth += "<option value="+i+">"+i+"</option>";
    }

    for(let i=sDay; i<=eDay; i++){
        strDay += "<option value="+i+">"+i+"</option>";
    }

    document.getElementById("year").innerHTML = strYear;
    document.getElementById("month").innerHTML = strMonth;
    document.getElementById("day").innerHTML = strDay;
}