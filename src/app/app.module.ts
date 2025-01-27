import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NgxParticlesModule} from "@tsparticles/angular";
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { FloatingContactComponent } from './floating-contact/floating-contact.component';
import { ModButtonComponent } from './mod-button/mod-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProjectComponent,
    ProjectsComponent,
    FloatingContactComponent,
    ModButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParticlesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
