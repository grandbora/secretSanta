var secretSanta = require("../secretSanta");

describe("santa kata", function () {

  beforeEach(function () {
    secretSanta.reset();
    this.originaShuffle = secretSanta.shuffle;
    secretSanta.shuffle = function () {
    };
  });

  describe("no santas", function () {
    it("should return empty object", function () {

      expect(secretSanta.getPairs()).toEqual({});

    });
  });

  describe("single santa", function () {
    it("should return empty object", function () {

      secretSanta.addSanta("Bora");
      expect(secretSanta.getPairs()).toEqual({});

    });
  });

  describe("two santas", function () {
    it("should return those two santas as a pair", function () {

      secretSanta.addSanta("Bora");
      secretSanta.addSanta("Nikolas");
      expect(secretSanta.getPairs()).toEqual({"Bora": "Nikolas", "Nikolas": "Bora"});

    });
  });

  describe("three santas", function () {
    it("should return three pairs", function () {

      secretSanta.addSanta("Bora");
      secretSanta.addSanta("Nikolas");
      secretSanta.addSanta("Michael");

      expect(secretSanta.getPairs()).toEqual({
        "Bora": "Nikolas",
        "Nikolas": "Michael",
        "Michael": "Bora"
      });

    });
  });

describe("four santas", function () {
    it("should return four pairs", function () {

      secretSanta.addSanta("Bora");
      secretSanta.addSanta("Nikolas");
      secretSanta.addSanta("Michael");
      secretSanta.addSanta("Stefan");

      expect(secretSanta.getPairs()).toEqual({
        "Bora": "Nikolas",
        "Nikolas": "Michael",
        "Michael": "Stefan",
        "Stefan": "Bora"
      });

    });
  });

describe("five santas", function () {
    it("should return five pairs", function () {

      secretSanta.addSanta("Bora");
      secretSanta.addSanta("Nikolas");
      secretSanta.addSanta("Michael");
      secretSanta.addSanta("Stefan");
      secretSanta.addSanta("Alberto");

      expect(secretSanta.getPairs()).toEqual({
        "Bora": "Nikolas",
        "Nikolas": "Michael",
        "Michael": "Stefan",
        "Stefan": "Alberto",
        "Alberto": "Bora"
      });

    });
  });

describe("five sort of random santas", function () {
    it("should return five different pairs", function () {
      secretSanta.shuffle = function () {
        this.santas.reverse();
      };

      secretSanta.addSanta("Bora");
      secretSanta.addSanta("Nikolas");
      secretSanta.addSanta("Michael");
      secretSanta.addSanta("Stefan");
      secretSanta.addSanta("Alberto");

      var pairs = secretSanta.getPairs();
      expect(Object.keys(pairs).length).toEqual(5);
      expect(Object.keys(pairs)[0]).not.toBe("Bora");

    });
  });

describe("five really random santas", function () {
    it("should return random different pairs", function () {
      secretSanta.shuffle = this.originaShuffle;

      secretSanta.addSanta("Bora");
      secretSanta.addSanta("Nikolas");
      secretSanta.addSanta("Michael");
      secretSanta.addSanta("Stefan");
      secretSanta.addSanta("Alberto");

      var pairs1 = secretSanta.getPairs();
      var pairs2 = secretSanta.getPairs();
      expect(pairs1).not.toEqual(pairs2);

    });
  });

});
