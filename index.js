let lightYear= prompt("Qual a sua distância em anos-luz?")

let convertedOperation= prompt("Em qual unidade você deseja converter? \n1- Parsec (pc) \n2- Unidade Astronônica (AU) \n3- Quilômetros (km)")

let chosenUnity
let convertedDistance

switch(convertedOperation) {
    case "1":
        chosenUnity= "Parsec"
        convertedDistance= lightYear * 0.306601
        break
    case "2":
        chosenUnity= "Unidade Astronônica"
        convertedDistance= lightYear * 63241.1
    case "3":
        chosenUnity= "Quilomêtros"
        convertedDistance= lightYear * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity= "Unidade não identificada"
        convertedDistance= "Conversão fora do escopo"
}

alert("Distância em anos-luz: " + lightYear + "\n" + chosenUnity + ": " + convertedDistance)