import {IArgumentSlot,ICommandSlot,IOptionSlot,ISpecification,IValueType} from './specification'

class Specification {
  optionSlots: IOptionSlot[];
  argumentSlot:IArgumentSlot[];
  
  commandSlots:ICommandSlot[];

  constructor() {
    this.argumentSlot = [];
    this.optionSlots = [];
    
    this.commandSlots = [];
  }

  option() {
    
  }
}