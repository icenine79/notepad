import { trigger, transition, animate, style } from "@angular/animations";

export const Fader = {
  animations: [
    trigger("fade", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
};
export const FaderNode = {
  animations: [
    trigger("fadeNode", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(4000, style({ opacity: 1 }))
      ])
    ])
  ]
};
