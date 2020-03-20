import { Directive } from '@angular/core';
import { IconService } from './icon.service';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective {
  constructor(private iconService: IconService) {
    console.log(iconService);
  }
}
