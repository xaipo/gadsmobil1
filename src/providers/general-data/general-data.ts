import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the GeneralDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralDataProvider {

  constructor(public http: HttpClient) {
  //  console.log('Hello GeneralDataProvider Provider');
  }
  load() {

      // don't have the data yet
    return new Promise(resolve => {
       this.http.get('http://192.168.1.17:3000/api/parroquia')
          .subscribe(data => {
         //  console.log('my data: ', data[0]);
            resolve(data);
          });
        });

  }
}
