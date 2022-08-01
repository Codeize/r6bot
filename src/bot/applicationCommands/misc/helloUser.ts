import { ApplicationCommandType, UserContextMenuCommandInteraction } from "discord.js";
import ApplicationCommand from "../../../../lib/classes/ApplicationCommand.js";
import BetterClient from "../../../../lib/extensions/BetterClient.js";

export default class TestCommand extends ApplicationCommand {
    constructor(client: BetterClient) {
        super("Hello!", client, {
            type: ApplicationCommandType.User,
        });
    }

    override async run(interaction: UserContextMenuCommandInteraction) {
        await interaction.reply("Hello! This is a User Context Menu command.");
    }
}

