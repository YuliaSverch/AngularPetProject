import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  userConfig: Partial<ConfigModel> = {
    id: 1,
    login: "user",
    email: "user1@gmail.com"
  }

  constructor() {}

  setConfig(newConfig: Partial<ConfigModel>) {
    this.userConfig = { ...this.userConfig, ...newConfig};
  }

  setConfigProperty(key: keyof ConfigModel, value: any)
  {
    this.userConfig[key] = value;
  }

  getConfig() {
    return this.userConfig;
  }
}
