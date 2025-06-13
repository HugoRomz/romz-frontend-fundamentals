import fs from "node:fs/promises";

const files = await fs.readdir("../projects");

const projects = files.filter((file) => /^[0-9]/.test(file));

await Promise.all(
  projects.map((project) =>
    fs.cp(`../projects/${project}`, `public/projects/${project}`, {
      recursive: true,
    })
  )
);
