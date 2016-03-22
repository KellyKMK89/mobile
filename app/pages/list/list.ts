import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  bars: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['beer','restaurant','pint','wine'];

    this.bars = [
        "Woodshed Smokehouse",
        "Khandallah Trading Co",
        "Miramar Gasworks",
        "Black Stag",
        "The Co-Op Whitby",
        "Brew'd: Eastbourne",
        "Brew'd: Island Bay",
        "Brew'd: Boulcott",
        "Bethel Woods",
        "Head Office",
        "Coene's Provisions",
        "Port Nicholson Yacht Club",
        "One Fat Bird",
        "The Long Room",
        "Trentham Mess hall",
        "Munchen"];

    this.items = [];
    for(let i = 1; i < 12; i++) {
        this.items.push({
          title: this.bars[i],
          note: 'Kitchen & Bar',
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
    }
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
}
