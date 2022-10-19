import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AntDesignModule } from './ant-design/ant-design.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule, AntDesignModule],
  exports: [FormsModule, HttpClientModule, AntDesignModule],
})
export class ShareModule {}
