      function mostrarInfo(opcao) {
        var informacoesDiv = document.getElementById('informacoes');
        var informacoes;

        // limpa o conteúdo anterior
        informacoesDiv.innerHTML = '';

        // determina as informações com base na opção escolhida
        switch(opcao) {
            case 'opcao1':
                informacoes = '<h2>Opção 1</h2><p>Texto explicativo para a opção 1.</p><img src="https://via.placeholder.com/150">';
                break;
            case 'opcao2':
                informacoes = '<h2>Opção 2</h2><p>Texto explicativo para a opção 2.</p><button>Clique Aqui</button>';
                break;
            case 'opcao3':
                informacoes = '<h2>Opção 3</h2><p>Texto explicativo para a opção 3.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';
                break;
            case 'opcao4':
                informacoes = '<h2>Opção 4</h2><p>Texto explicativo para a opção 4.</p><figcaption><img src="https://via.placeholder.com/150"<figcaption/><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';
                break;
            default:
                informacoes = '<p>Nenhuma opção selecionada.</p>';
        }

        // exibe as informações na div correspondente
        informacoesDiv.innerHTML = informacoes;
    }
