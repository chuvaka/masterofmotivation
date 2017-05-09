import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  // { path: 'component-one', component: ComponentOne },
  // { path: 'component-two', component: ComponentTwo,
  //   children: [
  //     { path: '', redirectTo: 'child-one', pathMatch: 'full' },
  //     { path: 'child-one', component: ChildOne },
  //     { path: 'child-two', component: ChildTwo }
  //   ]
  // }
];

export const TasksRoutingProviders: any[] = [

];

export const TasksRouting = RouterModule.forRoot(routes);
