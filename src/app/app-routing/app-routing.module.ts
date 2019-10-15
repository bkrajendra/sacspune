import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { AboutComponent } from "../pages/about/about.component";
import { AdmissionsComponent } from '../pages/admissions/admissions.component';
import { AdministrationComponent } from '../pages/administration/administration.component';
import { AcademicsComponent } from '../pages/academics/academics.component';
import { CocurricularComponent } from '../pages/cocurricular/cocurricular.component';
import { RulesComponent } from '../pages/rules/rules.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { StaffComponent } from '../pages/staff/staff.component';
import { StudentCouncilComponent } from '../pages/student-council/student-council.component';
import { PtaComponent } from '../pages/pta/pta.component';
import { AgeCriteriaComponent } from '../pages/age-criteria/age-criteria.component';
import { NurseryAdmissionsComponent } from '../pages/nursery-admissions/nursery-admissions.component';
import { ResultComponent } from '../pages/result/result.component';
import { StartComponent } from '../pages/start/start.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admissions',
    component: AdmissionsComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  },
  {
    path: 'academics',
    component: AcademicsComponent
  },
  {
    path: 'cocurriculars',
    component: CocurricularComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'login',
    component: AboutComponent
  },
  {
    path: 'contactus',
    component: ContactComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'studentscouncil',
    component: StudentCouncilComponent
  },
  {
    path: 'pta',
    component: PtaComponent
  },
  {
    path: 'agecriteria',
    component: AgeCriteriaComponent
  },
  {
    path: 'nur',
    component: NurseryAdmissionsComponent
  },
  {
    path: 'other',
    component: AdmissionsComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'start',
    component: StartComponent
  }

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
