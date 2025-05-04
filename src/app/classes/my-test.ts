
/** decorating this class with my custom decorator */

import { myDecorator } from "./mydecorator";

@myDecorator({
  name: 'My Test Class',
  type: 'Class',
  description: 'Testing with metadata',
  numId: 1234
})
export class MyTest {
}
