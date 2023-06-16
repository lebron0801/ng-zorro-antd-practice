import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props: Object) {
  console.log('开始启动angular', props);
}

export async function mount(props: any) {
  console.log('开始挂载angular', props);
  render();

  // 监听全局状态
  // props.onGlobalStateChange((state: any, prev: any) => {
  //   console.log('上一个状态', prev);
  //   console.log('当前状态', state);

  //   // if (state.portalApp.code != null && state.portalApp.code !== '') {
  //   //   console.log('我要处理自己的事啦');
  //   // }

  //   if (state.portalApp.getAuthCode) {
  //     state.portalApp.getAuthCode('PAIER').then((data: any) => {
  //       console.log('code', data);
  //     });
  //     // props.setGlobalState({ portalApp: { code: null, corpId: 'PAIER' } });
  //   }
  // }, true);
}

export async function unmount(props: Object) {
  console.log('开始卸载angular', props);
  // @ts-ignore
  app.destroy();
}
