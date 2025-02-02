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
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesProvideComponent } from './services-provide/services-provide.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProjectComponent,
    ProjectsComponent,
    FloatingContactComponent,
    ModButtonComponent,
    ContactComponent,
    IntroComponent,
    ServicesProvideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxParticlesModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
