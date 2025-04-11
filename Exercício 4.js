const DEVOLUCOES = [];

DEVOLUCOES.push({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", atrasado: true });
DEVOLUCOES.push({ titulo: "1984", autor: "George Orwell", atrasado: false });
DEVOLUCOES.push({ titulo: "Dom Quixote", autor: "Miguel de Cervantes", atrasado: true });

console.log("\nLivros na lista de devoluções:");
DEVOLUCOES.forEach((livro, index) => {
    console.log(`Livro ${index + 1}:`, livro);
});

console.log("\nLivros atrasados:");
DEVOLUCOES.forEach((livro, index) => {
    if (livro.atrasado) {
        console.log(`Livro ${index + 1}:`, livro);
    }
});
console.log("\nRemovendo livros da lista de devoluções:");
while (DEVOLUCOES.length > 0) {
    const livroRemovido = DEVOLUCOES.pop();
    console.log("Livro removido:", livroRemovido);
}

console.log("\nArray de devoluções após remoções:", DEVOLUCOES);
