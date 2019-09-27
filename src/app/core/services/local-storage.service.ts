import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    public constructor() {
    }

    public get(itemKey: string): any {
        return JSON.parse(localStorage.getItem(itemKey));
    }

    public set(itemKey: string, item: any): void {
        localStorage.setItem(itemKey, JSON.stringify(item));
    }
}
