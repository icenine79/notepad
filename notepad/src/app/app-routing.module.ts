import { RegisterComponent } from './app-components/register/register.component';
import { LoginComponent } from './app-components/login/login.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const notepad = ()=> import('./modules/notepad/notepad.module').then(n=>n.NotepadModule);

const routes: Routes = [
  {path:'', component:ShellComponent,
children:[
  {path:'home', loadChildren:notepad},
  {path:'', redirectTo:'home', pathMatch:'full'}
]},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
