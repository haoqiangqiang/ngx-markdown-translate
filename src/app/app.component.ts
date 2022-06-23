import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeIndex = 0
  navs = [
    {
      img: 'assets/icon-get-start.svg',
      title: 'GetStarted',
      link: 'get-started',
    },
    {
      img: 'assets/icon-cheat-sheet.svg',
      title: 'CheatSheet',
      link: 'cheat-sheet',
    },
    {
      img: 'assets/icon-syntax-highlight.svg',
      title: 'SyntaxHighlight',
      link: 'syntax-highlight',
    },
    {
      img: 'assets/icon-bindings.svg',
      title: 'Bindings',
      link: 'bindings',
    },
    {
      img: 'assets/icon-plugins.svg',
      title: 'Plugins',
      link: 'plugins',
    },
    {
      img: 'assets/icon-re-render.svg',
      title: 'Re-render',
      link: 're-render',
    },
    {
      img: 'assets/icon-problem.svg',
      title: 'Problem',
      link: 'problem',
    },
  ];

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) {}

  ChangeNav(index: number, link: string) {
    this.activeIndex = index;
    this._router.navigateByUrl(link);
  }

  ngOnInit(): void {

  }
}
