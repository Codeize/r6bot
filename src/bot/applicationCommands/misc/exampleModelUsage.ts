import { ChatInputCommandInteraction, ApplicationCommandType, ApplicationCommandOptionType } from "discord.js";
import ApplicationCommand from "../../../../lib/classes/ApplicationCommand.js";
import BetterClient from "../../../../lib/extensions/BetterClient.js";
import { ExampleModel } from "../../../../lib/models/Example.js";

export default class Ping extends ApplicationCommand {
    constructor(client: BetterClient) {
        super("data", client, {
            type: ApplicationCommandType.ChatInput,
            description: `Example model usage.`,
            options: [
                {
                    name: "content",
                    description: "The content to insert (or edit) into the database.",
                    type: ApplicationCommandOptionType.String,
                }
            ]
        });
    }

    override async run(interaction: ChatInputCommandInteraction) {
        const content = interaction.options.getString("content");
        
        const doesExist = await ExampleModel.findOne({ exampleText: content });
        if (doesExist) {
            return interaction.reply({ content: "Hmmm... seems like that string already exists in the database!" });
        }
        await ExampleModel.create({ exampleText: content });

        return interaction.reply({ content: `Alright, <@${interaction.user.id}>!\n\nA new ExampleModel database record has been **created**, the content is now \`${content}\`!` });
    }
}

