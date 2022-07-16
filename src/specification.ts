export interface IValueType {
  name: string;
}

export interface IOptionSlot {
  names:string[];
  letters:string[];
  valueType:undefined|IValueType;
  description:string;
}

export interface ICommandSlot {
  names:string[];
  options:IOptionSlot[];
  arguments:IArgumentSlot[];
  description:string;
}

export interface IArgumentSlot{
  name:string[];
  spread:boolean;
  type:IValueType;
  optional:boolean;
}

export interface ISpecification{
  options:IOptionSlot[];
  commands:ICommandSlot[];
  argumentSlots:IArgumentSlot[];
}