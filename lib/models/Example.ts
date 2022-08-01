import pkg from '@typegoose/typegoose';
const { getModelForClass, prop } = pkg;


export class ExampleSchema {
    @prop({ type: String })
    public exampleText?: string
}


export const ExampleModel = getModelForClass(ExampleSchema); 