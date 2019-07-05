import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private url = 'http://hapi.fhir.org/baseDstu3/MedicationRequest/1963686?_format=json';
  private url2 = 'http://hapi.fhir.org/baseDstu3/Organization/1963699?_format=json';

constructor(private http: HttpClient) { }

getMedication() {
  return this.http.get(this.url);
}

getOrganisation() {
  return this.http.get(this.url2);
}

}
