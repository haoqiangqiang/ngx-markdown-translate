import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppBindingsComponent } from './pages/bindings/bindings.component';
import { AppCheatSheetComponent } from './pages/cheatSheet/cheat-sheet.component';
import { AppHomeComponent } from './pages/home/home.component';
import { AppPluginsComponent } from './pages/plugins/plugins.component';
import { AppProblemComponent } from './pages/problem/problem.component';
import { AppReRenderComponent } from './pages/reRender/re-render.component';
import { AppSyntaxHighlightComponent } from './pages/syntaxHighlight/syntax-highlight.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full',
  },
  {
    path: 'get-started',
    component: AppHomeComponent,
  },
  {
    path: 'cheat-sheet',
    component: AppCheatSheetComponent,
  },
  {
    path: 'syntax-highlight',
    component: AppSyntaxHighlightComponent,
  },
  {
    path: 'bindings',
    component: AppBindingsComponent,
  },
  {
    path: 'plugins',
    component: AppPluginsComponent,
  },
  {
    path: 're-render',
    component: AppReRenderComponent,
  },
  {
    path: 'problem',
    component: AppProblemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
