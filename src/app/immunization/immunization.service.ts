import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImmunizationService {
private url = 'http://hapi.fhir.org/baseDstu3/Immunization/1959853/_history/1';
constructor(private http: HttpClient) { }
getImmunization() {
  return this.http.get(this.url);
}

}
