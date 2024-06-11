import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'appflow-hosted-live-updates',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: 'a1e44fba',
      channel: 'Production',
      autoUpdateMethod: 'none',
      maxVersions: 2,
      key: 'ionic_cloud_public.pem',
      // @ts-ignore
      strategy: 'differential'
    },
  }
};

export default config;
