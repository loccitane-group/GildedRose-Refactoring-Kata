class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  increaseQuality(increment) {
    this.quality += increment;
  }

  decreaseQuality(increment) {
    this.quality -= increment;
  }
}

const AGED_BRIE_ITEM = 'Aged Brie';
const BACKSTAGE_ITEM = 'Backstage passes to a TAFKAL80ETC concert';

const SULFURAS_ITEM = 'Sulfuras, Hand of Ragnaros';
const CONJURED_ITEM = 'Conjured Mana Cake';
const MAX_QUALITY = 50;

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  isProductMaxQualityReached(item) {
    return item.quality === MAX_QUALITY;
  }
  
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      const item = this.items[i];

      if (item.name == SULFURAS_ITEM) {
        continue;
      }

      if (item.name != AGED_BRIE_ITEM && item.name != BACKSTAGE_ITEM) {
        if (item.quality > 0) {
          var decrement = item.name != CONJURED_ITEM ? 1 : 2;
          item.decreaseQuality(decrement);
        }
      } else {
        if (!this.isProductMaxQualityReached(item)) {
          item.increaseQuality(1);
          if (item.name == BACKSTAGE_ITEM) {
            if (item.sellIn < 11) {
              if (item.quality < MAX_QUALITY) {
                item.increaseQuality(1);
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < MAX_QUALITY) {
                item.increaseQuality(1);
              }
            }
          }
        }
      }
      
      item.sellIn = item.sellIn - 1;
      
      if (item.sellIn < 0) {
        if (item.name != AGED_BRIE_ITEM) {
          if (item.name != BACKSTAGE_ITEM) {
            if (item.quality > 0) {
              item.decreaseQuality(1);
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < MAX_QUALITY) {
            item.increaseQuality(1);
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
