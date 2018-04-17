import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const addresses = [
      {
        "id": 1,
        "address": "1607 23rd Street NW, Washington, DC 20008"
      },
      {
        "id": 2,
        "address": "664 Dickens Road, Lilburn, Georgia 30047"
      },
      {
        "id": 3,
        "address": "9520 Faires Farm Road, Charlotte, NC 28213"
      },
      {
        "id": 4,
        "address": "526 Superior Avenue, Suite 1255, Cleveland, OH 44114"
      },
      {
        "id": 5,
        "address": "2312 Dorrington Dr., Dallas, TX 75228"
      },
      {
        "id": 6,
        "address": "2026 Scott Street, Hollywood, FL 33020"
      },
      {
        "id": 7,
        "address": "318 Canino Road, Houston, TX 77076"
      },
      {
        "id": 8,
        "address": "21st 38th Street, New York, NY 10016"
      },
      {
        "id": 9,
        "address": "Massachusetts Avenue, Cambridge, MA 02139"
      },
      {
        "id": 10,
        "address": "1907 Spruce Street, Philadelphia, PA 19103-5732"
      },
      {
        "id": 11,
        "address": "Michigan Avenue, Suite 1170, Chicago, IL 60611"
      },
      {
        "id": 12,
        "address": "7280 N. Caldwell Avenue, Niles, IL 60714"
      },
      {
        "id": 13,
        "address": "Woodward Avenue, Suite 300, Detroit, MI 48226"
      },
      {
        "id": 14,
        "address": "1250 East Moore Lake Drive, Suite 242, Minneapolis (Fridley), MN 55432"
      }
    ];
    return { addresses };
  }

}
