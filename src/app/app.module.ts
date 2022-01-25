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
    TAndCDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents:[
    TAndCDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
