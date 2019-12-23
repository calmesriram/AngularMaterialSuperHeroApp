import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {MatDialog} from '@angular/material/dialog';
import { DashboardDialogComponent } from '../dashboard-dialog/dashboard-dialog.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { async } from 'q';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myControl = new FormControl();
  public options:any = [];
  filteredOptions: Observable<string[]>;
 public getallDetailarray:any=[];
 public getallDetailarray1:any=[1,2,3,4,5,6,7];
 public selectedArrayDetails:any=[];
 public filterarray:any=[];
  constructor(public Api:ApiService,public dialog: MatDialog) { }

  ngOnInit() {
    this.alldetails();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  public _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  openDialog(data) {
    console.log(data)
    // const dialogRef = this.dialog.open(DashboardDialogComponent);
    const dialogRef = this.dialog.open(DashboardDialogComponent,{
      data:data,
      width: '640px',disableClose: true 
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  openDialog1() {    
    const dialogRef = this.dialog.open(DashboardDialogComponent);    
  }
  alldetails(){
    this.options.length =0;
    this.getallDetailarray.length = 0;
    this.Api.getallDetail().then(res=>{
      this.getallDetailarray = res;
      // this.options = res;      
      res.forEach(async i => {        
        this.options.push(i.name);
      });

      // console.log(this.getallDetailarray,"array")
      // this.ownfilter(1);
    })
  }
  selecteditem(data){
    console.log(data,"selected")
    this.selectedArrayDetails.length=0;
    this.selectedArrayDetails = data;
    // console.log(this.selectedArrayDetails)
  }
  ownfilter(data){
    // console.log(data);
    this.getallDetailarray.filter((i)=>{
      if( i.id == data ||i.name == data || i.biography.fullName == data){
        this.selectedArrayDetails= i;
        this.openDialog(i);
        // console.log(this.selectedArrayDetails,"filter")
      }
    })
  }

  getByid(id){
    console.log(id,"get by id")
    this.Api.getallDetail_byid(id).then(res=>{
      console.log(res,"res of get by id")
      this.selectedArrayDetails= res;
    })
  }
  
}
