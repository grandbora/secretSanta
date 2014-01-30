module.exports = {
  santas: [],

  addSanta : function (santa) {
    this.santas.push(santa);
  },

  reset : function () {
    this.santas = [];
  },

  shuffle : function () {
    this.santas.sort(function () {
      return (Math.round(Math.random())-0.5);
    });
  },

  getPairs : function () {
    this.shuffle();

    pairs = {};

    if (this.santas.length < 2) {
      return pairs;
    };

    this.santas.forEach(function (santa, i) {

      receiver = this.santas[i+1];
      if (i == this.santas.length - 1) {
        receiver = this.santas[0];
      }

      pairs[santa] = receiver;
    }, this);

    return pairs;
  }
};
