import { promises as fs } from "fs";
import { uuid } from "uuidv4";
import path from "path";

const postUserService = {
  addUser: async (name: string) => {
    const newUser = {
      id: uuid(),
      name: name,
    };
    const users = JSON.parse(
      await fs.readFile(path.resolve(__dirname, "../../db/data.json"), "utf-8")
    );
    users.users.push(newUser);
    console.log(newUser);
    await fs.writeFile(
      path.resolve(__dirname, "../../db/data.json"),
      JSON.stringify(users, null, 2)
    );
    return;
  },
};

export { postUserService };
