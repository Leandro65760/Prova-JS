function classificarIngresso(idade) {
    if (idade < 12) {
        return "Infantil";
    } else if (idade >= 12 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        return "Adulto";
    }
    else if (idade >= 60) {
        return "Sênior";
    }
}
function Pessoa() {
    const idades = [5, 13, 16, 18, 25, 8];
    idades.forEach(idade => {
        console.log(`Idade: ${idade}, Ingresso: ${classificarIngresso(idade)}`);
    });
    return "Processamento concluído";
}
console.log(Pessoa());
