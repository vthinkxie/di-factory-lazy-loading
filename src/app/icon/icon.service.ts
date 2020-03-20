import { Inject, Injectable } from '@angular/core';
import { ICON_TOKEN } from './icon.token';

@Injectable()
export class IconService {
  addToken(token: string[]) {
    this.token = [...this.token, ...token];
  }
  constructor(@Inject(ICON_TOKEN) public token: string[]) {}
}
