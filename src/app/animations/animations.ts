import {animate, animation, style} from "@angular/animations";

export const fadeInAnimation = animation([
  style({opacity:0}),
  animate(2000,style({opacity:1}))
]);
