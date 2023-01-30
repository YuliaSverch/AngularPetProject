import { InjectionToken } from "@angular/core";

export class LocalStorage {
    constructor() {}

    addItemToStorage(item: string) {
        localStorage.setItem(item, item);
    }
}

export const LocalStorageToken = new InjectionToken<LocalStorage>('localStorage');
