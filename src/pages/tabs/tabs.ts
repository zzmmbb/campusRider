import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'OrderPage';
  tab2Root = 'receiveOrderPage';
  tab3Root = 'InfoPage';
  tab4Root = 'LoginPage';

  constructor() {

  }
}
