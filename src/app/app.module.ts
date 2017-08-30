import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { MdSidenavModule } from '@angular/material';

import { AppRoutingModule } 	from './app-routing.module'
import { UserInterfaceModule } 	from './user-interface/user-interface.module';


import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        //MdSidenavModule,
        UserInterfaceModule,
	AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

