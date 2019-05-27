import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperitesComponent } from './experites/experites.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes: Routes = [];

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ExperienceComponent, ExperitesComponent, JoinComponent, ContactComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
