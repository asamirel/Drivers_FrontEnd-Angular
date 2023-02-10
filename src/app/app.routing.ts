import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDriverComponent } from './create-driver/create-driver.component';
import { ListDriverComponent } from './list-driver/list-driver.component';
import { DeleteDriverComponent } from './delete-driver/delete-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'create-driver',
    component: CreateDriverComponent,
  },
  {
    path: 'update-driver',
    component: UpdateDriverComponent,
  },
  {
    path: 'delete-driver',
    component: DeleteDriverComponent,
  },
  {
    path: 'list-drivers',
    component: ListDriverComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }