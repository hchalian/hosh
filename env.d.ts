declare namespace NodeJS {
  export interface ProcessEnv {
    RESEND_EMAIL_PATH: string;
    RESEND_API_KEY: string;
    SENDER_EMAIL: string;
    ENVRIONMENT: 'development' | 'production';
  }
}
