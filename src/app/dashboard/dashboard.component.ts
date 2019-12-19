import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public getallDetailarray:any=[];
 public getallDetailarray1:any=[1,2,3,4,5,6,7];
 public selectedArrayDetails:any=[];
  constructor(public Api:ApiService) { }

  ngOnInit() {
    this.alldetails();
  }
  
  alldetails(){
    this.getallDetailarray.length = 0;
    this.Api.getallDetail().then(res=>{
      this.getallDetailarray = res;
      console.log(this.getallDetailarray,"array")
    })
  }
  selecteditem(data){
    this.selectedArrayDetails.length=0;
    this.selectedArrayDetails = data;
    console.log(this.selectedArrayDetails)
  }
}
