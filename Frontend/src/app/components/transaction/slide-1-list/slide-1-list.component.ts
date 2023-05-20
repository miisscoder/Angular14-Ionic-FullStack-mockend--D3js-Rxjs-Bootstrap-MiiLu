import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITransactionIncomeSpendItem } from '../../../models/transactions'; 
import * as _ from 'lodash';
import { getIconName } from '../../../utils/common.util';

@Component({
    selector: 'app-slide-1-list',
    templateUrl: 'slide-1-list.component.html',
    styleUrls: ['slide-1-list.component.scss'],
})
export class Slide1ListComponent {
    @Input() data?: ITransactionIncomeSpendItem[]; 
    @Output() row: EventEmitter<string> = new EventEmitter<string>();

    constructor( 
    ) {
    }

    columns = [
        {
            title: 'category', prop: 'category', sort: true,
            sortDirection: 'asc'
        },
        {
            title: 'percent', prop: 'percent', sort: false,
            sortDirectionS: 'asc'
        },
        {
            title: 'amount', prop: 'amount', sort: true,
            sortDirection: 'asc'
        }
    ];

    /**
     * sort table column
     * @param title column name 
     * @param sortable
     */
    onSort(title: string, sortable: boolean): void {
        if (!sortable) {
            return;
        }
        let index = -1;
        for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i].title === title) {
                index = i;
                break;
            }
        }
        const s = _.sortBy(this.data, [title]); 
        if (this.columns[index]['sortDirection'] === 'asc') {
            this.columns[index]['sortDirection'] = 'desc';
            this.data = _.reverse(s);
        } else {
            this.columns[index]['sortDirection'] = 'asc';
            this.data = _.clone(s);
        } 

    }


    /**
     * click row
     * @param category
     */
    onClickRow(category: string): void {
        this.row.emit(category); 
    }

    /**
    * 'Rent & Utilities' => 'rent-utilities'
    * @param type 
    */
    getIconName(item: string): string {
        return getIconName(item);
    }
} 
