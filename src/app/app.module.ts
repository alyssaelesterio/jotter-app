import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
