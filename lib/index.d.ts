import { Factory } from 'fbi';
import CommandBuild from './commands/build';
import CommandServe from './commands/serve';
import CommandInstall from './commands/install';
import TemplateVue from './templates/vue';
import TemplateReact from './templates/react';
export default class FactoryWeb extends Factory {
    id: string;
    description: string;
    commands: (CommandServe | CommandInstall | CommandBuild)[];
    templates: (TemplateVue | TemplateReact)[];
    execOpts: any;
}
