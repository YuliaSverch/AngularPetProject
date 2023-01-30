import { Component, OnInit, Optional, Inject } from '@angular/core';
import { AppConfigModel } from 'src/app/core/models/app-config.model';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { constant, ConstantToken } from 'src/app/core/services/constant.token';
import { GeneratedString, GeneratorFactory } from 'src/app/core/services/generator.factory';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { LocalStorage, LocalStorageToken } from 'src/app/core/services/local-storage.service';

enum Category {
  A,
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    { provide: ConstantToken, useValue: constant},
    { provide: GeneratedString, useValue: GeneratorFactory(2), deps: [GeneratorService]},
    { provide: LocalStorageToken, useValue: LocalStorage}
  ]
})

export class FirstComponent implements OnInit {
  name!: string;
  description!: string;
  price!: number;
  category!: Category;
  isAvailable: Boolean = false;

  constructor(
    @Optional() public configOptions: ConfigOptionsService,
    @Optional() @Inject(ConstantToken) public constant: AppConfigModel,
    @Optional() @Inject(GeneratedString) public genString: string,
    @Optional() @Inject(LocalStorageToken) public locStorage: LocalStorage,
    @Optional() public generatorService: GeneratorService
  ) {}

  ngOnInit() {
    this.name = "Name";
    this.description = "Some";
    this.price = 5;
    this.category = 0;
    this.isAvailable = true;
  }

}
