(function (DOM, doc, win) {
    const pilotos = [
        {
            piloto: 'Luís Araújo',
            volta: 50.19
        },
        {
            piloto: 'Isadora Soares',
            volta: 49.91
        },
        {
            piloto: 'Felipe Massa da FGA',
            volta: 48.13
        },
        {
            piloto: 'Matheus Silverio',
            volta: 49.14
        },
        {
            piloto: 'Rodrigo Nestor',
            volta: 48.51
        },
        {
            piloto: 'Lewis Hamilton',
            volta: 46.29
        },
        {
            piloto: 'Charles Leclerc',
            volta: 45.83
        },
        {
            piloto: 'Sebastian Vettel',
            volta: 46.64
        },
        {
            piloto: 'Sebastian Vettel',
            volta: 46.61
        },
        {
            piloto: 'Daniel Ricciardo',
            volta: 47.23
        },
        {
            piloto: 'Lando Norris',
            volta: 47.01
        },
        {
            piloto: 'Nicholas Latifi',
            volta: 48.32
        },
        {
            piloto: 'Pierre Gasly',
            volta: 49.99
        },
        {
            piloto: 'Sergio Perez',
            volta: 47.99
        },
        {
            piloto: 'Fernando Alonso',
            volta: 50.01
        },
        {
            piloto: 'Lance Stroll',
            volta: 49.51
        },
        {
            piloto: 'Kevin Magnussen',
            volta: 49.87
        },
        {
            piloto: 'Yuki Tsunoda',
            volta: 49.74
        },
        {
            piloto: 'Luis Magnussen',
            volta: 52.11
        },
    ]

    const $listaPilotos = doc.getElementById('lista-pilotos')

    pilotos.forEach(element => {
        const $result = doc.createElement('span');
        const $li = doc.createElement('li');
        const $name = doc.createElement('span');

        $result.textContent = element.volta;
        $name.textContent = element.piloto + '       ';
        $li.appendChild($name);
        $li.appendChild($result);
        $listaPilotos.appendChild($li);
    })


    const notaPilotos = pilotos.map((e) => {
        return e.volta;
    });
    
    const $buttonBuscaPiloto = doc.getElementById('button-busca-piloto');
    const $inputPosicao = doc.getElementById('input-posicao');
    const $result = doc.getElementById('result');
    $buttonBuscaPiloto.addEventListener('click', function () {
        const position = 1 * $inputPosicao.value;
        const motorista = select(pilotos, position);
        const $piloto = doc.createElement('span');
        const $volta = doc.createElement('span');
        $piloto.textContent = motorista.piloto + ': ';
        $volta.textContent = motorista.volta;
        $result.innerHTML = '';
        $result.appendChild($piloto);
        $result.appendChild($volta);
    }, false);

    function oracle (a) {
        if (a.length < 250) {
            const randomIndex = Math.floor(Math.random() * (a.length - 0)) + 0;
            return a[randomIndex];
        } else {
            const groups = [];
            for (let i = 0; i < 5; i++) {
                groups[i] = [];
            }
            for (let i = 0; i < 25; i+= 5) {
                groups[1].push(a[i]);
                groups[2].push(a[i+1]);
                groups[3].push(a[i+2]);
                groups[4].push(a[i+3]);
                groups[5].push(a[i+4]);
            }
    
            for (let i = 0; i < 5; i++) {
                groups[i].sort(function(a, b) {
                    return a - b;
                });
            }
    
            const medians = []
    
            for (let i = 0; i < 5; i++) {
                medians.push(groups[i][2]);
            }
            medians.sort(function(a, b) {
                return a - b;
            });
    
            return median[2]
        }
    }

    function select (a, k) {
        const median = oracle(a)
        const right = []
        const left = []
        a.forEach(element => {
            if (element.volta < median.volta)
                left.push(element)
            else if (element.volta > median.volta)
                right.push(element)
        })
        if (left.length === k - 1)
            return median
        if (left.length > k - 1)
            return select(left, k)
        else
            return select(right, k - left.length - 1)
    }
  
})(window.DOM, document, window)