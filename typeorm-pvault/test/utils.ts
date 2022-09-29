import { exec, ExecOptions } from "child_process";
import Stream from "stream";

export async function run(
  script: string,
  options: ExecOptions = {}
): Promise<string> {
  const cp = exec(script, options);
  process.stdin.pipe(cp.stdin);
  const stdout = streamToString(cp.stdout);
  const stderr = streamToString(cp.stderr);
  const exit = await new Promise((resolve) => cp.once("exit", resolve));
  if (exit !== 0) {
    console.error(await stdout);
    console.error(await stderr);
    throw new Error(`exit with code ${exit}`);
  }
  return await stdout;
}

function streamToString(stream: Stream): Promise<string> {
  const chunks = [];
  return new Promise((resolve, reject) =>
    stream
      .on("data", (chunk) => chunks.push(Buffer.from(chunk)))
      .on("error", reject)
      .on("end", () => resolve(Buffer.concat(chunks).toString("utf8")))
  );
}
