// History function
function showHistory(id) {
    if (id === 'dcard') {
        document.getElementById('historyWillBeWrittenHere').classList.add('hidden');
        document.getElementById('dcard').classList.remove('hidden');
    }
    else {
        document.getElementById('historyWillBeWrittenHere').classList.remove('hidden');
        document.getElementById('dcard').classList.add('hidden');

    }
}

// Modal function
function modalSet(id) {
    let donationAmount = document.querySelector(`#${id}`).value;
    let amount = parseFloat(donationAmount);
    if (isNaN(amount) || amount <= 0) {
        alert('Invalid amount');
    }
    else {
        document.getElementById('my_modal_1').showModal();
    }
}

// Calculation function
function cal(in_id, up_id) {
    let doamount = parseFloat(document.getElementById(in_id).value);
    console.log(doamount);
    let noakhaliDona = parseFloat(document.getElementById(up_id).innerText);
    console.log(noakhaliDona)
    let totaldona = doamount + noakhaliDona
    console.log(totaldona)
}

// Main cal
function mainCal(in_id, prev_donate, m_amount) {
    let doamount = parseFloat(document.getElementById(in_id).value);

    let noakhaliDona = parseFloat(document.getElementById(prev_donate).innerText);
    if (isNaN(doamount) || isNaN(noakhaliDona) || doamount <= 0) {

        return;
    }

    let totaldona1 = doamount + noakhaliDona;

    document.getElementById(prev_donate).innerText = totaldona1;

    amountLeft -= doamount;
    document.getElementById(m_amount).innerText = amountLeft;
    // if (amountLeft < 0) {
    //     document.getElementById(m_amount).innerText = '0.00';

    //     alert('Not enough amount left')


    //     return;
    // }
}