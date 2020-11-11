import { Component } from '@angular/core';
import {UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private utilsService: UtilsService) {}

  onDeconnecte() {
    this.utilsService.logOut();
  }

}
