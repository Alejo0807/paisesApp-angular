import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-captital/by-capital.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';

const routes: Routes = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country/:id',
        component: SeeCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}




