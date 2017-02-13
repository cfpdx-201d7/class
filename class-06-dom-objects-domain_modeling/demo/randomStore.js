var randomStore = {
  storeName: 'RANDOM STORE',
  storeHours: [2, 3, 4],
  randomNumber: function() {
    var min = 2;
    var max = 8;
    return Math.floor(Math.random() * (max - min) + min);
  },
  generateStoreList: function() {
    var storeList = document.getElementById('random_store');
    var storeNameLi = document.createElement('li');

    storeNameLi.textContent = this.storeName;

    storeList.appendChild(storeNameLi);

    var hourLi;

    for(var i = 0; i < this.storeHours.length ; i++) {
      hourLi = document.createElement('li');
      hourLi.textContent = this.randomNumber();
      storeList.appendChild(hourLi);
    }
  }
};

randomStore.generateStoreList();