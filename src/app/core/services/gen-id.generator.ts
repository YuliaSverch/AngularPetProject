export function generateNewId(n = 1): string {
  var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < n; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  return result;
}