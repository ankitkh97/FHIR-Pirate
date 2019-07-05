import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './database.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { ClinicalComponent } from './clinical/clinical.component';
import { ImmunizationComponent } from './immunization/immunization.component';
import { AllergyComponent } from './allergy/allergy.component';
import { NutritionComponent } from './nutrition/nutrition.component';



// Material Components
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatTabsModule, MatIconModule, MatInputModule} from '@angular/material';






@NgModule({
   declarations: [
      AppComponent,
      PatientDetailComponent,
      AppointmentComponent,
      routingComponents,
      PatientDataComponent,
      ClinicalComponent,
      ImmunizationComponent,
      AllergyComponent,
      NutritionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      MatGridListModule,
      MatButtonModule,
      MatListModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatNativeDateModule,
      MatTabsModule,
       MatIconModule,
       MatInputModule,
       MatMomentDateModule,
       MatDatepickerModule
   ],
   providers: [
      DatabaseService,
      MatDatepickerModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
