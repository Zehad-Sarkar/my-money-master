// event listener for calculate btn 
document.getElementById('calculate-btn').addEventListener('click', function () {

  //food, rent, and clothes expenses
  const foodField = document.getElementById('food-field').value;
  const rentField = document.getElementById('rent-field').value;
  const clothesField = document.getElementById('clothes-field').value;
  const preTotalAmount = document.getElementById('total-expenses').innerText;

  const incomeField = document.getElementById('income-field').value;

  if (isNaN(incomeField)) {
    return alert('you must have a amount')
  }

  //calculation total expenses
  const totalExpensesAmount = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField) + parseFloat(preTotalAmount);

  // validation 
  if (isNaN(totalExpensesAmount)) {
    alert('this is not a number !!! type a number please');
    return;
  }
  // console.log(totalExpensesAmount);
 
  document.getElementById('total-expenses').innerText = totalExpensesAmount;

  //balance after expenses
  // if (isNaN(incomeField)) {
  //   return alert('you must have a amount')
  // }
  if (incomeField < totalExpensesAmount){
    alert('you cannot expenses more then your income');
    return;
  }
    // balance calculation after expenses 
    const afterExpensesBalance = parseFloat(incomeField) - parseFloat(totalExpensesAmount);
  const balance = document.getElementById('balance').innerText = afterExpensesBalance;
 

  //empty value expenses input fields
  document.getElementById('food-field').value = '';
  document.getElementById('rent-field').value = '';
  document.getElementById('clothes-field').value = '';
  document.getElementById('income-field').value = '';

})

// event listener for const btn 
document.getElementById('save-btn').addEventListener('click', function () {

  const incomeField = document.getElementById('income-field').value;
  const saveField = document.getElementById('save-field').value;

  //calculate savings 
  const savings = parseFloat(incomeField) * parseFloat(saveField) / 100;
  const totalSaving = document.getElementById('saving-amount').innerText = savings;

  //balance 
  const balance = document.getElementById('balance').innerText;

  // remaining balance calculation 
  const remainingBalance = parseFloat(balance) - parseFloat(totalSaving);

  document.getElementById('remaining-balance').innerText = remainingBalance;
})