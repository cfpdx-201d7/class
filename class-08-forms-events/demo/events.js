var userForm = document.getElementById('new_store');

userForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  var storeName = event.target.store_name.value;
  var avgCustomers = event.target.avg_customer.value;
  console.log(storeName, avgCustomers);
  event.target.store_name.value = '';
}