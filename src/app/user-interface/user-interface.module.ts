import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterfaceComponent } from './user-interface.component';

// layout
import { NavSidebarComponent }  from './layout/nav-sidebar/nav-sidebar.component';
import { NavbarComponent }      from './layout/navbar/navbar.component';
import { FooterComponent }      from './layout/footer/footer.component';

@NgModule({
    declarations: [
        UserInterfaceComponent,
        NavSidebarComponent,
        NavbarComponent,   
        FooterComponent,   
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        UserInterfaceComponent,
    ],
    providers: [],
    bootstrap: []
})
export class UserInterfaceModule { }

