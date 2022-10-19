import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';

import { IconsProviderModule } from '../../icons-provider.module';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [CommonModule, NzButtonModule, IconsProviderModule],
  exports: [NzButtonModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class AntDesignModule {}
