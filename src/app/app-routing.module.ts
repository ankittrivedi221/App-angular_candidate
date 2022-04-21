import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HaderComponent } from './components/hader/hader.component';
import { CandidateComponent } from './pages/candidate/candidate.component';
import {CreatecandidateComponent } from './pages/createcandidate/createcandidate.component';
import { UpdatecandidateComponent } from './updatecandidate/updatecandidate.component';


const routes: Routes = [
  
  { 
    path: 'candidate',
    component: CandidateComponent,
    pathMatch:'full',
  },
  { 
    path: 'hader',
    component:HaderComponent,
    pathMatch:'full',
  },
  { 
    path: 'createcandidate',
    component:CreatecandidateComponent,
    pathMatch:'full',
  },
  { 
    path: '',
    redirectTo:'candidate',
    pathMatch:'full',
  },
  { 
    path: 'updatecandidate/:id',
    component:UpdatecandidateComponent,
    pathMatch:'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
