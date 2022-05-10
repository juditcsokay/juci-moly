import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'olvasmanyaim', component: BookListComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BookListComponent,
    BookDetailComponent,
    BookItemComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
