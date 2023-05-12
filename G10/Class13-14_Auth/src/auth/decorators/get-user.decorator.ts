import { ExecutionContext, createParamDecorator } from "@nestjs/common";

// Custom Decorator to be used in the routes to get the user data from the request object
export const GetUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    return request.user;
  }
);
