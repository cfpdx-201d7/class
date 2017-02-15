function Store(storeName, minCookiesPerCustomer, maxCookiesPerCustomer, avgCookiesPurchased) {
  this.name = storeName;
  this.hours = ['6am', '7am', '8am'];
  this.minCookies = minCookiesPerCustomer;
  this.maxCookies = maxCookiesPerCustomer;
  this.avgCookiesPurchased = avgCookiesPurchased;
}

Store.prototype.logStoreName = function() {
  console.log('This store (from the prototype) is: ' + this.name);
};

Store.prototype.numCustomers = function() {
var totalCustomers = Math.floor(Math.random() * (this.maxCookies - this.minCookies) + this.minCookies);
return totalCustomers;
};

var newStore = new Store('Belltown', 2, 5, 3);
var pike = new Store('Pike', 1, 7, 4.5);