import * as bottypes from '../types/bot';

import * as buttonsObjs from './buttons';

const range = (key: string): string[] => {
    const temp = ['>foo', '<foo', 'foo..bar', '!foo'];
    const temp2: string[] = [];
    temp.forEach(t => temp2.push('-' + key + ' ' + t));
    return temp2;
};

/**
 * <> is required
 * [] is optional
 */

const user: bottypes.commandInfoOption = {
    name: 'user',
    type: 'string/integer/user mention',
    required: false,
    description: 'The user to show',
    format: ['foo', '@foo', '-u foo', '-user foo', '-uid foo',],
    defaultValue: 'The user who ran the command',
};

const page: bottypes.commandInfoOption = {
    name: 'page',
    type: 'integer',
    required: false,
    description: 'The page to show',
    format: ['-p foo', '-page foo'],
    defaultValue: '1',
};

const userAdmin: bottypes.commandInfoOption = {
    name: 'user',
    type: 'integer/user mention',
    required: false,
    description: 'The user to use',
    format: user.format,
    defaultValue: 'The user who ran the command',
};

export const cmds: bottypes.commandInfo[] = [
    {
        name: 'Help',
        description: 'Displays useful information about commands.',
        usage: 'help [command]',
        category: 'general',
        examples: [
            {
                text: 'help',
                description: 'Shows the general help page'
            },
            {
                text: 'help convert',
                description: 'Shows information about the convert command'
            },
            {
                text: 'help recent',
                description: 'Shows information about the recent command'
            },
            {
                text: 'help categoryosu',
                description: 'Lists all commands in the osu category'
            },
            {
                text: 'list',
                description: 'Lists all available commands'
            }
        ],
        aliases: ['commands', 'list', 'command', 'h'],
        args: [
            {
                name: 'command',
                type: 'string',
                required: false,
                description: 'The command/category to get information about. Categories are always prefixed with `categoryX`.',
                options: ['list', 'category(category)', '(command)'],
                format: ['foo'],
                defaultValue: 'N/A',
            },
        ]
    },
    {
        name: 'Info',
        description: 'Shows information about the bot.',
        usage: 'info [arg]',
        aliases: ['i', '[arg]'],
        category: 'general',
        args: [
            {
                name: 'arg',
                type: 'string',
                required: false,
                description: 'Return just that specific value',
                options: ['uptime', 'version', 'server', 'website', 'timezone', 'source'],
                format: ['foo'],
                defaultValue: 'null',
            },
        ]
    },
    {
        name: 'Invite',
        description: 'Sends the bot\'s public invite.',
        usage: 'invite',
        aliases: [],
        category: 'general',
    },
    {
        name: 'Ping',
        description: 'Pings the bot and returns the latency.',
        usage: 'ping',
        aliases: [],
        category: 'general',
    },
    {
        name: 'Remind',
        description: 'Sets a reminder. Leave all args blank or use the reminders alias to return a list of reminders',
        usage: 'remind [time] [reminder]',
        category: 'general',
        examples: [
            {
                text: 'remind',
                description: 'Returns a list of reminders.'
            },
            {
                text: 'remind 1h30m30s reminder',
                description: 'Sets a reminder for 1 hour, 30 minutes, and 30 seconds'
            },
            {
                text: 'remind 2:05 fc',
                description: 'Sets a reminder for 2 minutes and 5 seconds'
            },
        ],
        aliases: ['reminders', 'reminder'],
        args: [
            {
                name: 'time',
                type: 'string',
                required: true,
                description: 'The time until the reminder',
                options: [
                    'format: [number][unit] or hh:mm:ss',
                    'units: s, m, h, d, w, y',
                ],
                format: ['[number][unit]...', 'hh:mm:ss'],
                defaultValue: '0s',
            },
            {
                name: 'reminder',
                type: 'string',
                required: false,
                description: 'The reminder',
                format: ['foo'],
                defaultValue: 'null',
            },
            {
                name: 'sendinchannel',
                type: 'boolean',
                required: false,
                description: 'Whether to send the reminder in the channel or in a DM. Admin only',
                options: ['true', 'false'],
                format: ['foo'],
                defaultValue: 'false',
            }
        ]
    },
    {
        name: 'Stats',
        description: 'Shows the bot\'s statistics.',
        usage: 'stats',
        category: 'general',
        aliases: [],
    },
    {
        name: 'LeaveGuild',
        description: 'Makes the bot leave a guild.',
        usage: 'leaveguild [guild]',
        category: 'admin',
        examples: [
            {
                text: 'leaveguild 1234567890',
                description: 'Makes the bot leave the guild with the id 1234567890'
            },
        ],
        aliases: ['leave'],
        args: [
            {
                name: 'guild',
                type: 'integer',
                required: false,
                description: 'The id of the guild to leave',
                format: ['foo',],
                defaultValue: 'the guild the command was sent in',
            }
        ]
    },
    {
        name: 'Prefix',
        description: 'Set\'s the prefix of the current server.',
        usage: 'prefix [prefix]',
        category: 'admin',
        examples: [
            {
                text: 'prefix !',
                description: 'Sets the prefix to "!"'
            }
        ],
        aliases: [],
        args: [
            {
                name: 'prefix',
                type: 'string',
                required: false,
                description: 'The prefix to set',
                format: ['foo',],
                defaultValue: 'N/A',
            }
        ]
    },
    {
        name: 'Servers',
        description: 'Shows the servers the bot is in.',
        usage: 'servers',
        category: 'admin',
        aliases: [],
    },
];