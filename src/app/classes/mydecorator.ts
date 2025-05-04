/** creating a custom decorator */

interface Configuration{
  name: string,
  type: string,
  description: string
  numId: number
}

export function myDecorator(config: Configuration){
  console.log("Inside my custom decorator");
  return function(target: any){
    target.prototype.config = config;
  }
  //target.prototype.someData = 'Adding some data from the decorator';
}
