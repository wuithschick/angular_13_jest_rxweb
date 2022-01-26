import {prop} from '@rxweb/reactive-form-validators';

export class TestFormModel {
  @prop()
  name: string | undefined;
}
