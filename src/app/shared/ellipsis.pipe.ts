import { Pipe, PipeTransform } from '@angular/core';

/**
 * Add three dots if length of string is exceeds maximum
 * The length of result string with exclude ellipsis is maximum_value-3
 *
 * Usage:
 *   value | ellipsis:53
 * Example:
 *   {{ 'Very long characters' | ellipsis:5}}
 *   formats to: Ve...
 *
 */
@Pipe({
    name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
    transform(value: string, maxchar: number): string {
        if (value.length <= maxchar) return value;

        let endIndex = maxchar - 3;
        return value.trim().slice(0, endIndex).concat('...');
    }
}

