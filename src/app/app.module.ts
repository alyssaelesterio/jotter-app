import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { MainSectionComponent } from './home/main-section/main-section.component';
import { FeaturesComponent } from './home/features/features.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginEnrollComponent } from './access/login-enroll/login-enroll.component';
import { LoginComponent } from './access/login-enroll/login/login.component';
import { EnrollComponent } from './access/login-enroll/enroll/enroll.component';
import { ForgotPassComponent } from './access/forgot-pass/forgot-pass.component';
import { VerificationComponent } from './access/verification/verification.component';
import { ResetPassComponent } from './access/reset-pass/reset-pass.component';
import { VerifyComponent } from './access/verification/verify/verify.component';

import { TAndCDialogComponent } from './access/login-enroll/t-and-c-dialog/t-and-c-dialog.component';
import { SuccessFailComponent } from './modal/success-fail/success-fail.component';

import { UserComponent } from './main/user/user.component';
import { UserNavComponent } from './main/account/user-nav/user-nav.component';
import { ChangeComponent } from './main/account/change/change.component';
import { EmailChangeComponent } from './main/account/change/email-change/email-change.component';
import { PassChangeComponent } from './main/account/change/pass-change/pass-change.component';

import { NotebooksComponent } from './main/notebooks/notebooks.component';
import { NotebookComponent } from './main/notebooks/notebook/notebook.component';

import { AllNotesComponent } from './main/all-notes/all-notes.component';
import { NoteComponent } from './main/all-notes/note/note.component';
import { FavoritesComponent } from './main/all-notes/favorites/favorites.component';
import { NoteFilterComponent } from './main/nbfx/note-filter/note-filter.component'

import { NbToolsComponent } from './main/nbfx/nb-tools/nb-tools.component';
import { CreateditComponent } from './main/nbfx/nb-tools/createdit/createdit.component';
import { DeleteComponent } from './main/nbfx/nb-tools/delete/delete.component';

import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MainSectionComponent,
    FeaturesComponent,
    ContactUsComponent,
    FooterComponent,
    LoginEnrollComponent,
    LoginComponent,
    EnrollComponent,
    ForgotPassComponent,
    VerificationComponent,
    ResetPassComponent,
    VerifyComponent,
    UserComponent,
    SuccessFailComponent,
    TAndCDialogComponent,
    UserNavComponent,
    ChangeComponent,
    EmailChangeComponent,
    PassChangeComponent,
    NotebooksComponent,
    NotebookComponent,
    AllNotesComponent,
    NoteComponent,
    FavoritesComponent,
    NoteFilterComponent,
    NbToolsComponent,
    CreateditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents:[
    SuccessFailComponent,
    TAndCDialogComponent,
    ChangeComponent,
    NbToolsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
