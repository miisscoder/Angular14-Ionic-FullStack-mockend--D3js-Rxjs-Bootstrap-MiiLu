import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; 
import { MenuController } from '@ionic/angular'; 

@Component({
    selector: 'app-blank',
    templateUrl: 'blank.page.html',
    styleUrls: ['blank.page.scss'],
})
export class BlankPage implements OnInit { 
    constructor(
        private menu: MenuController) {
    }

    ngOnInit() { }

    menuOpen() {
        this.menu.enable(true, 'side');
        this.menu.open('side');
    }

   
}
