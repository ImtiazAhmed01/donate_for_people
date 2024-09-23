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
    modalSet('dinput')
    cal('dinput', 'noaDonate')
    mainCal('dinput', 'noaDonate', 'mainAmount')
});
document.getElementById('dbtn2').addEventListener('click', function () {
    modalSet('dinput2')
    cal('dinput2', 'feniAmount')
    mainCal('dinput2', 'feniAmount', 'mainAmount')
});
document.getElementById('dbtn3').addEventListener('click', function () {
    modalSet('dinput3')
    cal('dinput3', 'quotaAmout')
    mainCal('dinput3', 'quotaAmout', 'mainAmount')
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