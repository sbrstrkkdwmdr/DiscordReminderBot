import Discord from 'discord.js';
import * as fs from 'fs';
import * as helper from '../helper';
import * as checks from '../tools/checks';
import * as commandTools from '../tools/commands';
import * as log from '../tools/log';
import { Command } from './command';

export class Crash extends Command {
    declare protected params: {};
    constructor() {
        super();
        this.name = 'Crash';
    }
    async execute() {
        await this.setParams();
        this.logInput(true);
        // do stuff
        this.ctn.content = 'executing crash command...';
        this.send();
        setTimeout(() => {
            log.stdout(`executed crash command by ${this?.commanduser?.id} - ${this?.commanduser?.username}`);
            process.exit(1);
        }, 1000);
    }
}

export class LeaveGuild extends Command {
    declare protected params: {
        guildId: string;
    };
    constructor() {
        super();
        this.name = 'LeaveGuild';
        this.params = {
            guildId: null
        };
    }
    async setParamsMsg() {
        this.params.guildId = this.input.args[0] ?? this.input.message?.guildId;
    }
    async setParamsInteract() {
        const interaction = this.input.interaction as Discord.ChatInputCommandInteraction;
    }

    async execute() {
        await this.setParams();
        this.logInput();
        let allowed = false;
        let success = false;
        // do stuff
        if (checks.isOwner(this.commanduser.id)) {
            allowed = true;
            const guild = helper.vars.client.guilds.cache.get(this.params.guildId);
            if (guild) {
                success = true;
                guild.leave();
            }
        }
        if (checks.isAdmin(this.commanduser.id, this.params.guildId) && !success) {
            allowed = true;
            const guild = helper.vars.client.guilds.cache.get(this.params.guildId);
            if (guild) {
                success = true;
                guild.leave();
            }
        }
        this.ctn.content =
            allowed ?
                success ?
                    `Successfully left guild \`${this.params.guildId}\`` :
                    `Was unable to leave guild`
                :
                'You don\'t have permissions to use this command';
        this.send();
    }
}

export class Prefix extends Command {
    declare protected params: {
        newPrefix: string;
    };
    constructor() {
        super();
        this.name = 'Prefix';
        this.params = {
            newPrefix: null
        };
    }
    async setParamsMsg() {
        this.params.newPrefix = this.input.args.join(' ');
    }

    async execute() {
        await this.setParams();
        this.logInput();
        // do stuff
        if (typeof this.params.newPrefix != 'string' || this.params.newPrefix.length < 1 || !(checks.isAdmin(this.commanduser.id, this.input.message?.guildId,) || checks.isOwner(this.commanduser.id))) {
            this.ctn.content = `The current prefix is \`${helper.vars.config.prefix}\``;
        } else {
            helper.vars.config.prefix = this.params.newPrefix;
            this.ctn.content = `Prefix set to \`${this.params.newPrefix}\``;
            const configpath = helper.vars.path.precomp + '/config/config.json'
            fs.writeFileSync(configpath, JSON.stringify(helper.vars.config, null, 1));
        }

        this.send();
    }
}