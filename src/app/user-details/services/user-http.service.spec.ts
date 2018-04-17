import { TestBed, inject } from '@angular/core/testing';

import { UserHttpService } from './user-http.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserHttpService
      ]
    });
  });

  it('should be created', inject([UserHttpService], (service: UserHttpService) => {
    expect(service).toBeTruthy();
  }));
});
