
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ResultComponent } from './pages/result/result.component';
import { AgeCriteriaComponent } from './pages/age-criteria/age-criteria.component';
import { StaffComponent } from './pages/staff/staff.component';
import { PtaComponent } from './pages/pta/pta.component';
import { StudentCouncilComponent } from './pages/student-council/student-council.component';
import { GeneralInfoComponent } from './pages/general-info/general-info.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { CocurricularComponent } from './pages/cocurricular/cocurricular.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { RulesComponent } from './pages/rules/rules.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NurseryAdmissionsComponent } from './pages/nursery-admissions/nursery-admissions.component';
import { AgmCoreModule } from '@agm/core';
import { StartComponent } from './pages/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResultComponent,
    AgeCriteriaComponent,
    StaffComponent,
    PtaComponent,
    StudentCouncilComponent,
    GeneralInfoComponent,
    AcademicsComponent,
    CocurricularComponent,
    FacilitiesComponent,
    AdmissionsComponent,
    AdministrationComponent,
    RulesComponent,
    ContactComponent,
    NurseryAdmissionsComponent,
    StartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZ3Ot49utrwQNdqfNcprAB6dy53TxLLpw'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
