import { Component, Input }                         from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router }    from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    title : string = "Title is unset";

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {  }

    ngOnInit(): void {
        fetchTitle();
    }

    fetchTitle(): void {
        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter((route) => route.outlet === "primary")
            .mergeMap((route) => route.data)
            .subscribe((data) => this.title = data['title']);
    }
}

