import { IPatient } from './biodata';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  mymethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  public url: string;

constructor( private http: HttpClient) {
  this.mymethod$ = this.myMethodSubject.asObservable();
}

myMethod(data, value) {
  if ( value === 'HAPI/3.0/Patient/')
  { this.url = 'https://ehrlab-dynamicapi-optum-ehr-intlab.ocp-elr-core-nonprod.optum.com/ehrlab/' + value + data + '?_format=json';
// tslint:disable-next-line: max-line-length
 } else { this.url = 'https://ehrlab-dynamicapi-optum-ehr-intlab.ocp-elr-core-nonprod.optum.com/ehrlab/Epic/2.0/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB';
}

}

// getPatients(): Observable<IPatient[]> {

//   return this.http.get<IPatient[]>(this.url);

// }

getPatient() {
  return this.http.get(this.url);
}

}
