import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClinicalService {
private url = 'http://hapi.fhir.org/baseDstu3/ClinicalImpression/1537304/_history/1';

constructor(private http: HttpClient) { }

getClinical() {

  return this.http.get(this.url);

}

}
