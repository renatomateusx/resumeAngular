import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  basicInformation: any = [
    {
      'about': 'I´m a Lauro de Freitas based Software Engineer.',
      'aboutmore': 'Front-End and Back-End developer, always looking for new technologies and get aprimorating knowledgment.',
      'brirthday': 'Dec 25, 1986',
      'email': 'renatomateusx@gmail.com',
      'phone': '55 71 9 9130-6561',
      'address': '84, José Leite - Lauro de Freitas/BA',
      'language': 'Portuguese (Native), English',
    }
  ];

  skillsData: any = [
    {
      'id': '0',
      'skill': 'ANGULAR',
      'progress': '85%'
    },
    {
      'id': '1',
      'skill': 'React',
      'progress': '75%'
    },
    {
      'id': '2',
      'skill': 'PHP\/CODEIGNITER',
      'progress': '90%'
    },
    {
      'id': '3',
      'skill': 'C#',
      'progress': '90%'
    },
    {
      'id': '4',
      'skill': 'JavaScript',
      'progress': '100%'
    },
    {
      'id': '5',
      'skill': 'MongoDB/SQL/MYSQL',
      'progress': '85%'
    },
    {
      'id': '6',
      'skill': 'Express',
      'progress': '80%'
    },
    {
      'id': '7',
      'skill': 'MVC',
      'progress': '100%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2010 - 2013',
      'education': 'Graduation',
      'stream': 'System Analysts',
      'institution': 'Jorge Amado'
    }
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': 'APRIL 2014 - TODAY',
      'organization': 'CAPGEMINI (SEFAZ)',
      'designation': 'Senior System Analysts',
      'details': 'SPED system, maintenance and development of a SPED system collections making integration with clients services to provide a better way to get results.'
    },
    {
      'id': '2',
      'from_to_month_year': 'JUN 2012 - APRIL 2014',
      'organization': 'IP3 Tecnologia',
      'designation': 'Web Developer III',
      'details': 'Maintenance and development of a charging system making integration with clients services to provide a better way to get results.'
    },
    {
      'id': '3',
      'from_to_month_year': 'MARCH 2010 - DECEMBER 2011',
      'organization': 'WA Sistemas',
      'designation': 'Developer',
      'details': 'ERP maintenance and development looking always to get quality on work.'
    }
  ];

  contactus(data: any): Observable<any> {
    const dataP = 'contactName=' + data.name +
                  '&contactEmail=' + data.email +
                  '&contactSubject=' + data.subject +
                  '&contactMessage=' + data.message;
    return this.http.post('http://curriculo.comercioparalelo.com/sendEmail.php', dataP);
    //return this.http.post('http://curriculo.comercioparalelo.com/sendEmail.php', dataP);
  }

  basic(): Observable<any> {
    return null;
    //return this.getProfileJSON();
  }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return null;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return null;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return null;
  }

  public getJSON(): Observable<any> {
    return this.http.get('https://renatomateusx.github.io/resume/public/profile.json');
  }
}
