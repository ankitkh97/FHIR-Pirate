import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { MedicationComponent } from './medication/medication.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { AllergyComponent } from './allergy/allergy.component';
import { ImmunizationComponent } from './immunization/immunization.component';

import { ClinicalComponent } from './clinical/clinical.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'PatientInfo', component: PatientDetailComponent},
  {path: 'AppointmentInfo', component: AppointmentComponent},
  {path: '', component: PatientDataComponent},
  // {path: '' , redirectTo: '/PatientId', pathMatch: 'full'},
  {path: 'ClinicalImpression', component: ClinicalComponent },
  {path: 'Immunization', component: ImmunizationComponent},
  {path: 'Allergy', component: AllergyComponent},
  {path: 'Nutrition', component: NutritionComponent},
  {path: 'Medication', component: MedicationComponent},
  {path: 'Conditions', component: ConditionsComponent},
  // {path: 'dashboard', component: AppHeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'medication', component: MedicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line: max-line-length
export const routingComponents = [ PatientDetailComponent, AppointmentComponent, PatientDataComponent, ClinicalComponent, ImmunizationComponent, AllergyComponent, NutritionComponent, MedicationComponent, ConditionsComponent, AppHeaderComponent, HomeComponent ];
