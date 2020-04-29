/*
 * @Description: 
 * @Version: 1.0
 * @Author: Starshipz
 * @Date: 2020-04-29 10:39:40
 * @LastEditTime: 2020-04-29 10:45:24
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
   
  ]
})
export class ShareModule { }
