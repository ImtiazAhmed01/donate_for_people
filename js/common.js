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
function modalSet() {
    document.getElementById('my_modal_1').showModal();
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

// Main calculation function
function mainCal(in_id, prev_donate, m_amount, why, loca) {
    let doamount = parseFloat(document.getElementById(in_id).value);
    let noakhaliDona = parseFloat(document.getElementById(prev_donate).innerText);
    if (isNaN(doamount) || isNaN(noakhaliDona) || doamount <= 0) {
        alert('Invalid amount.');
        document.getElementById(in_id).value = '';
        return;
    }

    if (amountLeft === 0) {
        alert('Your amount is zero');
        document.getElementById(in_id).value = '';
        return;
    }

    if (doamount > amountLeft) {
        alert('Insufficient balance');
        document.getElementById(in_id).value = '';
        return;
    }
    let totaldona1 = doamount + noakhaliDona;
    document.getElementById(prev_donate).innerText = totaldona1.toFixed(2);
    amountLeft -= doamount;
    document.getElementById(m_amount).innerText = amountLeft.toFixed(2);
    const div = document.createElement('div');
    div.classList.add("border", "p-2", "rounded-lg", "mb-2");
    const currentDate = new Date();
    const ctime = currentDate.toString();
    div.innerHTML = `
        <p><strong>${doamount.toFixed(2)} Taka is donated for ${why} at ${loca}, Bangladesh</strong></p>
        <p>Date: ${ctime.toLocaleString()}</p>
    `;
    document.getElementById('historyWillBeWrittenHere').appendChild(div);
    document.getElementById(in_id).value = '';
    modalSet();
}
