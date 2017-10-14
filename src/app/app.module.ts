import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
} from '@angular/material';

import { FilmsService } from './services/films.service';

import { AppComponent } from './app.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { SoonComponent } from './components/soon/soon.component';

@NgModule({
  declarations: [
    AppComponent,
    BillboardComponent,
    CardComponent,
    HeaderComponent,
    SoonComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [
    FilmsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
