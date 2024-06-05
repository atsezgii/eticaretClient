import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../shared/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent implements OnInit{
  constructor(private alertify:AlertifyService, spinner:NgxSpinnerService){
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }
  m(){
    this.alertify.message("Merhaba", {
      messageType:MessageType.Success,
      delay : 5,
      position : Position.TopRight
    })
  }
  d(){
    this.alertify.dismissAll()
  }
}
