 export function getServerStatus  (address: string)  {
  const data =  fetch(`https://api.mcsrvstat.us/3/${address}`)
  return data;
}
 export function getServerStatus2 (address: string, port: string) {
  const data =  fetch(`https://api.mcsrvstat.us/3/${address}:${port}`)
  return data;
}
export async function getServerStatusAsync  (address: string)  {
  const data =  await fetch(`https://api.mcsrvstat.us/3/${address}`)
  return data;
}