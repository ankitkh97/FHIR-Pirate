import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConditionsService {
private url = 'http://hapi.fhir.org/baseDstu3/Condition/1969299/_history/1';
constructor(private http: HttpClient) { }
getConditions() {
  return this.http.get(this.url);
}

}
