import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiURL + '/api/short';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MSK-URL';
  public shortURL: string;

  constructor(private http: HttpClient) {}

  submitURL(link: string): void {
    const longURL = {
      url: link,
    };

    this.http
      .post<{ shortURL: string }>(BACKEND_URL, longURL)
      .subscribe((response) => {
        this.shortURL = response.shortURL;

        console.log(this.shortURL);
      });
  }
}
