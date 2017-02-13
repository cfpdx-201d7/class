var store = {
  storeName: 'Weird Cookie Store',
  cookiesAreWeird: true,
  cookiesOnHand: 5,
  areCookiesWeird: function(name) {
    if (this.cookiesAreWeird === true) {
      return 'yeah duh';
    } else {
      return 'no, you jerk';
    }
  }
};

store.areCookiesWeird();

store['areCookiesWeird']();
