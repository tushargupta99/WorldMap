import { Pipe, PipeTransform } from "@angular/core";
import { HttpService } from "./http.service";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  constructor(public http: HttpService) {}
  transform(value: any, searchtext: string): any {
    if (!searchtext) return value;
    return value.filter(it => {
      let optionalData = it.name;
      return optionalData.toLowerCase().includes(searchtext.toLowerCase());
    });
  }
}
