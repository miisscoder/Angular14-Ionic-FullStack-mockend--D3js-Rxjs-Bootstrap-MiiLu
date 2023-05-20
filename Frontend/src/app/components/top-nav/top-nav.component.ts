import { Component, Input,Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
 
@Component({
    selector: 'app-top-nav',
    templateUrl: 'top-nav.component.html',
    styleUrls: ['top-nav.component.scss'],
})
export class TopNavComponent {

    // right: save, multi-1, back-2, back
    @Input() right = '';
    // left: menu, back
    @Input() left = '';
    @Input() link = '';
    @Input() linkTitle = '';

    @Output() save = new EventEmitter<void>();
     
    constructor(
        private menu: MenuController,
        private _location: Location
    ) { 
    }

    /**
     * open menu
     * */
    menuOpen() {
        this.menu.enable(true, 'side');
        this.menu.open('side');
    }
     

    /**
     * back
     * */
    onBack() {
        this._location.back();
    }

    /**
     * save 
     * */
    onSave() {
        this.save.emit(); 
    }
}
