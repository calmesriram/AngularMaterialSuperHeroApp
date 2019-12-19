import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public baseurl ="https://akabab.github.io/superhero-api/api/all.json";
  constructor(public http:HttpClient) { }

  public async getallDetail():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.get(this.baseurl).subscribe(res =>{
        resolve(res)
      },err =>{
        resolve(err)
      })
    }).catch(e =>{
      console.log(e);
      return;
    })
  }
}
