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
// function mainCal(in_id, prev_donate, m_amount, why, loca) {
//     let doamount = parseFloat(document.getElementById(in_id).value);
//     let noakhaliDona = parseFloat(document.getElementById(prev_donate).innerText);
//     // add transition to history
//     const div = document.createElement('div');
//     div.classList.add("border", "p-2", "rounded-lg", "mb-2");
//     // date setting
//     const currentDate = new Date();
//     const ctime = currentDate.toString();
//     div.innerHTML = `
//         <p><strong>${doamount.toFixed(2)} Taka is donated for ${why} at ${loca}, Bangladesh</strong></p>
//         <p>Date: ${ctime.toLocaleString()}</p>
//     `;
//     document.getElementById('historyWillBeWrittenHere').appendChild(div);
//     if (isNaN(doamount) || isNaN(noakhaliDona) || doamount <= 0) {
//         alert('Invalid amount.');
//         return;
//     }
//     if (amountLeft === 0) {
//         alert('Your amount is zero');
//         return;
//     }

//     if (doamount > amountLeft) {
//         alert('Insufficient balance');
//         return;
//     }
//     let totaldona1 = doamount + noakhaliDona;
//     document.getElementById(prev_donate).innerText = totaldona1.toFixed(2);
//     amountLeft -= doamount;
//     document.getElementById(m_amount).innerText = amountLeft.toFixed(2);

//     document.getElementById(in_id).value = '';
//     modalSet();
// }

function mainCal(in_id, prev_donate, m_amount, why, loca) {
    let doamount = parseFloat(document.getElementById(in_id).value);
    let noakhaliDona = parseFloat(document.getElementById(prev_donate).innerText);

    // Validate the input first
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

    // Only after validation, proceed to update the donation
    let totaldona1 = doamount + noakhaliDona;
    document.getElementById(prev_donate).innerText = totaldona1.toFixed(2);
    amountLeft -= doamount;
    document.getElementById(m_amount).innerText = amountLeft.toFixed(2);

    // Add donation details to history
    const div = document.createElement('div');
    div.classList.add("border", "p-2", "rounded-lg", "mb-2");

    // date setting
    const currentDate = new Date();
    const ctime = currentDate.toString();
    div.innerHTML = `
        <p><strong>${doamount.toFixed(2)} Taka is donated for ${why} at ${loca}, Bangladesh</strong></p>
        <p>Date: ${ctime.toLocaleString()}</p>
    `;
    document.getElementById('historyWillBeWrittenHere').appendChild(div);

    // Clear input after successful donation
    document.getElementById(in_id).value = '';

    // Show modal for successful donation
    modalSet();
}
