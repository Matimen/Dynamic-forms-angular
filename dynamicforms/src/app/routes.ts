import {Routes} from '@angular/router';
import {DynamicformComponent} from './components/dynamicform/dynamicform.component';

export const routes: Routes = [
    {path: '', component: DynamicformComponent},
    {path: '**', redirectTo: ''}
];

