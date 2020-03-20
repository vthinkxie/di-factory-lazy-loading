import { ModuleWithProviders, NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICON_TOKEN } from './icon.token';
import { IconDirective } from './icon.directive';
import { IconService } from './icon.service';

@NgModule({
  declarations: [IconDirective],
  exports: [IconDirective],
  imports: [CommonModule]
})
export class IconModule {
  static forRoot(icons: string[]): ModuleWithProviders<IconModule> {
    return {
      ngModule: IconModule,
      providers: [
        IconService,
        {
          provide: ICON_TOKEN,
          useValue: icons
        }
      ]
    };
  }

  static forChild(icons: string[]): ModuleWithProviders<IconModule> {
    return {
      ngModule: IconModule,
      providers: [
        {
          provide: IconService,
          useFactory: (parent: IconService) => {
            if (parent) {
              parent.addToken(icons);
              return parent;
            } else {
              throw new Error('parent must have for Root');
            }
          },
          deps: [[IconService, new SkipSelf(), new Optional()]]
        }
      ]
    };
  }
}
