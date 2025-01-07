const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  // it("should Conjured's quality downgrade twice faster as normal objects", function() {
  //   const gildedRose = new Shop([new Item("Conjured", 10, 10)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(8);
  //   expect(items[0].sellIn).toBe(9);
  // });

  // it("should Conjured's quality downgrade 4 times faster after sellin at zero", function() {
  //   const gildedRose = new Shop([new Item("Conjured", 0, 4)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  //   expect(items[0].sellIn).toBe(-1);
  // });

  it('Golden Master', function () {

    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6),
    ];

    const gildedRose = new Shop(items);
    const days = 2;

    let resultString = '';
    for (let day = 0; day < days + 1; day++) {
      resultString += `-------- day ${day} --------\n`;
      resultString += "name, sellIn, quality\n";
      items.forEach(item => resultString += `${item.name}, ${item.sellIn}, ${item.quality}\n`);
      gildedRose.updateQuality();
      resultString += "\n";
    }

    expect(resultString).toEqual(`-------- day 0 --------
name, sellIn, quality
+5 Dexterity Vest, 10, 20
Aged Brie, 2, 0
Elixir of the Mongoose, 5, 7
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 15, 20
Backstage passes to a TAFKAL80ETC concert, 10, 49
Backstage passes to a TAFKAL80ETC concert, 5, 49
Conjured Mana Cake, 3, 6

-------- day 1 --------
name, sellIn, quality
+5 Dexterity Vest, 9, 19
Aged Brie, 1, 1
Elixir of the Mongoose, 4, 6
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 14, 21
Backstage passes to a TAFKAL80ETC concert, 9, 50
Backstage passes to a TAFKAL80ETC concert, 4, 50
Conjured Mana Cake, 2, 5

-------- day 2 --------
name, sellIn, quality
+5 Dexterity Vest, 8, 18
Aged Brie, 0, 2
Elixir of the Mongoose, 3, 5
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 13, 22
Backstage passes to a TAFKAL80ETC concert, 8, 50
Backstage passes to a TAFKAL80ETC concert, 3, 50
Conjured Mana Cake, 1, 4

`);
  });
});