import { Directive, HostBinding, Input, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { filter, tap } from 'rxjs/operators';
import { ColorState } from '../store/color';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appDynamicStyle]'
})
export class DynamicStyleDirective implements OnInit {
  @HostBinding('style') style;
  @Input() appDynamicStyle: string;

  transition = 'transition: all 0.3s ease-in-out;';

  accent: string;
  primary: string;
  text: string;

  constructor(
    private store: Store,
    private sanitizer: DomSanitizer,
    private elRef: ElementRef
  ) {

    this.store
      .select(ColorState.getColors)
      .pipe(
        tap(colors => this.setColors(colors))
      )
      .subscribe(() => this.setStyle());
  }

  getStyleDeclaration(): CSSStyleDeclaration {
    return this.elRef.nativeElement.style;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setColors(colors) {
    this.accent = colors.accent;
    this.primary = colors.primary;
    this.text = colors.text;
  }

  setStyle() {
    if (this.appDynamicStyle === undefined) {
      return;
    }

    const style = this.appDynamicStyle
      .replace('primary', this.primary)
      .replace('accent', this.accent)
      .replace('text', this.text);

    const a: any = this.sanitizer.bypassSecurityTrustStyle(
      `${this.getStyleDeclaration().cssText} ${style} ${this.transition}`
    );
    return this.style = a;
  }

}
