import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { UserComponent } from './user/user.component';
import { OrganizationComponent } from './organization/organization.component'

const mainRoute: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'organization', component: OrganizationComponent }
]

@NgModule({
    declarations:[],
    imports: [
        RouterModule.forRoot(mainRoute)
    ]
})
export class DirectionRouting {}