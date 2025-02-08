import {AfterContentInit, AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Container, Engine, MoveDirection, OutMode} from "@tsparticles/engine";
import {NgParticlesService} from "@tsparticles/angular";
import {loadFull} from "tsparticles";
import {animate, style, transition, trigger} from "@angular/animations";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(50px)'}),
        animate('1000ms ease-out', style({opacity: 1, transform: 'translateY(0)'})),
      ]),
    ]),
  ]
})
export class IntroComponent implements OnInit, AfterViewInit, AfterContentInit {
  id = "tsparticles";
  isVisible: boolean = false;
  /* or the classic JavaScript object */
  public particlesOptions: any = {
    background: {
      color: {
        value: "#125acb",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 150,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {min: 1, max: 5},
      },
    },
    detectRetina: true,
  };
  isBrowser: boolean = false;

  constructor(private readonly ngParticlesService: NgParticlesService,
              @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  navigateTo(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer'); // Opens in a new tab
  }

  ngOnInit(): void {
  }

  particlesLoaded(container: Container): void {
    console.log(container);

  }

  ngAfterViewInit(): void {


    if(this.isBrowser) {
      this.ngParticlesService.init(async (engine: Engine) => {
        console.log(engine);

        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        // await loadSlim(engine);
      });
    }
  }


  downloadCV() {
    const fileUrl = 'cv.pdf'; // Adjust the path if needed
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Lithira-Amarasinghe.pdf'; // Set the download filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  ngAfterContentInit(): void {
    if(isPlatformBrowser(this.platformId)){
        this.isVisible = true;  // After a short delay, make the element visible
    }
  }
}
