import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { ComponentOneComponent } from './component-one/component-one.component';

@NgModule({
  declarations: [
    ComponentOneComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ComponentOneComponent],
  providers: []
})
export class TasksModule { }
