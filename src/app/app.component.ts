import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ ]
})
export class AppComponent {
    title = 'app';
    
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
    ) { }

    ngOnInit() : void {
        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter((route) => route.outlet === "primary")
            .mergeMap((route) => route.data)
            .subscribe((event) => this.titleService.setTitle(event['title']));
    }
    
}

