import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { ListItemSlidingComponent } from './list-item-sliding.component';
import { ListItemSlidingCardComponent } from './list-item-sliding-card/list-item-sliding-card.component';

@NgModule({
  declarations: [ListItemSlidingComponent, ListItemSlidingCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule
  ],
  exports: [
    ListItemSlidingComponent 
  ]
})
export class ListItemSlidingModule { }
