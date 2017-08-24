import { Component, Input } from '@angular/core';

import { ActivatedRoute, Router, RouterState } from '@angular/router';

import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    title : string = "Title is unset";

    constructor(private titleService: Title) {  }

    ngDoCheck(): void {
        this.title = this.titleService.getTitle();
    }

}

