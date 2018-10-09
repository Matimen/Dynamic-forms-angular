import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FormlyMaterialModule} from '@ngx-formly/material';

@NgModule({
    declarations: [
        AppComponent,
        DynamicformComponent,
        NavComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
        FormlyModule.forRoot(),
       FormlyBootstrapModule,
        //FormlyMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
