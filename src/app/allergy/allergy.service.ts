import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {
private url = 'http://hapi.fhir.org/baseDstu3/AllergyIntolerance/1969364/_history/1?_format=json';
constructor(private http: HttpClient) { }

getAllergy() {
  console.log(this.http.get(this.url));
  return this.http.get(this.url);
}

}
