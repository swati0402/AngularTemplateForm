import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  postError=false
  postErrorMessage=""
  startDate=Date.now
  userRating=0
  maxRating=10
  isReadonly=false
  //susubscriptionType=["Monthly","Annual","Lifetime"]
  subscriptionType: any
  originalUserSettings:UserSettings={
    name:'',
    emailOffers:false,
    subscriptionType:'',
    interfaceStyle:'',
    notes:''
  };
  userSettings:UserSettings={...this.originalUserSettings};
  constructor(private dataService: DataService) { }
  onHttpError(errorResponse:any){
    console.log('error: ' +errorResponse)
    this.postError=true;
    this.postErrorMessage=errorResponse.error.message;

  }
  onSubmit(form: NgForm){
    if (form.valid){
      this.postError=false
    this.dataService.postUserSettings(this.userSettings).subscribe(
      result=>console.log('success: ' +result),
      error=> this.onHttpError(error)
    )
    }
    else{
      this.postError=true;
      this.postErrorMessage="Fix these errors";
    }
  }
  ngOnInit(): void {
    this.subscriptionType= this.dataService.getsubscriptionType();
    this.startDate=new Date().getDate;
  }

}
