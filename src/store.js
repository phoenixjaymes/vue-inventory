import { inventory } from './data/inventory';

export const store = {
  state: {
    inventoryData: inventory,
    currentInventory: inventory,
    sectionType: 'Home',
    invType: '',
    addFormMessage: '',
  },
  changeSection: function(sectionObj) {
    this.state.sectionType = sectionObj.section;
    this.state.invType = sectionObj.invType;
    this.clearFormMessage();
  },
  addItem: function(itemToAdd) {
    const oldLength = this.state.inventoryData.length;
    const newLength = this.state.inventoryData.push(itemToAdd);

    if (newLength > oldLength) {
      this.state.addFormMessage = 'Item added successfully';
    } else {
      this.state.addFormMessage = 'Unable to add item';
    }
  },
  clearFormMessage() {
    this.state.addFormMessage = '';
  }
};