import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { HaderComponent } from './components/hader/hader.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import {MatTableModule} from '@angular/material/table'; 
import{HttpClientModule} from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CandidateComponent } from './pages/candidate/candidate.component';
import { CreatecandidateComponent } from './pages/createcandidate/createcandidate.component'; 
import { UpdatecandidateComponent } from './updatecandidate/updatecandidate.component';
import { CandidateService } from './service/candidate.service';
import { FiltercandidateComponent } from './pages/filtercandidate/filtercandidate.component';
import {  MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HaderComponent,
    FooterComponent,
    CreatecandidateComponent,
    UpdatecandidateComponent,
    FiltercandidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSlideToggleModule,
  
    

  ],
  exports : [],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
