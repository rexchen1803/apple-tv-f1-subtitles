const marker = "titaniczh=1";
const featurePattern = /\/itunes-assets\/HLSAppleVideo221\/v4\/59\/aa\/9d\/59aa9ddd-f65a-085f-7a2c-c4b927941f8b\/empty-11688089\.webvtt/;

try {
  const requestURL = $request.url || "";
  const body = $response.body;
  if (!requestURL.includes(marker) || typeof body !== "string" || !featurePattern.test(body)) {
    $done({});
  } else {
    let replaced = 0;
    const output = body.replace(/\r/g, "").split("\n").map((line) => {
      if (!line.startsWith("#") && featurePattern.test(line)) {
        replaced += 1;
        return line.includes(marker) ? line : `${line}${line.includes("?") ? "&" : "?"}${marker}`;
      }
      return line;
    });
    $done(replaced === 1 ? { body: output.join("\n") } : {});
  }
} catch (_) {
  $done({});
}
