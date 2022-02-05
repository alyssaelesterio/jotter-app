import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginEnrollComponent } from './access/login-enroll/login-enroll.component';
import { EnrollComponent } from './access/login-enroll/enroll/enroll.component';
import { VerificationComponent } from './access/verification/verification.component';
import { ForgotPassComponent } from './access/forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './access/reset-pass/reset-pass.component';

import { UserComponent } from './main/user/user.component';
import { NotebooksComponent } from './main/notebooks/notebooks.component';
import { AllNotesComponent } from './main/all-notes/all-notes.component';
import { FavoritesComponent } from './main/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginEnrollComponent },
  { path: 'register', component: EnrollComponent,
    data : {
      onManualRedirect: true
    },
  },
  { path: 'verify', component: VerificationComponent },
  { path: 'forgot', component: ForgotPassComponent },
  { path: 'reset', component: ResetPassComponent },
  { path: 'user', component: UserComponent,
    children: [
      { path: 'notebooks', component: NotebooksComponent },
      { path: 'notes', component: AllNotesComponent },
      { path: 'favorites', component: FavoritesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
