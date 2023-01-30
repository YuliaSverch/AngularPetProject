import { InjectionToken } from '@angular/core';
import { AppConfigModel } from '../models/app-config.model';

export const constant = {
    AppName: "AppName",
    Version: "1.1",
    ApiUrl: "http://..."
}

export const ConstantToken = new InjectionToken<AppConfigModel>('constant');
