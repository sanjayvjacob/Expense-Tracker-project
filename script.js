let expenses =[];
let totalAmount =0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category =='') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <=0);
    return;
    if(date == '') {
        alert('Please select a date')
        return;
    }
    expenses.push{category, amount, date});
})