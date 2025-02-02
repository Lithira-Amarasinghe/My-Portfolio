import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MoveDirection, ClickEvent, HoverEvent, OutMode, Container, Engine} from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { NgParticlesService } from "@tsparticles/angular";
import Typewriter from 'typewriter-effect'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lithira Amarasinghe';


  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

}
