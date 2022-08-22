const playerArray = [];

function showPlayer(playerCart) {
    const ulNameAdded = document.getElementById('player-name-added');
    ulNameAdded.innerHTML = '';
    for (let i = 0; i < playerCart.length; i++) {
        const name = playerArray[i].playerName;
        //    console.log(name);

        const tr = document.createElement('tr');
        tr.innerHTML = `
       <th>${i + 1}</th>
       <td>${name}</td>
       `;
        ulNameAdded.appendChild(tr);
        // console.log(ulNameAdded);
    }
    // console.log(playerCart);
}
function clickToPlayerAdded(btnValue) {
    const playerName = btnValue.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);

    const playerObject = {
        playerName: playerName
    }
    // console.log(playerObject);
    playerArray.push(playerObject);
    showPlayer(playerArray);
    const playerLength = playerArray.length;
    // console.log(playerLength);
    document.getElementById('calculate-btn').addEventListener('click', function () {
        const perPlayerAmount = document.getElementById('per-player-amount');
        const playerAmount = perPlayerAmount.value;
        // console.log(playerAmount);
        const amount = parseFloat(playerAmount);
        const additon = amount * playerLength;
        // console.log(additon);
        const playerExpense = document.getElementById('player-expense');
        playerExpense.innerText = additon;
    })
    document.getElementById('calculate-total-btn').addEventListener('click', function(){
        const managerAmount = document.getElementById('manager-amount');
        const managerAmountString = managerAmount.value;
        const managerAmountConvert = parseFloat(managerAmountString);
        
        const coachAmount = document.getElementById('coach-amount');
        const coachAmountString = coachAmount.value;
        const coachAmountConvert = parseFloat(coachAmountString);

        const playerExpenseAmount = document.getElementById('player-expense');
        const sentPlayerAmount = playerExpenseAmount.innerText;
        const sentPlayerAmountConvert = parseFloat(sentPlayerAmount);

        const totalAmount = sentPlayerAmountConvert + managerAmountConvert + coachAmountConvert;
        
        document.getElementById('total-amount').innerText = totalAmount;
        
    })
}
