import { ApplicationCommandType, MessageContextMenuCommandInteraction } from "discord.js";
import ApplicationCommand from "../../../../lib/classes/ApplicationCommand.js";
import BetterClient from "../../../../lib/extensions/BetterClient.js";

export default class TestCommand extends ApplicationCommand {
    constructor(client: BetterClient) {
        super("Hello!", client, {
            type: ApplicationCommandType.Message,
        });
    }

    override async run(interaction: MessageContextMenuCommandInteraction) {
        await interaction.reply("Hello! This is a Message Context Menu command.");
    }
}

