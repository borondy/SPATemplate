import { Component } from '@angular/core';
import { TestClient } from 'src/api/web-api';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public msgFromBackend: string;

  constructor(testClient: TestClient) {
    testClient.get().subscribe((s) => this.msgFromBackend = s, (e) => this.msgFromBackend = e);
  }
}

