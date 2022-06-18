import { defineConfig } from 'dumi';

let base: string | undefined = '/lsbcc-ui';
let publicPath: string | undefined = '/lsbcc-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Lsbcc UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  webpack5: {},
  base,
  publicPath,
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/axnir/lsbcc-ui',
    },
  ],
});
