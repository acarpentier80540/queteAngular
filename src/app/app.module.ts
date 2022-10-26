import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ROUTES } from './app.routes';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent,
    DeveloperComponent,
    SkillComponent,
    CreateOnomatopiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
