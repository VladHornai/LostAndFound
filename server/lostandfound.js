import { Data } from "/imports/api/data.js";
Meteor.methods({
  insertLostAndFoundItem: item => {
    Data.insert(item);
  },
  updateLostAndFoundItem: item => {
    Data.update(item);
  },
  removeLostAndFoundItem: item => {
    Data.remove(item);
  },
});
