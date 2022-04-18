import { Directive , ElementRef, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class UserTheme implements OnInit {
  constructor(private colorChange: ElementRef) {}

  ngOnInit(): void {}
  @HostListener('onmouseenter') mouseHovers() {
this.toHighlight('gold');
  }

  @HostListener('onmouseenter') mouseLeaves() {
    this.toHighlight('green');
  }
  toHighlight(color: string): void {
    this.colorChange.nativeElement.style.backgroundColor=color;
  }
}
