//login hnadler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click",function(){
    const password = parseFloat(document.getElementById('passwordform').value);
    if (password == 7) {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
}})

//deposit button
const depositbtn = document.getElementById('addDeposit');
depositbtn.addEventListener('click',function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const currentDeposit = document.getElementById('currentDeposit').innerHTML;
    const totalDiposit = parseFloat(depositAmount) + parseFloat(currentDeposit);
    document.getElementById('currentDeposit').innerHTML = totalDiposit;

    const balance = document.getElementById('balance').innerHTML;
    const totalbalance = parseFloat(balance) + parseFloat(depositAmount);
    document.getElementById('balance').innerHTML = totalbalance;
    })


//withdrow button
const withdrowbtn = document.getElementById('getwithdrow');
withdrowbtn.addEventListener('click',function(){
    const withdrowamount = document.getElementById('withdrowamount').value;
    const currentwithdrow = document.getElementById('currentwithdrow').innerHTML;
    const balance = document.getElementById('balance').innerHTML;
    const totalwithdrow = parseFloat(withdrowamount) + parseFloat(currentwithdrow);
    document.getElementById('currentwithdrow').innerHTML = totalwithdrow;
    const totalbalance = parseFloat(balance) - parseFloat(withdrowamount);
    document.getElementById('balance').innerHTML = totalbalance;
})
document.getElementById('balancehide').style.display = 'none';
document.getElementById('hidebalance').style.display = 'none';
document.getElementById('balanceclick').addEventListener('click',function(){
    document.getElementById('balancehide').style.display = 'block';
    document.getElementById('hidebalance').style.display = 'block';
})
document.getElementById('hidebalance').addEventListener('click', function () {
    document.getElementById('balancehide').style.display = 'none';
    document.getElementById('hidebalance').style.display = 'none';
})
