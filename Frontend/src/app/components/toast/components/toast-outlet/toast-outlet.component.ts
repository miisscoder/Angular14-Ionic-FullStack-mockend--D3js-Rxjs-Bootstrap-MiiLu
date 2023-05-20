import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { ToastService } from '../../service/toast.service';
import { RandomUtil } from 'src/app/utils/random.util';

@Component({
  selector: 'app-toast-outlet',
  templateUrl: './toast-outlet.component.html',
  styleUrls: ['./toast-outlet.component.scss']
})
export class ToastOutletComponent implements OnInit {
  /**
   * view container reference to create inner contents dynamically
   */
  @ViewChild('container', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef | undefined;

  /**
   * generate random key for outlet
   */
  id = RandomUtil.key();

  constructor(
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this._registerOutlet();
  }

  /**
   * register current outlet
   */
  private _registerOutlet(): void {
    this.toastService.registerOutlet(this);
  }
}
