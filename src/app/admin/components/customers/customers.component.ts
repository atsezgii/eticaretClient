import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../shared/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent extends BaseComponent implements OnInit{

  constructor(spinner:NgxSpinnerService) {
    super(spinner);

  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallCircus);
    console.log("spinner")
  }

}
