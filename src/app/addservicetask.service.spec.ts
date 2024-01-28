
import { of } from 'rxjs';
import { AddservicetaskService } from './addservicetask.service';

describe('AddservicetaskService', () => {
  let service: AddservicetaskService;
  let httpClientSpy : any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn
    }
   service = new AddservicetaskService(httpClientSpy)
  });

  it('should hit the get API once', () => {
    const res = "Hello jest service testing";
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getEmpTaskInfo();

    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });
});
