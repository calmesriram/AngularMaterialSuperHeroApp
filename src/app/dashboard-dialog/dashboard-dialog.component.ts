import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.css']
})
export class DashboardDialogComponent implements OnInit {
 public specificdetails_array:any=[];
  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public dat: any) {    
    this.specificdetails_array.length = 0;
    this.specificdetails_array = dat;
    console.log(this.specificdetails_array)
   }

  ngOnInit() {   
  }
  test(){   
       this.dialog.closeAll();     }
}
