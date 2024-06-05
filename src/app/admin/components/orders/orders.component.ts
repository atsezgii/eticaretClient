import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../shared/base.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent extends BaseComponent implements OnInit{

  constructor(spinner:NgxSpinnerService) {
    super(spinner);

  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    console.log("spinner")
  }

}

