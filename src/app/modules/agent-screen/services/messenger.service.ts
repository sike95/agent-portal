import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from 'src/app/app-config.module';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {


  socket: any;
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
  ) {
    this.socket = io(this.config.apiEndpoint, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: false,
  };

  getAllCustomers() {

    return this.http.get(
      `${this.config.apiEndpoint}/customers`,
      this.httpOptions
    ).pipe(
       catchError(this.handleError) // then handle the error
    );
  }

  getCustomerConversation(id: number) {
    return this.http.get(
      `${this.config.apiEndpoint}/customer/messages/${id}`,
      this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  recieve(){
    return new Observable((subscriber) => {
      this.socket.on('message', (data) => {
        subscriber.next(data);
      });
    });
  }

  listen(event: string) {
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    if (error.status === 401) {
      return throwError(error.error.message);
    }
    // return an observable with a user-facing error message
    return throwError('There is an issue with the network');
  }
}
