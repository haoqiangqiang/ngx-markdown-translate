import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppCheatSheetComponent } from './pages/cheatSheet/cheat-sheet.component';
import { AppHomeComponent } from './pages/home/home.component';
import { AppPluginsComponent } from './pages/plugins/plugins.component';
import { AppProblemComponent } from './pages/problem/problem.component';
import { AppReRenderComponent } from './pages/reRender/re-render.component';
import { AppSyntaxHighlightComponent } from './pages/syntaxHighlight/syntax-highlight.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCheatSheetComponent,
    AppHomeComponent,
    AppPluginsComponent,
    AppProblemComponent,
    AppReRenderComponent,
    AppSyntaxHighlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
