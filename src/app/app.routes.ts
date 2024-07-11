import { Routes } from '@angular/router';
import {LoginFormComponent} from "./shared/login-form/login-form.component";
import {RegistrationPageComponent} from "./user-interface/registration-page/registration-page.component";
import {ClientListPageComponent} from "./shared/list-page/client-list-page/client-list-page.component";
import {AdminListPageComponent} from "./shared/list-page/admin-list-page/admin-list-page.component";
import {AuthGuard} from "./data/guards/auth.guard";
import {AdminGuard} from "./data/guards/admin.guard";
import {EditClientPageComponent} from "./shared/create-edit-form/edit-client-page/edit-client-page.component";
import {EditAdminPageComponent} from "./shared/create-edit-form/edit-admin-page/edit-admin-page.component";
import {CreatePageComponent} from "./shared/create-edit-form/create-page/create-page.component";

export const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  {path: "login", component: LoginFormComponent},
  {path: "registration", component: RegistrationPageComponent},
  //
  { path:'client/list', component:ClientListPageComponent, canActivate:[AuthGuard] },
  { path:'client/list/new', component:CreatePageComponent, canActivate:[AuthGuard] },
  { path:'clientEdit/:id', component:EditClientPageComponent, canActivate:[AuthGuard] },
  { path:'admin/list', component:AdminListPageComponent, canActivate:[AdminGuard] },
  { path:'adminEdit/:id', component:EditAdminPageComponent, canActivate:[AdminGuard] },
];
