import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QrcodePage } from './qrcode.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { QrcodePageRoutingModule } from './qrcode-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: QrcodePage }]),
    QrcodePageRoutingModule,
  ],
  declarations: [QrcodePage]
})
export class QrcodePageModule {}
