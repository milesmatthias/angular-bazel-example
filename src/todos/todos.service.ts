import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Todo } from './todo';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class TodosService {
  todosUrl = 'api/todos';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('TodosService');
  }

  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
      .pipe(
        catchError(this.handleError('getTodos', []))
      );
  }

  addTodo (todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
      .pipe(
        catchError(this.handleError('addTodo', todo))
      );
  }

  deleteTodo (id: number): Observable<{}> {
    const url = `${this.todosUrl}/${id}`; // DELETE api/todos/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteTodo'))
      );
  }

  updateTodo (todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.todosUrl, todo, httpOptions)
      .pipe(
        catchError(this.handleError('updateTodo', todo))
      );
  }
}

