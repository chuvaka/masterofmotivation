import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { TasksModule } from './tasks/tasks.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';

import { TreeViewComponent } from './tree-view/tree-view.component';

import { ReversePipe } from './shared/pipe/reverse.pipe';
import { RandomPipe } from './shared/pipe/random.pipe';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		HomeComponent,TasksComponent,TreeViewComponent,
		ReversePipe,
		RandomPipe
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		TasksModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
