/*
 * @Description: 
 * @Version: 1.0
 * @Author: Starshipz
 * @Date: 2020-04-29 10:21:31
 * @LastEditTime: 2020-04-29 10:41:00
 */
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
