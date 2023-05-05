import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import {
  instanceToPlain,
  plainToClass,
  plainToInstance,
} from 'class-transformer';
import { Observable, map } from 'rxjs';

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    console.log('Request log from the serialize interceptor', request.url);

    return next.handle().pipe(
      // To get access to the response data and be able to modify we can use the map rxjs operator which takes in the original data, transforms it and then must return something back
      map((data) => {
        console.log('This is the response data from the map function,', data);

        console.log('Transformed data,', instanceToPlain(data));

        return instanceToPlain(data);
      }),
    );
  }
}
