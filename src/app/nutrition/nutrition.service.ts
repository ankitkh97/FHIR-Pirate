import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
private url = 'http://hapi.fhir.org/baseDstu3/NutritionOrder/NutritionOrder-Patient-1157010/_history/1';

constructor(private http: HttpClient) { }

getNutrition() {
  return this.http.get(this.url);
}

}
