function addCustomer() {
    const customerNameInput = document.getElementById('customerName');
    const customerName = customerNameInput.value.trim();
    if (customerName) {
        customers.push(customerName);
        updateCustomerList();
        saveCustomers();
        customerNameInput.value = '';
    } else {
        alert('Будь ласка, введіть ім’я покупця.');
    }
}

let customers = loadCustomers() || [];

function updateCustomerList() {
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = '';
    customers.forEach((customer) => {
        const li = document.createElement('li');
        li.textContent = customer;
        customerList.appendChild(li);
    });
}

function saveCustomers() {
    localStorage.setItem('customers', JSON.stringify(customers));
}

function loadCustomers() {
    const savedCustomers = localStorage.getItem('customers');
    if (savedCustomers) {
        return JSON.parse(savedCustomers);
    }
    return [];
}

// Запуск функції для оновлення списку при першому завантаженні
updateCustomerList();
