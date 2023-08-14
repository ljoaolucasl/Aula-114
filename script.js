class JogoDasPalavras {

    constructor() {
        this.botao = document.getElementById('btnTentar');
        this.chute = document.getElementById('chuteUsuario');
        this.mensagem = document.getElementById('mensagem');
        this.numeroSorteado = this.gerarNumeroAleatorio();

        this.chute.addEventListener('keydown', (evento) => this.validarSeEhNumero(evento));
        this.botao.addEventListener('click', () => this.obterChuteUsuario());
        this.chute.focus();
    }
    
    validarSeEhNumero(evento) {
        const tecla = evento.key;

        if (tecla === 'Backspace') {
            return;
        }

        if (!/^\d$/.test(tecla)) {
            evento.preventDefault();
        }
    }

    obterChuteUsuario() {
        let numeroEscolhido = parseInt(this.chute.value);
        this.verificarSeNumeroAcertado(numeroEscolhido);
    }
    
    gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 20) + 1;
    }

    jogarNovamente() {
        location.reload();
    }
    
    verificarSeNumeroAcertado(numeroEscolhido) {
        if (numeroEscolhido == this.numeroSorteado) {
            this.exibirMensagem('Parabéns! Você Acertou! Quer Jogar Novamente?', 'rgb(0, 141, 5)');
            this.botao.textContent = 'Jogar Novamente!';
            this.botao.addEventListener('click', () => this.jogarNovamente());
    
        } else if (numeroEscolhido < this.numeroSorteado) {
            this.exibirMensagem(`O número sorteado é maior do que ${numeroEscolhido}!`, 'rgb(141, 0, 0)');
            this.chute.value = '';
            this.chute.focus();
    
        } else if (numeroEscolhido > this.numeroSorteado) {
            this.exibirMensagem(`O número sorteado é menor do que ${numeroEscolhido}!`, 'rgb(141, 0, 0)');
            this.chute.value = '';
            this.chute.focus();
        }
    }

    exibirMensagem(msg, cor) {
        this.mensagem.style.visibility = 'visible';
        this.mensagem.textContent = msg;
        this.mensagem.style.background = cor;
    }
}

window.addEventListener('load', () => new JogoDasPalavras());