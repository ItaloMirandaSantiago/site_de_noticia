import React, { useEffect } from 'react'


// caso a api falhe, estes dados vão substituí-la

        let items_reservas = [
        [
            {id:0, tipo: 'Noticia', 
            titulo:"Parceria IBGE-CFC facilita contadores e empresas informantes das Pesquisas Econômicas Anuais",
            introducao: 'IBGE e o CFC pretendem disseminar junto à sociedade os benefícios do Projeto Preenche Rápido. - Foto: Arte sobre foto Unsplash O IBGE e o Conselho Federal de Contabilidade (CFC) assinaram um Acordo de Cooperação Técnica no contexto do Projeto Preenche...',  
            },
            {id:1, tipo: 'Noticia', 
            titulo:"Desemprego cai para 11,2% no trimestre encerrado em janeiro, menor taxa para o período desde 2016",
            introducao: 'Desempenho do comércio influenciou na queda do desemprego em janeiro - Foto: Tomaz Silva/Agência Brasil A taxa de desocupação caiu para 11,2% no trimestre encerrado em janeiro, recuo de 0,9 ponto percentual na comparação com o trimestre anterior,...',  
            },
            {id: 2, tipo:'Noticia',
            titulo:"Proteção e confidencialidade dos dados são compromisso permanente do IBGE",
            introducao: 'LGPD não exime o cidadão de prestar informações estatísticas e não prevê nenhuma proteção que o IBGE já não pratique - Foto: Licia Rubinstein/Agência IBGE Notícias A Lei Geral de Proteção de Dados Pessoais (LGPD) não desobriga cidadãos e empresas...',  
            },
            {id:3, tipo: 'Noticia', 
            titulo:"Após dois meses em alta, setor de serviços varia -0,1% em janeiro",
            introducao: 'Setor de serviços decresce em janeiro puxado pelo segmento de tecnologia da informação - Foto: Licia Rubinstein/Agência IBGE O setor de serviços variou -0,1% na passagem de dezembro para janeiro, após acumular um ganho de 4,7% nos dois últimos meses do...',  
            },
            {id:4, tipo: 'Noticia', 
            titulo:"Em ano de Censo, Agência IBGE Notícias ganha novo visual para melhorar experiência do usuário",
            introducao: 'No ano passado, a Agência IBGE recebeu mais de 7,5 milhões de visitas, um recorde desde sua criação em 2017 - Arte: Helena Pontes sobre maquete Freepick Prestes a completar cinco anos de produção jornalística especializada em estatísticas e geociências,...',  
            },
            {id:5, tipo: 'Noticia', 
            titulo:"Inflação é de 1,01% em fevereiro, maior para o mês desde 2015",
            introducao: 'IPCA de fevereiro incorpora os reajustes habitualmente praticados no início do letivo - Foto: Lucas Fermin/SEED/AEN-PR A inflação registrou alta de 1,01% em fevereiro de 2022, sendo essa a maior variação para um mês de fevereiro desde 2015 (1,22%). O...',  
            },
            {id:6, tipo: 'Noticia', 
            titulo:"Abate de frangos e suínos bate recorde e o de bovinos volta a cair em 2021",
            introducao: 'Com recorde na exportação e alto consumo interno, abate de frangos foi o maior da série histórica - Foto: Governo do Estado de São Paulo O Brasil registrou o abate de 6,18 bilhões de cabeças de frango em 2021, o que representa um aumento de 2,8% - ou...',  
            },
            {id:7, tipo: 'Noticia', 
            titulo:"Produção industrial cai em 10 de 15 locais em janeiro",
            introducao: 'Em janeiro, o excesso de chuvas atrapalhou a extração mineral, principal atividade industrial do estado de Minas - Foto: Janaina Duarte/Agência Vale A queda de 2,4% da produção industrial nacional na passagem de dezembro de 2021 para janeiro de 2022, na...',  
            },
            {id:8, tipo: 'Noticia', 
            titulo:"IBGE e INSS fazem acordo para funcionamento de postos de coleta do Censo",
            introducao: 'Cessão de salas e equipamentos estão entre itens do Acordo de Cooperação Técnica - Foto: Divulgação/INSS As agências do INSS (Instituto Nacional do Seguro Social) serão parte das ações para a realização do Censo Demográfico 2022. O Acordo de Cooperação...',  
            },
            {id:9, tipo: 'Noticia', 
            titulo:"Resultados do teste nacional mostram que IBGE está preparado para o início do Censo em agosto",
            introducao: 'Cerca de 250 recenseadores visitaram as localidades entre novembro e fevereiro - Foto: Acervo IBGE O IBGE divulga hoje (17) os resultados do Teste Nacional do Censo Demográfico, realizado de novembro de 2021 a fevereiro de 2022, em 27 localidades dos 26...',  
            }
        ], 
        [
            {id: 10, tipo: 'Release', 
            titulo: 'PNAD Contínua: taxa de desocupação é de 11,2% e  t…ação é de 23,9% no trimestre encerrado em janeiro', 
            introducao: 'A taxa de desocupação (11,2%) do trimestre móvel d…em relação ao mesmo período do ano anterior. A...'
            },
            {id: 11, tipo: 'Release', 
            titulo: 'Volume dos Serviços varia -0,1% em janeiro', 
            introducao: 'Em janeiro de 2022, o volume de serviços no Brasil…de serviços se encontra 7,0% acima do nível de...'
            },
            {id: 12, tipo: 'Release', 
            titulo: 'Em janeiro, indústria recua em 10 dos 15 locais pesquisados', 
            introducao: 'A queda de 2,4% da produção industrial nacional na…s pesquisados. Amazonas (-13,0%), Minas Gerais...'
            },
            {id: 13, tipo: 'Release', 
            titulo: 'Em 2021, abate de bovinos cai pelo segundo ano seguido e o de frangos e de suínos batem recordes', 
            introducao: 'Em todo o ano de 2021, foram abatidas 27,54 milhõe…nário de retenção de animais observado desde o...'
            },{id: 14, tipo: 'Release', 
            titulo: 'IPCA foi de 1,01% em fevereiro', 
            introducao: 'O Índice Nacional de Preços ao Consumidor Amplo (I…, quando o índice foi de 1,22%. No ano, o IPCA...',
            },{id: 15, tipo: 'Release', 
            titulo: 'Em fevereiro, Índice Nacional da Construção Civil foi de 0,56%', 
            introducao: 'O Índice Nacional da Construção Civil (Sinapi) apr…6,28%, resultado abaixo dos 17,17% registrados...',
            },
            {id: 16, tipo: 'Release', 
            titulo: 'Vendas no varejo crescem 0,8% em janeiro', 
            introducao: 'Em janeiro de 2022, o volume de vendas do comércio…l foi de -0,2%. Período Varejo Varejo Ampliado...',
            },
            {id: 17, tipo: 'Release', 
            titulo: 'Em fevereiro, IBGE prevê safra recorde de 261,6 milhões de toneladas para 2022', 
            introducao: 'Em fevereiro, a produção de cereais, leguminosas e…lhões de toneladas) e declínio de -3,8% (-10,2...', 
            },
            {id: 18, tipo: 'Release', 
            titulo: 'IBGE atualiza dados geográficos de estados e municípios brasileiros', 
            introducao: 'O IBGE está lançando hoje a atualização de três es…GE promoveu uma série de atualizações na Malha...',
            },
            {id: 19, tipo: 'Release', 
            titulo: 'Produção industrial recua -2,4% em janeiro', 
            introducao: 'Em janeiro de 2022, a produção industrial nacional mostrou redução de 2,4% frente ao mês de dezembro de 2021 (série com ajuste sazonal), eliminando, dessa forma, parte da expansão de 2,9% registrada no mês anterior. Já em relação a janeiro de 2021, houve...'
            }
        ],
        [
            {id: 20, tipo: 'futebol', 
            titulo: 'Botafogo inicia mudanças no futebol profissional e corta jogadores, Flavio Tenius e Lucio Flavio', 
            introducao: 'Atletas pouco aproveitados e com idade abaixo do sub-23 abrirão espaço no elenco principal, que terá limite de 30 nomes. Antiga comissão técnica dará lugar à equipe de Luís Castro'
            }
            ,
            {id: 21, tipo: 'futebol', 
            titulo: 'Edimar analisa concorrência com Riquelme pela lateral-esquerda do Vasco: "Posição está bem sustentada"', 
            introducao: 'Jogador também projetou a estreia do Vasco na Série B, contra o Vila Nova, no dia oito de abril: "equipe difícil, que briga muito para ter a bola"'
            }
            ,
            {id: 22, tipo: 'futebol', 
            titulo: '"Caminhão descendo a ladeira sem freio e sem óleo", diz técnico após queda do Sete de Setembro', 
            introducao: ' Roberto Neves foi o terceiro técnico do Lobo-guará na campanha do rebaixamento no Campeonato Pernambucano. "Sou o treinador e assumo a responsabilidade", lamentou'
            }
            ,
            {id: 23, tipo: 'futebol', 
            titulo: 'Dirigente do Dortmund "joga a toalha" por Haaland: "Se o City fizer uma proposta"', 
            introducao: 'Hans-Joachim Watzke, CEO do clube alemão, admite que será difícil conseguir manter o atacante norueguês na Bundesliga caso o time de Pep Guardiola entre firme na negociação'
            }
            ,
            {id: 24, tipo: 'futebol', 
            titulo: 'Corinthians se reapresenta de olho na Libertadores, e Willian faz trabalho de fortalecimento', 
            introducao: 'Meia-atacante tem reclamado de dores no quadril desde as quartas de final do Paulistão'
            }
            ,
            {id: 25, tipo: 'futebol', 
            titulo: 'Fora da Copa, Ibrahimovic descarta aposentadoria; veja outros craques que não vão ao Catar', 
            introducao: 'Mesmo eliminado, atacante revela o desejo de representar a Suécia mais vezes'
            }
            ,
            {id: 26, tipo: 'futebol', 
            titulo: 'Final do Mineiro: Atlético-MG e Cruzeiro se reúnem na FMF para definir detalhes do clássico', 
            introducao: 'Rivais decidem a taça de campeão do Mineiro 2022 no sábado, com o Mineirão dividido igualmente; bola rola a partir de 16h30, e qualquer empate leva o título para decisão nos pênaltis'
            }
            ,
            {id: 27, tipo: 'futebol', 
            titulo: 'Cruzeiro ingressa com efeito suspensivo e aguarda TJD para ter Pezzolano na final do Mineiro', 
            introducao: 'Pedido já foi entregue ao relator do processo, no TJD; treinador foi punido por chamar árbitro de "ladrão" no clássico contra o Atlético-MG'
            }
            ,
            {id: 28, tipo: 'futebol', 
            titulo: 'Artilheiro do Campeonato Paraense, Paulo Rangel tem futuro na Tuna indefinido', 
            introducao: 'Atacante tem oito gols no Parazão e vem chamando atenção de equipes da Série C e D do Brasileiro',
            },
            {id: 29, tipo: 'futebol', 
            titulo: 'Fabricante promete "bola mais rápida das Copas" e garante: "Jogadores acharam incrível"', 
            introducao: 'Segundo a Adidas, Al Rihla pode ter maior velocidade no voo do que antecessoras, além de uma precisão maior nos chutes'
            }
            ,
            {id: 30, tipo: 'futebol', 
            titulo: 'Palmeiras supera 60 mil sócios-torcedores e recupera marca de antes da pandemia', 
            introducao: 'Verdão não registrava número desde setembro de 2019; crescimento na atual gestão é de 44%'
            }
        ]
    ]

            export default items_reservas