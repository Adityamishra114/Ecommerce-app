export function fetchCount() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://') 
    const data = await response.json()
    resolve({data})
  }
  );
}
