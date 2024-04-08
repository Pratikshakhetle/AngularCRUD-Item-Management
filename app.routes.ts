import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'addItem',
        component: AddItemComponent
    },
    {
        path:'editItem/:id',
        component: EditItemComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRoutes{}