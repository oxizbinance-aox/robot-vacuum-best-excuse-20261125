const line = "I mapped the crumbs under the couch. My battery quit on the spot.";
if (line.length > 140 || line.trim().length === 0) {
  throw new Error("entry line must be 1-140 characters");
}
process.stdout.write(line);
