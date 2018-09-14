import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "temers"
})
export class TemersPipe implements PipeTransform {
    transform(value: number, ...args: any[]) {
        var simbolo = '';

        if (args && args[0])
        {
            simbolo = '$'
        }

        return `${value} Temers${simbolo}`;
    }
}