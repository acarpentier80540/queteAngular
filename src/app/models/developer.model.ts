import { skill } from './skill.model';

export class developer  {
    constructor(
        public lastName : string,
        public firstName: string,
        public age : Number,
        public gender : string,
        public bio : string,
        public skills : skill[] 
        ) {}
}
