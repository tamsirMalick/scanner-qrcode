import {Component} from '@angular/core';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    public showCamera = false;
    public textScanned = '';
    public myQrCode: string = null;

    constructor(
        private qrScanner: QRScanner,
        public alertController: AlertController
    ) {
    }

    scanCode() {
        this.showCamera = true;
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // start scanning
                    console.log('Scan en cours...' + JSON.stringify(status));
                    const scanSub = this.qrScanner.scan().subscribe((text: any) => {
                        console.log('Scanned something', text.result);
                        this.textScanned = text.result;
                        this.qrScanner.hide();
                        scanSub.unsubscribe();
                        this.showCamera = false;
                    });
                } else if (status.denied) {
                } else {
                }
            })
            .catch((e: any) => console.log('Error is', e));
    }

}
