// Console intractive { Word Counter }
import chalk from "chalk";
import inquirer from "inquirer";
// {/\s/g } Called Regex , yeh hmary text se har jagah sy free space ko khtm krdyga .
console.log(chalk.bold.yellow("______________________________"));
console.log(chalk.bold.yellow("| ~ ") + chalk.bold.cyan("WelCome ") + chalk.bold.yellow("To ") + chalk.bold.magenta("Word ") + chalk.bold.green("Counter") + chalk.bold.yellow(" ~ |"));
console.log(chalk.bold.yellow("______________________________\n"));
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
const startCounter = async (counter) => {
    const answer = await inquirer.prompt([
        {
            name: "paragraph",
            message: chalk.bold.magentaBright("Enter Your Paragraph ..."),
            type: chalk.bold.yellow(("input"))
        }
    ]);
    console.log(chalk.bold.cyan("Your Entered Paragraph Length Is : ") + chalk.bold.yellow("{ ") + chalk.bold.magenta(counter(answer.paragraph)) + chalk.bold.yellow(" }"));
};
startCounter(counter);
