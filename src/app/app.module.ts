// Components
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Pipes
import { DescriptionPipe } from './pipes/description.pipe';
import { ImagePipe } from './pipes/image.pipe';

// Redux
import { AppReducer } from './../redux/app.reducer';
import { PostEffects } from '../redux/post/post.effects';
import { SelectedEffects } from './../redux/selected/selected.effects';

// Services
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ImagePipe,
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot( AppReducer ),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([
      PostEffects,
      SelectedEffects
    ])
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
