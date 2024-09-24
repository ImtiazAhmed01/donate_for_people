document.getElementById('historybtn').addEventListener('click', function () {
    this.style.backgroundColor = '#B4F461';
    document.getElementById('cbtn').style.backgroundColor = '#e2e8f0';
    showHistory('historyWillBeWrittenHere')
});
document.getElementById('cbtn').addEventListener('click', function () {
    this.style.backgroundColor = '#B4F461';
    document.getElementById('historybtn').style.backgroundColor = '';
    showHistory('dcard')
});


let amountLeft = parseFloat(document.getElementById('mainAmount').innerText);


document.getElementById('dbtn1').addEventListener('click', function () {
    // loca, why
    cal('dinput', 'noaDonate')
    mainCal('dinput', 'noaDonate', 'mainAmount', 'Flood', 'Noakhali')
    // input.forEach(input => input.value = '');
});
document.getElementById('dbtn2').addEventListener('click', function () {

    cal('dinput2', 'feniAmount')
    mainCal('dinput2', 'feniAmount', 'mainAmount', 'Flood Relif', 'Feni')
});
document.getElementById('dbtn3').addEventListener('click', function () {

    cal('dinput3', 'quotaAmout')
    mainCal('dinput3', 'quotaAmout', 'mainAmount', 'Aid for Injured', ' Quota Movement')
});




// document.getElementById('historybtn').addEventListener('click', function () {

//     this.classList.add('bg-[#B4F461]');
//     document.getElementById('cbtn').classList.remove('bg-[#B4F461]');
//     document.getElementById('cbtn').classList.add('bg-[#e2e8f0]');
//     showHistory('historyWillBeWrittenHere');
// });

// document.getElementById('cbtn').addEventListener('click', function () {

//     this.classList.add('bg-[#B4F461]');
//     document.getElementById('historybtn').classList.remove('bg-[#B4F461]');
//     document.getElementById('historybtn').classList.add('bg-[#e2e8f0]');

//     showHistory('dcard')
// });

// timezone need to recap
// const currentDate = new Date();
// const forDate = currentDate.toString();
// const time=("Date:", forDate);