let v: string
export const getVersion = async () => {
  if (v) {
    return v
  }

  let response: { version: string }
  try {
    response = await fetch("https://registry.npmjs.org/create-404kit/latest").then(response => response.json() as unknown as { version: string })
  } catch (error) {
    response = { version: "0.0.0" }
  }

  v = response.version
  return v
}