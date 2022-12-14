import {
    ApplicationCommandOptionData,
    ApplicationCommandType,
    MessageActionRow,
    EmbedBuilder,
    PermissionString
} from "discord.js";

export interface ApplicationCommandOptions {
    type: ApplicationCommandType;
    description?: string;
    options?: ApplicationCommandOptionData[];
    permissions?: PermissionString[];
    clientPermissions?: PermissionString[];
    devOnly?: boolean;
    guildOnly?: boolean;
    ownerOnly?: boolean;
    cooldown?: number;
}

export interface ButtonOptions {
    permissions?: PermissionString[];
    clientPermissions?: PermissionString[];
    devOnly?: boolean;
    guildOnly?: boolean;
    ownerOnly?: boolean;
}

export interface GeneratedMessage {
    embeds: EmbedBuilder[];
    components: MessageActionRow[];
    ephemeral: boolean;
}

export interface Stats {
    messageCount: number;
    commandsRun: number;
}

export interface CachedStats {
    guilds: number;
    users: number;
    cachedUsers: number;
    channels: number;
    roles: number;
}

export interface GenerateTimestampOptions {
    timestamp?: Date | number;
    type?: "t" | "T" | "d" | "D" | "f" | "F" | "R";
}

