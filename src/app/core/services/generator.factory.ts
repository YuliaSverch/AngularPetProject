import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GeneratedString = new InjectionToken<string>('generated.random.string');

export function GeneratorFactory(n: number): (generatorService : GeneratorService) => string {
  return (generatorService : GeneratorService) : string => generatorService.generate(n);
}
