document.getElementById('historybtn').addEventListener('click', function () {

    document.getElementById('cbtn').classList.remove('bg-[#B4F461]', 'text-black');
    document.getElementById('cbtn').classList.add('bg-white', 'hover:bg-gray-300');
    this.classList.remove('bg-white', 'hover:bg-gray-300');
    this.classList.add('bg-[#B4F461]', 'text-black');
    showHistory('historyWillBeWrittenHere');
});

document.getElementById('cbtn').addEventListener('click', function () {
    document.getElementById('historybtn').classList.remove('bg-[#B4F461]', 'text-black');
    document.getElementById('historybtn').classList.add('bg-white', 'hover:bg-gray-300');
    this.classList.remove('bg-white', 'hover:bg-gray-300');
    this.classList.add('bg-[#B4F461]', 'text-black');
    showHistory('dcard');
});


let amountLeft = parseFloat(document.getElementById('mainAmount').innerText);


document.getElementById('dbtn1').addEventListener('click', function () {
    cal('dinput', 'noaDonate');
    mainCal('dinput', 'noaDonate', 'mainAmount', 'Flood', 'Noakhali');
});
document.getElementById('dbtn2').addEventListener('click', function () {
    cal('dinput2', 'feniAmount');
    mainCal('dinput2', 'feniAmount', 'mainAmount', 'Flood Relif', 'Feni');
});
document.getElementById('dbtn3').addEventListener('click', function () {
    cal('dinput3', 'quotaAmout');
    mainCal('dinput3', 'quotaAmout', 'mainAmount', 'Aid for Injured', ' Quota Movement');
});




