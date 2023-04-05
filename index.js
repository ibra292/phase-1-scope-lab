var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = "joe";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "mary";
}
