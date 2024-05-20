import { Injectable } from '@angular/core';
import { Toast } from '../ProductData/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: Toast[] = [];

  constructor() { }

  add(message: string, duration: number = 2000) {
    this.toasts.push({ message, duration });
    setTimeout(() => this.remove(0), duration)
  }

  remove(index: number) {
    this.toasts.splice(index, 1)
  }
}
