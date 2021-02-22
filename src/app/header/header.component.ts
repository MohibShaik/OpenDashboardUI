import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public sticky = false;
  public elementPosition: any;
  @ViewChild('stickyMenu') menuElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  public handleScroll(): void {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }


}
